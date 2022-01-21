function robogerOutput(input)  {

  output = new Array(0)
  if (input.toString().includes(3))  {
    output.push("Won't you be my neighborxxxx?");
  }
  else if (input.toString().includes(2)) {
    output.push("Boopxxxxx!");
  }
  else if (input.toString().includes(1)) {
    output.push("Beepxxxx!");
  }
  else {
    output.push(input);
  }

  return output;
}

$(document).ready(function() {



});