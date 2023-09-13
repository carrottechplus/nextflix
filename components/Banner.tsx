import { useRefDom } from '@/hooks/useRefDom';
import { Movie } from '@/types';
import { baseURL } from '@/url';
import Image from 'next/image';
import { RefObject, useEffect, useRef, useState } from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

interface Props {
	original: Movie[];
}
//서버사이드 렌더링으로 프리렌더된 데이터를 활용하는 컴포넌트일때 다음과 오류뜰떄 해결방법
//Error: Text content does not match server-rendered HTML.
//해결방법: IsClient라는 state를 만들어서 컴포넌트가 마운트되었을떄 해당값을 true 로 변경
//프리렌더된 데이터를 활용하느 코드블록에 IsClient값이 true일때에만 동작하도록 분기처리
//서버쪽에서 pre-render하려고 할때 IsClient의 조건과 맞지 않기 때문에 해당 데이터의 pre-render를 막아서 오류를 예방
function Banner({ original }: Props) {
	const [IsClient, setIsClient] = useState(false);
	const loading = useRef(null) as RefObject<HTMLDivElement>;
	const movieData = useRef<Movie | null>(null); //배열값활용해서 난수 만들고 random 넘버 만들고 있기 때문에 null 추가
	movieData.current = original[Math.floor(Math.random() * original.length)];

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<section className='px-4 pb-20 pt-40  flex flex-col space-y-4 py-16 md:space-y-8 lg:space-y-12 lg:px-16 lg:h-[85vh] lg:justify-end overflow-hidden relative'>
			{IsClient && (
				<>
					<div className='absolute top-0 left-0 z-[1] w-full h-full opacity-80'>
						<Image
							src={`${baseURL}original${movieData.current.backdrop_path}`}
							alt={`${movieData.current.title || movieData.current.name}`}
							fill
							priority
							quality={100}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw'
							className='object-cover'
							onLoadingComplete={() => loading.current?.remove()}
						/>
						<div className='absolute bottom-0 left-0 w-full h-full bg-gradient1'></div>
						<div
							// 해당 ref객체에 연결되는 요소가 Div요소이면 useRef에서 반환하는 요소는 HTMLElement 인데
							// ref 연결될 때 판단하는 type값을 HtmlDivElement여서 ref에 참조객체 할당시 타입 오류 반환됨
							// useRef에 직접 HtmlDivElement라는 타입을 추가할 수 없기 때문에 useRefDom 이라는 커스텀훅을 만들어서 해당 훅안에서 extends키워드로 generic을 활용하여 HtmlDivElement가 포함된 타입을 변수로 넣어서 다시 반환.
							ref={loading}
							className='w-[60px] h-[60px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-solid border-4 border-red-300 border-t-[transparent] rounded-[50%] z-20 animate-rotation'
						></div>
					</div>

					{/* title */}
					<h2 className='relative z-[2] text-2xl font-bold drop-shadow-2xl md:text-4xl lg:text-7xl'>{movieData.current.title || movieData.current.name}</h2>

					{/* overview */}
					<p className='relative z-[2] text-xs max-w-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>{movieData.current.overview}</p>

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
