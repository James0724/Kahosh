import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const query = graphql`
	{
		allContentfulProject {
			nodes {
				projectImage {
					title
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
						resizingBehavior: SCALE
						height: 120
						width: 200
					)
				}
				id
				links
				projectDescription {
					projectDescription
				}
				techlist
				title
			}
		}
	}
`;
const ProjectList = () => {
	const data = useStaticQuery(query);
	const project = data.allContentfulProject.nodes;

	return (
		<ul className="project-grid">
			{project.map((project) => {
				const { id, title, projectDescription, techlist, links, projectImage } =
					project;
				return (
					<li className="project">
						<div className="project-image">
							<a
								href={links}
								aria-label="External Link"
								class="external"
								rel="noopener noreferrer"
								target="_blank"
							>
								{" "}
								<GatsbyImage
									image={projectImage.gatsbyImageData}
									alt={projectImage.title}
									className="project-image__background"
								/>
							</a>
						</div>
						<div class="project-content" key={id}>
							<p class="project-overline">Featured Project</p>
							<h3 class="project-title">
								<a
									href={links}
									aria-label="External Link"
									class="external"
									rel="noopener noreferrer"
									target="_blank"
								>
									{title}
								</a>
							</h3>
							<div class="project-description">
								<p>{projectDescription.projectDescription}</p>
							</div>
							<ul class="project-tech-list">
								{techlist.map((tech, i) => (
									<li key={i}> {tech} </li>
								))}
							</ul>
							<div class="project-links">
								<a
									href="https://github.com/james0724/vicbon"
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
									href={links}
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
					</li>
				);
			})}
		</ul>
	);
};

export default ProjectList;
