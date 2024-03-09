
let b = [
  "o", "o", "o",
  "o", "o", "o",
  "o", "o", "o"
]
let allElms = [
  R1,R2,R3,
  R4,R5,R6,
  R7,R8,R9
]
console.log(allElms);
console.log(b);
console.log("**** Start ****");

R1.onclick = function() {
    R1.textContent = "X";
    b[0] = "X";
    console.log("**** Click R1 ****");
    console.log(b);
  }
  R1.ondblclick = function() {
    R1.textContent = "O";
    b[0] = "O";
    console.log("**** DblClick R1 ****");
    console.log(b);
  }
  R2.onclick = function() {
    R2.textContent = "X";
    b[1] = "X";
    console.log("**** Click R2 ****");
    console.log(b);
  }
  R2.ondblclick = function() {
    R2.textContent = "O";
    b[1] = "O";
    console.log("**** DblClick R2 ****");
    console.log(b);
  }
  R3.onclick = function() {
    R3.textContent = "X";
    b[2] = "X";
    console.log("**** Click R3 ****");
    console.log(b);
  }
  R3.ondblclick = function() {
    R3.textContent = "O";
    b[2] = "O";
    console.log("**** DblClick R3 ****");
    console.log(b);
  }
  R4.onclick = function() {
    R4.textContent = "X";
    b[3] = "X";
    console.log("**** Click R4 ****");
    console.log(b);
  }
  R4.ondblclick = function() {
    R4.textContent = "O";
    b[3] = "O";
    console.log("**** DblClick R4 ****");
    console.log(b);
  }
  R5.onclick = function() {
    R5.textContent = "X";
    b[4] = "X";
    console.log("**** Click R5 ****");
    console.log(b);
  }
  R5.ondblclick = function() {
    R5.textContent = "O";
    b[4] = "O";
    console.log("**** DblClick R5 ****");
    console.log(b);
  }
  R6.onclick = function() {
    R6.textContent = "X";
    b[5] = "X";
    console.log("**** Click R6 ****");
    console.log(b);
  }
  R6.ondblclick = function() {
    R6.textContent = "O";
    b[5] = "O";
    console.log("**** DblClick R6 ****");
    console.log(b);
  }
  R7.onclick = function() {
    R7.textContent = "X";
    b[6] = "X";
    console.log("**** Click R7 ****");
    console.log(b);
  }
  R7.ondblclick = function() {
    R7.textContent = "O";
    b[6] = "O";
    console.log("**** DblClick R7 ****");
    console.log(b);
  }
  R8.onclick = function() {
    R8.textContent = "X";
    b[7] = "X";
    console.log("**** Click R8 ****");
    console.log(b);
  }
  R8.ondblclick = function() {
    R8.textContent = "O";
    b[7] = "O";
    console.log("**** DblClick R8 ****");
    console.log(b);
  }
  R9.onclick = function() {
    R9.textContent = "X";
    b[8] = "X";
    console.log("**** Click R9 ****");
    console.log(b);
  }
  R9.ondblclick = function() {
    R9.textContent = "O";
    b[8] = "O";
    console.log("**** DblClick R9 ****");
    console.log(b);
  };
 
 
  checkWinner.onclick = function() {
  
    if (b[0] === "X" && b[1] === "X" && b[2] === "X"){
      alert("X wins");
    } 
    if (b[0] === "O" && b[1] === "O" && b[2] === "O"){
      alert("O Wins!");
    }
    if (b[3] === "X" && b[4] === "X" && b[5] === "X"){
      alert("X wins!");
    }
    if (b[3] === "O" && b[4] === "O" && b[5] === "O"){
      alert("O Wins!");
    }
    if (b[6] === "X" && b[7] === "X" && b[8] === "X"){
      alert("X wins!");
    }
    if (b[6] === "O" && b[7] === "O" && b[8] === "O"){
      alert("O Wins!");
    }
    if (b[0] === "X" && b[4] === "X" && b[8] === "X"){
      alert("X wins!");
    }
    if (b[0] === "O" && b[4] === "O" && b[8] === "O"){
      alert("O Wins!");
    }
    if (b[2] === "X" && b[4] === "X" && b[6] === "X"){
      alert("X wins!");
    }
    if (b[2] === "O" && b[4] === "O" && b[6] === "O"){
      alert("O Wins!");
    }
    if (b[0] === "X" && b[3] === "X" && b[6] === "X"){
      alert("X wins!");
    }
    if (b[0] === "O" && b[3] === "O" && b[6] === "O"){
      alert("O Wins!");
    }
    if (b[1] === "X" && b[4] === "X" && b[7] === "X"){
      alert("X wins!");
    }
    if (b[1] === "O" && b[4] === "O" && b[7] === "O"){
      alert("O Wins!");
    }
    if (b[2] === "X" && b[4] === "X" && b[8] === "X"){
      alert("X wins!");
    }
    if (b[2] === "O" && b[4] === "O" && b[8] === "O"){
      alert("O Wins!");
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      
    


  



  //resetButton.onclick = function() {
  //   R1.textContent = "OPEN";
  //   b[0] = "OPEN";
  //   R2.textContent = "OPEN";
  //   b[1] = "OPEN";
  //   R3.textContent = "OPEN";
  //   b[2] = "OPEN";
  //   R4.textContent = "OPEN"; 
  //   b[3] = "OPEN";
  //   R5.textContent = "OPEN";
  //   b[4] = "OPEN";
  //   R6.textContent = "OPEN";
  //   b[5] = "OPEN";
  //   R7.textContent = "OPEN";
  //   b[6] = "OPEN";
  //   R8.textContent = "OPEN";
  //   b[7] = "OPEN";
  //   R9.textContent = "OPEN";
  //   b[8] = "OPEN";
  // }
  resetButton.onclick = function() {
    for (let i=0; i<9; i++){
      
      //console.log(allElms);

      console.log(allElms[0])
      
      
      
      
      //blocks.textContent = "open";
    }
//console.log(allElms);
  }
//console.log(blocks[i]);