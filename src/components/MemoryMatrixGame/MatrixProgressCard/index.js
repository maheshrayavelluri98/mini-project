// src/components/MatrixProgressCard.js

import './style.css'

const MatrixProgressCard = ({levelDet, restart}) => {
  const progress = levelDet * 6.66

  const playAgain = () => {
    restart()
  }

  return (
    <div className="matrix-progress-main-container">
      <div className="emoji-progress-level-container">
        <div className="matrix-emoji-container">
          <img
            src="https://i.ibb.co/Q81fXBV/05-Pokerface.png"
            alt="pokerface"
          />
          <img src="https://i.ibb.co/yYKHrhS/07-Grimmace.png" alt="grimmace" />
          <img src="https://i.ibb.co/hgMFHvL/01-Smile.png" alt="smile" />
          <img
            src="https://i.ibb.co/4Y0mgMT/03-Optimistic.png"
            alt="optimistic"
          />
          <img src="https://i.ibb.co/ySzms1X/04-Grin.png" alt="grin" />
          <img src="https://i.ibb.co/6yvc9P3/05-Laugh.png" alt="laugh" />
          <img src="https://i.ibb.co/ggzkF6h/02-Happy.png" alt="happy" />
          <img src="https://i.ibb.co/9vFFG6f/image.png" alt="satisfaction" />
        </div>

        {/* Custom Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{width: `${progress}%`}} />
        </div>

        <div className="level-container">
          <p>level 1</p>
          <p>level 5</p>
          <p>level 10</p>
          <p>level 15</p>
        </div>
      </div>
      <div>
        <h1 className="matrix-Congratulations-heading">Congratulations!</h1>
        <p>You have reached level {levelDet}</p>
        <button
          className="matrix-play-agian-button"
          type="button"
          onClick={playAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default MatrixProgressCard
