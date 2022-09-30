

let player = function (symbol, name){
  return {symbol, name}
  }
  
  let firstPlayer = player('x','hans')
  let secondPlayer = player('o','peter')
  

const gameBoardContainer = document.querySelector('.gameboard-container')
const gameBoardDivList = document.querySelectorAll('#gameboard-div')
const endgameEl = document.querySelector('.endgame-container')





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

  let getCurrentValue= function(){
    
  }


  let currentValue
  let playerClick = function(){  
    if(this.textContent){}
    else{
      if(currentValue===firstPlayer.symbol){currentValue=secondPlayer.symbol}
      else if (currentValue===secondPlayer.symbol){currentValue=firstPlayer.symbol}
      else if(!currentValue) {currentValue=firstPlayer.symbol}                   
      gameBoardDivClass = this.classList.value
      gameBoard.splice(this.classList.value, 1, currentValue)
      console.log('currentvalue', currentValue)
      console.log(gameBoard)
      console.log(this.classList.value)
      render() 
      return currentValue  
    }      
    console.log(currentValue, 'currentvalue')  
    return currentValue
    
  }

  for(div of gameBoardDivList){
    div.addEventListener('click', playerClick)       
  }
  
  
  
  render()
  return{gameBoard, render, playerClick}
})()





let ControlGameFlow = (function(){
  let callResult 

  let checkWinner= function(playerName, playerSymbol, baordValueA, baordValueB, boardValueC){     
    if(gameBoard[baordValueA]===playerSymbol&&gameBoard[baordValueB]===playerSymbol&& gameBoard[boardValueC]===playerSymbol){
      callResult= `${playerName} won`
    }           
  }

  let congratulatorElDiv=document.createElement('div')
  let endgameButton = document.createElement('button') 
  let endTheGame = function(){
    if(callResult){           
      congratulatorElDiv.textContent=callResult,
      endgameButton.textContent='try again'
      setTimeout(function(){
      gameBoardContainer.textContent            
      endgameEl.append(congratulatorElDiv, endgameButton)
      console.log(congratulatorElDiv)        
      },300)    
    }
  }    

  let startNewGame = function(){
    console.log(callResult)
    callResult=undefined
    gameBoard = 
    ["", "", "",
    "", "", "",
    "", "", ""]
    currentValue=undefined
    GameBoard.render()    
  }



  endgameButton.addEventListener('click', startNewGame)


  let checkWin = function(){ 
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
    }
    endTheGame()
    return callResult
  }
  
 


    for(div of gameBoardDivList){
      div.addEventListener('click', checkWin)     
    }

return{checkWin}   
    
})()




