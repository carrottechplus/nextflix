import Header from '@/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import requests from '@/utils/request';
import { Movie } from '@/types';
import Banner from '@/components/Banner';
import Row from '@/components/Row';

interface Props {
	original: Movie[];
	top: Movie[];
	animation: Movie[];
	fantasy: Movie[];
	science_fiction: Movie[];
	TV_movies: Movie[];
	western: Movie[];
}

// Next에서 기본으로 제공하는 NextPage 타입에는 커스텀 Props 타입이 설정되어있지 않기 떄문에 Generic을 활용해서 Props 타입의 interface를 직접 변수로 호출할 때 설정
const Home: NextPage<Props> = (props: Props) => {
	return (
		<div className='relative h-screen'>
			<Head>
				<title>NEXTFLIX</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<main className='relative'>
				<Banner original={props.original} />
				<section className='h-[15vh]'>
					{Object.values(props).map((category, idx) => (
						<Row key={idx} movies={category} title={Object.keys(props)[idx]} />
					))}
				</section>
			</main>
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const [original, top, animation, fantasy, science_fiction, TV_movies, western] = await Promise.all([
		fetch(requests.original).then((res) => res.json()),
		fetch(requests.top).then((res) => res.json()),
		fetch(requests.animation).then((res) => res.json()),
		fetch(requests.fantasy).then((res) => res.json()),
		fetch(requests.science_fiction).then((res) => res.json()),
		fetch(requests.TV_movies).then((res) => res.json()),
		fetch(requests.western).then((res) => res.json()),
	]);

	return {
		props: {
			original: original.results,
			top_rated: top.results,
			animation: animation.results,
			fantasy: fantasy.results,
			science_fiction: science_fiction.results,
			TV_movies: TV_movies.results,
			western: western.results,
		},
	};
};
