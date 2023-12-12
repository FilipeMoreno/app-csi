'use client'

import {
  EyeIcon,
  FilterIcon,
  MoreHorizontal,
  Plus,
  ScanLine,
  Trash2,
} from 'lucide-react'
import moment from 'moment'
import 'moment/locale/pt-br'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function CarteirinhasSolicitacoes() {
  const solicitacoes = [
    {
      id: 1,
      nome: 'João da Silva',
      serie: '6º ANO',
      turma: 'B',
      status: 'Entregue',
      curso: 'Ensino Fundamental II',
      createdAt: '2021-08-01',
    },
    {
      id: 2,
      nome: 'Larissa Amorim',
      serie: '3º SÉRIE',
      turma: 'A',
      status: 'Aguardando foto',
      curso: 'Ensino Médio',
      createdAt: '2021-08-01',
    },
    {
      id: 3,
      nome: 'Gabriel Rodrigues',
      serie: '8º ANO',
      turma: 'C',
      status: 'Aguardando pagamento',
      curso: 'Ensino Fundamental II',
      createdAt: '2021-08-01',
    },
    {
      id: 4,
      nome: 'Maria Eduarda',
      serie: '2º SÉRIE',
      turma: 'B',
      status: 'Em análise',
      curso: 'Ensino Médio',
      createdAt: '2021-08-01',
    },
  ]
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Solicitações</h1>
          <p className="text-sm">Mostrando todas as solicitações realizadas</p>
        </div>
        <div>
          <Button variant={'outline'}>
            <Plus className="mr-2 h-4 w-4" /> Solicitação
          </Button>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between space-x-2">
        <Input className="my-4 w-full" placeholder="Pesquisar" />
        <Link href={'/carteirinhas/scanner'}>
          <Button variant={'outline'} size={'icon'}>
            <ScanLine className="h-4 w-4" />
          </Button>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant={'outline'} size={'icon'}>
              <FilterIcon className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
              <SheetDescription>
                Filtre as solicitações de acordo com suas necessidades
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Ano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Curso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EI">Educação Infantil</SelectItem>
                  <SelectItem value="EFI">Ensino Fundamental I</SelectItem>
                  <SelectItem value="EFII">Ensino Fundamental II</SelectItem>
                  <SelectItem value="EM">Ensino Médio</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Série" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">6º ANO</SelectItem>
                  <SelectItem value="dark">7º ANO</SelectItem>
                  <SelectItem value="system">8º ANO</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Turma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">A</SelectItem>
                  <SelectItem value="dark">B</SelectItem>
                  <SelectItem value="system">C</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Entregue</SelectItem>
                  <SelectItem value="dark">Aguardando foto</SelectItem>
                  <SelectItem value="system">Aguardando pagamento</SelectItem>
                  <SelectItem value="analise">Em análise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline" className="w-full" type="submit">
                  Salvar
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div className="rounded-md border md:block">
        <Table className="relative">
          <TableHeader>
            <TableRow className="bg-secondary">
              <TableHead className="w-[200px]">Nome</TableHead>
              <TableHead>Série/Turma</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Data</TableHead>
              <TableHead className="text-right" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {solicitacoes.map((solicitacao) => {
              return (
                <TableRow key={solicitacao.id}>
                  <TableCell className="font-medium">
                    {solicitacao.nome}
                  </TableCell>
                  <TableCell>
                    {solicitacao.serie} {solicitacao.turma}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`font-bold uppercase ${
                        solicitacao.status === 'Entregue' &&
                        'border-success text-success'
                      } ${
                        solicitacao.status === 'Em análise' &&
                        'border-error text-error'
                      } ${
                        solicitacao.status === 'Aguardando foto' &&
                        'border-warning text-warning'
                      } ${
                        solicitacao.status === 'Aguardando pagamento' &&
                        'border-important text-important'
                      }`}
                      variant={'outline'}
                    >
                      {solicitacao.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {moment(solicitacao.createdAt).fromNow()}
                  </TableCell>

                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir opções</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <Link href={`solicitacoes/${solicitacao.id}`}>
                          <DropdownMenuItem className="flex cursor-pointer flex-row items-center">
                            <EyeIcon className="mr-1 h-4 w-5" />
                            Visualizar
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem className="flex cursor-pointer flex-row items-center">
                          <Trash2 className="mr-1 h-4 w-5" />
                          Remover
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
      {/* <div className="md:hidden">
        <div className="space-y-1 rounded-md border bg-secondary p-4">
          <div className="flex flex-row items-center space-x-4">
            <p className="text-xl font-bold">João João João</p>
            <Badge className="bg-emerald-900 text-xs font-bold text-zinc-300">
              entregue
            </Badge>
          </div>
          <p className="text-xs font-medium">6º ANO B</p>

          <div className="mt-2 flex w-full flex-row items-center justify-evenly">
            <Button
              onClick={() => router.push('solicitacoes/1')}
              variant="ghost"
            >
              <EyeIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost">
              <Trash2 className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div> */}
    </div>
  )
}
