'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function CarteirinhasScanner() {
  const router = useRouter()

  return (
    <div>
      <div className="flex flex-wrap gap-8">
        <div className="w-full">
          <h1 className="text-2xl font-bold">Carteirinha</h1>
          <p className="text-sm text-gray-300">Detalhes da carteirinha</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-red-900 p-4">
          <span className="font-thin">Status:</span>
          <span className="text-xl font-bold">Aguardando foto</span>
        </div>
        <div className="flex w-full flex-row items-center justify-center space-x-2">
          <Button
            className="w-full"
            onClick={() => router.push('/carteirinhas/foto')}
          >
            Tirar foto
          </Button>
          <Button className="w-full">Produzir</Button>
          <Button className="w-full">Pronta</Button>
          <Button className="w-full">Entregar</Button>
        </div>
      </div>
      <div className="my-4">
        <div className="flex flex-wrap gap-4">
          <div className="w-full">
            <h1 className="text-2xl font-bold">Nome</h1>
            <p className="text-sm text-gray-300">Nome do aluno</p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-bold">Curso</h1>
            <p className="text-sm text-gray-300">Nome do curso</p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-bold">Matrícula</h1>
            <p className="text-sm text-gray-300">Número da matrícula</p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-bold">Validade</h1>
            <p className="text-sm text-gray-300">Data de validade</p>
          </div>
        </div>
      </div>
    </div>
  )
}
