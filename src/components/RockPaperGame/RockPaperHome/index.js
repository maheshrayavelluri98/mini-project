import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import Modal from 'react-modal'
import './style.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
  },
}

class RockPaperHome extends Component {
  state = {
    choises: [],
    score: 0,
    emoji: '',
    text: '',
    resultImage: '',
    modalOPen: false,
  }

  restart = () => {
    this.setState({
      emoji: '',
      choises: [],
      text: '',
      resultImage: '',
      score: 0,
    })
  }

  getResult = (op1, op2) => {
    if (op1 === 'ROCK') {
      switch (op2) {
        case 'SCISSORS':
          return 'YOU WON'
        case 'PAPER':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else if (op1 === 'PAPER') {
      switch (op2) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (op2) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  getUserChoise = name => {
    const {score} = this.state
    const oponentChoise =
      choicesList[Math.ceil(Math.random() * choicesList.length) - 1].id
    const result = this.getResult(name, oponentChoise)
    if (result === 'YOU WON') {
      this.setState({
        score: score + 1,
        emoji: 'https://i.ibb.co/vmG1mNV/Emoji.png',
        text: result,
        resultImage: 'https://i.ibb.co/KxNFmMj/Group-7618.png',
      })
    } else if (result === 'YOU LOSE') {
      this.setState({
        score: score - 1,
        emoji: 'https://i.ibb.co/86VXKgk/Emoji-1.png',
        text: result,
        resultImage: 'https://i.ibb.co/JjH24dn/Group-7618-1.png',
      })
    } else {
      this.setState({
        score,
        emoji: 'https://i.ibb.co/B3bCw57/Emoji-2.png',
        text: result,
        resultImage: 'https://i.ibb.co/5GdTnb3/Group-7618-2.png',
      })
    }
    this.setState(prev => ({choises: [...prev.choises, name, oponentChoise]}))
  }

  renderWinOrLooseCard = () => {
    const {score, choises, text, emoji, resultImage} = this.state
    const yourChoise = choises[0]
    console.log(yourChoise)
    const opponentChoise = choises[1]
    const yourChoiseImage = choicesList.find(each => each.id === yourChoise)
    const opponentChoiseImage = choicesList.find(
      each => each.id === opponentChoise,
    )
    return (
      <div className="game-result-container">
        <h1 className="game-title">ROCK PAPER SCISSORS</h1>
        <div className="result-main-container">
          <ul className="game-choises-list">
            <li>Rock</li>
            <li>Paper</li>
            <li>Scissor</li>
          </ul>
          <div className="result-score-container">
            <img src={resultImage} alt={text} />
            <div className="result-score">
              <h1>{score}</h1>
            </div>
          </div>
        </div>
        <div className="choises__container">
          <div>
            <h3>You</h3>
            <div className={text === 'YOU WON' ? 'circle pulse' : ''}>
              <img
                className="choise-image"
                src={yourChoiseImage.imageUrl}
                alt={yourChoiseImage.id}
              />
            </div>
          </div>
          <div className="emoji-container">
            <img src={emoji} alt={yourChoise} />
            <h2>{text}</h2>
          </div>
          <div>
            <h3>Opponent</h3>
            <div className={text === 'YOU LOSE' ? 'circle pulse' : ''}>
              <img
                className="choise-image"
                src={opponentChoiseImage.imageUrl}
                alt={opponentChoiseImage.id}
              />
            </div>
          </div>
        </div>
        <button onClick={this.restart} type="button" className="play-again-btn">
          Play Again
        </button>
      </div>
    )
  }

  openModal = () => {
    this.setState({modalOPen: true})
  }

  closeModel = () => {
    this.setState({modalOPen: false})
  }

  rendergame = () => {
    const {modalOPen} = this.state
    return (
      <>
        <div className="rock-rules-back-button-container">
          <Link to="/rock-game-rules" className="link">
            <button className="rock-back-button" type="button">
              <BiArrowBack size={20} />
              Back
            </button>
          </Link>
          <button id="popup-btn" type="button" onClick={this.openModal}>
            Rules
          </button>
          <Modal isOpen={modalOPen} style={customStyles}>
            <div>
              <div className="modal-rules-close-button-container">
                <button
                  className="modal-rules-close-button"
                  onClick={this.closeModel}
                  type="button"
                >
                  <IoMdClose size={20} />
                </button>
              </div>
              <div className="rules-main-ingame__container">
                <h3>Rules</h3>
                <ul className="rock-rules-list">
                  <li>
                    The game result should be based on user and user opponent
                    choices
                  </li>
                  <li>
                    When the user choice is rock and his opponent choice is rock
                    then the result will be <b>IT IS DRAW</b>
                  </li>
                  <li>
                    When the user choice is paper and his opponent choice is
                    rock then the result will be <b>YOU WON</b>
                  </li>
                  <li>
                    When the user choice is a scissor and his opponent choice is
                    rock then the result will be <b>YOU LOSE</b>
                  </li>
                  <li>
                    When the user choice is paper and his opponent choice is
                    paper then the result will be <b>IT IS DRAW</b>
                  </li>
                  <li>
                    When the user choice is scissors and his opponent choice is
                    paper then the result will be <b>YOU WON</b>
                  </li>
                  <li>
                    When the user choice is rock and his opponent choice is
                    scissors then the result will be <b>YOU WON</b>
                  </li>
                  <li>
                    When the user choice is paper and his opponent choice is
                    scissors then the result will be <b>YOU LOSE</b>
                  </li>
                  <li>
                    When the user choice is scissors and his opponent choice is
                    scissors then the result will be <b>IT IS DRAW</b>
                  </li>
                  <li>
                    When the result is <b>YOU WON</b>, then the count of the
                    score should be incremented by 1
                  </li>
                  <li>
                    When the result is <b>IT IS DRAW</b>, then the count of the
                    score should be the same
                  </li>
                  <li>
                    When the result is <b>YOU LOSE</b>, then the count of the
                    score should be decremented by 1.
                  </li>
                </ul>
              </div>
            </div>
          </Modal>
        </div>
        <div className="rock-paper-scissor-main-container">
          <h1 className="rock-game-heading">ROCK PAPER SCISSOR</h1>
          <div>
            <h2>Let’s pick</h2>

            <div className="rock-images-container">
              <div className="rock-scissor-image-container">
                <button
                  type="button"
                  onClick={() => this.getUserChoise('ROCK')}
                >
                  <img
                    src="https://i.ibb.co/9VXcKXx/Group-6941.png"
                    alt="ROCK"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => this.getUserChoise('SCISSORS')}
                >
                  <img
                    src="https://i.ibb.co/1nYJQPm/Group-6940.png"
                    alt="scissor"
                  />
                </button>
              </div>
              <button type="button" onClick={() => this.getUserChoise('PAPER')}>
                <img src="https://i.ibb.co/R3LnjBZ/Paper.png" alt="PAPER" />
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  render() {
    const {text} = this.state
    return (
      <div className="rock-game-home-container">
        {text === '' ? this.rendergame() : this.renderWinOrLooseCard()}
      </div>
    )
  }
}

export default RockPaperHome
