import { AppLink } from './link';

export function Navbar() {
	return (
		<nav className='bg-blue-600 p-4'>
			<div className='container mx-auto flex items-center justify-between'>
				<div className='mr-4'>
					<AppLink href='/home' className='text-white text-2xl font-bold'>
						BookFinder
					</AppLink>
				</div>
				<div className='flex items-center'>
					<AppLink href='/search' className='text-white mr-4 hover:text-blue-200'>
						Search
					</AppLink>
					<AppLink href='/about' className='text-white mr-4 hover:text-blue-200'>
						About
					</AppLink>
				</div>
				<div className='ml-auto'>
					<AppLink href='/auth/login' className='text-white hover:text-blue-200'>
						Login
					</AppLink>
				</div>
			</div>
		</nav>
	);
}
