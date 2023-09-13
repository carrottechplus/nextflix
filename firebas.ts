import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
	authDomain: 'react-study-c0bec.firebaseapp.com',
	projectId: 'react-study-c0bec',
	storageBucket: 'react-study-c0bec.appspot.com',
	messagingSenderId: '1042386048230',
	appId: '1:1042386048230:web:e927ecd3cd6fa64287d727',
};

// firebase로 구동되는 app이 없으면 아직 인증 처리가 되지 않았으므로,
// 인증처리가 되지 않은 상태에서만 초기화 (불필요한 인증 객체 초기화 방지)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();

export default app;
export { auth };
