import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import './style.css'

const RockPaperRules = () => (
  <div className="rock-game-rules-main-container">
    <Link className="link" to="/">
      <button className="rock-back-button" type="button">
        <BiArrowBack size={25} /> Back
      </button>
    </Link>
    <div className="rock-rules-main-container">
      <div className="rock-rules-container">
        <h1 className="rock-rules-heading">ROCK PAPER SCISSOR</h1>
        <img
          src="https://i.ibb.co/31wPcLV/Group-7469-1.png"
          alt="rock-paper-scissor"
        />
      </div>
      <h3>Rules</h3>
      <ul className="rock-rules-list">
        <li>
          The game result should be based on user and user opponent choices
        </li>
        <li>
          When the user choice is rock and his opponent choice is rock then the
          result will be <b>IT IS DRAW</b>
        </li>
        <li>
          When the user choice is paper and his opponent choice is rock then the
          result will be <b>YOU WON</b>
        </li>
        <li>
          When the user choice is a scissor and his opponent choice is rock then
          the result will be <b>YOU LOSE</b>
        </li>
        <li>
          When the user choice is paper and his opponent choice is paper then
          the result will be <b>IT IS DRAW</b>
        </li>
        <li>
          When the user choice is scissors and his opponent choice is paper then
          the result will be <b>YOU WON</b>
        </li>
        <li>
          When the user choice is rock and his opponent choice is scissors then
          the result will be <b>YOU WON</b>
        </li>
        <li>
          When the user choice is paper and his opponent choice is scissors then
          the result will be <b>YOU LOSE</b>
        </li>
        <li>
          When the user choice is scissors and his opponent choice is scissors
          then the result will be <b>IT IS DRAW</b>
        </li>
        <li>
          When the result is <b>YOU WON</b>, then the count of the score should
          be incremented by 1
        </li>
        <li>
          When the result is <b>IT IS DRAW</b>, then the count of the score
          should be the same
        </li>
        <li>
          When the result is <b>YOU LOSE</b>, then the count of the score should
          be decremented by 1.
        </li>
      </ul>
      <Link className="link" to="/rock-game">
        <button className="rock-start-play-button" type="button">
          Start Playing
        </button>
      </Link>
    </div>
  </div>
)

export default RockPaperRules
