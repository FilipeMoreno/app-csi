import { Suspense } from 'react'

export default async function DashboardAgendamentos() {
	type Agendamento = {
		id: string
		date: string
		activities: string
		equipament: string
		sector_id: string
		sector: {
			id: string
			name: string
		}
		time_id: string
		appointment_by: string
		time: {
			start: string
			end: string
		}
	}

	// const response = await fetch(
	// 	'http://localhost:3000/api/profile?email=eu@filipemoreno.com.br',
	// ).then((res) => res.json())

	return (
		<>
			<h1>Meus agendamentos</h1>
			<Suspense fallback={<p>Carregando...</p>}>
				<div
					// key={agendamento?.id}
					className="rounded-lg p-4 flex flex-row flex-wrap gap-4 gap-y-8"
				>
					<div className="flex flex-row space-x-4">
						<div className="rounded-lg bg-zinc-500 w-24 h-full p-2">
							<div className="flex flex-col items-center justify-center font-bold text-xl">
								<span>
									{/* {Intl.DateTimeFormat('pt-BR', {
										day: '2-digit',
									}).format(new Date(agendamento.date))} */}
									DATA
								</span>
								<span>
									{/* {Intl.DateTimeFormat('pt-BR', {
										month: 'short',
									}).format(new Date(agendamento.date))} */}
									DATA
								</span>
							</div>
						</div>
						<div className="flex flex-col justify-center">
							<span className="font-bold text-2xl">
								{/* {agendamento.sector.name} */}
								SETOR
							</span>
							<span className="text-lg">
								{/* {agendamento.time.start} às {agendamento.time.end} */}
								INÍCIO E FIM
							</span>
						</div>
					</div>
				</div>
			</Suspense>
		</>
	)
}
