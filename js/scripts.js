function robogerOutput(input)  {

  output = new Array(0)
  if (input === 1)  {
    output.push("Beep!");
  }
  else if (input === 2) {
    output.push("Boop!");
  }
  else if (input === 3) {
    output.push("Won't you be my neighbor?");
  }
  else {
    output.push(input);
  }

  return output;
}



$(document).ready(function() {



});