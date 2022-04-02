import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

const BlogTemplate = ({ data }) => {
	console.log(data);
	const {
		title,
		aurthor,
		date,
		blogText: { blogText },
		blogImage: { gatsbyImageData, description },
	} = data.contentfulBlogPost;
	return (
		<Layout>
			<main className="blog-page">
				<div class="post-single">
					<div class="post-single-image">
						<GatsbyImage
							image={gatsbyImageData}
							alt={description}
							height={500}
							width={1000}
						/>
					</div>

					<div class="post-single-body">
						<div class="post-single-title">
							<h2>{title}</h2>
							<ul class="entry-meta">
								<li class="post-author">By: {aurthor}</li>
								<li class="post-date">
									<span class="line"></span>Posted on: {date}
								</li>
							</ul>
						</div>

						<div class="post-single-content">{blogText}</div>

						<div class="post-single-ads ">
							<div class="ads"></div>
						</div>

						<div class="post-single-comments">
							<div class="comments-form">
								<h4>Leave a Reply</h4>

								<form
									class="form "
									action="#"
									method="POST"
									id="main_contact_form"
								>
									<p>
										Your email adress will not be published ,Requied fileds are
										marked*.
									</p>
									<div class="alert alert-success contact_msg" role="alert">
										Your message was sent successfully.
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<input
													type="text"
													name="name"
													id="name"
													class="form-control"
													placeholder="Name*"
													required="required"
												/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<input
													type="email"
													name="email"
													id="email"
													class="form-control"
													placeholder="Email*"
													required="required"
												/>
											</div>
										</div>
										<div class="col-md-12">
											<div class="form-group">
												<textarea
													name="message"
													id="message"
													cols="30"
													rows="5"
													class="form-control"
													placeholder="Message*"
													required="required"
												></textarea>
											</div>
										</div>

										<div class="col-lg-12">
											<div class="mb-20">
												<input
													name="name"
													type="checkbox"
													value="1"
													required="required"
												/>
												<label for="name">
													<span>
														save my name , email and website in this browser for
														the next time I comment.
													</span>
												</label>
											</div>

											<button type="submit" name="submit" class="btn-custom">
												Send Comment
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
};
export const query = graphql`
	query getSingleBlog($title: String) {
		contentfulBlogPost(title: { eq: $title }) {
			title
			aurthor
			blogImage {
				gatsbyImageData
				description
			}
			blogText {
				blogText
			}
			date(formatString: "DD-MM-YYYY")
		}
	}
`;

export default BlogTemplate;
