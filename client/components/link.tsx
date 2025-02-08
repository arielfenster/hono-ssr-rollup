import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import type { AppPage } from '../../shared/constants';

type Props = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> & {
	href: `/${AppPage}`;
};

export function AppLink({ children, ...props }: Props) {
	return <a {...props}>{children}</a>;
}
