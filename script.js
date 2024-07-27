

//Funcion para crear tablero con el tamaño especificado
function createBoard(size,board){
    let boardSquares= 320/size;
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    for(let i=0;i<size*size;i++){
        const boardDiv=document.createElement("div");
        boardDiv.classList.add("board-box");
        boardDiv.style.height=boardSquares+"px";
        boardDiv.style.width=boardSquares+"px";
        boardDiv.style.border="1px solid black";
        colorBoard.appendChild(boardDiv);
    }
}



const colorChooser= document.querySelector(".choose-color");
const colorBoard= document.querySelector(".board");
const colors= ["#000","#fff","#ff0000","#0000ff","#00ff00","#ffff00","#ff00ff","#00ffff","#8800ff","#ff8800"];
let colorChoosed;
let isPainting=false;

//Creo el selector de colores
colors.forEach(color=>{
const colorDiv=document.createElement("div");
colorDiv.classList.add("div-color");
colorDiv.style.height="30px";
colorDiv.style.width="30px";
colorDiv.style.backgroundColor=color;
colorDiv.style.border="2px solid black";
colorChooser.appendChild(colorDiv);
})


//Tablero
//Crear un tablero de 16x16 bloques los cuales seran divs para poder pintarlos del color elegido
createBoard(16,colorBoard);


const cells=document.querySelectorAll(".div-color");

cells.forEach(cell=>{
    cell.addEventListener('click',function(){
        colorChoosed=this.style.backgroundColor;
        console.log(colorChoosed);
        });
})

const boardBoxes=document.querySelectorAll(".board-box");

boardBoxes.forEach(box=>{
    box.addEventListener('mousedown',function(){
        isPainting=true;
        box.style.backgroundColor=colorChoosed;
        });
    
    box.addEventListener('mousemove',function(){
        if(isPainting){
            box.style.backgroundColor=colorChoosed;
        }
    })
    box.addEventListener('mouseup', function () {
        isPainting = false;
    });
})


//Reset button
const resetButton=document.querySelector(".reset-button");

boardBoxes.forEach(box=>{
    resetButton.addEventListener('click',function(){
        box.style.backgroundColor="#fff";
    })
})

const addSquares=document.querySelector(".add-squares");

addSquares.addEventListener('click',function(){
    let boardSize=prompt("Please, enter the size for the board");
    createBoard(boardSize,colorBoard);
    const cells=document.querySelectorAll(".div-color");

cells.forEach(cell=>{
    cell.addEventListener('click',function(){
        colorChoosed=this.style.backgroundColor;
        console.log(colorChoosed);
        });
})

const boardBoxes=document.querySelectorAll(".board-box");

boardBoxes.forEach(box=>{
    box.addEventListener('mousedown',function(){
        isPainting=true;
        box.style.backgroundColor=colorChoosed;
        });
    
    box.addEventListener('mousemove',function(){
        if(isPainting){
            box.style.backgroundColor=colorChoosed;
        }
    })
    box.addEventListener('mouseup', function () {
        isPainting = false;
    });
})
const resetButton=document.querySelector(".reset-button");

boardBoxes.forEach(box=>{
    resetButton.addEventListener('click',function(){
        box.style.backgroundColor="#fff";
    })
})
});
