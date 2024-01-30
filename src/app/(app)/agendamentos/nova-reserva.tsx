import { CalendarIcon, Plus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
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

import { Badge } from '@/components/ui/badge'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import horarios from './horarios.json'
import setores from './setores.json'

export default function AdicionarReserva() {
	const [setor, setSetor] = useState<string>('')
	const [periodo, setPeriodo] = useState<string>('')
	const [selectedHorarios, setSelectedHorarios] = useState<string[]>([])
	const [date, setDate] = useState<Date>(new Date())
	const [serie, setSerie] = useState<string>('')
	const [turma, setTurma] = useState<string>('')
	const [curso, setCurso] = useState<string>('')
	const [atividades, setAtividades] = useState<string>('')

	const handleCheckboxChange = (value: string) => {
		setSelectedHorarios((prev) => {
			if (prev.includes(value)) {
				return prev.filter((horario) => horario !== value)
			}
			return [...prev, value]
		})
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={'outline'}>
					<Plus className="h-4 w-4" /> Reservar
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Novo agendamento</DialogTitle>
					<DialogDescription>Preencha os dados abaixo</DialogDescription>
				</DialogHeader>

				<div className="flex flex-col items-center space-y-4">
					<div className="flex w-full flex-row items-center">
						<Label className="w-28">Data</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant={'outline'}
									className={cn(
										'w-full justify-start text-left font-normal',
										!date && 'text-muted-foreground',
									)}
								>
									<CalendarIcon className="mr-2 h-4 w-4" />
									{date ? (
										Intl.DateTimeFormat('pt-BR', {
											weekday: 'long',
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										}).format(date)
									) : (
										<span>Selecione uma data</span>
									)}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0">
								<Calendar
									mode="single"
									selected={date}
									onSelect={(day) => setDate(day as Date)}
									disabled={(date) => {
										const today = new Date()
										today.setHours(0, 0, 0, 0)
										return date < today || date < new Date('1900-01-01')
									}}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					</div>
					<div className="flex w-full flex-row items-center">
						<Label className="w-28">Setor</Label>
						<Select onValueChange={setSetor} value={setor}>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Selecione o setor" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{setores.flatMap((setor) => (
										<SelectItem key={setor.id} value={setor.nome}>
											{setor.nome}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="flex w-full flex-row items-center">
						<Label className="w-28">Período</Label>
						<Select onValueChange={setPeriodo} value={periodo}>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Selecione o período" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="Manhã">Manhã</SelectItem>
									<SelectItem value="Tarde">Tarde</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					{setor && periodo && (
						<div className="flex w-full flex-row items-center">
							<Label className="w-[95px]">Horários</Label>
							<div className="flex flex-row justify-center items-center space-x-2">
								{(() => {
									const horariosDisponiveis = horarios
										.filter((horario) => horario.setor === setor)
										.flatMap((horario) =>
											horario.horarios.filter(
												(horarioInterno) =>
													horarioInterno.periodo === periodo &&
													!horarioInterno.reservado,
											),
										)

									if (horariosDisponiveis.length === 0) {
										return (
											<p className="text-sm text-zinc-500">
												Não há horários disponíveis.
											</p>
										)
									}

									return (
										<ScrollArea className="w-[290px] whitespace-nowrap -ml-2">
											<div className="overflow-hidden space-x-2">
												{horariosDisponiveis.flatMap((horarioInterno) => {
													return (
														<Badge
															variant={'outline'}
															onClick={() =>
																handleCheckboxChange(
																	horarioInterno.id.toString(),
																)
															}
															onChange={() =>
																handleCheckboxChange(
																	horarioInterno.id.toString(),
																)
															}
														>
															{horarioInterno.inicio}
														</Badge>
													)
												})}
												<ScrollBar orientation="horizontal" />
											</div>
										</ScrollArea>
									)
								})()}
							</div>
						</div>
					)}
				</div>

				{periodo && setor && selectedHorarios && (
					<div className="flex flex-col items-center space-y-4">
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
					</div>
				)}

				<DialogFooter>
					<Button className="mt-4 w-full" type="submit">
						Reservar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
