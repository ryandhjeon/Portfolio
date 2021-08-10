/* eslint-disable */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import { copyToClipboard } from '../utils/copyToClipboard';

const Code = ({ codeString, language }) => {
  const [buttonText, setButtonText] = useState("Copy");
  const changeText = (text) => setButtonText(text);
  const handleClick = () => {
    copyToClipboard(codeString);
    changeText("Copied!")
  };

  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          sx={{
            position: 'relative',
            textAlign: 'left',
            m: '2em 0',
            p: '0.5em',
            overflowX: 'auto',
            borderRadius: '3px',
            fontFamily: 'SF Mono',
            fontSize: '14px',
            fontWeight: 100,
            bg: 'woodSmoke',
            transition: 'visibility 0s, opacity 0.5s linear',
            '&:hover': {
              '>button': {
                visibility: 'visible',
              }
            }
          }}
        >
          <button
            onClick={handleClick}
            sx={{
              position: 'absolute',
              right: '0.35rem',
              border: 0,
              borderRadius: '3px',
              margin: '0.25em',
              opacity: '0.2',
              cursor: 'pointer',
              fontFamily: 'SF Mono',
              fontSize: '12px',
              textTransform: 'uppercase',
              visibility: 'hidden',
              '&:hover': {
                opacity: 1,
                bg: 'schoolBus'
              },
            }}
          >
            {buttonText}
          </button>

          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <span
                sx={{
                  display: 'inlineBlock',
                  width: '2rem',
                  userSelect: 'none',
                  opacity: '0.2',
                  pr: 3,
                  lineHeight: '1.4rem',
                }}
              >
                {i + 1}
              </span>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
