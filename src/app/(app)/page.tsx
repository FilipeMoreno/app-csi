'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { ScrollArea } from '@/components/ui/scroll-area'

import { Badge } from '@/components/ui/badge'

export default function Home() {
  const changelog = [
    {
      version: '0.0.1',
      date: '2023-01-01T00:00:00+00:00',
      changes: [
        {
          type: 'Adições',
          description: 'Iniciando o desenvolvimento do aplicativo',
        },
      ],
    },
  ]
  return (
    <>
      <Alert variant={'destructive'}>
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Atenção!</AlertTitle>
        <AlertDescription>
          Este aplicativo está em desenvolvimento e pode conter bugs
        </AlertDescription>
      </Alert>
      <div className="my-4 flex flex-row space-x-6">
        <div>
          <h1 className="text-2xl font-bold">Olá, Usuário!</h1>
          <p className="text-md">Escolha uma das opções no menu ao lado</p>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-bold">Atualizações</h1>
          <span>Mostrando histórico de atualizações</span>
          <ScrollArea className="h-screen w-full ">
            <div className="relative m-4">
              {changelog
                .sort((a, b) => {
                  const aVersion = a.version.split('.').map(Number)
                  const bVersion = b.version.split('.').map(Number)

                  for (let i = 0; i < aVersion.length; i++) {
                    if (aVersion[i] > bVersion[i]) {
                      return -1
                    } else if (aVersion[i] < bVersion[i]) {
                      return 1
                    }
                  }

                  return 0
                })
                .map((change, index) => {
                  const changesByType = change.changes.reduce((acc, item) => {
                    if (!acc[item.type]) {
                      acc[item.type] = []
                    }
                    acc[item.type].push(item.description)
                    return acc
                  }, {})

                  return (
                    <div key={change.version} className="mb-8 flex">
                      <div className="mr-16">
                        <Badge>{change.version}</Badge>
                        <div>
                          {Intl.DateTimeFormat('pt-BR', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            timeZone: 'UTC',
                          }).format(new Date(change.date))}
                        </div>
                      </div>
                      <div>
                        {Object.entries(changesByType).map(
                          ([type, descriptions]) => (
                            <div key={type} className="my-3">
                              <div>{type}:</div>
                              {descriptions.map((description, index) => (
                                <div key={index}>- {description}</div>
                              ))}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )
                })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}
