// FizzBuzz
> function FizzBuzz(){
    ... for(let a=1; a<=15; a++){
    ..... if((a%3)===0 && (a%5)===0){
    ....... console.log("FizzBuzz");
    ....... }else if((a%3)===0){
    ....... console.log("Fizz");
    ....... }else if((a%5)===0){
    ....... console.log("Buzz");
    ....... }else{
    ....... console.log(a);
    ....... }
    ..... }
    ... }
    undefined
    > FizzBuzz()
    1
    2
    Fizz
    4
    Buzz
    Fizz
    7
    8
    Fizz
    Buzz
    11
    Fizz
    13
    14
    FizzBuzz
    undefined
    > 
    
// サンプル: "1" という文字列を出力
console.log("1");

// サンプル: "FizzBuzz" という文字列を出力
// (process.stdout.write で改行なしの出力ができる)
process.stdout.write("Fizz");
process.stdout.write("Buzz");
console.log();
