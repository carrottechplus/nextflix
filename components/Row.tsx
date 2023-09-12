import { Movie } from '@/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { baseURL } from '@/url';

interface Props {
	title: string;
	movies: Movie[];
}

function Row({ title, movies }: Props) {
	console.log(movies);

	const [Movies, setMovies] = useState<Movie[]>([]);
	useEffect(() => {
		setMovies(movies);
	}, [movies]);
	return (
		<article className='space-y-0.5 z-20 md:space-y-2 md:pb-[30px]'>
			<h2 className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl uppercase'>{title}</h2>
			<div className='relative'>
				<ul className='w-full flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-thin scrollbar-track-[transparent] scrollbar-thumb-red-600 scrollbar-none  hover:scrollbar-thin'>
					{Movies.map((movie, idx) => {
						return (
							<li key={idx} className='w-[200px] h-[calc(15vh-40px)] relative min-w-[200px]'>
								<Image src={`${baseURL}w300${movie.backdrop_path}`} alt={`${movie.title || movie.name}`} fill priority quality={50} className='object-cover' />
							</li>
						);
					})}
				</ul>
			</div>
		</article>
	);
}

export default Row;
