// Lightweight syntax tokenizer + snippet data for the animated auth code panel.

const KEYWORDS = new Set(
  [
    "import",
    "from",
    "export",
    "default",
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "await",
    "async",
    "new",
    "throw",
    "typeof",
    "extends",
    "class",
    "try",
    "catch",
    "for",
    "of",
    "in",
    "null",
    "true",
    "false",
  ]
);

const TOKEN_RE =
  /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\b\d[\d_.]*\b)|([A-Za-z_$][A-Za-z0-9_$]*)|(\s+)|([^\sA-Za-z0-9_$]+)/g;

/**
 * Turn a single line of source into an array of { t, c } tokens,
 * where `c` is a coarse category: com | str | num | kw | fn | type | txt | punc
 */
export function tokenize(line) {
  const tokens = [];
  let m;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(line))) {
    if (m[1]) {
      tokens.push({ t: m[1], c: "com" });
    } else if (m[2]) {
      tokens.push({ t: m[2], c: "str" });
    } else if (m[3]) {
      tokens.push({ t: m[3], c: "num" });
    } else if (m[4]) {
      const word = m[4];
      const next = line[TOKEN_RE.lastIndex];
      if (KEYWORDS.has(word)) {
        tokens.push({ t: word, c: "kw" });
      } else if (next === "(") {
        tokens.push({ t: word, c: "fn" });
      } else if (/^[A-Z]/.test(word)) {
        tokens.push({ t: word, c: "type" });
      } else {
        tokens.push({ t: word, c: "txt" });
      }
    } else if (m[5]) {
      tokens.push({ t: m[5], c: "txt" });
    } else if (m[6]) {
      tokens.push({ t: m[6], c: "punc" });
    }
  }
  return tokens;
}

export const SNIPPETS = [
  // Single snippet shown in the auth panel; the array keeps others for reuse.
  {
    name: "auth-context.tsx",
    code: `import { createContext, useContext, useMemo, useState } from "react";
import { api } from "./api-client";
import { readSession, setSession, clearSession } from "./session";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readSession());

  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    setSession(res.token);
    setUser(res.user);
    return res.user;
  };

  const logout = () => {
    clearSession();
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}`,
  },
  {
    name: "login.handler.ts",
    code: `import { verifyPassword } from "./crypto";
import { signToken } from "./tokens";
import { db } from "./db";

export async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing credentials" });
  }

  const user = await db.users.findByEmail(email);
  const ok = user && (await verifyPassword(user.hash, password));

  if (!ok) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const token = signToken({ sub: user.id, role: user.role });
  await db.sessions.create({ userId: user.id, token });

  return res.json({ token, user: user.profile });
}`,
  },
  {
    name: "ProtectedRoute.jsx",
    code: `import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./use-auth";
import { FullPageLoader } from "./components/loader";

export function ProtectedRoute({ roles }) {
  const { user, status } = useAuth();
  const location = useLocation();

  if (status === "loading") {
    return <FullPageLoader />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
}`,
  },
];

export const SNIPPET = SNIPPETS[0];
