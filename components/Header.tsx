// 대입형 함수x > 페이지 컴포넌트만
function Header() {
	return (
		<header>
			<h1>NEXTFLIX</h1>
			<nav>
				<ul>
					<li className='headerLink'>Home</li>
					<li className='headerLink'>TV show</li>
					<li className='headerLink'>Movies</li>
					<li className='headerLink'>New & Popular</li>
					<li className='headerLink'>My list</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
