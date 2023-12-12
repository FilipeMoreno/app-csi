import { CalendarIcon, Plus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import { cn } from '@/lib/utils'

interface Dados {
	setor: string
	data: Date
	horario: string
}

export default function AgendarAgendamento({ setor, data, horario }: Dados) {
	const [serie, setSerie] = useState('')
	const [turma, setTurma] = useState('')
	const [curso, setCurso] = useState('')
	const [equipamentos, setEquipamentos] = useState(false)
	const [equipamentosList, setEquipamentosList] = useState('')
	const [atividades, setAtividades] = useState('')

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={'outline'} className="w-full">
					<Plus className="h-4 w-4" /> Agendar horário
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[420px]">
				<DialogHeader>
					<DialogTitle>Novo agendamento</DialogTitle>
					<DialogDescription>Preencha os dados abaixo</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col items-center space-y-4">
					<div className="flex w-full flex-row items-center">
						<Label className="w-28">Data</Label>
						<Button
							variant={'outline'}
							className={cn(
								'w-full justify-start text-left font-normal',
								!data && 'text-muted-foreground',
							)}
							disabled
						>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{data ? (
								Intl.DateTimeFormat('pt-BR', {
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								}).format(data)
							) : (
								<span>Selecione uma data</span>
							)}
						</Button>
					</div>
					<div className="flex w-full flex-row items-center">
						<Label className="w-28">Setor</Label>
						<Input value={setor} disabled />
					</div>
					<div className="flex w-full flex-row items-center">
						<Label className="w-28">Horário</Label>
						<Input value={horario} disabled />
					</div>
					<div className="flex w-full flex-row items-center">
						<Label className="w-28">Curso</Label>
						<div className="flex w-full flex-row space-x-2">
							<Select value={curso} onValueChange={setCurso}>
								<SelectTrigger>
									<SelectValue placeholder="Selecione" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="1">Educação Infantil</SelectItem>
										<SelectItem value="2">Ensino Fundamental I</SelectItem>
										<SelectItem value="3">Ensino Fundamental II</SelectItem>
										<SelectItem value="4">Ensino Médio</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="flex w-full flex-row items-center">
						<Label className="w-28">Série/Turma</Label>
						<div className="flex w-full flex-row space-x-2">
							<Select value={serie} onValueChange={setSerie}>
								<SelectTrigger>
									<SelectValue placeholder="Selecione" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="1">1º ano</SelectItem>
										<SelectItem value="2">2º ano</SelectItem>
										<SelectItem value="3">3º ano</SelectItem>
										<SelectItem value="4">4º ano</SelectItem>
										<SelectItem value="5">5º ano</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							<Select value={turma} onValueChange={setTurma}>
								<SelectTrigger>
									<SelectValue placeholder="Selecione" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="A">A</SelectItem>
										<SelectItem value="B">B</SelectItem>
										<SelectItem value="C">C</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="flex w-full flex-row items-center">
						<Label className="w-28">Atividades</Label>
						<Textarea
							value={atividades}
							onChange={(e) => setAtividades(e.target.value)}
						/>
					</div>
					<div className="flex w-full flex-row items-center">
						<Label className="w-36 text-sm">Equipamentos</Label>
						<div className="flex w-full flex-row space-x-2">
							<Select
								value={equipamentos ? 'Sim' : 'Não'}
								onValueChange={(value) => setEquipamentos(value === 'Sim')}
							>
								<SelectTrigger>
									<SelectValue placeholder="Selecione" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="Sim">Sim</SelectItem>
										<SelectItem value="Não">Não</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
					{equipamentos && (
						<div className="flex w-full flex-row items-center">
							<Textarea
								value={equipamentosList}
								onChange={(e) => setEquipamentosList(e.target.value)}
								placeholder="Projetor, notebook..."
							/>
						</div>
					)}
				</div>
				<DialogFooter>
					<Button type="submit" className="w-full">
						Reservar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
