import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import Modal from 'react-modal'
import Navbar from '../Navbar'
import GameCard from '../GameCard'
import WinOrLooseCard from '../WinOrLooseCard'

import './style.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
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
    width: '350px',
  },
}

class EmojiGameTab extends Component {
  state = {
    clickedImages: [],
    currentScore: 0,
    gameProgress: false,
    modalOPen: false,
  }

  retry = () => {
    this.setState({
      clickedImages: [],
      currentScore: 0,
      gameProgress: false,
    })
  }

  emojibutton = id => {
    const {clickedImages} = this.state
    const isIncluded = clickedImages.includes(id)
    const scoreGained = clickedImages.length
    if (isIncluded) {
      this.finishTheGameAndSetTheTopScore(scoreGained)
    } else {
      if (clickedImages.length === emojisList.length - 1) {
        this.finishTheGameAndSetTheTopScore(scoreGained)
      }
      this.setState(prev => ({
        clickedImages: [...prev.clickedImages, id],
        currentScore: scoreGained + 1,
      }))
    }
  }

  finishTheGameAndSetTheTopScore = score => {
    if (score === emojisList.length) {
      this.setState({currentScore: score, gameProgress: true})
    } else {
      this.setState({currentScore: score, gameProgress: true})
    }
  }

  openModal = () => {
    this.setState({modalOPen: true})
  }

  closeModel = () => {
    this.setState({modalOPen: false})
  }

  renderGame = () => {
    const {modalOPen} = this.state
    const shuffledEmojis = this.shuffledEmojiList()
    return (
      <div>
        <div className="game-back-button-container">
          <Link to="/emoji-game-rules" className="link">
            <button type="button">
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
              <div>
                <h3 className="modal-rules-heading">Rules</h3>
                <ul>
                  <li>User should be able to see the list of Emojis</li>
                  <li>
                    When the user clicks any one of the Emoji for the first
                    time, then the count of the score should be incremented by 1
                    and the List of emoji cards should be shuffled.
                  </li>
                  <li>
                    This process should be repeated every time the user clicks
                    on an emoji card
                  </li>
                  <li>
                    When the user clicks on all Emoji cards without clicking any
                    of it twice, then the user will win the game
                  </li>
                  <li>
                    When the user clicks on the same Emoji for the second time,
                    then the user will lose the game.
                  </li>
                  <li>
                    Once the game is over, the user will be redirected to the
                    results page.
                  </li>
                </ul>
              </div>
            </div>
          </Modal>
        </div>
        <ul className="emoji-list">
          {shuffledEmojis.map(eachEmoji => (
            <GameCard
              key={eachEmoji.id}
              emojiDetails={eachEmoji}
              emojibutton={this.emojibutton}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderWinOrloose = () => {
    const {clickedImages, currentScore} = this.state
    const won = clickedImages.length === emojisList.length
    return (
      <>
        <WinOrLooseCard won={won} score={currentScore} retry={this.retry} />
      </>
    )
  }

  shuffledEmojiList = () => emojisList.sort(() => Math.random() - 0.5)

  render() {
    const {currentScore, gameProgress} = this.state

    return (
      <div className="game-main-container">
        <Navbar currentScore={currentScore} gameProgress={gameProgress} />
        <div className="game-icons-container">
          {gameProgress ? this.renderWinOrloose() : this.renderGame()}
        </div>
      </div>
    )
  }
}

export default EmojiGameTab
