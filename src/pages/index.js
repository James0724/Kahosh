import React from "react";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import Allbloglist from "../components/Allbloglist";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "normalize.css";
import "../dist/css/main.css";

const index = () => {
	return (
		<Layout>
			<div className="main">
				<section
					id="home"
					className="hero-section"
					data-sal-duration="1000"
					data-sal="slide-up"
					data-sal-delay="300"
					data-sal-easing="ease-out-bounce"
				>
					<div className="intro">
						<h3>Hi there, my name is</h3>
					</div>
					<div className="name">
						<h1>
							James Kahoro. <br />
						</h1>
					</div>
					<div className="intro-text">
						<div className="intro-text__title">
							<h1>I build things for the web.</h1>
						</div>
						<div className="intro-text__sub-title">
							<h2>
								The goal isn’t to build a website, The goal is to build your
								business.
							</h2>
						</div>
						<div className="intro-text__message">
							<p>
								More than just a website, I build a tool to increase sales,
								leads. A tool that will establish your online presence and make
								it easy for prospects to find your business. I don't just build
								websites and mobile apps, I create brand guidelines and design
								logos.
							</p>
						</div>
					</div>

					<button>
						<AnchorLink to="/#about" title="about">
							Check out my story!
						</AnchorLink>
					</button>
				</section>
				<section
					id="about"
					className="about-section"
					data-sal-duration="1000"
					data-sal="slide-up"
					data-sal-delay="300"
					data-sal-easing="ease-out-bounce"
				>
					<h2 class="numbered-heading">About Me</h2>
					<div className="about-container">
						<div class="about__text">
							<p>
								Hello! My name is James, I'm a web developer based in Kenya
								passionate about bringing both the technical and visual aspects
								of digital products to life. My interest in web development
								started back in 2018 when I decided to start my own company of
								travel tour and safaris. During that time I learned various way
								of creating a website the experience and challenges taught me a
								lot about HTML &amp; CSS!
							</p>
							<p>
								Fast-forward to today, and I’ve had the privilege of working on
								different projects{" "}
								<a
									href="https://247cybercafe.netlify.app/"
									rel="noopener noreferrer"
									target="_blank"
								>
									Cyber Cafe website,
								</a>
								<a
									href="https://vicboninteriors.netlify.app/"
									rel="noopener noreferrer"
									target="_blank"
								>
									vicbon interiors,
								</a>
								and much much more to come. My main focus these days is building
								accessible, inclusive products and digital experiences as a
								freelancer for a variety of clients.
							</p>
							{/* <p>
							I also recently{" "}
							<a
								href="https://www.newline.co/courses/build-a-spotify-connected-app"
								rel="noopener noreferrer"
								target="_blank"
							>
								launched a course
							</a>{" "}
							that covers everything you need to build a web app with the
							Spotify API using Node &amp; React.
						</p> */}
							<p>
								Here are a few technologies I’ve been working with recently:
							</p>

							<ul class="skills-list">
								<li>JavaScript (ES6+)</li>
								<li>Django</li>
								<li>React</li>
								<li>Boostrap</li>
								<li>Node.js</li>
								<li>WordPress</li>
							</ul>
						</div>
						<div className="about__pic">
							<div className="img_wrapper">
								<StaticImage
									src="../images/dev.png"
									alt="me"
									className="about_img"
								/>
							</div>
						</div>
					</div>
				</section>
				<section
					id="projects"
					className="project-section"
					data-sal-duration="1000"
					data-sal="slide-up"
					data-sal-delay="300"
					data-sal-easing="ease-out-bounce"
				>
					<h2 class="numbered-heading">Some Things I’ve Built</h2>

					<ProjectList />
					{/* <li className="project">
							<div class="project-content">
								<p class="project-overline">Featured Project</p>
								<h3 class="project-title">
									<a
										href="https://halcyon-theme.netlify.com/"
										rel="noopener noreferrer"
										target="_blank"
									>
										Cyber Cafe Website
									</a>
								</h3>
								<div class="project-description">
									<p>
										An online portal that enables Kenyans to order for online
										KRA services and other online cyber cafe servises such as
										remote printing, and pay conveniently for those services
										rendered.
										<a
											href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
											target="_blank"
											rel="noopener noreferrer"
										>
											View website 247Cyber Cafe.
										</a>
									</p>
								</div>
								<ul class="project-tech-list">
									<li>Nodes.js</li>
									<li>React.js</li>
									<li>Boostrap</li>
									<li>Mango db database</li>
									<li>Contentful CMS</li>
								</ul>
								<div class="project-links">
									<a
										href="https://github.com/bchiang7/halcyon-site"
										aria-label="GitHub Link"
										rel="noopener noreferrer"
										target="_blank"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-github"
										>
											<title>GitHub</title>
											<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
										</svg>
									</a>
									<a
										href="https://halcyon-theme.netlify.com/"
										aria-label="External Link"
										class="external"
										rel="noopener noreferrer"
										target="_blank"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-external-link"
										>
											<title>External Link</title>
											<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
											<polyline points="15 3 21 3 21 9"></polyline>
											<line x1="10" y1="14" x2="21" y2="3"></line>
										</svg>
									</a>
								</div>
							</div>
						</li> */}
				</section>
				<section
					id="contact"
					className="contact-section"
					data-sal-duration="1000"
					data-sal="slide-up"
					data-sal-delay="300"
					data-sal-easing="ease-out-bounce"
				>
					<h2 class="numbered-heading">What next?</h2>
					<h2 class="title">Get In Touch</h2>
					<p>
						I always did something I was a little not ready to do. I think
						that’s how you grow. I would love the prospects of build something
						amazing together and to hear from you whether it is Dropping a line
						to say good day or ask for my resume.
					</p>
					<div className="contact__btn">
						<button>
							<a
								class="email-link"
								href="mailto:jameskahoro07@gmail.com"
								rel="noopener noreferrer"
								target="_blank"
							>
								Say Hello
							</a>
						</button>
					</div>
				</section>
				<Allbloglist />
				{/* <div class="hero__social-icons">
					<a href="#!">
						<Icon icon="simple-icons:facebook" />
					</a>
					<a href="#!">
						<Icon icon="simple-icons:github" />
					</a>
					<a href="#!">
						<Icon icon="simple-icons:linkedin" />
					</a>
				</div> */}
			</div>
			<div class="left orientation">
				<ul class="social-items">
					<li>
						<a
							href="https://github.com/James0724"
							aria-label="GitHub"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-github"
							>
								<title>GitHub</title>
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/jameskahosh"
							aria-label="Instagram"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-instagram"
							>
								<title>Instagram</title>
								<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
								<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
							</svg>
						</a>
					</li>

					<li>
						<a
							href="https://www.linkedin.com/in/james-kahoro-35781b145/"
							aria-label="Linkedin"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-linkedin"
							>
								<title>LinkedIn</title>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
								<rect x="2" y="9" width="4" height="12"></rect>
								<circle cx="4" cy="4" r="2"></circle>
							</svg>
						</a>
					</li>
					{/* <li>
						<a
							href="https://codepen.io/bchiang7"
							aria-label="Codepen"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-codepen"
							>
								<title>CodePen</title>
								<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
								<line x1="12" y1="22" x2="12" y2="15.5"></line>
								<polyline points="22 8.5 12 15.5 2 8.5"></polyline>
								<polyline points="2 15.5 12 8.5 22 15.5"></polyline>
								<line x1="12" y1="2" x2="12" y2="8.5"></line>
							</svg>
						</a>
					</li> */}
				</ul>
			</div>

			<div class="right orientation">
				<div class="email">
					<a href="mailto:jameskahoro07@gmail.com">jameskahoro07@gmail.com</a>
				</div>
			</div>
		</Layout>
	);
};

export default index;
