import { useState } from "react";
import { Check, Copy } from "lucide-react";
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

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\n$/, "").split("\n");

  const copy = () => {
    navigator.clipboard?.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={copy}
        aria-label="Copy code"
        className="absolute right-2 top-2 rounded-md p-1.5 text-white/40 transition-colors hover:bg-white/10 hover:text-white/80"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
      <pre className="overflow-x-auto rounded-[var(--oks-radius-lg)] bg-[#0b0b12] p-4 pr-10 text-[12.5px] leading-relaxed">
        <code className="font-mono">
          {lines.map((line, i) => {
            const tokens = tokenize(line);
            return (
              <div key={i}>
                {tokens.length ? (
                  tokens.map((t, j) => (
                    <span key={j} style={{ color: COLORS[t.c] || COLORS.txt }}>
                      {t.t}
                    </span>
                  ))
                ) : (
                  <>&nbsp;</>
                )}
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
