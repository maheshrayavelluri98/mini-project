import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css'

const car = [
  {
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

const shuffledCards = [...car, ...car].sort(() => Math.random() - 0.5)

class CardFlipGame extends Component {
  state = {
    count: 120,
    cardsList: shuffledCards.map((c, id) => ({
      id,
      name: c.name,
      image: c.image,
      flipped: false,
      matched: false,
    })),
    matchedCount: 0,
    flippedCount: 0,
    firstCard: null,
    secondCard: null,
    intervalId: null,
    loseCard: false,
    won: false,
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.count > 0) {
          return {count: prevState.count - 1}
        }
        clearInterval(intervalId)
        this.setState({loseCard: true, won: false})
        return null
      })
    }, 1000)
    this.setState({intervalId})
  }

  playAgain = () => {
    this.setState({
      loseCard: false,
      count: 3,
    })
  }

  resetSelections = () => {
    this.setState({firstCard: null, secondCard: null})
  }

  endgame = won => {
    if (won) {
      this.setState({loseCard: true, won: true})
    }
  }

  allMatched = () => {
    const {cardsList, intervalId} = this.state
    const win = cardsList.every(each => each.matched)

    if (win) {
      clearInterval(intervalId)
      this.endgame(win)
    }
  }

  checkMatching = () => {
    const {firstCard, secondCard} = this.state

    if (firstCard && secondCard) {
      if (firstCard.name === secondCard.name) {
        this.setState(
          prevState => ({
            cardsList: prevState.cardsList.map(card =>
              card.id === firstCard.id || card.id === secondCard.id
                ? {...card, matched: true}
                : card,
            ),
            matchedCount: prevState.matchedCount + 1,
          }),
          () => {
            this.resetSelections()
            this.allMatched()
          },
        )
      } else {
        setTimeout(() => {
          this.setState(prevState => ({
            cardsList: prevState.cardsList.map(card =>
              card.id === firstCard.id || card.id === secondCard.id
                ? {...card, flipped: false}
                : card,
            ),
            firstCard: null,
            secondCard: null,
          }))
        }, 200)
      }
    }
  }

  flipCard = card => {
    const {firstCard, secondCard} = this.state

    if (secondCard || card.flipped || card.matched) return

    this.setState(
      prevState => ({
        cardsList: prevState.cardsList.map(c =>
          c.id === card.id ? {...c, flipped: true} : c,
        ),
        flippedCount: prevState.flippedCount + 1,
        firstCard: firstCard !== null ? firstCard : card,
        secondCard: firstCard ? card : null,
      }),
      this.checkMatching,
    )
  }

  render() {
    const {cardsList, count, flippedCount, matchedCount, loseCard} = this.state
    const {won} = this.state
    const minutes = Math.floor(count / 60)
    const seconds = count % 60
    const winnnerText = won ? 'Congratulations!' : 'Better luck next time!'
    const winnnerPara = won
      ? 'You matched all of the cards in record time'
      : 'You did not match all of the cards in record time'
    const winnerImg = won
      ? 'https://i.ibb.co/94VGH1F/03-Optimistic.png'
      : 'https://i.ibb.co/4SfKpKW/05-Pokerface.png'
    return (
      <div className="card-flip-game-main-container">
        {loseCard ? (
          <div className="card-win-or-loose">
            <img src={winnerImg} alt="" />
            <h1>{winnnerText}</h1>
            <p>No.of Flips - {flippedCount}</p>
            <p>{winnnerPara}</p>
            <button
              onClick={this.playAgain}
              className="card-flip-play-btn"
              type="button"
            >
              Play Again
            </button>
          </div>
        ) : (
          <>
            <div className="flip-rules-back-button-container">
              <Link to="/card-flip-rules" className="link">
                <button className="back-button" type="button">
                  <FiArrowLeft size={20} />
                  Back
                </button>
              </Link>
              <button type="button">Rules</button>
            </div>
            <div className="flip-game-container">
              <h3>Card-Flip Memory Game</h3>
              <h2>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</h2>
              <div className="count-container">
                <p>Card flip count - {flippedCount}</p>
                <p>Score - {matchedCount}</p>
              </div>
              <ul className="cards-game-list">
                {cardsList.map(each => (
                  <li
                    onClick={() => this.flipCard(each)}
                    className={`flip-card ${each.flipped ? 'flipped' : ''}`}
                    key={each.id}
                  >
                    {each.flipped || each.matched ? (
                      <img
                        className="card-image"
                        src={each.image}
                        alt={each.name}
                      />
                    ) : (
                      <img
                        src="https://i.ibb.co/52YP5pk/Group-7534.png"
                        alt="flip"
                        className="card-back-image"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CardFlipGame
