'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import CookiesConsent from '@/components/CookiesConsent'

export default function Home() {
  return (
    <>
      <Alert className="bg-destructive">
        <ExclamationTriangleIcon className="h-4 w-4" color="white" />
        <AlertTitle className="font-bold text-white">Atenção!</AlertTitle>
        <AlertDescription className="text-white">
          Este aplicativo está em desenvolvimento e pode conter bugs.
        </AlertDescription>
      </Alert>
      <div className="my-8 flex flex-col space-y-4 sm:flex-row">
        <div>
          <h1 className="text-2xl font-bold">Olá, Usuário!</h1>
          <p className="text-md">Escolha uma das opções no menu ao lado!</p>
        </div>
      </div>
      <CookiesConsent />
    </>
  )
}
