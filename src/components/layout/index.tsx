import { ReactElement } from "react";
import NavbarDesktop from "../NavbarDesktop";

interface LayoutProps {
  children: ReactElement
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavbarDesktop />
      testando
      {children}
    </>
  );
}