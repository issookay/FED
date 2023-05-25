let gameResult = document.getElementById("gameResult");
let num = document.getElementById("userInput");
let game = document.getElementById("use");
let players = document.getElementById("useIn");


function checkGuess() {
   
    let play=parseInt(players.value);
    let text=num.value;
    const A = text.split(" ");
    var sum=parseInt(0);
    for(var z=0;z<play;z++){
        sum+=parseInt(A[z]);
    }
     var b = sum/play;
     gn=b*game.value;

    let arr=[];
    for(var z=0;z<play;z++){
      let k = Math.abs(parseInt(A[z])-gn);
       arr.push(k);
    }
     
  
     console.log(arr);
  
     
     console.log(Math.min(...arr));
     let g=parseInt(arr.indexOf(Math.min(...arr)))+1
     let r="The winner is player"+" "+g;
    
    if(arr.length<1){
      gameResult.textContent= "Enter a Valid Input";
    }
    else{
      gameResult.textContent= r;
    }

  
 
  // let number=parseInt(num.value);
//  if (number>cnumber){
//      gameResult.textContent='Too high try again';
//      gameResult.style.backgroundColor='red';
//     }
//  else if (number<cnumber){
//      gameResult.textContent='Too low try again';
//      gameResult.style.backgroundColor='yellow';
//     }
//  else if (number===cnumber){
//      gameResult.textContent='congratulations';
//      gameResult.style.backgroundColor='green';
//     }
// else{
//     gameResult.textContent='enter a valid input';
// }






}
