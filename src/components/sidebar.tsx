import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SidebarNavProps = React.HTMLAttributes<HTMLElement> & {
  items: {
    title?: string
    icon?: string
    subitems: {
      href: string
      title: string
      icon?: string
    }[]
  }[]
  onItemClick?: () => void
}

export function Sidebar({ className, items, onItemClick }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        {items.map((item) => (
          <div className="px-3 py-2" key={item.title}>
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              {item.title}
            </h2>
            <div className="space-y-1">
              {item.subitems.map((subitem) => (
                <div
                  key={subitem.href}
                  className="space-y-1"
                  onClick={onItemClick}
                >
                  <Link href={subitem.href} key={subitem.href}>
                    <Button
                      variant={
                        pathname === subitem.href ? 'secondary' : 'ghost'
                      }
                      className="w-full justify-start"
                    >
                      {/* {subitem.icon} */}
                      {subitem.title}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2"></div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
