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
  outputArr.unshift(0);
  
  return outputArr;
}

function printOutput ( userNums ) {
  for ( i = -1; i <= userNums.length; i++ ) {
    $("div#userResults").append(userNums[i]);
    $("div#userResults").append("<br>");
  }
}

function armScale (scaler)  {
  if (scaler > 1.2) {
    return 1.2;
  }
  else  {
    return scaler;
  }
}


$(document).ready( function() {
  
  $("#speech").hide();
  $("button#add-info").one( "click", function() {
    $("body").addClass("gradientAnimation");
  });

  $("div#formBox").submit( function()  {
    
    event.preventDefault();

    $("div#userResults").text("");
    const userNum =  $("input#userNum").val();
    const outputNums = robogerOutput(userNum);
    printOutput(outputNums);
    
    const startLength = 666;
    const newArmLength = Math.sqrt( startLength**2 + (30 * (outputNums.length - 4))**2 );
    const rotationAngleRad = (Math.atan((30 * (outputNums.length)) / startLength)) ;
    const transformScaler = 0.66*newArmLength / (startLength / 0.75);
    
    const xScaler = armScale(transformScaler); 
    const yScaler =  armScale(transformScaler); 

    let rotater = 22 -1*( rotationAngleRad* (180 / Math.PI) );

    $("img#front-arm").css( "transform", "scaleX("+ xScaler +") scaleY("+ yScaler +") rotate("+ rotater +"deg)" );
     
    $("p#speech").show();
    $("p#speech").css("font-size", "+=16");
    $("p#speech").css("width", "+=150");
    $("p#speech").css("opacity", "-=10%");

    $("#roboger").effect( "shake", {times: 5, distance: 2}, 190);
  });
});