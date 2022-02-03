import React from 'react';

const Navbar = () => {
	return (
		<header>
			<div class="menu-btn">
				<span class="menu-btn__burger"></span>
			</div>

			<nav class="nav">
				<ul class="menu-nav">
					<li class="menu-nav__item active">
						<a href="index.html" class="menu-nav__link">
							Home
						</a>
					</li>
					<li class="menu-nav__item">
						<a href="about.html" class="menu-nav__link">
							About Me
						</a>
					</li>
					<li class="menu-nav__item">
						<a href="projects.html" class="menu-nav__link">
							My Projects
						</a>
					</li>
					<li class="menu-nav__item">
						<a href="contact.html" class="menu-nav__link">
							Contact Me
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
