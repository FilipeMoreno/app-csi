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
  Edit,
  Plus,
  PlusCircle,
  PrinterIcon,
  Save,
} from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { LegacyRef, useRef, useState } from 'react'
import Link from 'next/link'
import QRCode from 'react-qr-code'
import ReactToPrint from 'react-to-print'
import Image from 'next/image'

export default function CarteirinhasDetalhes() {
  const [isEditing, setIsEditing] = useState(false)
  const pagestyle = `@page { margin: 0px 0px 0px 0px !important; width: 1px; height: 1px } @media print { body { -webkit-print-color-adjust: exact; } } `

  const componentRef = useRef()

  return (
    <div>
      <div className="flex flex-wrap gap-8">
        <div className="flex w-full flex-row items-center justify-between rounded-lg">
          <div>
            <h1 className="text-2xl font-bold">Carteirnha #1234</h1>
            <p className="text-sm">Mostrando detalhes da carteirinha #1234</p>
          </div>
          <Button
            variant={'outline'}
            onClick={() => setIsEditing(true)}
            className="w-auto"
          >
            <Edit className="mr-2 h-4 w-4" /> Editar
          </Button>
        </div>
      </div>
      <div className="my-4 flex w-full flex-col space-y-4">
        <div className="w-full">
          <Label>Nome</Label>
          <Input
            type="text"
            defaultValue="João João João"
            disabled={!isEditing}
          />
        </div>
        <div className="flex w-full flex-row space-x-4">
          <div className="w-1/2">
            <Label>Data de nascimento</Label>
            <Input
              className="w-full"
              type="date"
              defaultValue="01/01/1990"
              disabled={!isEditing}
            />
          </div>
          <div className="w-1/2">
            <Label>Matrícula</Label>
            <Input
              className="w-full"
              type="number"
              defaultValue="0000"
              disabled={!isEditing}
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
              disabled={!isEditing}
            />
          </div>
          <div className="w-1/2">
            <Label>RG</Label>
            <Input
              className="w-full"
              defaultValue="00.000.000-0"
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="flex w-full flex-row space-x-4">
          <div className="flex-grow">
            <Label>Curso</Label>
            <Select defaultValue="Ensino Fundamental II" disabled={!isEditing}>
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
            <Select defaultValue="6º ANO" disabled={!isEditing}>
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
              <SelectTrigger className="w-full" disabled={!isEditing}>
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
          <div className="my-6 flex w-full flex-col justify-center space-y-4">
            <Link className="w-full" href={'/carteirinhas/foto'}>
              <Button className="w-full lg:w-48" variant={'outline'}>
                Tirar foto
              </Button>
            </Link>
            <Button variant={'outline'} className="lg:w-48">
              Alterar foto
            </Button>
            <Button variant={'outline'} className="lg:w-48">
              Remover foto
            </Button>
          </div>
        </div>
        {isEditing && (
          <Button
            variant={'outline'}
            onClick={() => setIsEditing(false)}
            className="w-full"
          >
            <Save className="mr-2 h-4 w-4" />
            Salvar
          </Button>
        )}
      </div>

      <SelectSeparator />

      <div className="my-4 space-y-4">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Histórico</h1>
            <span>Mostrando histórico de status</span>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={'outline'}>
                <Plus className="mr-2 h-4 w-4" /> Status
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Adicionar status</AlertDialogTitle>
                <AlertDialogDescription>
                  Selecione o status que deseja adicionar
                  <Select>
                    <SelectTrigger className="mt-2 w-full">
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Entregue">Entregue</SelectItem>
                      <SelectItem value="Produzida">Produzida</SelectItem>
                      <SelectItem value="Pagamento recebido">
                        Pagamento recebido
                      </SelectItem>
                      <SelectItem value="Aprovada">Aprovada</SelectItem>
                    </SelectContent>
                  </Select>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Continuar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-emerald-900 p-4 text-zinc-100">
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
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Carteirinha</h1>
            <span>Mostrando a carteirinha</span>
          </div>
          <ReactToPrint
            trigger={() => <Button variant={'outline'}>Imprimir</Button>}
            content={() => componentRef.current || null}
            pageStyle={pagestyle}
          />
        </div>
        <div
          ref={componentRef as unknown as LegacyRef<HTMLDivElement>}
          className="flex flex-col items-center justify-center border"
        >
          <div className="flex h-32 w-full items-center justify-between bg-white">
            <Image
              src="http://colegiosantoinacio.com.br/img/logo.png"
              alt="Logo"
              height={600}
              width={370}
              priority={true}
              quality={100}
              className="mx-4 my-2"
            />
            <div>
              <QRCode
                value="https://app-csi.vercel.app/carteirinhas/solicitacoes/1"
                size={110}
                className=" my-4 mr-8"
              />
            </div>
          </div>
          <div className="h-[330px] w-full bg-[rgb(150,42,44)]">
            <div className="flex flex-row items-center space-x-8 p-4">
              <img src="https://via.placeholder.com/200x250" />
              <div>
                <h1 className="my-6 text-2xl font-bold uppercase text-white">
                  NOME DO ALUNO AQUI
                </h1>
                <div className="] flex flex-row items-center justify-between">
                  <div className="my-1 flex w-[300px] flex-col">
                    <span className="text-xs font-bold uppercase text-white">
                      Data de nascimento
                    </span>
                    <span className="text-lg font-bold uppercase text-white">
                      00/00/0000
                    </span>
                  </div>
                  <div className="my-1 flex w-[300px] flex-col">
                    <span className="text-xs font-bold uppercase text-white">
                      Matrícula
                    </span>
                    <span className="text-lg font-bold uppercase text-white">
                      00000
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="my-1 flex w-[300px] flex-col">
                    <span className="text-xs font-bold uppercase text-white">
                      Série/Turma
                    </span>
                    <span className="text-lg font-bold uppercase text-white">
                      1º ANO A
                    </span>
                  </div>
                  <div className="my-1 flex w-[300px] flex-col">
                    <span className="text-xs font-bold uppercase text-white">
                      Curso
                    </span>
                    <span className="text-lg font-bold uppercase text-white">
                      Ensino Médio
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="my-1 flex w-[300px] flex-col">
                    <span className="text-xs font-bold uppercase text-white">
                      CPF
                    </span>
                    <span className="text-lg font-bold uppercase text-white">
                      000.000.000-00
                    </span>
                  </div>
                  <div className="my-1 flex w-[300px] flex-col">
                    <span className="text-xs font-bold uppercase text-white">
                      RG
                    </span>
                    <span className="text-lg font-bold uppercase text-white">
                      00.000.000-0
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-1">
                  <span className="font-bold uppercase text-white">
                    Validade
                  </span>
                  <span className="font-bold uppercase text-white">
                    00/00/0000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
