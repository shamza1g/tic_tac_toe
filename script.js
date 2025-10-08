 var isTrue = false;
    var turn = "O";
    var isclicked = [];
      function check(){
            const oo = document.getElementById("one,one");
        const to = document.getElementById("two,one");
        const tho = document.getElementById("three,one");
        const ot = document.getElementById("one,two");
        const tt = document.getElementById("two,two");
        const tht = document.getElementById("three,two");
        const oth = document.getElementById("one,three");
        const tth = document.getElementById("two,three");
        const thth = document.getElementById("three,three");
    
      if (oo.textContent == "X" && to.textContent == "X" && tho.textContent == "X" || tho.textContent == "X" && tht.textContent == "X" && thth.textContent == "X" || to.textContent == "X" && tt.textContent == "X" && tth.textContent == "X" || oo.textContent == "X" && ot.textContent == "X" && oth.textContent == "X" || ot.textContent == "X" && tt.textContent == "X" && tht.textContent == "X" || oth.textContent == "X" && tth.textContent == "X" && thth.textContent == "X" || oo.textContent == "X" && tt.textContent == "X" && thth.textContent == "X" || tho.textContent == "X" && tt.textContent == "X" && oth.textContent == "X")
          {
            alert("X wins! Take the L O!");
          }else  if (oo.textContent == "O" && to.textContent == "O" && tho.textContent == "O" || tho.textContent == "O" && tht.textContent == "O" && thth.textContent == "O" || to.textContent == "O" && tt.textContent == "O" && tth.textContent == "O" || oo.textContent == "O" && ot.textContent == "O" && oth.textContent == "O" || ot.textContent == "O" && tt.textContent == "O" && tht.textContent == "O" || oth.textContent == "O" && tth.textContent == "O" && thth.textContent == "O" || oo.textContent == "O" && tt.textContent == "O" && thth.textContent == "O" || tho.textContent == "O" && tt.textContent == "X" && oth.textContent == "O")
          {
            alert("O wins! Take the L X!");
          }
      else {
      if(isclicked.includes(oo) && isclicked.includes(ot) && isclicked.includes(oth) && isclicked.includes(to) && isclicked.includes(tt) && isclicked.includes(tth) && isclicked.includes(tho) && isclicked.includes(tht) && isclicked.includes(thth)){
          alert("Womp womp. A tie!");
         }
          }
        }
    function clickAction(id) { // Use a valid parameter name
      const element = document.getElementById(id);
      if (element) {
          if(!isclicked.includes(id)){// Check if the element exists
        if (isTrue){
            
        element.textContent = "O";
                  isclicked.push(id);

            isTrue = false;
        }
        else {
                  isclicked.push(id);

            element.textContent = "X";
            isTrue = true;
        }
        }
    }
    check()
    }
         
         
  </script>
