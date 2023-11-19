import { useState } from "react";

function Board () {
  const [currentPlayer, setCurrentPlayer] = useState('player1')
  const [currentPlayerMark, setCurrentPlayerMark] = useState('X')

  //board square types
  type BoardElementsTypes = {
    id: number
    isHeld: boolean
    heldBy: string
    playerMark: string
  }[]
  
  //creating the objects that will be sent to the board
  const createBoardElements = () => {
    const boardElementsArray:BoardElementsTypes = []
    for (let i = 0; i < 9; i++) {
      boardElementsArray.push({
        id: i,
        isHeld: false,
        heldBy:'', 
        playerMark: '',
      })
    }
    return boardElementsArray
  }

  //array of objects containing the squares info
  const [boardElements, setBoardElements] = useState(createBoardElements())

  //changes current playermark and name
  const changePlayerTurn = () => {
    setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1')
    setCurrentPlayerMark(currentPlayer === 'player1' ? 'O' : 'X')
  }

  const handleBoardSquareClick = (id: number) => {
    const clickedEl = boardElements.filter(element => element.id === id)[0]

    //checks if the clicked square is currently being held
    if (!clickedEl.isHeld) {
      setBoardElements(prevState => prevState.map(element => {
        return element.id === id ? {...element, isHeld: true,playerMark: currentPlayerMark, heldBy: currentPlayer} :
        element
      }))
      changePlayerTurn()
    }
  }

  //function to render the board squares to the screen
  const renderBoardElements = () => {
    return boardElements.map(element => {
      return (
        <div className="board-square" onClick={() => handleBoardSquareClick(element.id)} >
          <div className="board-square-content">
            {element.playerMark}
          </div>
        </div>
      )
    })
  }

  return (
  <>
    <div className="board-flex">
      {renderBoardElements()}
    </div>
  </> 
  );
}
 
export default Board;