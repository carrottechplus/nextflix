import { Movie } from '@/types';
import { baseURL } from '@/url';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

interface Props {
	original: Movie[];
}

function Banner({ original }: Props) {
	const [Movie, setMovie] = useState<Movie | null>(null);
	// 함수에 타입지정이 필수이지만 내장 hook 이기 떄문에 타입 안써도 되긴하나 오류방지 차원에서 generic이용하여 작성
	useEffect(() => {
		const randomNum = Math.floor(Math.random() * original.length); // 정수로 반환
		console.log(randomNum);
		setMovie(original[randomNum]);
		console.log(setMovie);
	}, [original]);
	return (
		<section className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
			{Movie && (
				<>
					<div className='absolute top-0 left-0 z-[1] h-[95vh] w-full'>
						<Image src={`${baseURL}${Movie.backdrop_path}`} alt={`${Movie.title || Movie.name}`} fill priority quality={50} className='object-cover' />
					</div>

					{/* title */}
					<h2 className='relative z-[2] text-2xl font-bold drop-shadow-2xl md:text-4xl lg:text-7xl'>{Movie.title || Movie.name}</h2>

					{/* overview */}
					<p className='relative z-[2] text-xs max-w-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>{Movie.overview}</p>

					{/* button set */}
					<nav className='relative z-[2] flex space-x-3'>
						<button className='bannerBtn'>
							<FaPlay /> Play
						</button>
						<button className='bannerBtn'>
							<FaInfoCircle /> More Info
						</button>
					</nav>
				</>
			)}
		</section>
	);
}

export default Banner;
