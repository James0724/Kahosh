require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		// {
		// 	resolve: "gatsby-plugin-crisp-chat",
		// 	options: {
		// 		websiteId: "CRISP_WEBSITE_ID",
		// 		//enableDuringDevelop: false, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
		// 		defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
		// 		enableImprovedAccessibility: false, // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
		// 	},
		// },
		{
			resolve: `gatsby-plugin-scroll-reveal`,
			options: {
				threshold: 0.01, // Percentage of an element's area that needs to be visible to launch animation
				once: true, // Defines if animation needs to be launched once
				disable: false, // Flag for disabling animations
			},
		},
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
