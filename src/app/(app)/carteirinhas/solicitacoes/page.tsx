'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  ArrowUpDown,
  ChevronDown,
  Edit2Icon,
  EditIcon,
  EyeIcon,
  MoreHorizontal,
  Trash,
  Trash2,
} from 'lucide-react'

import { useToast } from '@/components/ui/use-toast'
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

export default function Home() {
  const { toast } = useToast()

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

      <div className="my-4 flex flex-row items-center space-x-3">
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Ano" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Série" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">6º ANO</SelectItem>
            <SelectItem value="dark">7º ANO</SelectItem>
            <SelectItem value="system">8º ANO</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[90px]">
            <SelectValue placeholder="Turma" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">A</SelectItem>
            <SelectItem value="dark">B</SelectItem>
            <SelectItem value="system">C</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Entregue</SelectItem>
            <SelectItem value="dark">Aguardando foto</SelectItem>
            <SelectItem value="system">Aguardando pagamento</SelectItem>
            <SelectItem value="analise">Em análise</SelectItem>
          </SelectContent>
        </Select>

        <Input className="w-auto" placeholder="Pesquisar" />
      </div>

      <div className="rounded-md border bg-zinc-900">
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
                    <DropdownMenuItem className="flex flex-row items-center">
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
    </div>
  )
}
