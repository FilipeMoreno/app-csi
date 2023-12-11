'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import moment from 'moment'
import 'moment/locale/pt-br'

import Link from 'next/link'

import { MessageCircle, PlusCircle } from 'lucide-react'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Badge } from '@/components/ui/badge'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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
      resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      createdAt: '2023-12-10T00:00:00.000Z',
    },
    {
      id: 2,
      solicitante: 'João',
      assunto: 'Impressora quebrada',
      setor: 'Coordenação EI',
      usuario: 'Bruno',
      prioridade: 'Moderada',
      status: 'Aberto',
      resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      createdAt: '2023-12-11T00:00:00.000Z',
    },
    {
      id: 3,
      solicitante: 'João',
      assunto: 'Problema com o computador',
      setor: 'Sala 23',
      usuario: 'Diego',
      prioridade: 'Baixa',
      status: 'Respondido',
      resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      createdAt: '2023-12-11T00:00:00.000Z',
    },
    {
      id: 4,
      solicitante: 'Roberto',
      assunto: 'Computador pegou fogo',
      setor: 'Sala 23',
      usuario: null,
      prioridade: 'Crítica',
      status: 'Aberto',
      resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      createdAt: '2021-08-01T00:00:00.000Z',
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
            <PlusCircle className="mr-2 h-4 w-4" /> Novo chamado
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
        </div>
        <div className="space-y-2">
          <Tabs defaultValue="ativos">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ativos">Ativos</TabsTrigger>
              <TabsTrigger value="arquivados">Arquivados</TabsTrigger>
            </TabsList>
            <TabsContent value="ativos" className="space-y-2">
              {dadosTabela.length > 0 &&
                dadosTabela.map((item) => (
                  <Card
                    key={item.id}
                    // className={`border ${
                    //   item.status === 'Aberto' && 'border-l-green-500'
                    // }  ${item.status === 'Fechado' && 'border-l-red-500'}  ${
                    //   item.status === 'Respondido' && 'border-l-blue-600'
                    // }`}
                  >
                    <CardHeader>
                      <CardTitle>
                        <div className="flex items-center justify-between">
                          <Link
                            href="/suporte/1"
                            className="hover:text-zinc-400"
                          >
                            {item.assunto}
                          </Link>
                          <span className="text-sm text-zinc-500">
                            {moment(item.createdAt).fromNow()}
                          </span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.resumo}</CardDescription>
                      <CardDescription>Setor: {item.setor}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <div className="flex flex-row items-center space-x-2">
                        <Badge variant={'outline'}>#{item.id}</Badge>
                        {item.prioridade === 'Crítica' && (
                          <div className="flex flex-row items-center">
                            <span className="mr-2 flex h-3 w-3 rounded-full bg-red-600" />
                            <span className="text-red-600">
                              {item.prioridade}
                            </span>
                          </div>
                        )}
                        {item.prioridade === 'Alta' && (
                          <div className="flex flex-row items-center">
                            <span className="mr-2 flex h-3 w-3 rounded-full bg-orange-600" />
                            <span className="text-orange-600">
                              {item.prioridade}
                            </span>
                          </div>
                        )}
                        {item.prioridade === 'Moderada' && (
                          <div className="flex flex-row items-center">
                            <span className="mr-2 flex h-3 w-3 rounded-full bg-yellow-600" />
                            <span className="text-yellow-600">
                              {item.prioridade}
                            </span>
                          </div>
                        )}
                        {item.prioridade === 'Baixa' && (
                          <div className="flex flex-row items-center">
                            <span className="mr-2 flex h-3 w-3 rounded-full bg-green-600" />
                            <span className="text-green-600">
                              {item.prioridade}
                            </span>
                          </div>
                        )}
                        <Badge>{item.status}</Badge>
                        <span className="flex flex-row items-center text-zinc-400">
                          <MessageCircle className="mr-1 h-4 w-4" />0
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </TabsContent>
            <TabsContent value="arquivados">
              <div className="flex items-center justify-center text-zinc-400">
                <p>Nenhum chamado encontrado.</p>
              </div>
            </TabsContent>
          </Tabs>
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
