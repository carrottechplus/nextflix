import { Movie } from '@/types';
import { useEffect, useState } from 'react';

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
	return <div>Banner</div>;
}

export default Banner;
