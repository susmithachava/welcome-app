// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onClickSubscribeButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="background">
        <h1 className="heading">Welcome</h1>
        <p className="caption">Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscribe-toggle-btn"
          onClick={this.onClickSubscribeButton}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
