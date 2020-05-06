/** @jsx jsx */
import React from "react"
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import { blogURI } from "../../globals"

const Pagination = ({ pageNumber, hasNextPage }) => {

  if (pageNumber === 1 && !hasNextPage) return null

  return (
    <div sx={{ margin: "60px auto", textAlign: "center" }}>

      <div>
        {
          pageNumber > 1 && (
            <Link
              className="prev page-numbers"
              style={{
                padding: "4px 8px 5px 8px",
                backgroundColor: "rgba(0,0,0,.05)",
                borderRadius: "3px",
              }}
              to={pageNumber > 2 ? `${blogURI}/page/${pageNumber - 1}` : `${blogURI}/`}
            >
              <span>Previous page</span>
            </Link>
          )
        }
        <span aria-current="page" className="page-numbers current" style={{ padding: "5px 10px" }}>
          <span className="meta-nav screen-reader-text">Page </span>
          {pageNumber}
        </span>

        {
          hasNextPage && (
            <Link
              sx={{
                padding: "4px 8px 5px 8px",
                backgroundColor: "rgba(0,0,0,.05)",
                borderRadius: "3px",
              }}
              className="next page-numbers"
              to={`${blogURI}/page/${pageNumber + 1}`
              }
            >
              <span>Next page </span>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Pagination