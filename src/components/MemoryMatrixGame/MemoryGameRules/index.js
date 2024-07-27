import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css'

const MemoryGameRules = props => {
  const backButton = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="memory-game-main-container">
      <div className="memory-game-back-button">
        <button type="button" onClick={backButton}>
          <FiArrowLeft size={20} />
          Back
        </button>
      </div>
      <div className="memory-game-image-container">
        <h1>Memory Matrix</h1>
        <img
          className="memory-game-image"
          src="https://i.ibb.co/BPdvL3Q/memory-1.png"
          alt="memory-logo"
        />
      </div>
      <div className="memory-rules-container">
        <h3>Rules</h3>
        <ul>
          <li>
            In each level of the Game, Users should be able to see the Grid with
            (N X N) size starting from 3 and the grid will highlight N cells in
            Blue, the N highlighted cells will be picked randomly.
          </li>
          <li>
            The highlighted cells will remain N seconds for the user to memorize
            the cells. At this point, the user should not be able to perform any
            action.
          </li>
          <li>After N seconds, the grid will clear the N highlighted cells.</li>
          <li>
            At N seconds, the user can click on any cell. Clicking on a cell
            that was highlighted before it will turn blue. Clicking on the other
            cells that were not highlighted before then will turn to red.
          </li>
          <li>
            The user should be promoted to the next level if they guess all N
            cells correctly in one attempt.
          </li>
          <li>
            The user should be taken to the results page if the user clicks on
            the wrong cell.The user should be taken to the results page if the
            user clicks on the wrong cell.
          </li>
          <li>
            If the user completed all the levels, then the user should be taken
            to the results page.
          </li>
        </ul>
        <Link className="link" to="/memory-game">
          <button className="memory-game-start-button" type="button">
            Start Playing
          </button>
        </Link>
      </div>
    </div>
  )
}
export default MemoryGameRules
