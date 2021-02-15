//Callback Pada Synchronous
//
//1. Callback sebagai Injeksi sebuah function
function calculate(param1,param2,callback){
    result = param1 + param2
    if (typeof callback == 'function'){
     result= callback(param1,param2)
    }
    
    return result
  }
  
  a=calculate(2000,4000, function(x,y){return "$ " + (x + y) }) 
  b=calculate(7000,2000, function(x,y){return "Rp " + (x * y) }) 
  console.log(a) // $ 6000
  console.log(b) // $ 14000
//
//2. Callback sebagai Event Listener
//document.getElementById("my_button").addEventListener("click",function(){
//  alert("Ouhh aku di klik!") 
//})
//

//Callback Pada Asynchronous
//
//2 rangkaian fungsi di bawah 
//bisa dibuka tutup untuk melihat perbedannya
/*function p1() {
  console.log('p1 done')
}
function p2() {
  //setTimeout or delay untuk simulasi asynchronous
  setTimeout(
      function() {
        console.log('p2 done')
      },100
  )
}
function p3() {
  console.log('p3 done')
}
p1()
p2()
p3()*/
function p1() {
  console.log('p1 done')
 }
 
 function p2(callback) {
  setTimeout(
   function() {
    console.log('p2 done')
     callback()
   },100
   )
 }
 
 function p3() {
   console.log('p3 done')
 }
 p1()
 p2(p3)