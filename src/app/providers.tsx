import {NextUIProvider} from '@nextui-org/react'
import { LaymanProvider } from '@/context/LaymanContext';

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <LaymanProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </LaymanProvider>
  )
}