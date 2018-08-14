import React from 'react'
import PropTypes from 'prop-types'
import favicon from '../src/static/img/favicon.png'

export default class HTML extends React.Component {
  render() {
    const {
      postBodyComponents,
      body,
      preBodyComponents,
      bodyAttributes,
      headComponents,
      htmlAttributes,
    } = this.props

    return (
      <html {...htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="shortcut icon" type="image/png" href={favicon} />
          {headComponents}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          {postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}