import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const active = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
  return (
    <Link to={to} className={active ? "text-primary" : "text-muted-foreground hover:text-foreground transition-colors"}>
      {label}
    </Link>
  );
};

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <nav className="container mx-auto max-w-6xl flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-6">
          <NavLink to="/projects" label="Projects" />
          <NavLink to="/about" label="About" />
          <NavLink to="/contact" label="Contact" />
        </div>
        <Link to="/" className="font-semibold tracking-tight">Lisa Hanevold</Link>
        <div className="hidden sm:block">
          <Button variant="hero" asChild>
            <a href="#projects">View Work</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
