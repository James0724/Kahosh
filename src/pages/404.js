import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage = () => {
	return (
		<main>
			<Layout>
				<div className="err">
					<h1>Page not found</h1>
					<h2>404</h2>
					<p>Sorry I couldn’t find what you were looking for</p>
					<button>
						<Link to="/">Home</Link>
					</button>
				</div>
			</Layout>
		</main>
	);
};

export default NotFoundPage;
