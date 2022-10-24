//global variables 
const wordArr = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "Accusamus", "pariatur", "nobis", "rem", "inventore", "in", "nostrum", "soluta", "eius", "eveniet", "qui", "ea"];
const button = document.querySelector('button');


const newFunc = () => {
  //getting random index from the array
  let item = wordArr[Math.floor(Math.random()*wordArr.length-1)];
  let newItem = document.getElementById('content');
  //user input
  let input = prompt("Type a word you want to display. (random word if you don't type anything)");

  //if no input or cancelled display random word from the array if not, display the user input
  if(input != "" && input != null){
    item = input;
    newItem.innerHTML = item;
  }
  else{
    newItem.innerHTML = item;
  }
  console.log(item);
}
//eventlistener
button.addEventListener ('click', newFunc);