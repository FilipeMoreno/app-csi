'use client'

import { Button } from '@/components/ui/button'

import {
  EditIcon,
  EyeIcon,
  FilterIcon,
  MoreHorizontal,
  QrCodeIcon,
  Trash2,
} from 'lucide-react'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
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
} from '@/components/ui/dropdown-menu'
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
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'

export default function CarteirinhasSolicitacoes() {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Solicitações</h1>
          <p className="text-md">Mostrando todas as solicitações realizadas</p>
        </div>
        <div>
          <Button> + Nova solicitação</Button>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between space-x-4">
        <Input className="my-4 w-full" placeholder="Pesquisar" />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant={'secondary'}>
              <FilterIcon className="h-5 w-5" />
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
                <Button className="w-full" type="submit">
                  Salvar
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden rounded-md border bg-zinc-900 md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Nome</TableHead>
              <TableHead>Série/Turma</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">João João João</TableCell>
              <TableCell>6º ANO B</TableCell>
              <TableCell>Entregue</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Abrir opções</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      className="flex flex-row items-center"
                      onClick={() => router.push('solicitacoes/1')}
                    >
                      <EyeIcon className="mr-1 h-4 w-5" />
                      Visualizar
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-row items-center">
                      <EditIcon className="mr-1 h-4 w-5" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-row items-center">
                      <Trash2 className="mr-1 h-4 w-5" />
                      Remover
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="md:hidden">
        <div className="space-y-2 rounded-md border bg-zinc-900 p-4">
          <div className="flex flex-row items-center space-x-4">
            <p className="text-2xl font-medium">João João João</p>
            <Badge className="text- bg-emerald-900 text-sm">entregue</Badge>
          </div>
          <p className="text-xl">6º ANO B</p>

          <div className="mt-4 flex w-full flex-row items-center justify-evenly">
            <Button variant="ghost">
              <EyeIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost">
              <EditIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost">
              <Trash2 className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
