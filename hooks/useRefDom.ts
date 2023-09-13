import React, { useRef } from 'react';

// 해당 커스텀 훅은 호출 시 generic으로 설정한 Type을 (HtmlDivElement) 기존 HTMLElement 타입에 추가
// 추가된 변수에 담겨있는 타입을 다시 내부적으로 useRef를 호출해서 다시 generic으로 설정
// 해당 useRef는 HtmlDivElement까지 포함된 참조객체를 반환하게 됨.
// 반환된 프로퍼티를 다시 ref라는 default 프로퍼티에 덮어쓰기 함
// 해당 훅으로 생성하는 참조ㅓ객체에는 기존 ref에서 지원하지 않는 타입도 추가해서 생성 가능.
export function useRefDom<T extends HTMLElement>() {
	const myRef = useRef<T>(null);
	return { ref: myRef };
}
