import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css'

const CardFlipRules = () => (
  <div className="card-flip-rules-main-container">
    <div>
      <Link to="/" className="link">
        <button className="back-button" type="button">
          <FiArrowLeft size={20} />
          Back
        </button>
      </Link>
      <div className="flip-rules-image-container">
        <img
          className="card-flip-image"
          src="https://i.ibb.co/V2zkdDm/animals-1.png"
          alt="hero"
        />
      </div>
    </div>
    <div className="card-flip-rules-container">
      <h3>Rules</h3>
      <ul className="card-flip-rules-list">
        <li>
          When the game is started, the users should be able to see the list of
          Cards that are shuffled and turned face down.
        </li>
        <li>
          When a user starts the game, the user should be able to see the Timer
          running.
        </li>
        <li>The Timer starts from 2 Minutes.</li>
        <li>
          If the two cards have the same image, they remain face up. If not,
          they should be flipped face down again after a short 2 seconds.
        </li>
        <li>Users should be able to compare only two cards at a time.</li>
        <li>
          When the user is not able to find all the cards before the timer ends
          then the game should end and redirect to the Time Up Page.
        </li>
        <li>
          If the user finds all the matching cards before the timer ends, then
          the user should be redirected to the results page.
        </li>
      </ul>
      <Link to="/card-flip-game" className="link">
        <button className="flip-start-play-btn" type="button">
          Start Playing
        </button>
      </Link>
    </div>
  </div>
)

export default CardFlipRules
