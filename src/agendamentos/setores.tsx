import { api } from '@/app/data/api'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Suspense, useState } from 'react'

type SetoresProps = {
	id: string
	nome: string
}

export async function AgendamentosSetores() {
	const getSetores = await api('/setores')
	const setores = await getSetores.json()

	return (
		<Select>
			{/* <Select onValueChange={setSetor} value={setor}> */}
			<SelectTrigger className="w-full">
				<SelectValue placeholder="Selecione o setor" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{setores.map((setor: SetoresProps) => (
						<SelectItem key={setor.id} value={setor.nome}>
							{setor.nome}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
