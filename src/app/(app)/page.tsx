'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import CookiesConsent from '@/components/CookiesConsent'
import changelog from '@/../changelog.json'

export default function Home() {
  return (
    <>
      <Alert className="bg-[#a1313d]">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle className="font-bold">Atenção!</AlertTitle>
        <AlertDescription>
          Este aplicativo está em desenvolvimento e pode conter bugs
        </AlertDescription>
      </Alert>
      <div className="my-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 lg:space-x-6">
        <div>
          <h1 className="text-2xl font-bold">Olá, Usuário!</h1>
          <p className="text-md">Escolha uma das opções no menu ao lado</p>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-bold">Atualizações</h1>
          <span>Mostrando histórico de atualizações</span>
          <ScrollArea className="h-screen w-full">
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
                  const changesByType: { [key: string]: string[] } =
                    change.changes.reduce(
                      (acc: { [key: string]: string[] }, item) => {
                        if (!acc[item.type]) {
                          acc[item.type] = []
                        }
                        acc[item.type].push(item.description)
                        return acc
                      },
                      {},
                    )

                  return (
                    <div key={change.version} className="mb-8 flex">
                      <div className="w-64 space-y-2">
                        <Badge className="font-bold">{change.version}</Badge>
                        <div className="text-xs">
                          {Intl.DateTimeFormat('pt-BR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            timeZone: 'UTC',
                          }).format(new Date(change.date))}
                        </div>
                      </div>
                      <div className="flex w-full flex-col">
                        {Object.entries(changesByType).map(
                          ([type, descriptions]) => (
                            <div key={type} className="my-4">
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
      <CookiesConsent />
    </>
  )
}
