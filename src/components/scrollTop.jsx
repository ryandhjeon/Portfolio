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
          position: "fixed",
          border: "5px solid schoolBus",
          borderRadius: "5em",
          p: 4,
          bottom: 3,
          right: 3,
          cursor: "pointer",
          transition: "all 500ms",
          zIndex: 999,
          "&:hover": {
            opacity: "1",
            fill: "shark",
            bg: "schoolBus",
          },
        }}
      />
      }
    </>
  )
}