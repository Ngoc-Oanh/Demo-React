import React, { useState } from "react";
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	const [Click, setClick] = useState(false);
	const [Scroll, setScroll] = useState(false);
	const handleClick = () => setClick(!Click);
	const closeMobileMenu = () => setClick(false);

	const ScrollHeader = () => {
		if ( window.scrollY >= 80) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};
	window.addEventListener('scroll', ScrollHeader);

	return (
		<header className={Scroll ? 'header scroll' : 'header'}>
			<div className="">
				<div className="nav">
					<div className="nav-logo">
						<Link to="/">
							<img src={Scroll ? 'images/logo-reforma.svg': 'images/logo-reforma.png'} alt="Logo" />
						</Link>
					</div>
					<div className="menu-icon" onClick={handleClick}>
						<i className={Click ? "fas fa-times" : "fas fa-bars"}></i>
					</div>
					<ul className={Click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item" onClick={closeMobileMenu}>
							<Link to="/" className="nav-link">
							選ばれる理由
							</Link>
						</li>
						<li className="nav-item" onClick={closeMobileMenu}>
							<Link to="/" className="nav-link">
							解決できる課題
							</Link>
						</li>
						<li className="nav-item" onClick={closeMobileMenu}>
							<Link to="/" className="nav-link">
								機能一覧
							</Link>
						</li>
						<li className="nav-item" onClick={closeMobileMenu}>
							<Link to="/" className="nav-link">
							ご利用料金
							</Link>
						</li>
						<li className="nav-item" onClick={closeMobileMenu}>
							<Link to="/" className="nav-link">
							導入実績
							</Link>
						</li>
						<li className="nav-item" onClick={closeMobileMenu}>
							<Link to="/" className="nav-link">
							資料ダウンロード
							</Link>
						</li>
						<li className="nav-item" onClick={closeMobileMenu}>
							<Link to="/" className="nav-link">
							デモ・お問合せ
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
};

export default Header;
