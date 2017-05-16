import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      error: true
    };

    this.poemHandler = this.poemHandler.bind(this)
  }

  poemHandler(event) {
    const poem = event.target.value
    this.setState({
      poem: poem
    })
    const poemArray = poem.split(/\r\n|\r|\n/)

    this.setState({
      error: true
    })
    if( poemArray.length == 3 ) {
      if ( poemArray[0].split(' ').filter( a => a ).length == 5) {
        if ( poemArray[1].split(' ').filter( a => a ).length == 3) {
          if ( poemArray[2].split(' ').filter( a => a ).length == 5) {
            this.setState({
              error: false
            })
          }
        }
      }
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.poemHandler} />
        {this.state.error ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : '' }
      </div>
    )
  }
}
