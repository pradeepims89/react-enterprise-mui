import React from "react";
import './TicTacToe.css';
import { useState } from "react";
const TicTacToe = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const renderSqure = (index) => {
        return (
            <button className="square"  onClick={()=>handleClick(index)}>{board[index]}</button>
        );
    }
    const handleClick = (index) => {
            
         console.log("index", index);   
            
            if (board[index]!==null ) {
                return;         
            }   
            const boardCopy = [...board];
           // console.log(boardCopy);
            boardCopy[index] = isXNext ? 'X' : 'O';
            setBoard(boardCopy);
            setIsXNext(!isXNext);
            const winner = checkWinner(boardCopy);
            console.log("winner", winner);
            if (winner) {
                setWinner(winner);
            }   

        // Logic to handle square click
    }  
    const checkWinner = (boardnew) => {
        // Logic to check for a winner
    const  combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];      
        for (let combination of combinations) {
            const [a, b, c] = combination;  

            //console.log("abc",board[a], board[b], board[c]);
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }       
        }
        return null;    
    }        

    return (

        <div className="tic-tac-toe-container">
            <h2>Tic Tac Toe Game</h2>
            <div className="board">
                {/* Game board will be implemented here */}
                <div className="board-row">
                    {renderSqure(0)}
                    {renderSqure(1)}
                    {renderSqure(2)}
                </div>
                <div className="board-row">
                    {renderSqure(3)}
                    {renderSqure(4)}
                    {renderSqure(5)}
                </div>
                <div className="board-row">
                    {renderSqure(6)}
                    {renderSqure(7)}
                    {renderSqure(8)}

                </div>

            </div>
            <div className="status">
                <button onClick={()=>{
                    setBoard(Array(9).fill(null));
                    setWinner(null);
                }} className="button">Reset Game</button>  
                {/* {winner ? `Winner is: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`} */}
            </div>  
        </div>
    );
}
export default TicTacToe;


