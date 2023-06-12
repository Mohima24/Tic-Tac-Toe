import { useEffect, useState } from "react";
import SmallBox from "./SmallBox";

const TicTocToe = () => {
  const [value, setValue] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState(true);

  const handleClick = (index) => {
    if (value[index] === "") {
      player ? setPlayer(false) : setPlayer(true);

      setValue(
        value.map((el, i) => {
          if (i === index) {
            return player ? "X" : "O";
          } else {
            return el;
          }
        })
      );
    } else {
      alert("cant placed");
    }
  };
  useEffect(()=>{
    setTimeout(()=>{

      if (value[0] === "X" && value[1] === "X" && value[2] === "X") {
        player?alert('Player two has Won'):alert("Player one has won")
      }
      else if (value[0] === "O" && value[1] === "O" && value[2] === "O") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[0] === "O" && value[3] === "O" && value[6] === "O") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[0] === "X" && value[3] === "X" && value[6] === "X") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[6] === "X" && value[7] === "X" && value[8] === "X") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[6] === "O" && value[7] === "O" && value[8] === "O") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[2] === "O" && value[5] === "O" && value[8] === "O") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[2] === "X" && value[5] === "X" && value[8] === "X") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[0] === "X" && value[4] === "X" && value[8] === "X") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[0] === "O" && value[4] === "O" && value[8] === "O") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[2] === "O" && value[4] === "O" && value[6] === "O") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[2] === "X" && value[4] === "X" && value[6] === "X") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[3] === "X" && value[4] === "X" && value[5] === "X") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[3] === "O" && value[4] === "O" && value[5] === "O") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[1] === "O" && value[4] === "O" && value[7] === "O") {
        player?alert('Player two has Won'):alert("Player one has won")
      } else if (value[1] === "X" && value[4] === "X" && value[7] === "X") {
        player?alert('Player two has Won'):alert("Player one has won")
      }
      },10)
  },[value])


  const refreshFun = ()=>{
    setValue(Array(9).fill(""))
  }

  return (
    <div className="tic-tac-toe">
      <div className="board-row">
        <SmallBox
          value={value[0]}
          valuePut={() => {
            handleClick(0);
          }}
        />
        <SmallBox
          value={value[1]}
          valuePut={() => {
            handleClick(1);
          }}
        />
        <SmallBox
          value={value[2]}
          valuePut={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <SmallBox
          value={value[3]}
          valuePut={() => {
            handleClick(3);
          }}
        />
        <SmallBox
          value={value[4]}
          valuePut={() => {
            handleClick(4);
          }}
        />
        <SmallBox
          value={value[5]}
          valuePut={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <SmallBox
          value={value[6]}
          valuePut={() => {
            handleClick(6);
          }}
        />
        <SmallBox
          value={value[7]}
          valuePut={() => {
            handleClick(7);
          }}
        />
        <SmallBox
          value={value[8]}
          valuePut={() => {
            handleClick(8);
          }}
        />
      </div>

      <button className="refresh-button" onClick={refreshFun}>Refresh</button>
    </div>
  );
};
export default TicTocToe;
