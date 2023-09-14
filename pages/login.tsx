import Head from 'next/head';
import Image from 'next/image';
import logo from '@/public/img/logo.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

interface Inputs {
	email: string;
	password: string;
}

function Login() {
	const [Login, setLogin] = useState<boolean>(false);

	const {
		register, // 원하는 input 요소에 전개연산자로 등록해서 값 관리
		handleSubmit, // submit event 발생시 register에 등록된 input 값들의 인증처리 함수
		formState: { errors }, // 인증 실패시 커스텀 에러 메세지를 담을 수 있는 객체
	} = useForm<Inputs>();
	// 객체 반환하는데 객체안에 위 reg, hand, form 반환함, 근데 formState 안에 또 객체가 존재 (중첩 객체)

	//handleSubmit 함수 인증처리 완료시 동기적으로 실행될 콜백함수 등록
	//해당 콜백함수는 인증에 성공했을만 호출: 인수로 전달되는 값은 관리되고 있는 form의 value값
	const join: SubmitHandler<Inputs> = async ({ email, password }) => {
		console.log('email', email);
		console.log('password', password);
	};

	return (
		<main className='relative flex w-full h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
			<Head>
				<title>Nextflix Member</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Image src='https://rb.gy/p2hphi' alt='login' fill priority className='z-[-1] opacity-60 hidden md:inline object-cover' />

			<Image width={150} height={150} src={logo} alt='logo' className='absolute left-4 top-4 cursor-pointer md:left-10 md:top-6' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />

			<form
				onSubmit={handleSubmit(join)} //submit이벤트가 발생시 handleSubmit이 인증처리를 해주고 인증의 결과값을 등록된 콜백함수에 전달
				className='relative z-50 mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-14'
			>
				<h2 className='text-4l font-semibold'>Sign In</h2>
				<div className='space-y-4'>
					<input type='email' placeholder='Email' className='input' {...register('email', { required: true })} />
					{errors.email && <span>Please enter a valid Email</span>}
					<input type='password' placeholder='Password' className='input' {...register('password', { required: true })} />
					{errors.password && <span>Please enter a valid Password</span>}
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
