// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {suggestionProp, onTodo} = this.props
    const {suggestion} = suggestionProp

    const onUpdate = () => {
      onTodo(suggestion)
    }

    return (
      <li className="list-container">
        <p>{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
          onClick={onUpdate}
        />
      </li>
    )
  }
}
export default SuggestionItem
