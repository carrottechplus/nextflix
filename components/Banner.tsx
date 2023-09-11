import { Movie } from '@/types';
import { baseURL } from '@/url';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
			<div className='absolute top-0 left-0 z-[1] h-[95vh] w-full'>
				<Image src={`${baseURL}${Movie?.backdrop_path}`} alt={`${Movie?.title || Movie?.name}`} fill priority quality={50} className='object-cover' />
			</div>

			{/* title */}
			<h2 className='relative z-[2]'>{Movie?.title || Movie?.name}</h2>
			<p className='relative z-[2]'>{Movie?.overview}</p>
		</section>
	);
}

export default Banner;
