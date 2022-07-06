let userValue = document.getElementById("getLength")
let pass_1 = document.getElementById("pass_1")
let pass_2 = document.getElementById("pass_2")
let pass_3 = document.getElementById("pass_3")
let pass_4 = document.getElementById("pass_4")
function randomDigit(){
    return Math.floor(Math.random()*9)+1
}
let arry  = ["J","h" ,"U","3","$","K","M","n","8","g"]
function genratePassword(){
    let passwordLength =  userValue.value
    pass_1.textContent =""
    pass_2.textContent = ""
    pass_3.textContent = ""
    pass_4.textContent =""
       if(userValue.value){
           for(let i =  0 ;i<passwordLength;i++ ){
                pass_1.textContent += arry[randomDigit()]
                pass_2.textContent += arry[randomDigit()]
                pass_3.textContent += arry[randomDigit()]
                pass_4.textContent += arry[randomDigit()]
                
           }
       }
       userValue.value = ""

}