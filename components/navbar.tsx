"use client";

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@heroui/react";
import { ThemeSwitch } from "@/components/theme-switch";

export default function App() {
  return (
    <Navbar 
      shouldHideOnScroll 
      className="fixed top-0 w-full z-50 border-b border-gray-300"
      isBordered
    >
      <NavbarContent className="mx-auto flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/demand-supply">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="/analytics">
            Analytics
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/settings">
            Settings
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/demand-supply">Dashboard</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/analytics">Analytics</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/settings">Settings</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}