'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useToast } from '@/components/ui/use-toast'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'

import { Archive, ChevronDownIcon } from 'lucide-react'

import React from 'react'
import { table } from 'console'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default function ChamadosHome() {
  const { toast } = useToast()

  const dadosTabela = [
    {
      id: 1,
      solicitante: 'Douglas',
      assunto: 'Projetor não funciona',
      setor: 'Sala 12',
      usuario: 'Rafael',
      prioridade: 'Alta',
      status: 'Respondido',
    },
    {
      id: 2,
      solicitante: 'João',
      assunto: 'Impressora quebrada',
      setor: 'Coordenação EI',
      usuario: 'Bruno',
      prioridade: 'Moderada',
      status: 'Aberto',
    },
    {
      id: 3,
      solicitante: 'João',
      assunto: 'Problema com o computador',
      setor: 'Sala 23',
      usuario: 'Diego',
      prioridade: 'Baixa',
      status: 'Respondido',
    },
    {
      id: 4,
      solicitante: 'Roberto',
      assunto: 'Computador pegou fogo',
      setor: 'Sala 23',
      usuario: null,
      prioridade: 'Crítica',
      status: 'Aberto',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="my-4 flex flex-row items-center space-x-3">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aberto">Aberto</SelectItem>
              <SelectItem value="andamento">Em andamento</SelectItem>
              <SelectItem value="fechado">Fechado</SelectItem>
            </SelectContent>
          </Select>

          <Input className="w-full" placeholder="Pesquisar" />
          <Button variant={'outline'}>
            <Archive className="h-4 w-4" />
          </Button>
        </div>
        <div className="w-[320px] overflow-x-scroll rounded-md border lg:w-full">
          <Table className="w-[800px] lg:w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]"></TableHead>
                <TableHead>Solicitante</TableHead>
                <TableHead>Assunto</TableHead>
                <TableHead>Setor</TableHead>
                <TableHead>Usuário</TableHead>
                <TableHead>Prioridade</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dadosTabela.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="flex w-full justify-center -space-x-1 ">
                        <Avatar className="inline-block h-6 w-6 rounded-full ring-1 ring-zinc-700">
                          <AvatarFallback>
                            {' '}
                            {item.solicitante
                              .split(' ')
                              .map((word) => word[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        {item.usuario && (
                          <Avatar className="inline-block h-6 w-6 rounded-full ring-1 ring-zinc-700">
                            <AvatarFallback>
                              {' '}
                              {item?.usuario
                                .split(' ')
                                .map((word) => word[0])
                                .join('')}
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{item.solicitante}</TableCell>
                    <TableCell>{item.assunto}</TableCell>
                    <TableCell>{item.setor}</TableCell>
                    <TableCell>
                      {item?.usuario ? (
                        item.usuario
                      ) : (
                        <Button variant={'outline'} className="h-6">
                          Aceitar chamado
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      {item.prioridade === 'Crítica' && (
                        <Badge
                          variant={'outline'}
                          className="flex w-full items-center justify-center bg-[#E0453D] text-center font-bold"
                        >
                          {item.prioridade}
                        </Badge>
                      )}
                      {item.prioridade === 'Alta' && (
                        <Badge
                          variant={'outline'}
                          className="flex w-full items-center justify-center bg-[#E08231] text-center font-bold"
                        >
                          {item.prioridade}
                        </Badge>
                      )}
                      {item.prioridade === 'Moderada' && (
                        <Badge
                          variant={'outline'}
                          className="flex w-full items-center justify-center bg-[#E0C600] text-center font-bold"
                        >
                          {item.prioridade}
                        </Badge>
                      )}
                      {item.prioridade === 'Baixa' && (
                        <Badge
                          variant={'outline'}
                          className="flex w-full items-center justify-center bg-[#53E146] text-center font-bold"
                        >
                          {item.prioridade}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {item.status === 'Aberto' && (
                        <Badge
                          className="flex w-full items-center justify-center text-center"
                          variant={'secondary'}
                        >
                          {item.status}
                        </Badge>
                      )}
                      {item.status === 'Fechado' && (
                        <Badge
                          className="flex w-full items-center justify-center text-center"
                          variant={'default'}
                        >
                          {item.status}
                        </Badge>
                      )}
                      {item.status === 'Respondido' && (
                        <Badge
                          className="flex w-full items-center justify-center text-center"
                          variant={'outline'}
                        >
                          {item.status}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <DotsHorizontalIcon />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Detalhes</DropdownMenuItem>
                          <DropdownMenuItem>Editar</DropdownMenuItem>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              Prioridade
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                <DropdownMenuItem>Baixa</DropdownMenuItem>
                                <DropdownMenuItem>Média</DropdownMenuItem>
                                <DropdownMenuItem>Alta</DropdownMenuItem>
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>

                          <DropdownMenuItem>Fechar</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            Mostrando 1 a 10 de 100 resultados
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm">
              Anterior
            </Button>
            <Button variant="outline" size="sm">
              Próximo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
