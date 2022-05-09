const getPrimes = () => {
  // Add your code here
  
  //Since 1 is not a prime number, you start the number at 2. 
  let number = 2;
  // We find all the prime numbers between 2 and max_number
  let max_number = 100;
  do {
    // we have a variable named "check". if there is a prime, check is true
    let check = true;
    // Pre_number is used to check the number is divible by any pre_number or not ? 
    // where 1 < pre_number < number. 

    // if we found the number is divisble by a pre_number -> return check = false
    // That means the number can be divided by one than only itself and 1. 
    let pre_number = 2;   
    while (pre_number < number) {
      if (number % pre_number == 0) {
        check = false;
        break;
      }
      pre_number++;
    } 

    if (check == true) {
      console.log(number);
    }
    number++;
  } while (number <= max_number)
};


getPrimes();
// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...
