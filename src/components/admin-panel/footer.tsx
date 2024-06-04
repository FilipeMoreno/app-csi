import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
	return (
		<div className="supports-backdrop-blur:bg-background/60 z-20 w-full shadow bg-background/95 backdrop-blur">
			<div className="mx-4 md:mx-8 flex h-14 items-center">
				<p className="text-xs md:text-sm leading-loose text-muted-foreground text-left flex flex-row gap-1 items-center">
					<Image
						src="/icons/icon-512x512.png"
						alt="Logo"
						width={24}
						height={16}
						className="flex flex-row"
					/>
					Colégio Santo Inácio. Developed with by{' '}
					<Link
						href="https://github.com/filipemoreno"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium underline underline-offset-4"
					>
						Filipe Moreno
					</Link>
					.
				</p>
			</div>
		</div>
	)
}
