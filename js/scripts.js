function robogerOutput(input)  {


  outputArr = new Array(0)

  for( let i = 0; i < input.length ; i++ )  {
    if (input.toString().includes(3))  {
      outputArr.unshift("Won't you be my neighbor?");
    }
    else if (input.toString().includes(2)) {
      outputArr.unshift("Boop!");
    }
    else if (input.toString().includes(1)) {
      outputArr.unshift("Beep!");
    }
    else {
      outputArr.unshift(input);
    }
  }
  return outputArr;
}

$(document).ready(function() {



});