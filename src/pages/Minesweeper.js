import { useEffect } from "react"


function generateBoard(rows, columns, mines){
    let boardSize = rows * columns;
    let board = [];
    for(let i = 0; i < boardSize; i++){
        board[i] = 0;
    }

    

    let minesToPlant = mines;
    while(minesToPlant > 0){
        let mineLocation = Math.floor(Math.random() * rows * columns);
        if(board[mineLocation] != 'x'){
            board[mineLocation] = 'x';
            minesToPlant--;
        }
    }

    return board;
}

export default function Minesweeeper(){
    useEffect(()=>{
        const rows = 10;
        const columns = 10;
        const mines = 20;
        let board = generateBoard(rows, columns, mines);
        
        console.log(board)
    },[])

    return(
        <p>test</p>
    )
}