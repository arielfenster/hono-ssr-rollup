import { Navbar } from '../../../../../components/navbar';

export function SignupPage() {
	return (
		<>
			<Navbar />
			<div className='flex justify-center items-center h-screen bg-gray-100'>
				<div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
					<h1 className='text-3xl font-bold mb-6 text-center text-blue-600'>Sign Up</h1>
					<form>
						<div className='mb-4'>
							<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>
								First Name
							</label>
							<input
								type='text'
								id='firstName'
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								placeholder='Enter your first name'
							/>
						</div>
						<div className='mb-4'>
							<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastName'>
								Last Name
							</label>
							<input
								type='text'
								id='lastName'
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								placeholder='Enter your last name'
							/>
						</div>
						<div className='mb-4'>
							<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
								Email
							</label>
							<input
								type='email'
								id='email'
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								placeholder='Enter your email'
							/>
						</div>
						<div className='mb-6'>
							<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
								Password
							</label>
							<input
								type='password'
								id='password'
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
								placeholder='Enter your password'
							/>
						</div>
						<div className='flex items-center justify-between'>
							<button
								type='submit'
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							>
								Sign Up
							</button>
						</div>
					</form>
					<p className='mt-4 text-center'>
						Already have an account?{' '}
						<a href='/auth/login' className='text-blue-500 hover:text-blue-700'>
							Login
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
