
let b = [
  "o", "o", "o",
  "o", "o", "o",
  "o", "o", "o"
]
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
    if (b[0] === "X" && b[1] === "X" && b[2] === "X")
      
    alert("you win");


  }



  resetButton.onclick = function() {
    R1.textContent = "1";
    b[0] = "1";
    R2.textContent = "2";
    b[1] = "2";
    R3.textContent = "3";
    b[2] = "3";
    R4.textContent = "4"; 
    b[3] = "4";
    R5.textContent = "5";
    b[4] = "5";
    R6.textContent = "6";
    b[5] = "6";
    R7.textContent = "7";
    b[6] = "7";
    R8.textContent = "8";
    b[7] = "8";
    R9.textContent = "9";
    b[8] = "9";
  }

  
