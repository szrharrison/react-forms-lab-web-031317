import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageVal: ''
    };

    this.handleMessage = this.handleMessage.bind(this)
  }

  handleMessage(event) {
    this.setState({
      messageVal: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message: <em>{this.props.maxChars - this.state.messageVal.length} characters remaining</em></strong>
        <input type="text" value={this.state.messageVal} onChange={this.handleMessage} />
      </div>
    );
  }
}
