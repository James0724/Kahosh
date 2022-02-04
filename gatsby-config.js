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
					`Poppins`,
					`Poppins\:100`,
					`Poppins\:400`,
					`Poppins\:700`,
					`Poppins\:900`,
					`Playfair Display`,
					`Playfair Display\:400`,
					`Playfair Display\:700`,
					`Playfair Display\:900`,
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
