import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import './style.css'

const EmojiGameRules = () => (
  <div className="emoji-rules-main-container">
    <div className="back-button-container">
      <Link to="/" className="link">
        <button type="button">
          <BiArrowBack size={20} />
          Back
        </button>
      </Link>
    </div>
    <div className="rules-container">
      <div className="image-container">
        <img
          src="https://i.ibb.co/Gs8cY1p/Asset-1-4x-1.png"
          alt="emoji-game-icon "
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="rules">
        <h3>Rules</h3>
        <ul>
          <li>User should be able to see the list of Emojis</li>
          <li>
            When the user clicks any one of the Emoji for the first time, then
            the count of the score should be incremented by 1 and the List of
            emoji cards should be shuffled.
          </li>
          <li>
            This process should be repeated every time the user clicks on an
            emoji card
          </li>
          <li>
            When the user clicks on all Emoji cards without clicking any of it
            twice, then the user will win the game
          </li>
          <li>
            When the user clicks on the same Emoji for the second time, then the
            user will lose the game.
          </li>
          <li className="last-item">
            Once the game is over, the user will be redirected to the results
            page.
          </li>
        </ul>
        <Link className="link" to="/emoji-game">
          <button type="button">Start Playing</button>
        </Link>
      </div>
    </div>
  </div>
)

export default EmojiGameRules
