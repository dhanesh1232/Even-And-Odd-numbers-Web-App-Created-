// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = async () => {
    const {count} = this.state
    if (count % 2 === 0) {
      this.setState(prevState => ({
        count: prevState.count + Math.ceil(Math.random() * 100),
      }))
    } else {
      this.setState(prevState => ({count: 0}))
    }
  }

  render() {
    const {count} = this.state
    const checkEvenOrOdd = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div>
          <h1>Count {count}</h1>
          <div>
            <p className="h2"> Count is {checkEvenOrOdd}</p>
            <button type="submit" className="btn" onClick={this.onIncrement}>
              Increment
            </button>
            <p>*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
