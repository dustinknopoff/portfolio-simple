module.exports = {
    siteMetadata: {
        title: `Dustin Knopoff`,
        description: `Computer Science and Design student at Northeastern University`,
        author: `@dustinknopoff`,
        pages: [`About`, `Posts`, `Uses`, `Links`],
        siteUrl: `https://dustinknopoff.dev`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `projects`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Dustin Knopoff`,
                short_name: `dustin`,
                start_url: `/`,
                background_color: `#FFF`,
                theme_color: `#007AFF`,
                display: `minimal-ui`,
                icon: `src/images/logo.png`,
                include_favicon: true, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-vscode`,
                        options: {
                            theme: {
                                default: "Solarized Light",
                                dark: "Monokai Dimmed",
                            },
                        },
                    },
                ],
            },
        },
        {
            resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
            options: {
                // Fields to index
                fields: [`title`, `tag`, `excerpt`],
                // How to resolve each field`s value for a supported node type
                resolvers: {
                    // For any node of type MarkdownRemark, list how to resolve the fields` values
                    MarkdownRemark: {
                        title: node => node.frontmatter.title,
                        tag: node => node.frontmatter.tag,
                        path: node => node.fields.slug,
                        excerpt: node => node.excerpt,
                    },
                },
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Raleway`,
                    },
                    {
                        family: `Montserrat`,
                    },
                ],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // 'gatsby-plugin-offline',
    ],
}
