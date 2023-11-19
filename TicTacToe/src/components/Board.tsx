import { useState } from "react";

function Board () {
  
  type BoardElementsTypes = {
    id: number
    heldBy: string
    playerMark: string
  }[]
  
  const createBoardElements = () => {
    const boardElementsArray:BoardElementsTypes = []
    for (let i = 0; i < 9; i++) {
      boardElementsArray.push({
        id: i,
        heldBy:'', 
        playerMark: '',
      })
    }
    return boardElementsArray
  }

  const [boardElements, setBoardElements] = useState(createBoardElements())

  const renderBoardElements = () => {
    return boardElements.map(element => {
      return (
        <div className="board-square">
          
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