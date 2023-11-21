'use client'

import { useToast } from '@/components/ui/use-toast'

import CustomQrScanner from '@/components/CustomQrScanner'
import { useRef } from 'react'

export default function CarteirinhasScanner() {
  const { toast } = useToast()

  const codeInput = useRef<null | HTMLInputElement>(null)

  const setCode = (e: string) => {
    console.log(e)

    if (codeInput.current) {
      codeInput.current.value = e
    }

    // if (codeInput.current && codeInput.current.value) {
    //   const code = codeInput.current.value
    //   console.log('submit', code)
    //   toast({
    //     title: 'Código encontrado',
    //     description: `O código ${code} foi encontrado`,
    //   })
    // }
  }

  return (
    <div className="flex h-96 w-full rounded-xl bg-zinc-900 p-4">
      <CustomQrScanner
        config={{ fps: 10, aspectRatio: 1 }}
        onScan={(scannedCode) => setCode(scannedCode)}
      />
    </div>
  )
}
