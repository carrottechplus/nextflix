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
		setMovie(original[randomNum]);
	}, [original]);
	return (
		<section className=' px-4 pb-20 pt-40  flex flex-col space-y-4 py-16 md:space-y-8 lg:space-y-12 lg:px-16 lg:h-[85vh] lg:justify-end overflow-hidden relative'>
			{Movie && (
				<>
					<div className='absolute top-0 left-0 z-[1] h-full w-full'>
						<Image
							src={`${baseURL}original${Movie.backdrop_path}`}
							alt={`${Movie.title || Movie.name}`}
							fill
							priority
							quality={100}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw'
							className='object-cover'
						/>
						<div className='absolute bottom-0 left-0 w-full h-full bg-gradient1'></div>
						<div className='w-[60px] h-[60px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-solid border-4 border-red-300 border-t-[transparent] rounded-[50%] z-20 animate-ani-rotation'></div>
					</div>

					{/* title */}
					<h2 className='relative z-[2] text-2xl font-bold drop-shadow-2xl md:text-4xl lg:text-7xl'>{Movie.title || Movie.name}</h2>

					{/* overview */}
					<p className='relative z-[2] text-xs max-w-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>{Movie.overview}</p>

					{/* button set */}
					<nav className='relative z-[2] flex space-x-3'>
						<button className='bannerBtn bg-white text-black'>
							<FaPlay /> Play
						</button>
						<button className='bannerBtn bg-[gray] text-white'>
							<FaInfoCircle /> More Info
						</button>
					</nav>
				</>
			)}
		</section>
	);
}

export default Banner;
