console.log(document)
//acess score class
const score=document.getElementsByClassName('score')[0]
//generate the random numbr using math.random
const random=parseInt(Math.random()*10+1)
//console.log(random)

let btn = document.getElementsByClassName('btn')[0];
//access form
const form = document.getElementsByClassName('border')[0]
const notice=document.getElementById('notice')
const fieldset=document.getElementsByClassName('b')[0]
var count=0
btn.addEventListener('click', function(e){
e.preventDefault()
const num=document.getElementById('num').value
if(random > num){
    count++
    score.innerText=count
    //kebab case --->camel case
    //in js we write like border-color--->borderColor
    notice.innerText='try bigger number😊'
    fieldset.style.borderColor='red'
}
else if(random==num){
    notice.innerText='congrats🤝'
    fieldset.style.borderColor='green'
    score.innerText=count
}    
else{
  count++
  score.innerText=count
    notice.innerText='try smaller number🙄'
    fieldset.style.borderColor='yellow'
}
form.reset()
}) 
   