function robogerOutput(input)  {

  outputArr = new Array(0)

  for( let i = 0; i < input ; i++ )  {
    if ((input - i).toString().includes(3))  {
      outputArr.unshift("Won't you be my neighbor?");
    }
    else if ((input - i).toString().includes(2)) {
      outputArr.unshift("Boop!");
    }
    else if ((input - i).toString().includes(1)) {
      outputArr.unshift("Beep!");
    }
    else {
      outputArr.unshift(input - i);
    }
  }
  return outputArr;
}

 function printOutput ( userNums ) {
    for ( i = 0; i < userNums.length; i++ ) {
      $("div#userResults").append(userNums[i]);
      $("div#userResults").append("<br>");
    }
  }


$(document).ready( function() {
  $("div#formBox").submit( function()  {

    event.preventDefault(); 
    $("div#userResults").text("");
    const userNum =  $("input#userNum").val();
    const outputNums = robogerOutput(userNum);
    printOutput(outputNums);

  });
});