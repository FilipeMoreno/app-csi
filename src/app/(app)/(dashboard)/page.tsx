'use client'

import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function Home() {
	return (
		<>
			<Alert className="bg-destructive">
				<ExclamationTriangleIcon className="h-4 w-4" color="white" />
				<AlertTitle className="font-bold text-white">Atenção!</AlertTitle>
				<AlertDescription className="text-white">
					Este aplicativo está em desenvolvimento e pode conter bugs.
				</AlertDescription>
			</Alert>
			<div className="my-8 flex flex-col space-y-4 sm:flex-row">
				<div>
					<h1 className="text-2xl font-bold">Olá, Usuário!</h1>
					<p className="text-md">
						{Intl.DateTimeFormat('pt-BR', {
							weekday: 'long',
							day: 'numeric',
							month: 'long',
							year: 'numeric',
						}).format(new Date())}
					</p>
				</div>
			</div>
			<div>
				<h1>Meus agendamentos</h1>
				<div className="rounded-lg p-4 flex flex-row flex-wrap gap-4 gap-y-8 items-center">
					<div className="flex flex-row space-x-4">
						<div className="rounded-lg bg-zinc-500 w-24 h-full p-2">
							<div className="flex flex-col items-center justify-center font-bold text-xl">
								<span>25</span>
								<span>Jan</span>
							</div>
						</div>
						<div className="flex flex-col justify-center">
							<span className="font-bold text-2xl">Informática</span>
							<span className="text-lg">07:15 às 08:00</span>
						</div>
					</div>
					<div className="flex flex-row space-x-2">
						<div className="rounded-lg bg-zinc-500 w-24 h-full p-2">
							<div className="flex flex-col items-center justify-center font-bold text-xl">
								<span>25</span>
								<span>Jan</span>
							</div>
						</div>
						<div className="flex flex-col justify-center">
							<span className="font-bold text-2xl">Informática</span>
							<span className="text-lg">07:15 às 08:00</span>
						</div>
					</div>
					<div className="flex flex-row space-x-2">
						<div className="rounded-lg bg-zinc-500 w-24 h-full p-2">
							<div className="flex flex-col items-center justify-center font-bold text-xl">
								<span>25</span>
								<span>Jan</span>
							</div>
						</div>
						<div className="flex flex-col justify-center">
							<span className="font-bold text-2xl">Informática</span>
							<span className="text-lg">07:15 às 08:00</span>
						</div>
					</div>
					<div className="flex flex-row space-x-2">
						<div className="rounded-lg bg-zinc-500 w-24 h-full p-2">
							<div className="flex flex-col items-center justify-center font-bold text-xl">
								<span>25</span>
								<span>Jan</span>
							</div>
						</div>
						<div className="flex flex-col justify-center">
							<span className="font-bold text-2xl">Informática</span>
							<span className="text-lg">07:15 às 08:00</span>
						</div>
					</div>
					<div className="flex flex-row space-x-2">
						<div className="rounded-lg bg-zinc-500 w-24 h-full p-2">
							<div className="flex flex-col items-center justify-center font-bold text-xl">
								<span>25</span>
								<span>Jan</span>
							</div>
						</div>
						<div className="flex flex-col justify-center">
							<span className="font-bold text-2xl">Informática</span>
							<span className="text-lg">07:15 às 08:00</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
