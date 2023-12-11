'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { PaperclipIcon, SendHorizonal, SmileIcon } from 'lucide-react'
import Image from 'next/image'

export default function ChamadosDetalhes() {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-2 lg:space-y-0">
      <div className="flex flex-col space-y-2">
        <Card className="w-full lg:w-[300px]">
          <CardHeader>
            <CardTitle className="font-bold">
              Informações do chamado #123456
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex flex-col space-y-1">
              <span className="text-sm">Data de abertura</span>
              <span className="text-xs text-zinc-500">01/01/2024 às 00:00</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm">Data de fechamento</span>
              <span className="text-xs text-zinc-500">01/01/2024 às 00:00</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm">Setor</span>
              <Select defaultValue="sala-de-aula">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o setor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="sala-de-aula">Sala de aula</SelectItem>
                    <SelectItem value="salao">Salão</SelectItem>
                    <SelectItem value="patio">Pátio</SelectItem>
                    <SelectItem value="quadra">Quadra</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm">Prioridade</span>
              <Select defaultValue="critica">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a prioridade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="baixa">Baixa</SelectItem>
                    <SelectItem value="moderada">Moderada</SelectItem>
                    <SelectItem value="alta">Alta</SelectItem>
                    <SelectItem value="critica">Crítica</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm">Estado</span>
              <Select defaultValue="aberto">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="aberto">Aberto</SelectItem>
                    <SelectItem value="fechado">Fechado</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-bold">Usuário</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row  space-x-4">
              <Image
                src="/icons/icon.png"
                width={50}
                height={50}
                alt="Foto do usuário"
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-lg">Usuário</span>
                <span className="text-xs">Professor</span>
              </div>
            </div>
            <div className="mt-4 flex flex-row items-center justify-between rounded-lg bg-secondary p-4">
              <div className="flex flex-col items-center justify-center">
                <span className="text-lg font-bold">5</span>
                <span>Total</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-lg font-bold">3</span>
                <span>Abertos</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-lg font-bold">2</span>
                <span>Resolvidos</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <section className="flex w-full flex-col rounded-lg border">
        <div className="flex flex-row items-center justify-between border-b">
          <div className="flex flex-col p-4">
            <span className="text-lg font-bold">
              Projetor não funciona
              <Badge variant={'outline'} className="ml-2 text-xs">
                #1234
              </Badge>
            </span>
            <div className="mt-2 flex flex-row space-x-2">
              <Badge
                variant={'outline'}
                className="border-green-500 font-bold text-green-500"
              >
                Aberto
              </Badge>
              <Badge
                variant={'outline'}
                className="border-red-500 font-bold text-red-500"
              >
                Crítica
              </Badge>
            </div>
          </div>
          <div className="mx-4">
            <Button variant={'outline'}>Fechar chamado</Button>
          </div>
        </div>
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
                  <span className="flex text-[10px] font-bold text-zinc-400">
                    Usuário
                  </span>
                  <p className="text-sm">
                    Preciso de ajuda! O computador na sala 1 parou de funcionar.
                  </p>
                  <span className="flex justify-end text-[10px] text-zinc-400">
                    01/01/2024 às 00:00
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end gap-2">
              <div className="flex flex-col space-y-1">
                <div className="rounded-lg bg-tertiary p-2 text-white">
                  <span className="flex text-[10px] font-bold text-zinc-300">
                    Usuário
                  </span>
                  <p className="text-sm">Resolvido!</p>
                  <span className="flex justify-end text-[10px] text-zinc-300">
                    01/01/2024 às 00:00
                  </span>
                </div>
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
            <div className="flex items-end justify-end gap-2">
              <div className="flex flex-col space-y-1">
                <div className="rounded-lg bg-tertiary p-2 text-white">
                  <span className="flex text-[10px] font-bold text-zinc-300">
                    Usuário
                  </span>
                  <p className="text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt reprehenderit a culpa eligendi voluptas at. Temporibus
                    ipsum architecto repellat non. Quasi, aperiam iste. Sapiente
                    qui optio repudiandae amet adipisci nesciunt!
                  </p>
                  <span className="flex justify-end text-[10px] text-zinc-300">
                    01/01/2024 às 00:00
                  </span>
                </div>
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
        <footer className="p-4">
          <div className="flex items-end gap-2">
            <Textarea className="flex-1" placeholder="Digite sua mensagem..." />
            <Button variant={'ghost'} size={'icon'}>
              <PaperclipIcon className="h-4 w-4" />
            </Button>
            <Button className="rounded-full" size={'icon'}>
              <SendHorizonal className="h-4 w-4" />
            </Button>
          </div>
        </footer>
      </section>
    </div>
  )
}
