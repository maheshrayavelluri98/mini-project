import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import EmojiGameRules from './components/EmojiGame/EmojiGameRules'
import EmojiGameTab from './components/EmojiGame/EmojiGameTab'
import RockPaperRules from './components/RockPaperGame/RockPaperRules'
import RockPaperHome from './components/RockPaperGame/RockPaperHome'
import MemoryGameRules from './components/MemoryMatrixGame/MemoryGameRules'
import MemoryGameHome from './components/MemoryMatrixGame/MemoryGameHome'
import CardFlipRules from './components/CardFlipGame/CardFlipRules'
import CardFlipGame from './components/CardFlipGame/CardFlipGame'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/emoji-game-rules" component={EmojiGameRules} />
    <Route exact path="/emoji-game" component={EmojiGameTab} />
    <Route exact path="/rock-game-rules" component={RockPaperRules} />
    <Route exact path="/rock-game" component={RockPaperHome} />
    <Route exact path="/memory-game-rules" component={MemoryGameRules} />
    <Route exact path="/memory-game" component={MemoryGameHome} />
    <Route exact path="/card-flip-rules" component={CardFlipRules} />
    <Route exact path="/card-flip-game" component={CardFlipGame} />
  </Switch>
)

export default App
