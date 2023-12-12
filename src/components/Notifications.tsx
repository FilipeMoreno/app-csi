import { BellIcon, GearIcon } from '@radix-ui/react-icons'
import { FilePlus2, LifeBuoy, Reply } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Separator } from './ui/separator'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'

export async function Notifications() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="relative h-6 gap-1 rounded-full px-2 text-secondary-foreground"
          size="sm"
        >
          <BellIcon className="h-3 w-3" />
          <span>3</span>

          <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
          </span>
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" alignOffset={-16} className="w-80 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Notificações</span>
          <Link
            className="text-muted-foreground hover:text-primary"
            href="/settings"
          >
            <GearIcon className="h-4 w-4" />
          </Link>
        </div>

        <Tabs defaultValue="new" className="mt-2">
          <TabsList className="space-x-1">
            <TabsTrigger value="new">Novas (3)</TabsTrigger>
            <TabsTrigger value="archived">Arquivadas</TabsTrigger>
          </TabsList>
        </Tabs>

        <Separator className="my-4" />

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="rounded-full border border-primary/10 bg-primary/5 p-2">
              <FilePlus2 className="h-4 w-4 text-violet-400" />
            </div>
            <div className="space-y-1">
              <p className="text-xs leading-relaxed">
                Solicitação de carteirinha {''}
                <strong>#1234</strong> criada por {''}
                <strong>Fulano</strong>.
              </p>
              <time className="text-xs text-muted-foreground">
                15 minutos atrás
              </time>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-full border border-primary/10 bg-primary/5 p-2">
              <LifeBuoy className="h-4 w-4 text-sky-400" />
            </div>
            <div className="space-y-1">
              <p className="text-xs leading-relaxed">
                <strong>Chamado #1234</strong> criado por{' '}
                <strong>Professor</strong>.
              </p>
              <time className="text-xs text-muted-foreground">
                4 horas atrás
              </time>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-full border border-primary/10 bg-primary/5 p-2">
              <Reply className="h-4 w-4 text-amber-400" />
            </div>
            <div className="space-y-1">
              <p className="text-xs leading-relaxed">
                Nova resposa do chamado <strong>#123</strong>
              </p>
              <time className="text-xs text-muted-foreground">
                6 horas atrás
              </time>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            Arquivar todas
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
