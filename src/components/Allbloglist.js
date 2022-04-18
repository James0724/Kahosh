import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BlogList from "./Bloglist";

const query = graphql`
	{
		allContentfulBlogPost {
			nodes {
				aurthor
				blogImage {
					gatsbyImageData
					description
				}
				blogText {
					blogText
				}
				date(formatString: "DD-MM-YYYY")
				createdAt
				title
				id
			}
		}
	}
`;

const Blog = () => {
	const data = useStaticQuery(query);
	const blogs = data.allContentfulBlogPost.nodes;
	return (
		<section
			id="blog"
			className="blog-section"
			data-sal-duration="1000"
			data-sal="slide-up"
			data-sal-delay="300"
			data-sal-easing="ease-out-bounce"
		>
			<h2 class="numbered-heading">Articles</h2>
			<BlogList posts={blogs} />
		</section>
	);
};

export default Blog;
