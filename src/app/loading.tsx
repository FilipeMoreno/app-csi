'use client'

import Image from 'next/image'

export default function LoadingPage() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center">
			<Image
				src={'/favicon.ico'}
				alt=""
				width={50}
				height={50}
				className="animate-bounce"
			/>
		</div>
	)
}
