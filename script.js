

let player = function (symbol){
  return {symbol}
  }
  
  let firstPlayer = player('x')
  let secondPlayer = player('o')
  

const gameBoardContainer = document.querySelector('.gameboard-container')
const gameBoardDivList = document.querySelectorAll('#gameboard-div')

const GameBoard = (function (){
gameBoard = 
["", "", "",
"", "o", "",
"", "", "x"]
let render = function (){
  for(index in gameBoard){
    gameBoardDiv =  gameBoardDivList[index]
    gameBoardDiv.textContent = gameBoard[index]
    gameBoardDiv.classList.add(index)
  }
}

let playerClick = function(){
  let currentValue
  for(div of gameBoardDivList){
    div.addEventListener('click', function(){
      if(this.textContent){}
      else{
        if(!currentValue) {currentValue=firstPlayer.symbol}
        else if(currentValue===firstPlayer.symbol){currentValue=secondPlayer.symbol}
        else if (currentValue===secondPlayer.symbol){currentValue=firstPlayer.symbol}
    
      
        let classValue = this.classList.value
        gameBoard.splice(classValue, 1, currentValue)
        console.log(gameBoard)
      }      
      render()
    })
  }
}
playerClick()
render()
return{gameBoard}
})()



let ControlGameFlow = (function(){
  let callWinner 
  let checkWin = function(){
    console.log(this.classList.value)
    console.log(callWinner)
    if(callWinner){console.log('already won')}
    else{
      
        if(gameBoard[0]===gameBoard[1]&& gameBoard[1]===gameBoard[2]){
        callWinner='somebody win'
        console.log(callWinner)
        }
        if(gameBoard[0]===gameBoard[3]&&gameBoard[3]===gameBoard[6]){
        callWinner='somebody won'
        console.log(callWinner)
        }
      }
      
    }  
    for (div of gameBoardDivList){
    div.addEventListener('click', checkWin)
 }
})()