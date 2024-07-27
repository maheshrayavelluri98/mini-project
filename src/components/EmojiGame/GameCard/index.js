import './style.css'

const GameCard = props => {
  const {emojiDetails, emojibutton} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const getId = () => {
    emojibutton(id)
  }
  return (
    <li className="emoji-list-item">
      <button className="emoji-btn" type="button" onClick={getId}>
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default GameCard
