'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const OfflinePage = () => {
  const router = useRouter()

  if (typeof window !== 'undefined' && navigator.onLine) {
    router.back()
  }

  function handleRefresh() {
    router.refresh()
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image src="/img/offline.png" alt="" width={600} height={200} />

      <div className="my-6 flex flex-col justify-start space-y-2">
        <h1 className="text-center text-2xl font-bold">
          Conecte-se à Internet
        </h1>
        <p className="text-center font-light">
          Você está off-line. Verifique sua conexão.
        </p>
        <Button variant="outline" onClick={handleRefresh}>
          Tentar novamente
        </Button>
      </div>
    </div>
  )
}

export default OfflinePage
