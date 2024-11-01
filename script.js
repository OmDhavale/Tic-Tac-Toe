let currentPlayer = "X"
let arr = Array(9).fill(null)
let nextTurn = document.getElementById("nextturn")
let restart = document.getElementById("restart")

function rest(){
    const button = document.createElement("button");
    button.id = "secondButton";
    button.innerHTML = "Restart";
    button.onclick = function() {
        location.reload();
    };
    // Add the button to the restart div
    restart.appendChild(button);
    return
}

function checkWinner(){
    if( //Horizontals
        
        (arr[0]!=null && arr[0]==arr[1] && arr[1]==arr[2])||
        (arr[3]!=null && arr[3]==arr[4] && arr[4]==arr[5])||
        (arr[6]!=null && arr[6]==arr[7] && arr[7]==arr[8])||
        //Verticals
        (arr[0]!=null && arr[0]==arr[3] && arr[3]==arr[6])||
        (arr[1]!=null && arr[1]==arr[4] && arr[4]==arr[7])||
        (arr[2]!=null && arr[2]==arr[5] && arr[5]==arr[8])||
        //Diagonals
        (arr[0]!=null && arr[0]==arr[4] && arr[4]==arr[8])||
        (arr[2]!=null && arr[2]==arr[4] && arr[4]==arr[6])
    ){
        alert(currentPlayer+"is Winner !")
        currentPlayer = "Winner"
        return;
    }
    
    if(!arr.some((e)=>e===null)){
        alert("Game Drawn !")
        currentPlayer = "Drawn"
        return;
    }
}
function handleClick(ele){
    const id = Number(ele.id)
    if(arr[id] !==null) return //if already an element is present in box, then return..u cannot overwrite it !
    arr[id] = currentPlayer
    ele.innerText = currentPlayer
    checkWinner()
    if(currentPlayer=="X"){
        ele.style.color = "red"
        currentPlayer = "O"
        nextTurn.innerText = "next turn is of : O"
    }
    else if(currentPlayer == "Winner" || currentPlayer == "Drawn" ){
        rest();
    }
    else{
        ele.style.color = "blue"
        currentPlayer = "X"
        nextTurn.innerText = "next turn is of : X"
    }

}
