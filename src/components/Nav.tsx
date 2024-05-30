"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link as UILink, Button } from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import { Logo } from "./Logo";
import { NavLog } from "./NavLog";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname()

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <UILink as={Link} color="foreground" href="/">
            <Logo/>
          </UILink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === '/' ? true : false}>
          <UILink as={Link}  color={`${pathname === '/' ? 'primary' : 'foreground'}`} href="/">
            Home
          </UILink>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/demo' ? true : false || pathname === '/app' ? true : false }>
          <UILink color={`${pathname === '/demo' || pathname === '/app' ? 'primary' : 'foreground' }`} href="/demo">
            App
          </UILink>
        </NavbarItem>
      </NavbarContent>

      <NavLog/>

      <NavbarMenu>
          <NavbarMenuItem>
            <UILink as={Link} color="foreground" className="w-full" href="/" size="lg">
              Home
            </UILink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <UILink as={Link} color="foreground" className="w-full" href="/demo" size="lg">
              App
            </UILink>
          </NavbarMenuItem>     
      </NavbarMenu>
    </Navbar>
  );
}
