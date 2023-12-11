'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SendHorizonal, SmileIcon } from 'lucide-react'

export default function ChamadosDetalhes() {
  return (
    <div className="flex flex-col ">
      <section className="flex w-full flex-col">
        <header className="space-y-2 border-b p-4">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <span>Chamado #ID - Computador parou de funcionar</span>
          </h2>
          <div className="mt-2 flex space-x-2">
            <p className="text-sm">
              <span className="font-bold">Aberto por:</span> Nome do usuário
            </p>
            <p className="text-sm">
              <span className="font-bold">Aberto em:</span> 01/01/2021 às 00:00
            </p>
            <p className="text-sm">
              <span className="font-bold">Última atualização:</span> 01/01/2021
              às 00:00
            </p>
          </div>
          <div className="flex flex-row space-x-2">
            <Badge>Aberto</Badge>
            <Badge>Baixa</Badge>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4">
          <div className="space-y-4">
            <div className="flex items-end gap-2">
              <div className="flex items-center justify-center">
                <Avatar>
                  <AvatarFallback>
                    <SmileIcon />
                  </AvatarFallback>
                  <AvatarImage src="/icons/icon.png" />
                </Avatar>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="rounded-lg bg-secondary p-2">
                  <p className="text-sm">
                    Preciso de ajuda! O computador na sala 1 parou de funcionar.
                  </p>
                </div>
                <span className="text-[10px] text-zinc-500">
                  Usuário - 01/01/2024 às 00:00
                </span>
              </div>
            </div>
            <div className="flex items-end justify-end gap-2">
              <div className="flex flex-col space-y-1">
                <div className="rounded-lg bg-tertiary p-2 text-white">
                  <p className="text-sm">Resolvido!</p>
                </div>
                <span className="text-[10px] text-zinc-500">
                  Usuário - 01/01/2024 às 00:00
                </span>
              </div>
              <div className="flex items-center justify-center">
                <Avatar>
                  <AvatarFallback>
                    <SmileIcon />
                  </AvatarFallback>
                  <AvatarImage src="/icons/icon.png" />
                </Avatar>
              </div>
            </div>
          </div>
        </main>
        <footer className="border-t p-4">
          <div className="flex items-center gap-2">
            <Input className="flex-1" placeholder="Digite sua mensagem..." />
            <Button>
              <SendHorizonal className="mr-2 h-4 w-4" />
              Enviar
            </Button>
          </div>
        </footer>
      </section>
    </div>
  )
}
