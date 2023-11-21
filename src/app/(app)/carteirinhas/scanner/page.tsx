'use client'

import { useToast } from '@/components/ui/use-toast'

import CustomQrScanner from '@/components/CustomQrScanner'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function CarteirinhasScanner() {
  const { toast } = useToast()

  const codeInput = useRef<null | HTMLInputElement>(null)
  const router = useRouter()

  const setCode = (e: string) => {
    console.log(e)

    if (codeInput.current) {
      codeInput.current.value = e
    }
  }

  const submitCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (codeInput.current && codeInput.current.value) {
      const code = codeInput.current.value
      console.log('submit', code)
      // router.push(`/${code}`)
      toast({
        title: 'Código encontrado',
        description: `O código ${code} foi encontrado`,
      })
    }
  }

  return (
    <div className="flex flex-wrap gap-8">
      <div className="h-96 w-full max-w-sm rounded-xl bg-slate-800 p-4">
        <CustomQrScanner
          config={{ fps: 10, aspectRatio: 1 }}
          onScan={(scannedCode) => setCode(scannedCode)}
        />
      </div>
    </div>
  )
}
