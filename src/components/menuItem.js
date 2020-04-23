/** @jsx jsx */
import React from "react"
import { jsx } from 'theme-ui'
import { CreateLocalLink } from "../utils"
import UniversalLink from "./universalLink"

const MenuItem = ({ menuItem, wordPressUrl }) => {
  return (
    <UniversalLink to={CreateLocalLink(menuItem, wordPressUrl)}>
      {menuItem.label}
    </UniversalLink>
  )
}

export default MenuItem