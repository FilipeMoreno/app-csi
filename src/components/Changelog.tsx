import changelog from '@/../changelog.json'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { Badge } from './ui/badge'

export default function ChangelogComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="cursor-pointer text-xs text-zinc-500 hover:text-primary">
          O que há de novo?
        </span>
      </DialogTrigger>
      <DialogContent className="w-auto">
        <DialogHeader>
          <DialogTitle>Atualizações</DialogTitle>
          <DialogDescription>Lista de atualizações </DialogDescription>
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
      </DialogContent>
    </Dialog>
  )
}
