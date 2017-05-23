import React from 'react'

export default class notFound extends React.Component {
  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          <h1>Sorry, the page you were trying to view does not exist.</h1>
        </div>
      </div>
    )
  }
}
