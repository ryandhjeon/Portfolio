import { graphql, useStaticQuery } from 'gatsby';

const useImageQuery = () => {
  const imageData = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "image_1.jpg" }) {
        ...fluidImage
      }
      imageTwo: file(relativePath: { eq: "image_2.jpg" }) {
        ...fluidImage
      }
      imageThree: file(relativePath: { eq: "image_3.jpg" }) {
        ...fluidImage
      }
      imageFour: file(relativePath: { eq: "image_4.jpg" }) {
        ...fluidImage
      }
      publication: file(relativePath: { eq: "research.jpg" }) {
        ...fluidImage
      }
      portfolio_about: file(relativePath: { eq: "portfolio_about.jpg" }) {
        ...fluidImage
      }
      portfolio_drawing: file(relativePath: { eq: "portfolio_drawing.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return imageData;
};

export default useImageQuery;
