'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'

import { Archive, PlusCircle } from 'lucide-react'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'

export default function ChamadosHome() {
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
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Suporte</h1>
            <p className="text-sm">Mostrando todos os chamados</p>
          </div>
          <Button variant={'outline'}>
            <PlusCircle className="mr-2 h-4 w-4" /> Chamado
          </Button>
        </div>
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
        <div className="w-[328px] flex-grow rounded-md border md:w-full lg:w-full">
          <Table className="w-[800px] sm:w-full md:w-full lg:w-full">
            <TableHeader>
              <TableRow className="bg-secondary">
                <TableHead className="w-[100px]"></TableHead>
                <TableHead>Assunto</TableHead>
                <TableHead>Prioridade</TableHead>
                <TableHead>Setor</TableHead>
                <TableHead>Solicitante</TableHead>
                <TableHead>Usuário</TableHead>
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
                    <TableCell>{item.assunto}</TableCell>

                    <TableCell>
                      {item.prioridade === 'Crítica' && (
                        <Badge
                          variant={'outline'}
                          // eslint-disable-next-line prettier/prettier
                          className="flex w-full items-center justify-center border-error text-center font-bold  text-error"
                        >
                          {item.prioridade}
                        </Badge>
                      )}
                      {item.prioridade === 'Alta' && (
                        <Badge
                          variant={'outline'}
                          // eslint-disable-next-line prettier/prettier
                          className="flex w-full items-center justify-center border-important text-center font-bold text-important"
                        >
                          {item.prioridade}
                        </Badge>
                      )}
                      {item.prioridade === 'Moderada' && (
                        <Badge
                          variant={'outline'}
                          // eslint-disable-next-line prettier/prettier
                          className="flex w-full items-center justify-center border-warning text-center font-bold text-warning"
                        >
                          {item.prioridade}
                        </Badge>
                      )}
                      {item.prioridade === 'Baixa' && (
                        <Badge
                          variant={'outline'}
                          // eslint-disable-next-line prettier/prettier
                          className="flex w-full items-center justify-center border-success text-center font-bold text-success"
                        >
                          {item.prioridade}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>{item.setor}</TableCell>
                    <TableCell>{item.solicitante}</TableCell>
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
                      {item.status === 'Aberto' && (
                        <Badge
                          // eslint-disable-next-line prettier/prettier
                          className="flex w-full items-center justify-center text-center"
                          variant={'secondary'}
                        >
                          {item.status}
                        </Badge>
                      )}
                      {item.status === 'Fechado' && (
                        <Badge
                          // eslint-disable-next-line prettier/prettier
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
