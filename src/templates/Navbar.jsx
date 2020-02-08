import React from "react"
import { Link } from "gatsby"
import { button, blackButton } from "src/styles/emotionComponent"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Navbar = () => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="/services/">Services</ListLink>
      </ul>
    </header>
    <div css={button}>BUTTON</div>
  </div>
)

export default Navbar
