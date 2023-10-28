import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { HomeIcon } from '@radix-ui/react-icons'

type SidebarProps = React.HTMLAttributes<HTMLDivElement>

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn('pb-12', className)}>
      <div className="px-3 py-2">
        <div className="space-y-1">
          <Button variant="secondary" className="w-full justify-start">
            <HomeIcon className="mr-2" /> Home
          </Button>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Wi-Fi
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <title>wifi_focus [#1036]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -3599.000000)"
                    fill="#ffffff"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M96,3439 L96,3441 L102,3441 L102,3447 L104,3447 L104,3439 L96,3439 Z M102,3457 L96,3457 L96,3459 L104,3459 L104,3451 L102,3451 L102,3457 Z M86,3451 L84,3451 L84,3459 L92,3459 L92,3457 L86,3457 L86,3451 Z M86,3441 L92,3441 L92,3439 L84,3439 L84,3447 L86,3447 L86,3441 Z M92.729,3452.69 L94.143,3454.105 L95.557,3452.69 C94.776,3451.909 93.51,3451.909 92.729,3452.69 L92.729,3452.69 Z M89.9,3449.862 L91.315,3451.276 C92.874,3449.717 95.412,3449.717 96.971,3451.276 L98.386,3449.862 C96.042,3447.519 92.244,3447.519 89.9,3449.862 L89.9,3449.862 Z M99.8,3448.448 C96.681,3445.329 91.605,3445.329 88.486,3448.448 L87.072,3447.034 C90.977,3443.128 97.309,3443.128 101.214,3447.034 L99.8,3448.448 Z"
                        id="wifi_focus-[#1036]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              Vouchers Visitantes
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Bilhetes
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M21 15V6" />
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M12 12H3" />
                <path d="M16 6H3" />
                <path d="M12 18H3" />
              </svg>
              Gerar Novo
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <circle cx="8" cy="18" r="4" />
                <path d="M12 18V2l7 4" />
              </svg>
              Templates
            </Button>
          </div>
        </div>
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
