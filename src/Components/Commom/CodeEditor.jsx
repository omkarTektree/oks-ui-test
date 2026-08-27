import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { tokenize } from "../../data/codeSnippets";

const COLORS = {
  kw: "#c586c0",
  fn: "#dcdcaa",
  type: "#4ec9b0",
  str: "#ce9178",
  com: "#6a9955",
  num: "#b5cea8",
  punc: "#8a8a99",
  txt: "#d4d4d4",
};

const LINE_PX = 22;
const PUNCT_PAUSE = new Set([".", ";", ",", "{", "}", "(", ")", "=", ">", ":"]);
const rand = (a, b) => a + Math.random() * (b - a);

// Human-ish delay before the next character, based on the one just typed.
const nextDelay = (flat, pos) => {
  const ch = flat[pos - 1];
  if (ch === "\n") return rand(180, 380);
  if (ch === " ") return rand(28, 75);
  if (PUNCT_PAUSE.has(ch)) return rand(90, 190);
  if (Math.random() < 0.04) return rand(280, 560); // occasional pause to think
  return rand(55, 120);
};

const parseSnippet = (snippet) => {
  const rawLines = snippet.code.replace(/\n$/, "").split("\n");
  const lines = rawLines.map(tokenize);
  const flat = rawLines.join("\n");
  return { name: snippet.name, lines, flat, total: flat.length };
};

const charsThroughLine = (parsed, n) => {
  let total = 0;
  const stop = Math.min(n, parsed.lines.length);
  for (let i = 0; i < stop; i++) {
    total += parsed.lines[i].reduce((m, tok) => m + tok.t.length, 0);
    if (i < parsed.lines.length - 1) total += 1;
  }
  return total;
};

const Caret = () => (
  <motion.span
    aria-hidden
    className="ml-px inline-block align-[-2px]"
    style={{ width: 7, height: "1.05em", background: "#a78bfa" }}
    animate={{ opacity: [1, 1, 0, 0] }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    }}
  />
);

/** Pure render of the snippet, sliced to `revealed` characters. */
const buildRows = (parsed, revealed, showCaret) => {
  let caretRow = -1;
  let scan = revealed;
  for (let li = 0; li < parsed.lines.length; li++) {
    const before = scan;
    const lineLen = parsed.lines[li].reduce((m, tok) => m + tok.t.length, 0);
    scan -= Math.min(lineLen, Math.max(0, scan));
    if (caretRow === -1 && before > 0 && scan <= 0) caretRow = li;
    if (li < parsed.lines.length - 1) scan -= 1;
  }
  if (caretRow === -1) caretRow = parsed.lines.length - 1;

  let budget = revealed;
  return parsed.lines.map((tokens, li) => {
    const spans = [];
    for (let ti = 0; ti < tokens.length; ti++) {
      const tok = tokens[ti];
      if (budget <= 0) break;
      const take = Math.min(tok.t.length, budget);
      spans.push(
        <span key={ti} style={{ color: COLORS[tok.c] || COLORS.txt }}>
          {tok.t.slice(0, take)}
        </span>
      );
      budget -= take;
    }
    if (li < parsed.lines.length - 1) budget -= 1;

    return (
      <div key={li} className="flex">
        <span className="mr-5 w-6 shrink-0 select-none text-right text-white/20">
          {li + 1}
        </span>
        <span className="whitespace-pre">
          {spans.length ? spans : " "}
          {showCaret && li === caretRow && <Caret />}
        </span>
      </div>
    );
  });
};

const CodeEditor = ({
  snippet,
  reduceMotion = false,
  fill = false,
  startAtLine = 9,
}) => {
  const parsed = useMemo(() => parseSnippet(snippet), [snippet]);
  const initialRevealed = useMemo(
    () => charsThroughLine(parsed, startAtLine),
    [parsed, startAtLine]
  );
  const [revealed, setRevealed] = useState(initialRevealed);

  useEffect(() => {
    if (reduceMotion) return undefined;

    let cancelled = false;
    let current = initialRevealed;
    let timeout = setTimeout(function tick() {
      if (cancelled) return;
      current += 1;
      setRevealed(current);
      if (current < parsed.total) {
        timeout = setTimeout(tick, nextDelay(parsed.flat, current));
      }
    }, 650);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [parsed, reduceMotion, initialRevealed]);

  const shown = reduceMotion ? parsed.total : revealed;
  const rows = buildRows(parsed, shown, !reduceMotion);

  return (
    <div
      className={
        fill
          ? "flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-[#0d0b16] via-[#0b0b12] to-[#08080d]"
          : "w-[560px] max-w-full overflow-hidden rounded-xl border border-white/10 bg-[#0b0b12]/95 shadow-2xl shadow-black/60"
      }
    >
      <div
        className={`flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] ${
          fill ? "px-6 py-4" : "px-4 py-3"
        }`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
        <div className="ml-3 flex items-center gap-2 rounded-md bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
          {parsed.name}
        </div>
      </div>
      <div
        className={
          fill
            ? "relative flex-1 overflow-hidden px-8 py-7 font-mono text-[13px] leading-[2] tracking-tight text-white/85 sm:text-[14px] xl:text-[15px] xl:leading-[2.1]"
            : "relative px-5 py-5 font-mono text-[12.5px] leading-[1.7] tracking-tight text-white/85"
        }
        style={
          fill
            ? undefined
            : { minHeight: parsed.lines.length * LINE_PX + 40 }
        }
      >
        {rows}
      </div>
    </div>
  );
};

export default CodeEditor;
