import Header from '@/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import requests from '@/utils/request';
import Image from 'next/image';

const Home: NextPage = (props) => {
	console.log(props);
	return (
		<div className='relative h-screen bg-gradient-to-b from-[#333] to-[#141414]'>
			<Head>
				<title>NEXTFLIX</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<main>
				<Image src={`https://image.tmdb.org/t/p/original/${props.top[0].backdrop_path}`} alt='image' width={500} height={500} />
			</main>
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const [top, sf, animation, drama, comedy, fantasy] = await Promise.all([
		fetch(requests.top).then((res) => res.json()),
		fetch(requests.sf).then((res) => res.json()),
		fetch(requests.animation).then((res) => res.json()),
		fetch(requests.drama).then((res) => res.json()),
		fetch(requests.comedy).then((res) => res.json()),
		fetch(requests.fantasy).then((res) => res.json()),
	]);

	return {
		props: { top: top.results, sf: sf.results, animation: animation.results, drama: drama.results, comedy: comedy.results, fantasy: fantasy.results },
	};
};
