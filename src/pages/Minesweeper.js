import { Box, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react"


const rows = 12;
const columns = 10;
const mines = 10;

function getAdjacentTiles(index){
    let adjacentArray = []

    if(index-columns >= 0){
        adjacentArray.push(index-columns);
        if((index-columns+1) % columns != 0){
            adjacentArray.push(index-columns+1);
        }
        if((index-columns) % columns != 0){
            adjacentArray.push(index-columns-1);
        }
    }
    if(index+columns < rows * columns){
        adjacentArray.push(index+columns);
        if((index+columns+1) % columns != 0){
            adjacentArray.push(index+columns+1);
        }
        if((index+columns) % columns != 0){
            adjacentArray.push(index+columns-1);
        }
    }
    if((index+1) % columns != 0){
        adjacentArray.push(index+1);
    }
    if(index % columns != 0){
        adjacentArray.push(index-1);
    }

    return adjacentArray;
}

function generateBoard(rows, columns, mines){
    let boardSize = rows * columns;
    let board = [boardSize - 1];
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

    console.log(board);
    for(let i = 0; i < boardSize; i++){
        if(board[i] == 'x'){
            let adjacentTiles = getAdjacentTiles(i, board);
            console.log(adjacentTiles)
            for(let x = 0; x < adjacentTiles.length; x++){
                if(board[adjacentTiles[x]] != 'x'){
                    board[adjacentTiles[x]] = board[adjacentTiles[x]] + 1;
                }
            }
        }
    }

    
    return board;
}

export default function Minesweeeper(){
    
    var [board, setBoard] = useState([]);

    useEffect(()=>{
        
        setBoard(generateBoard(rows, columns, mines));
    },[])

    return(
        <Container component="main" maxWidth="lg">
            {board.map((tile, index)=>(
                <>
                    <Box key={index} 
                        sx={{marginBottom: -1, marginRight: "1px", cursor: "pointer", userSelect: "none", MozUserSelect: "none"}} 
                        component="img" 
                        src={tile == 'x' ? "./files/mine.png" : ("./files/" + tile + ".png")} 
                        onClick={()=>console.log(index)}/>
                    {(index + 1) % columns == 0 && <br/>}
                </>
            ))}
        </Container>
    )
}