import React from "react";
import slugify from "slugify";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Blog = ({ posts = [] }) => {
	return (
		<div className="blog-list">
			{posts.map((blog) => {
				const { id, title, aurthor, blogImage, date } = blog;
				const slug = slugify(title, { lower: true });
				return (
					<Link key={id} to={`/${slug}`} className="blog-item">
						<div class="post-list-image">
							<GatsbyImage
								className="grayscale"
								image={blogImage.gatsbyImageData}
								alt={blogImage.description}
							/>
						</div>
						<div class="post-list-content">
							<ul class="entry-meta">
								<li class="entry-cat">{aurthor}</li>
								<li class="post-date">Posted On: {date}</li>
							</ul>
							<h1 class="entry-title">{title}</h1>
							<div class="post-btn">Continue Reading</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Blog;
