

let player = function (symbol, name){
  return {symbol, name}
  }
  
  let firstPlayer = player('x','hans')
  let secondPlayer = player('o','peter')
  

const gameBoardContainer = document.querySelector('.gameboard-container')
const gameBoardDivList = document.querySelectorAll('#gameboard-div')

const GameBoard = (function (){
  gameBoard = 
    ["", "", "",
    "", "", "",
    "", "", ""]
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
        
        
          let gameBoardDivClass = this.classList.value
          gameBoard.splice(gameBoardDivClass, 1, currentValue)
          console.log(gameBoard)
          console.log(gameBoardDivClass)
          render()
          console.log(this.textContent)
        }      

      })
    }
  }
  playerClick()
  render()
  return{gameBoard}
})()



let ControlGameFlow = (function(){
  let callResult
  let checkWin = function(){
   // if(callWinner){console.log(callWinner)}
   // else if (gameBoard[0]){console.log(gameBoard[0])}    
    checkWinner(firstPlayer.name, firstPlayer.symbol, 0,1,2)
    checkWinner(firstPlayer.name, firstPlayer.symbol, 3,4,5)
    checkWinner(firstPlayer.name, firstPlayer.symbol, 6,7,8)  
    checkWinner(firstPlayer.name, firstPlayer.symbol, 0,3,6)
    checkWinner(firstPlayer.name, firstPlayer.symbol, 1,4,7)
    checkWinner(firstPlayer.name, firstPlayer.symbol, 2,5,8)  
    checkWinner(firstPlayer.name, firstPlayer.symbol, 0,4,8)
    checkWinner(firstPlayer.name, firstPlayer.symbol, 2,4,6)    
    checkWinner(secondPlayer.name, secondPlayer.symbol, 0,1,2)
    checkWinner(secondPlayer.name, secondPlayer.symbol, 3,4,5)
    checkWinner(secondPlayer.name, secondPlayer.symbol, 6,7,8)  
    checkWinner(secondPlayer.name, secondPlayer.symbol, 0,3,6)
    checkWinner(secondPlayer.name, secondPlayer.symbol, 1,4,7)
    checkWinner(secondPlayer.name, secondPlayer.symbol, 2,5,8)  
    checkWinner(secondPlayer.name, secondPlayer.symbol, 0,4,8)
    checkWinner(secondPlayer.name, secondPlayer.symbol, 2,4,6)    
    
  
    

    if(callResult===undefined&&
      gameBoard[0]!=''&&gameBoard[1]!=''&&gameBoard[2]!=''&&
      gameBoard[3]!=''&&gameBoard[4]!=''&&gameBoard[5]!=''&&
      gameBoard[6]!=''&&gameBoard[7]!=''&&gameBoard[8]!=''){
      callResult='its a tie'
      setTimeout(function(){alert(callResult)},300) 
    }
  }
      
      

    let checkWinner= function(playerName, playerSymbol, baordValueA, baordValueB, boardValueC){     
      if(gameBoard[baordValueA]===playerSymbol&&gameBoard[baordValueB]===playerSymbol&& gameBoard[boardValueC]===playerSymbol){
        callResult= `${playerName} won`
        setTimeout(function(){alert(callResult)},300) 
      }           
    }



    for(div of gameBoardDivList){
      div.addEventListener('click', checkWin)
    }
})()