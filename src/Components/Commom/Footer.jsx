import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="shrink-0 border-t border-black/[0.08] bg-white px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-black/50 sm:flex-row">
        <p>© {year} OKS. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <Link to="/terms" className="transition-colors hover:text-black">
            Terms
          </Link>
          <a href="#" className="transition-colors hover:text-black">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-black">
            Support
          </a>
          <span className="text-black/25">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
