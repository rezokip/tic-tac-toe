let  gameBoardElement = document.querySelector('.gameboard')








let GameBoard = (function (){
  array=["", "", "",
  "", "", "",
  "", "", ""]
  return{array}
})()

let player = function (symbol){
  return {symbol}
}

let firstPlayer = player('x')
let secondPlayer = player('o')


let render = function(){     

 
  for(index in GameBoard.array){
    boardValue=  document.createElement('div')
    boardValue.textContent=GameBoard.array[index]
    boardValue.classList.add(index)
    gameBoardElement.appendChild(boardValue)
    boardValue.addEventListener('click',function(){
      GameBoard.array.splice(this.classList, 1, 'x')
      controlGameState()
      console.log(GameBoard.array)
    })
    console.log(boardValue)   
  }
  return gameBoardElement
}



let controlGameState = (function(){
  gameBoardElement.textContent = ""
  render()
})()


// make an Gameboard object to store the values in an Array
// make a function to render the values from that array to the DOM
// make a factory for the player 
// 
