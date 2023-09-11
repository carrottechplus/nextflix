import Header from '@/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import requests from '@/utils/request';
import Image from 'next/image';
import { Movie } from '@/types';

interface Props {
	top: Movie[];
	sf: Movie[];
	animation: Movie[];
	drama: Movie[];
	comedy: Movie[];
	fantasy: Movie[];
}

// Next에서 기본으로 제공하는 NextPage 타입에는 커스텀 Props 타입이 설정되어있지 않기 떄문에 Generic을 활용해서 Props 타입의 interface를 직접 변수로 호출할 때 설정
const Home: NextPage<Props> = ({ top, sf, animation, drama, comedy, fantasy }: Props) => {
	console.log(fantasy);
	return (
		<div className='relative h-screen bg-gradient-to-b from-[#333] to-[#141414]'>
			<Head>
				<title>NEXTFLIX</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<main>
				<Image src={`https://image.tmdb.org/t/p/original/${top[0].backdrop_path}`} alt='image' width={500} height={500} />
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
