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
    let id = ''

    if (qrcode) {
      toast({
        title: 'Carteirinha encontrada!',
        description: `O código ${qrcode} foi encontrado`,
        variant: 'success',
      })

      if (qrcode.includes('http')) {
        id = qrcode.split('/').pop() as string
      } else {
        id = qrcode
      }

      setTimeout(() => {
        router.push(`/carteirinhas/solicitacoes/${id}`)
      }, 1000)
    }
  }, [qrcode])

  return (
    <>
      <div className="mb-4 flex flex-col">
        <h1 className="text-3xl font-bold">Scanner</h1>
        <p>Aponte a câmera para o QR Code</p>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="h-96 w-full max-w-sm rounded-xl bg-secondary p-4">
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
    </>
  )
}
