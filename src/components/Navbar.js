import React, { useState, useEffect } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { debounce } from "../utilities/helper";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggle = () => setIsMenuOpen(!isMenuOpen);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 50) ||
				currentScrollPos < 10
		);

		setPrevScrollPos(currentScrollPos);
	}, 100);
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	// const [scroll, setScroll] = useState(false);
	// const changeNavbar = () => {
	// 	if (window.scrollY >= 60) {
	// 		setScroll(true);
	// 	} else {
	// 		setScroll(false);
	// 	}
	// };
	// window.addEventListener("scroll", changeNavbar);

	return (
		<header>
			<div className={`navbar ${visible ? "active" : ""}`}>
				<div className="logo">
					<StaticImage
						src="../images/light.png"
						alt="kahoro"
						width={86}
						height={35}
					/>{" "}
				</div>
				<div className="menu-btn" onClick={toggle}>
					<span
						className={`menu-btn__burger ${isMenuOpen ? "open" : ""}`}
					></span>
				</div>

				<nav class={`nav ${isMenuOpen ? "open" : ""}`}>
					<ul
						class={`menu-nav ${isMenuOpen ? "open" : ""}`}
						onClick={() => {
							closeMenu();
						}}
					>
						<li class={`menu-nav__item ${isMenuOpen ? "open" : ""}`}>
							<AnchorLink className="nav-link" to="/#home" title="home">
								<Link href="index.html" class="menu-nav__link">
									Home
								</Link>
							</AnchorLink>
						</li>

						<li class={`menu-nav__item ${isMenuOpen ? "open" : ""}`}>
							<AnchorLink className="nav-link" to="/#about" title="about">
								<Link href="about.html" class="menu-nav__link">
									About
								</Link>
							</AnchorLink>
						</li>

						<li class={`menu-nav__item ${isMenuOpen ? "open" : ""}`}>
							<AnchorLink className="nav-link" to="/#projects" title="projects">
								<Link href="projects.html" class="menu-nav__link">
									Projects
								</Link>
							</AnchorLink>
						</li>

						<li class={`menu-nav__item ${isMenuOpen ? "open" : ""}`}>
							<AnchorLink className="nav-link" to="/#contact" title="contact">
								<Link href="contact.html" class="menu-nav__link">
									Contacts
								</Link>
							</AnchorLink>
						</li>

						<button class={`${isMenuOpen ? "open" : ""}`}>Resume</button>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
