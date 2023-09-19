import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { auth } from '../firebase';

interface IAuth {
	user: User | null;
	signIn: (email: string, password: string) => Promise<void>;
	signUp: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	error: string | null;
	loading: boolean;
}

export const AuthProvider = ({ children }) => {
	const [Loading, setLoading] = useState<boolean>(false);
	const [User, setUser] = useState<User | null>(null);
	const [InitialLoading, setInitialLoading] = useState<boolean>(true);
	const router = useRouter();

	useEffect(() => {
		//auth상태값이 바뀔때마다 해당 useEffect가 실행됨
		onAuthStateChanged(auth, (user) => {
			//인증 상태를 감지해서
			//전달받은 인증정보가 있으면
			if (user) {
				//state에 담고 로딩풀고 메인페이지 이동
				setUser(user);
				setLoading(false);
				router.push('/');
				//전달받은 인증정보가 없으면
			} else {
				//state에 값비우고 로딩처리하고 로그인 페이지 이동
				setUser(null);
				setLoading(true);
				router.push('/login');
			}
			//한번이라도 인증로직이 실행되면 초기상태를 false로 변경
			setInitialLoading(false);
		});
	}, [router]);
};
