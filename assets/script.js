const wordArr = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "Accusamus", "pariatur", "nobis", "rem", "inventore", "in", "nostrum", "soluta", "eius", "eveniet", "qui", "ea"];
const button = document.querySelector('button');

console.log(button);

const newFunc = () => {
  let item = wordArr[Math.floor(Math.random()*wordArr.length-1)];
  let newItem = document.getElementById('content');
  let input = prompt("Type a word you want to display. (random word if you don't type anything)");

  if(input != "" && input != null){
    item = input;
    newItem.innerHTML = item;
  }
  else{
    newItem.innerHTML = item;
  }
  console.log(item);
}

button.addEventListener ('click', newFunc);