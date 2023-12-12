import changelog from '@/../changelog.json'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Badge } from './ui/badge'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

export default function ChangelogComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="cursor-pointer text-xs text-zinc-500 hover:text-primary">
          O que há de novo?
        </span>
      </DialogTrigger>
      <DialogContent className="w-[95%]">
        <DialogHeader className="text-start">
          <DialogTitle>Atualizações</DialogTitle>
          <DialogDescription>
            Lista de mudanças e atualizações do sistema
          </DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <ScrollArea className="h-96 w-auto">
            <ScrollBar orientation="horizontal" />
            <div className="relative m-4 ">
              {changelog
                .sort((a, b) => {
                  const aVersion = a.version.split('.').map(Number)
                  const bVersion = b.version.split('.').map(Number)

                  for (let i = 0; i < aVersion.length; i++) {
                    if (aVersion[i] > bVersion[i]) {
                      return -1
                    }
                    if (aVersion[i] < bVersion[i]) {
                      return 1
                    }
                  }

                  return 0
                })
                .flatMap((change, index) => {
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
                    <div
                      key={change.version}
                      className="mb-8 flex w-full flex-col"
                    >
                      <div className="w-full space-y-2">
                        <Badge className="text-base font-bold">
                          {change.version}
                        </Badge>
                        <div className="text-base">
                          {Intl.DateTimeFormat('pt-BR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            timeZone: 'UTC',
                          }).format(new Date(change.date))}
                        </div>
                      </div>
                      <div className="flex w-full flex-col">
                        {Object.entries(changesByType).flatMap(
                          ([type, descriptions]) => (
                            <div key={type} className="my-4">
                              <div>{type}:</div>
                              {descriptions.flatMap((description, index) => (
                                <div key={description}>- {description}</div>
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
      </DialogContent>
    </Dialog>
  )
}
