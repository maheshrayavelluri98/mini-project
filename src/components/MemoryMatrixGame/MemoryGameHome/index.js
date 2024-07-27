import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import Modal from 'react-modal'
import MatrixProgressCard from '../MatrixProgressCard'
import './style.css'

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

class MemoryGameHome extends Component {
  state = {
    boxArray: [],
    randomBox: [],
    contentShow: false,
    isShowGame: true,
    clickCount: 0,
    notMatrixId: false,
    level: 1,
    modalOPen: false,
  }

  componentDidMount() {
    this.getBoxes()
    this.getRandomBoxes()
    this.getTimeout()
  }

  restart = () => {
    this.setState(
      {
        contentShow: false,
        isShowGame: true,
        clickCount: 0,
        notMatrixId: false,
        level: 1,
      },
      () => {
        this.getBoxes()
        this.getRandomBoxes()
        this.getTimeout()
      },
    )
  }

  getTimeout = () => {
    setTimeout(() => {
      this.setState({contentShow: true})
    }, 1000)
  }

  getRandomBoxes = () => {
    const {level} = this.state
    const size = level + 2
    console.log(size)
    const totalSize = size * size
    const cells = []
    while (cells.length < size) {
      const randomId = Math.ceil(Math.random() * totalSize)
      if (!cells.includes(randomId) && randomId !== 0) {
        cells.push(randomId)
      }
    }
    this.setState({randomBox: cells})
  }

  getboxW = () => {
    const {level} = this.state
    const getWid = 100 / (level + 2)
    const len = `${getWid}%`
    return len
  }

  getBoxHeight = () => {
    const {level} = this.state
    switch (level) {
      case 1:
        return '80px'
      case 2:
        return '70px'
      case 3:
        return '40px'
      case 4:
        return '38px'
      case 5:
        return '35px'
      case 6:
        return '32px'
      case 7:
        return '29px'
      case 8:
        return '26px'
      case 9:
        return '23px'
      case 10:
        return '20px'
      case 11:
        return '17px'
      case 12:
        return '15px'
      case 13:
        return '12px'
      case 14:
        return '12px'
      default:
        return '12px'
    }
  }

  getBoxes = () => {
    const {level} = this.state
    const N = level + 2
    const n = N * N
    const boxesArr = []

    for (let i = 1; i <= n; i += 1) {
      boxesArr.push({id: i, isHighlighted: false})
    }
    this.setState({boxArray: boxesArr})
  }

  changeHighlight = id => {
    const {boxArray, randomBox, clickCount, level} = this.state
    const getBox = boxArray.find(each => each.id === id)
    const clicks = level + 2
    getBox.isHighlighted = true
    this.setState(prev => ({clickCount: prev.clickCount + 1, boxArray}))
    const ranBox = randomBox.some(each => each === id)
    if (ranBox === true && clickCount + 1 === clicks && level <= 15) {
      this.setState({contentShow: false, clickCount: 0})
      this.setState(
        prevState => ({level: prevState.level + 1}),
        () => {
          this.getRandomBoxes()
          this.getBoxes()
          this.getTimeout()
        },
      )
    } else if (ranBox === false) {
      this.setState({notMatrixId: true, isShowGame: false})
    }
  }

  renderNormalBoxes = () => {
    const {boxArray, notMatrixId} = this.state
    console.log(notMatrixId)
    return boxArray.map(box => (
      <li
        key={box.id}
        onClick={() => this.changeHighlight(box.id)}
        className={box.isHighlighted === true ? 'high-box' : 'box'}
        style={{width: this.getBoxHeight(), height: this.getBoxHeight()}}
      />
    ))
  }

  renderHighlightedBoxes = () => {
    const {boxArray, randomBox} = this.state
    return boxArray.map(box => {
      if (randomBox.includes(box.id)) {
        return (
          <li
            key={box.id}
            className="box high-box"
            style={{width: this.getBoxHeight(), height: this.getBoxHeight()}}
          />
        )
      }
      return (
        <li
          key={box.id}
          className="box"
          style={{width: this.getBoxHeight(), height: this.getBoxHeight()}}
        />
      )
    })
  }

  openModal = () => {
    this.setState({modalOPen: true})
  }

  closeModel = () => {
    this.setState({modalOPen: false})
  }

  render() {
    const {contentShow, level, isShowGame, modalOPen} = this.state
    const sytld = {
      margin: '0',
      padding: '0',
      display: 'grid',
      'list-style': 'none',
      gap: '10px',
      'grid-template-columns': `repeat(${level + 2}, auto)`,
    }

    return (
      <>
        {isShowGame ? (
          <div className="memory-game-home-main-container">
            <div className="memory-game-button-container">
              <Link to="/memory-game-rules" className="link">
                <button className="memory-back-button" type="button">
                  <BiArrowBack size={20} />
                  Back
                </button>
              </Link>
              <button className="memory-rules-button" type="button">
                Rules
              </button>
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
                        In each level of the Game, Users should be able to see
                        the Grid with (N X N) size starting from 3 and the grid
                        will highlight N cells in Blue, the N highlighted cells
                        will be picked randomly.
                      </li>
                      <li>
                        The highlighted cells will remain N seconds for the user
                        to memorize the cells. At this point, the user should
                        not be able to perform any action.
                      </li>
                      <li>
                        After N seconds, the grid will clear the N highlighted
                        cells.
                      </li>
                      <li>
                        At N seconds, the user can click on any cell. Clicking
                        on a cell that was highlighted before it will turn blue.
                        Clicking on the other cells that were not highlighted
                        before then will turn to red.
                      </li>
                      <li>
                        The user should be promoted to the next level if they
                        guess all N cells correctly in one attempt.
                      </li>
                      <li>
                        The user should be taken to the results page if the user
                        clicks on the wrong cell.The user should be taken to the
                        results page if the user clicks on the wrong cell.
                      </li>
                      <li>
                        If the user completed all the levels, then the user
                        should be taken to the results page.
                      </li>
                    </ul>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="matrix-game-container">
              <h1>Memory Matrix</h1>
              <h3>Level - {level}</h3>
              <ul style={sytld}>
                {contentShow
                  ? this.renderNormalBoxes()
                  : this.renderHighlightedBoxes()}
              </ul>
            </div>
          </div>
        ) : (
          <MatrixProgressCard levelDet={level} restart={this.restart} />
        )}
      </>
    )
  }
}

export default MemoryGameHome
