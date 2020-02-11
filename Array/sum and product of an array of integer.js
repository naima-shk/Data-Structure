let array=[1,2,3,4,5,6];
  sum = 0;
   product = 1;
for (let i=0; i<array.length; i++){
    sum+=array[i];
    product*=array[i];
  }
console.log(sum + " , "+ product);