'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  CheckCheckIcon,
  DollarSign,
  PlusCircle,
  PrinterIcon,
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function CarteirinhasScanner() {
  const router = useRouter()

  return (
    <div>
      <div className="flex flex-wrap gap-8">
        <div className="w-full">
          <h1 className="text-2xl font-bold">Carteirnha #1234</h1>
          <p className="text-sm text-gray-300">
            Mostrando detalhes da carteirinha #1234
          </p>
        </div>
      </div>
      <div className="my-4 flex w-full flex-col space-y-4">
        <div className="w-full">
          <Label>Nome</Label>
          <Input type="text" defaultValue="Filipe Moreno" disabled />
        </div>
        <div className="flex w-full flex-row space-x-4">
          <div className="w-1/2">
            <Label>Data de nascimento</Label>
            <Input
              className="w-full"
              type="date"
              defaultValue="01/01/1990"
              disabled
            />
          </div>
          <div className="w-1/2">
            <Label>Matrícula</Label>
            <Input
              className="w-full"
              type="number"
              defaultValue="0000"
              disabled
            />
          </div>
        </div>
        <div className="flex w-full flex-row space-x-4">
          <div className="w-1/2">
            <Label>CPF</Label>
            <Input
              className="w-full"
              type="text"
              defaultValue="000.000.000-00"
              disabled
            />
          </div>
          <div className="w-1/2">
            <Label>RG</Label>
            <Input className="w-full" defaultValue="00.000.000-0" disabled />
          </div>
        </div>
        <div className="flex w-full flex-row space-x-4">
          <div className="flex-grow">
            <Label>Curso</Label>
            <Select defaultValue="Ensino Fundamental II" disabled>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o curso" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Educação Infantil">
                  Educação Infantil
                </SelectItem>
                <SelectItem value="Ensino Fundamental I">
                  Ensino Fundamental I
                </SelectItem>
                <SelectItem value="Ensino Fundamental II">
                  Ensino Fundamental II
                </SelectItem>
                <SelectItem value="Ensino Médio">Ensino Médio</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-grow">
            <Label>Série</Label>
            <Select defaultValue="6º ANO" disabled>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione a série" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6º ANO">6º ANO</SelectItem>
                <SelectItem value="7º ANO">7º ANO</SelectItem>
                <SelectItem value="8º ANO">8º ANO</SelectItem>
                <SelectItem value="9º ANO">9º ANO</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-grow">
            <Label>Turma</Label>
            <Select defaultValue="A">
              <SelectTrigger className="w-full" disabled>
                <SelectValue placeholder="Selecione a turma" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="B">B</SelectItem>
                <SelectItem value="C">C</SelectItem>
                <SelectItem value="D">D</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex w-full flex-row space-x-4">
          <div>
            <Label>Foto</Label>
            <img src="https://via.placeholder.com/150x250" />
          </div>
          <div className="my-6 space-y-4">
            <Button
              className="w-full"
              onClick={() => router.push('/carteirinhas/foto')}
            >
              Tirar foto
            </Button>
            <Button className="w-full">Alterar foto</Button>
            <Button className="w-full">Remover foto</Button>
          </div>
        </div>
      </div>

      <SelectSeparator />

      <div className="my-4 space-y-4">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Histórico</h1>
            <span>Mostrando histórico de status</span>
          </div>
          <Button>+ Adicionar status</Button>
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-emerald-900 p-4">
          <span className="font-thin">Situação atual:</span>
          <span className="text-xl font-bold">Entregue!</span>
        </div>
        <div className="my-2 flex flex-col space-y-3">
          <Alert className="bg-secondary">
            <CheckCheckIcon className="h-4 w-4" />
            <AlertTitle>Entregue!</AlertTitle>
            <AlertDescription>
              Carteirinha entregue por Usuário em 01 de janeiro de 2023
            </AlertDescription>
          </Alert>
          <Alert className="bg-secondary">
            <PrinterIcon className="h-4 w-4" />
            <AlertTitle>Produzida!</AlertTitle>
            <AlertDescription>
              Carteirinha produzida por Usuário em 01 de janeiro de 2023
            </AlertDescription>
          </Alert>
          <Alert className="bg-secondary">
            <DollarSign className="h-4 w-4" />
            <AlertTitle>Pagamento recebido!</AlertTitle>
            <AlertDescription>
              Pagamento recebido por Usuário em 01 de janeiro de 2023
            </AlertDescription>
          </Alert>
          <Alert className="bg-secondary">
            <PlusCircle className="h-4 w-4" />
            <AlertTitle>Criada!</AlertTitle>
            <AlertDescription>
              Solicitação criada em 01 de janeiro de 2023
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}
