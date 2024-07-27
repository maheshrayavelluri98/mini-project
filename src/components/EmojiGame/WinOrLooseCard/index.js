import './style.css'

const WinOrLooseCard = props => {
  const {won, score, retry} = props
  const image = won
    ? 'https://i.ibb.co/w0ZymRQ/Image.png'
    : 'https://i.ibb.co/2cSmzmg/Image-1.png'
  const altTag = won ? 'Win Image' : 'Loss Image'
  const titleTag = won ? 'Won' : 'Loss'
  const playAgain = () => {
    retry()
  }

  return (
    <div className="win-loose-container">
      <div className="win-loose-card">
        <h1 className="result-title">You {titleTag}</h1>
        <div>
          <p className="best-score-para">Best Score</p>
          <h1 className="score-card">{score}/12</h1>
        </div>
        <button onClick={playAgain} className="play-agian-button" type="button">
          Play Again
        </button>
      </div>
      <img className="result__image" src={image} alt={altTag} />
    </div>
  )
}

export default WinOrLooseCard
