export function Navbar() {
	return (
		<nav className='bg-blue-600 p-4'>
			<div className='container mx-auto flex items-center'>
				<a href='/' className='text-white text-2xl font-bold'>
					BookFinder
				</a>
				<div className='ml-8 flex items-center'>
					<a href='/search' className='text-white mr-4 hover:text-blue-200'>
						Search
					</a>
					<a href='/about' className='text-white hover:text-blue-200'>
						About
					</a>
				</div>
			</div>
		</nav>
	);
}
