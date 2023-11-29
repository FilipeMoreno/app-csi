'use client'

import { Icons } from '@/components/icons'

export default function LoadingPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Icons.spinner className="h-12 w-12 animate-spin" />
      <h1 className="">Carregando...</h1>
    </div>
  )
}
