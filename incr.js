let count=0;
function display(){
    let c=document.querySelector("#cli");
    count++;
    let pa=document.querySelector("#result")
    pa.innerHTML=(`Your have click : ${count} times`);
}  
