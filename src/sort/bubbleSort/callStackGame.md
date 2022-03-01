# Call Stack Game

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const bubbleSort = (array) => {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;
  for (var i = 0; i < array.length; i++) {
    countOuter++;
    for (var j = 0; j < array.length; j++) {
      countInner++;
      if (array[(j - 1)] > array[j]) {
        countSwap++;
        swap(array, j - 1, j);
      }
    }
  }
};

## bubbleSort([8,2,5,1]) // [1,2,5,8]

countOuter = 0;
countInner = 0;
countSwap = 0;

for (var i = 0; i < array.length; i++)  {  // i = 0

countOuter = 1

---------
    for (var j = 0; j < array.length; j++) {  // j = 0
        
        countInner = 1
        //no entra al if

    for (var j = 0; j < array.length; j++) { // j = 1
        countInner = 2
         if (array[(j - 1)] > array[j]) {  true, entra al iff y hace swap del array
        countSwap = 1
        swap(array, 0, 1);  // array = [2,8,5,1]
    
    for (var j = 0; j < array.length; j++) { // j = 2
        countInner = 3
         if (array[(j - 1)] > array[j]) {  true
        countSwap = 2
         swap(array, 1, 2);  // array = [2,5,8,1]
    
    for (var j = 0; j < array.length; j++) { // j = 3
        countInner = 4
         if (array[(j - 1)] > array[j]) {  true
        countSwap = 3
         swap(array, 2, 3);  // array = [2,5,1,8]

    se sale del for.

for (var i = 0; i < array.length; i++) {  // i = 1  

countOuter = 2

---------
    for (var j = 0; j < array.length; j++) {  // j = 0   // array = [2,5,1,8]
        
        countInner = 5
        if (array[(j - 1)] > array[j]) {  false

    for (var j = 0; j < array.length; j++) {  // j = 1   
        
        countInner = 6
        if (array[(j - 1)] > array[j]) {  false

    for (var j = 0; j < array.length; j++) {  // j = 2
        
        countInner = 7
        if (array[(j - 1)] > array[j]) {  true
        countSwap = 4
        swap(array, 1, 2);                              // array = [2,1,5,8]

    for (var j = 0; j < array.length; j++) {  // j = 3
        
        countInner = 8
        if (array[(j - 1)] > array[j]) {  false
    
    se sale del for.


for (var i = 0;  i < array.length; i++)  {  // i = 2

countOuter = 3

---------
    for (var j = 0; j < array.length; j++) {  // j = 0   // array = [2,1,5,8]
        
        countInner = 9
        if (array[(j - 1)] > array[j]) {  false
    
    for (var j = 0; j < array.length; j++) {  // j = 1  
        
        countInner = 10
        if (array[(j - 1)] > array[j]) {  true
        countSwap = 5
        swap(array, 0, 1);                                // array = [1,2,5,8]  //  ACA YA LO ORDENO PERO VA A SEGUIR HACIENDO TODOS LOS LOOPS.

    for (var j = 0; j < array.length; j++) {  // j = 2
        
        countInner = 11
        if (array[(j - 1)] > array[j]) {  false
    
        for (var j = 0; j < array.length; j++) {  // j = 3
        
        countInner = 12
        if (array[(j - 1)] > array[j]) {  false
    
    se sale del for.
    
for (var i = 0;  i < array.length; i++)  {  // i = 3

countOuter = 4


---------
    for (var j = 0; j < array.length; j++) {  // j = 0   // array = [2,1,5,8]
        
        countInner = 13
        if (array[(j - 1)] > array[j]) {  false
    
    for (var j = 0; j < array.length; j++) {  // j = 1  
        
        countInner = 14
        if (array[(j - 1)] > array[j]) {  false

    for (var j = 0; j < array.length; j++) {  // j = 2
        
        countInner = 15
        if (array[(j - 1)] > array[j]) {  false
    
    for (var j = 0; j < array.length; j++) {  // j = 3
        
        countInner = 16
        if (array[(j - 1)] > array[j]) {  false
    
    se sale del for.

se sale del for.



countOuter: 4
countInner: 16
countSwap: 5


