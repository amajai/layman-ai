"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from "next-auth/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname()
  const { data: session } = useSession();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Log Out",
  ];

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
          <Link color="foreground" href="/">
            <Image src={'/logo/layman_ai_logo_wt.png'}
              alt='app logo'
              width={120}
              height={120}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === '/' ? true : false}>
          <Link color={`${pathname === '/' ? 'primary' : 'foreground'}`} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/demo' ? true : false}>
          <Link color={`${pathname === '/demo' ? 'primary' : 'foreground'}`} href="/demo">
            Demo
          </Link>
        </NavbarItem>
      </NavbarContent>

      {session ?
        (<NavbarContent justify="end">
          <NavbarItem>
            <div className="flex flex-wrap flex-col  sm:text-sm text-xs text-white">
              <p>Hello, <span className="text-blue-300">{session.user.name}</span> </p>
              <p>{session.user.email}</p>
            </div>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="danger" onPress={() => signOut()} variant="solid">
              Sign Out
            </Button>
          </NavbarItem>
        </NavbarContent>)
        :
        (<NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link color="foreground" href="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/register" variant="solid">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>)
      }

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
