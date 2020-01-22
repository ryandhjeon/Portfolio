import React from "react"
import styled from "@emotion/styled"
// import '../styles/styles.scss';

const Button = styled.button`
  color: ${props => (props.primary ? "hotpink" : "turquoise")};
`

const Container = styled.div(props => ({
  display: "flex",
  flexDirection: props.column && "column",
}))

const Example = styled("span")`
  color: black;
  & > span {
    color: pink;
  }
`

const Home = () => {
  return (
    <>
      <Container column>
        <div>MAIN PAGE</div>
        <Example>
          I provide <span>strategic</span> experience to the companies and
          individuals. A UX designer and <span>a</span> full-stack developer
          based in US
        </Example>
        <Button primary as="a" href="portfolio">
          View my work
        </Button>
        <Button primary as="a" href="about">
          Primary Button
        </Button>
        <div>
          <div>
            <h1>How can I help you?</h1>
            <p>
              As a freelance digital designer, I am here to make you stand out
              in the digital world. The combination of my passion for design and
              your vision will ensure a great end result.
            </p>
            <div>
              <a href="services" alt="Services">
                <span>View Services</span>
              </a>
            </div>
          </div>
          <div>
            <h1>Design</h1>
            <ul>
              <li>Web Design</li>
              <li>Prototyping</li>
              <li>Branding</li>
              <li>Illustration</li>
            </ul>
          </div>
          <h1>Development</h1>
          <p>Web development</p>
        </div>
      </Container>
    </>
  )
}

export default Home
