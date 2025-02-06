import { Navbar } from '../../components/navbar';

type Props = {
	id: string;
};

export function DynamicPage({ id }: Props) {
	return (
		<div>
			<Navbar />
			<h1>Dynamic Page</h1>
			<p>id: {id}</p>
		</div>
	);
}
