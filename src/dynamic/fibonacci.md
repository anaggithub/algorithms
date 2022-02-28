Links útiles:

https://www.mathsisfun.com/numbers/fibonacci-sequence.html
https://medium.com/geekculture/how-to-solve-fibonacci-sequence-using-dynamic-programming-b7cd784ee10d

# Call Stack Game

const fibonacci = (num) => {

  if (num === 1) return 1;
  if (num === 0) return 0;

  const previous1 = fibonacci(num - 1);
  const previous2 = fibonacci(num - 2);

  return previous1 + previous2;

};

## fibonacci(2) // 1

previous1 = fibonacci(2-1) (1)  // 1

---------
    fibonacci(1) // 1

previous2 = fibonacci(2-1) (0)  // 0

---------
    fibonacci(0) // 0

return previous1 + previous2 // 1 + 0 = 1

// ------------------------------------------------------


### fibonacci(3) // 2

previous1 = fibonacci(3-1) (2)  // 1

---------
    fibonacci(2) // 1

    previous1 = fibonacci(2-1) (1)  // 1
    previous2 = fibonacci(2-1) (0)  // 0
    previous1 + previous2 // 1 + 0 = 1


previous2 = fibonacci(3-2) (1)  // 1

---------
    fibonacci(1) // 1 

return previous1 + previous2 // 1 + 1 = 2



### fibonacci(4) // 3

previous1 = fibonnaci(4-1) (3) // 2

---------
    fibonacci(3) // 
    previous1 = fibonnaci(3-1) (2)  // 1

        fibonacci(2) // 
        previous1 = fibonnaci(2-1) (1) // 1
        previous2 = fibonnaci(2-2) (0) // 0
        return 1 + 0 = 1
    
    previous2 = fibonnaci(3-2) (1) // 1

    return 1 + 1 = 2;  // 2

previous2 = fibonnaci(4-2) (2)  //1

return 2 + 1 = 3