import { useState } from "react";

function Board () {
  const [currentPlayer, setCurrentPlayer] = useState('player1')
  const [currentPlayerMark, setCurrentPlayerMark] = useState('X')
  const [winnerPlayer, setWinnerPlayer] = useState('')
  const [player1Squares, setPlayer1Squares] = useState<number[]>([])
  const [player2Squares, setPlayer2Squares] = useState<number[]>([])

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

  const checkWinner =  () => {
    const currentPlayerSquares = currentPlayer === 'player1' ? player1Squares : player2Squares 

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    console.log(boardElements)
    boardElements.map(element => {
      if(element.heldBy === 'player1') {
        setPlayer1Squares(prevState => [...prevState, element.id])
      } else if(element.heldBy === 'player2') {
        setPlayer2Squares(prevState => [...prevState, element.id])
      }
    })

    console.log(player1Squares)
    console.log(player2Squares)

    lines.map(line => {
      const isEqual = JSON.stringify(line.slice().sort()) === JSON.stringify(currentPlayerSquares.slice().sort());
      if (isEqual) {
        setWinnerPlayer(currentPlayer)
        console.log('ganhou')
      }
    })
    changePlayerTurn()
  }

  const handleBoardSquareClick = (id: number) => {
    const clickedEl = boardElements.filter(element => element.id === id)[0]

    //checks if the clicked square is currently being held
    if (!clickedEl.isHeld) {
      setBoardElements(prevState => prevState.map(element => {
        if (element.id === id) {
          return {
            ...element,
            isHeld: true,
            playerMark: currentPlayerMark,
            heldBy: currentPlayer
          };
        } else {
          return element;
        }
      }));
      console.log(boardElements, 'salve')
      checkWinner()
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
    <h1>{winnerPlayer && winnerPlayer}</h1>
  </> 
  );
}
 
export default Board;