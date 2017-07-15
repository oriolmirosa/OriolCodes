import React from "react"
import Link from "gatsby-link"
import presets from "../utils/presets"

require(`prismjs/themes/prism-solarizedlight.css`)

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link
            to="/"
          >
            <h1>
              gatsby-example-using-remark
            </h1>
          </Link>
        </div>
        <div>
          {this.props.children()}
        </div>
      </div>
    )
  }
}

export default DefaultLayout
