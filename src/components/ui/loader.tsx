'use client'

import { BounceLoader } from 'react-spinners'

export const Loader = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '80vh',
			}}
		>
			<BounceLoader size={100} />
		</div>
	)
}
