import Head from 'next/head';
import Image from 'next/image';
import logo from '@/public/img/logo.svg';

function Login() {
	return (
		<main className='relative flex w-full h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
			<Head>
				<title>Nextflix Member</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Image src='https://rb.gy/p2hphi' alt='login' fill priority className='z-[-1] opacity-60 hidden md:inline object-cover' />

			<Image width={150} height={150} src={logo} alt='logo' className='absolute left-4 top-4 cursor-pointer md:left-10 md:top-6' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />

			<form className='relative mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-14'>
				<h2 className='text-4l font-semibold'>Sign In</h2>
				<div className='space-y-4'>
					<input type='email' placeholder='Email' className='input' id='' />
					<input type='password' placeholder='Password' className='input' id='' />
				</div>

				<button type='button' className='w-full rounded bg-[#e40914] py-3 font-semibold'>
					Sign In
				</button>

				<div className='text-[grey]'>
					New to Nextflix?
					<button type='button' className='text-white ml-4 hover:underline font-semibold'>
						Sign up Now
					</button>
				</div>
			</form>
		</main>
	);
}

export default Login;
