import './style.css'

const Navbar = props => {
  const {currentScore, gameProgress} = props
  const scoreClass = gameProgress ? 'score-none' : 'score-container'
  const highScore = () => {
    const score = localStorage.getItem('topScore') || 0
    if (currentScore > score) {
      localStorage.setItem('topScore', currentScore)
    }
    return score
  }
  const newTopScore = highScore()
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="https://i.ibb.co/frGhs02/wink-1.png" alt="website-logo" />
        <h2>Emoji Game</h2>
      </div>
      <div className={`${scoreClass}`}>
        <p>Top Score: {newTopScore}</p>
        <p className="score-para">Score:{currentScore}</p>
      </div>
    </div>
  )
}

export default Navbar
