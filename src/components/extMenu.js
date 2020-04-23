/** @jsx jsx */
import React from "react"
import { jsx } from 'theme-ui'
import { StaticQuery, graphql } from "gatsby"
import MenuItem from "./menuItem"

const ExpandedMenu = () => {
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
                justifySelf: 'end',
                alignSelf: 'center',
              }}
            >
              {
                menuItems &&
                menuItems.map((menuItem) => (
                  <MenuItem key={menuItem.id} menuItem={menuItem} wordPressUrl={wordPressUrl}/>
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

export default ExpandedMenu

const MENU_QUERY = graphql`
    fragment MenuItem on WPGraphQL_MenuItem {
        id
        label
        url
        title
        target
    }

    query GETEXPMENU {
        wpgraphql {
            menuItems(where: {location: EXPANDED}) {
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