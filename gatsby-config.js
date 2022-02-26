require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Roboto Mono`,
					`Roboto Mono\:300`,
					`Space Mono`,
					`Inter`,
					`Inter\:700`,
					`Inter\:400`,
					`Roboto`,
					`Oxygen`,
					`Poppins`,
					`Poppins\:100`,
					`Poppins\:400`,
					`Poppins\:700`,
					`Poppins\:900`,
				],
				display: "swap",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: { name: `images`, path: `${__dirname}/src/images` },
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `he4kfh34v1rf`,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-anchor-links`,
		`gatsby-transformer-sharp`,
	],
};
