/* eslint-disable */
/** @jsx jsx */
import React, { useState, useEffect }  from 'react';
import { jsx } from 'theme-ui';
import { CgArrowUpR } from "react-icons/cg"

export const ScrollTop = ({ showBelow }) => {

  const [show, setShow] = useState(!showBelow)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <>
      {show &&
      <span
        onClick={handleClick}
        aria-label="to top"
        sx={{
          zIndex: 999,
          position: "fixed",
          fontSize: "0",
          bg: "lightGrey",
          borderRadius: "10em",
          p: 3,
          bottom: "4",
          right: "4",
          cursor: "pointer",
          opacity: "0.3",
          textTransform: "uppercase",
          "&:hover": {
            transition: "all 500ms",
            opacity: "1",
            bg: "schoolBus",
          },
        }}>top</span>
      }
    </>
  )
}