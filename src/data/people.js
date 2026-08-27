// Shared mock people for the table/list demos.

const FIRST = [
  "Amara", "Jonas", "Lena", "Sam", "Nora", "Diego", "Priya", "Maya", "Ethan",
  "Sofia", "Marcus", "Ines", "Tariq", "Owen", "Elena", "Noah", "Aisha", "Leo",
  "Ravi", "Clara", "Hugo", "Yuki", "Nadia", "Felix", "Sana", "Bruno", "Talia",
  "Idris", "Mila", "Otto", "Wren", "Cyrus", "Petra", "Kian", "Dahlia", "Reza",
  "Vera", "Oskar", "Layla", "Enzo",
];
const LAST = [
  "Bello", "Weber", "Ito", "Okafor", "Kim", "Ruiz", "Nair", "Chen", "Cole",
  "Rossi", "Lee", "Duarte", "Amin", "Baxter", "Ford", "Novak", "Haddad", "Marsh",
  "Patel", "Sørensen",
];
const ROLES = ["Owner", "Admin", "Editor", "Member", "Viewer"];
const TEAMS = ["Product", "Engineering", "Design", "Marketing", "Sales", "Support"];
const STATUSES = ["Active", "Active", "Active", "Pending", "Archived"];

const pick = (arr, n) => arr[n % arr.length];

export const PEOPLE = Array.from({ length: 48 }, (_, i) => {
  const name = `${pick(FIRST, i * 7 + 3)} ${pick(LAST, i * 3 + 1)}`;
  return {
    id: `USR-${1000 + i}`,
    name,
    email: `${name.toLowerCase().replace(/[^a-z]+/g, ".")}@acme.io`,
    role: pick(ROLES, i * 2 + 1),
    team: pick(TEAMS, i + 2),
    status: pick(STATUSES, i * 5 + 2),
    lastActive: `${(i % 27) + 1}d ago`,
    joined: `2025-${String(((i * 3) % 12) + 1).padStart(2, "0")}-${String(
      ((i * 7) % 27) + 1
    ).padStart(2, "0")}`,
  };
});
