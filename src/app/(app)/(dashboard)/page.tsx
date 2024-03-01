import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import DashboardAgendamentos from './_components/agendamentos'
import DashboardHeader from './_components/header'

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
			<DashboardHeader />
			<DashboardAgendamentos />
		</>
	)
}
