module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Inter`,
					`Roboto`,
					`Oxygen`,
					`Ubuntu`,
					`Cantarell`,
					`Fira Sans`,
					`Droid Sans`,
					`Helvetica Neue`,
				],
				display: 'swap',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: { name: `images`, path: `${__dirname}/src/images` },
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
