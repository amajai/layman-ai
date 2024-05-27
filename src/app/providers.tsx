"use client"

import { NextUIProvider } from '@nextui-org/react'
import { LaymanProvider } from '@/context/LaymanContext';
import { SessionProvider } from "next-auth/react"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <LaymanProvider>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </LaymanProvider>
    </SessionProvider>
  )
}