// Cache the DOM
const startGameContainer = document.querySelector('.start-game-container')
const welcomeText= document.querySelector('.welcome-text')
const startGameButton= document.querySelector('.start-game-button')


const getPlayersContainer = document.querySelector('.get-players-container')
const firstPlayerName = document.querySelector('#firstPlayerName')
const secondPlayerName = document.querySelector('#secondPlayerName')
const startButton = document.querySelector('.start-button')


const gameBoardContainer = document.querySelector('.gameboard-container')
const gameBoardDivList = document.querySelectorAll('#gameboard-div')
const endgameEl = document.querySelector('.endgame-container')


// factory function to create player
let player = function (symbol, name){
  return {symbol, name}
  }
  

// At the beginning of the Game Start with a Module 
// Start the Game with a button and create the players with Input Elements
  // get the Values and assign create the players with the factory function
  // assign firstplayer as the currentplayer
  // return firstplayer, secondplayer and currentplayer to use them later on

const StartGame = (function(){
  getPlayersContainer.style.display='none'
  gameBoardContainer.style.display='none'

  let startTheGame = function(){
    startGameContainer.style.display='none'
    getPlayersContainer.style.display='block'
    }

  let createPlayers = function(){
    if(firstPlayerName.value ===''|| secondPlayerName.value===''){alert('please enter your name first')}  
    else{
      firstPlayer = player ('x', firstPlayerName.value)
      secondPlayer = player ('o', secondPlayerName.value) 
      currentPlayer = firstPlayer
      getPlayersContainer.style.display='none'
      gameBoardContainer.style.display='grid'
    }  
    return {firstPlayer, secondPlayer, currentPlayer}
  }

  startGameButton.addEventListener('click', startTheGame)
  
  startButton.addEventListener('click', createPlayers)

})()


// Module to for the Gameboard interface
  // make an gameBoard array to store the values
  // make a function to render the gameboard values to the DOM
  // make a function to change the currentplayer to the next Player
  // listen for a lick on the gameboard,
    // use the function to set the currentplayer symbol, 
    //splice it to the gameboard array and render it to the DOM
    
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

  let changeCurrentPlayer = function(){
    if (currentPlayer===firstPlayer){currentPlayer=secondPlayer}
    else if(currentPlayer===secondPlayer){currentPlayer=firstPlayer}
  }

  let assignPlayerValue = function(){  
    if(this.textContent){}
    else{
      currentValue = currentPlayer.symbol
      gameBoardDivClass = this.classList.value
      gameBoard.splice(gameBoardDivClass, 1, currentValue)
      console.log('currentvalue', currentValue)
      console.log(gameBoard)
      console.log(this.classList.value)
      changeCurrentPlayer()
      render()       
    }            
  }

  for(div of gameBoardDivList){
    div.addEventListener('click', assignPlayerValue)       
  }  
  render()
  return{gameBoard, render}
})()



// Module to control the game flow 
  // helper function to check the winner 
  // helper function to end the game if there is a winner
  // make a check win function to use the helper functions
    // use the boardValues to check the winner in every possible way with every click and store the winnername in a variable
    // if there is no winner the result becomes its a tie
    // after the game ends display the result and a button to try again
    // listen to the button to reset important values, render and display a fresh board

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
      gameBoardContainer.style.display='none'          
      endgameEl.append(congratulatorElDiv, endgameButton)
      console.log(congratulatorElDiv)        
      },300)    
    }
  }    

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


  let tryAgain = function(){
    currentPlayer=firstPlayer
    gameBoardContainer.style.display='grid'
    gameBoard = 
    ["", "", "",
    "", "", "",
    "", "", ""]   
    callResult=undefined  
    endgameEl.textContent=''
    console.log(callResult)
    GameBoard.render()    
  }

  endgameButton.addEventListener('click', tryAgain)

return{checkWin}     
})()




