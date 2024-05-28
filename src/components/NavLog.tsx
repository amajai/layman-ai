import { Button, NavbarContent, NavbarItem } from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import { Link } from '@nextui-org/react'

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
    </>
  )
}
