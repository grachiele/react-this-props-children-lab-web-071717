// Code ThemedDecoration Component Here
// In the components/ThemedDecorations.js file,
// create a ThemedDecorations React component.
// This component renders out all of its children,
// while adding a className prop to every child.

import React from 'react'

class ThemedDecorations extends React.Component {

  render() {
    const children = React.Children.map(this.props.children, child => {
      return(
        <div className={this.props.theme}>{child}</div>
      )
    })
    return(
      <div>
        {children}
      </div>
    )
  }
}

export default ThemedDecorations
