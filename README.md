# _Mr Roboger_

#### By _**Eric Crudup**_

#### _This program takes an integer from the user, and outputs all numbers from the input number to zero, except when the number contains a 1, 2, or 3, in which case it outputs an exception message_

## Technologies Used

* HTML
* CSS
* Javascript
* Bootstrap
* jQuery


## Tests

Describe: robogerOutput()

* Test: "if input is 0, it should return 0"  
  Code: robogerOutput(0);  
  Expected Result: "0"  

* Test: "if input is 1, it should return exception statement 'Beep!'"
  Code: robogerOutput(1);  
  Expected Result: "Beep!"

* Test: "if input is 2, it should return exception statement 'Boop!'"  
  Code: robogerOutput(2);
  Expected Result: "Boop!";

* Test: "if input is 3, it should return exception statement 'Wont you be my neighbor?'"  
  Code: robogerOutput(3);   
  Expected Result: "Won't you be my neighbor?"

* Test: "if input is any single digit number that isn't 1,2, or 3 should return itself"   
  Code: robogerOutput(4);   
  Expected Result: "4"   

* Test: "code should only output one exception statement per number"   
  Code: robogerOutput(2);   
  Expected Result: "Boop"   

* Test: "if input is multi-digit and contains at least 1 exception number, code should output one exception with order of preference, highest to lowest, being: 3,2,1"   
  Code: robogerOutput(123);   
  Expected Result: "Won't you be my neighbor?"   

* Test: "loops through code as many times as the input number, adding the same result to output array that many times "   
  Code: robogerOutput(2);   
  Expected Result: "['Boop!', 'Boop!']"   

* Test: "Loop should add go through all numbers from input number to 0, adding results from each number to output array"   
  Code: robogerOutput(5);   
  Expected Result: ""0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5"   


## Setup/Installation Requirements

* clone this repository to your local machine using git
* from the git directory you downloaded, navigate to the top level directory 
* open the .index.html file in a modern web browser


## Known Bugs

* No exception handling for user entering in non-integer input

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) _2022_  _Eric Crudup_