import {Link} from 'react-router-dom'
import './style.css'

const Home = () => (
  <div className="home-main-container">
    <h1>Games</h1>
    <ul>
      <Link className="link" to="/emoji-game-rules">
        <li>
          <img
            src="https://i.ibb.co/Gs8cY1p/Asset-1-4x-1.png"
            alt="Emoji Game"
          />
          <h3>Emoji Game</h3>
        </li>
      </Link>
      <Link className="link" to="/memory-game-rules">
        <li>
          <h3>Memory Matrix</h3>
          <img src="https://i.ibb.co/9VQX4sT/memory.png" alt="memory Matrix" />
        </li>
      </Link>
      <Link to="/rock-game-rules" className="link">
        <li>
          <h3>ROCK PAPER SCISSOR</h3>
          <img
            src="https://i.ibb.co/XCjqnjL/Group-7469.png"
            alt="rock paper scissor"
          />
        </li>
      </Link>
      <Link to="/card-flip-rules" className="link">
        <li>
          <img src="https://i.ibb.co/bLX2vbQ/animals.png" alt="animals" />
        </li>
      </Link>
    </ul>
  </div>
)

export default Home
