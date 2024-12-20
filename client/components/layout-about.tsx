import { useState } from 'react';
import { Button } from './button';

export function LayoutAbout() {
	const [count, setCount] = useState(0);

	return (
		<div>
			This is the layout of the about Page
			<Button onClick={() => setCount(count + 7)}>
				<span>
					This is the common button.
					<br />
				</span>
				<span>The count is {count}</span>
			</Button>
		</div>
	);
}
