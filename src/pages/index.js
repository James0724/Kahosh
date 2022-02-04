import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Icon } from '@iconify/react';

import 'normalize.css';
import '../dist/css/main.css';

const index = () => {
	return (
		<main>
			<section class="home">
				<div className="hero">
					<div className="hero__img">
						<StaticImage src="../images/Logotext.png" alt="kahoro" />
					</div>
					<div className="hero__text">
						<h4>
							The Future of the web is collaborative and creative, therefore it
							must be sequre, inclusive and accesible <br />
							<span>#THE FUTURE IS NOW</span>
						</h4>
					</div>
					<div className="hero__searchbox">
						<input type="text" placeholder="Logo, Website, branding ..." />
						<button>Get Started</button>
					</div>
					<div class="hero__social-icons">
						<a href="#!">
							<Icon icon="simple-icons:facebook" />
						</a>
						<a href="#!">
							<Icon icon="simple-icons:github" />
						</a>
						<a href="#!">
							<Icon icon="simple-icons:linkedin" />
						</a>
					</div>
				</div>
				<div className="container">
					<h2>
						The <span>goal</span> isn’t to build a website.
					</h2>
					<h1>
						The <span>goal</span> is to <span>build</span> your{' '}
						<span>business</span>.
					</h1>
					<div className="title-divider"></div>
				</div>
			</section>
		</main>
	);
};

export default index;
