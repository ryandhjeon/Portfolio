/* eslint-disable */
/** @jsx jsx */
import React, { useState, useEffect }  from 'react';
import { jsx } from 'theme-ui';
import { BsChevronUp } from "react-icons/bs"

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
      <BsChevronUp
        onClick={handleClick}
        aria-label="to top"
        sx={{
          fill: "schoolBus",
          background: "rgba(255, 255, 255, 0.1)",
          position: "fixed",
          borderRadius: "50%",
          p: 4,
          bottom: 4,
          right: 4,
          cursor: "pointer",
          transition: "all 500ms",
          "&:hover": {
            opacity: 1,
            fill: "shark",
            bg: "schoolBus",
          },
        }}
      />
      }
    </>
  )
}