import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto max-w-6xl px-4 py-10">{children}</main>
      <footer className="border-t border-border">
        <div className="container mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lisa Hanevold. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
