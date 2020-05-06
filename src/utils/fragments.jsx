import { graphql } from "gatsby"

const FluidImageFragment = `
    fragment GatsbyImageSharpFluid_tracedSVG on ImageSharpFluid {
        tracedSVG
        aspectRatio
        src
        srcSet
        sizes
    }
`

module.exports.FluidImageFragment = FluidImageFragment

export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;
