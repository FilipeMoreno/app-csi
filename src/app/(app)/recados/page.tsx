'use client'

import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

interface RecadosContent {
  content: string
}

const recadosTemplate = [
  {
    id: '1',
    title: 'Obmep',
    content:
      'Maringá, {{dia}} de {{mes}} de {{ano}}\n\nSenhores Pais,\n\nNo dia {{dia}}, {{dia-extenso}}, os alunos do Fund II e EM que fizeram inscrição para a prova da OBMEP (Olimpíada Brasileira de Matemática das Escolas Públicas e Particulares) farão a prova da 1ª fase, no horário oposto, no colégio.\n\nAlunos que estudam no período matutino:\nHorário: {{horario-1}}\nLocal: {{local-1}}\n\nAlunos que estudam no período vespertino:\nHorário: {{horario-2}}\nLocal: {{local-2}}\n\nContamos com a colaboração!\n\nAtenciosamente,\nCoordenação\n\nObs: Os alunos terão que usar o uniforme do colégio',
  },
]

export default function RecadoIndex() {
  const [loading, setLoading] = useState<boolean>(false)
  const [recados, setRecados] = useState<RecadosContent>()
  const [numPerPage, setNumPerPage] = useState<number>(1) // Número de recados por página
  const [currentPage, setCurrentPage] = useState<number>(1)

  async function handleSetTemplate(id: string) {
    setLoading(true)

    const recado = await recadosTemplate.find((recado) => recado.id === id)

    setRecados(recado)
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="h-full w-full bg-zinc-900">
        <CardHeader>
          <CardTitle>Recados</CardTitle>
          <CardDescription>Gerencie os recados</CardDescription>
        </CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Recado 1</SelectItem>
              <SelectItem value="dark">Recado 2</SelectItem>
              <SelectItem value="system">Recado 3</SelectItem>
            </SelectContent>
          </Select>
          <Button className="mt-4" onClick={() => handleSetTemplate('1')}>
            Load Template
          </Button>
          {recados && (
            <>
              <Textarea className="mt-4 h-96" defaultValue={recados.content} />
              <div className="mt-4">
                <label htmlFor="numPerPage">Recados por página:</label>
                <input
                  type="number"
                  id="numPerPage"
                  value={numPerPage}
                  onChange={(e) => setNumPerPage(Number(e.target.value))}
                />
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
