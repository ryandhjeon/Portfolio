/** @jsx jsx */
import React from "react"
import { jsx } from 'theme-ui'
import { StaticQuery, graphql } from "gatsby"
import MenuItem from "./menuItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"


/**
 * Define MenuItem fragment and get all primary menu items.
 */
const MENU_QUERY = graphql`
    fragment MenuItem on WPGraphQL_MenuItem {
        id
        label
        url
        title
        target
    }

    query SocialQuery {
        wpgraphql {
            menuItems(where: {location: SOCIAL}) {
                nodes {
                    ...MenuItem
                }
            }
            generalSettings {
                url
            }
        }
    }
`

const SocialMenu = () => {
  return (
    <StaticQuery
      query={MENU_QUERY}
      render={(data) => {
        if (data.wpgraphql.menuItems) {
          const menuItems = data.wpgraphql.menuItems.nodes
          const wordPressUrl = data.wpgraphql.generalSettings.url

          return (
            <div
              sx={{
                fontSize: 1,
                justifySelf: 'right',
              }}
            >
              {
                menuItems &&
                menuItems.map((menuItem) => (
                  <MenuItem
                    key={menuItem.id}
                    menuItem={menuItem}
                    wordPressUrl={wordPressUrl}>

                  </MenuItem>
                ))
              }
            </div>
          )
        }
        return null
      }}
    />
  )
}

export default SocialMenu