import { Link } from "react-router-dom";
import { Button, Chip, Divider } from "oks-ui";

const LINKS = [
  { label: "Terms", to: "/terms" },
  { label: "Privacy", to: "/terms" },
  { label: "Support", to: "/terms" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="shrink-0 bg-white">
      <Divider />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6">
        <p className="text-xs text-black/50">
          © {year} OKS — built with{" "}
          <a
            href="https://www.oks-ui.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-black/70 hover:text-black"
          >
            oks-ui
          </a>
        </p>

        <div className="flex items-center gap-1">
          {LINKS.map((link) => (
            <Button
              key={link.label}
              as={Link}
              to={link.to}
              variant="link"
              size="sm"
              color="default"
            >
              {link.label}
            </Button>
          ))}
          <Chip size="sm" variant="soft" color="default" className="ml-2">
            v1.0.0
          </Chip>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
