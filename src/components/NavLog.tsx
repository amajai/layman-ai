import { Button, NavbarContent, NavbarItem } from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import { Link as UILink } from '@nextui-org/react'
import Link from 'next/link';

export const NavLog = () => {

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <NavbarContent justify="end"></NavbarContent>;
  }

  return (
    <>
      {session ?
        (<NavbarContent justify="end">
          <NavbarItem>
            <div className="flex flex-wrap flex-col  sm:text-sm text-xs text-white">
              <p>Hello, <span className="text-blue-300">{session.user.name}</span> </p>
              <p>{session.user.email}</p>
            </div>
          </NavbarItem>
          <NavbarItem>
            <Button color="danger" onPress={() => signOut()} variant="solid">
              Sign Out
            </Button>
          </NavbarItem>
        </NavbarContent>)
        :
        (<NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <UILink as={Link} color="foreground" href="/login">Login</UILink>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/register" variant="solid">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>)
      }
    </>
  )
}
