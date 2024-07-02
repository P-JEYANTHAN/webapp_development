function display(){
    let h=document.getElementById("height").value;
    let w=document.getElementById("weight").value;
    let he=(h/100);
    let bmi=(w/(he*he)).toFixed(2);

    let p=document.querySelector('#result');
    //console.log(h)
    if(bmi<=18.5){
        p.innerHTML=`Your bmi is ${bmi}. You are underweight`
    }
    else if(bmi>=18.5 && bmi<=24.9){
        p.innerHTML=`Your bmi is ${bmi}.Your are Normal`
    }
    else if(bmi>=25 && bmi<=29.9){
        p.innerHTML=`Your bmi is ${bmi}.Your are Overweight`
    }
    else{
        p.innerHTML=`Your bmi is ${bmi}.Your are Obuse`
    }

}
function reset(){
    document.getElementById("height").value='';
    document.getElementById("weight").value='';   
    let p=document.querySelector('#result');
    p.innerHTML='Your result';    
}