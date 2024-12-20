import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Props = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, onClick, ...props }: Props) {
	return (
		<button
			type='button'
			style={{ fontSize: '24px', borderRadius: '12px', padding: '8px' }}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
}
