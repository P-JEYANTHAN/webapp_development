function display(){
    let f=document.querySelector("#first").value;
    let s=document.querySelector("#second").value;
    let lf=f.toLowerCase().split("").sort().join("");
    let ls=s.toLowerCase().split("").sort().join("");
    let p=document.querySelector("#result");
    if(lf==ls){
        p.innerHTML='given word is anagram'
    }
    else{
        p.innerHTML=`not a anagram`;
    }
}/*
function reset(){
    document.getElementById("first").value='';
    document.getElementById("second").value='';   
    let p=document.querySelector('#result');
    p.innerHTML='Your result';
}
function display(str){
    let f=document.querySelector("#first").value;
    let j=f.length;
    let flag=0;
    let p=document.querySelector("#result");
    for(let i=0;i<f.length;i++){
        if(f[i]==f[j-i-1]){
           continue
        }
        else{
            p.innerHTML=`given string is not palindrome`
            flag=1
            break
        }
   }
   if(flag==0){
    p.innerHTML=`given string is  palindrome`
    }  
}*/