'use client'

import { useToast } from '@/components/ui/use-toast'

import CustomQrScanner from '@/components/CustomQrScanner'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CarteirinhasScanner() {
  const { toast } = useToast()

  const [qrcode, setQrCode] = useState<string | null>(null)

  const router = useRouter()

  useEffect(() => {
    if (qrcode) {
      toast({
        title: 'Código encontrado',
        description: `O código ${qrcode} foi encontrado`,
        variant: 'destructive',
      })

      setTimeout(() => {
        router.push(`/${qrcode}`)
      }, 1000)
    }
  }, [qrcode])

  return (
    <div className="flex flex-wrap gap-8">
      <div className="h-96 w-full max-w-sm rounded-xl bg-zinc-900 p-4">
        <CustomQrScanner
          config={{
            fps: 10,
            aspectRatio: 1,
            qrbox: { width: 250, height: 250 },
          }}
          onScan={(scannedCode) => setQrCode(scannedCode)}
        />
      </div>
    </div>
  )
}
