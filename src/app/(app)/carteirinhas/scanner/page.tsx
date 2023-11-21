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

    if (codeInput.current && codeInput.current.value) {
      const code = codeInput.current.value
      console.log('submit', code)
      toast({
        title: 'Código encontrado',
        description: `O código ${code} foi encontrado`,
      })
    }
  }

  return (
    <div className="flex h-96 w-full rounded-xl bg-zinc-900 p-4">
      <div>
        <CustomQrScanner
          config={{ fps: 10, aspectRatio: 1 }}
          onScan={(scannedCode) => setCode(scannedCode)}
        />
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="h-96 w-full max-w-sm rounded-xl bg-slate-800 p-4">
          <CustomQrScanner
            config={{ fps: 10, aspectRatio: 1 }}
            onScan={(scannedCode) => setCode(scannedCode)}
          />
        </div>
        <form
          className="flex min-h-[150px] w-full flex-col justify-between rounded-xl bg-slate-800 p-4 md:w-fit"
          // onSubmit={submitCode}
        >
          <div>
            <label htmlFor="codeInput">Code</label>
            <input
              className="w-full rounded px-2 text-black"
              name="code"
              id="codeInput"
              type="text"
              ref={codeInput}
            />
          </div>
          <button className=" h-8 rounded-xl bg-green-500" type="submit">
            Suchen
          </button>
        </form>
      </div>
    </div>
  )
}
