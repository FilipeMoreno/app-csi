'use client'

import { Loader } from '@/components/ui/loader'

export default function LoadingPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Loader />

      <h1>Carregando</h1>
    </div>
  )
}
