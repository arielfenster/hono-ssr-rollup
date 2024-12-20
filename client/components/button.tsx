import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Props = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, onClick, ...props }: Props) {
	return (
		<button
			type='button'
			onClick={onClick}
			className='text-xl rounded-lg p-2 border-2 border-black'
			// {...props}
		>
			{children}
		</button>
	);
}
