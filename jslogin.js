function display(){
    msg=open("","NewWindow","width=400,height=500")
    msg.document.write("<head><title>User Data</title></head>");
    msg.document.write(`Name:${document.getElementById("name").value}<br>`);
    msg.document.write(`Email-Id:${document.getElementById("email").value}<br>`);
    msg.document.write(`DOB:${document.getElementById("dob").value}<br>`);
    msg.document.write(`Gender:${document.getElementById("gender").value}<br>`);
    msg.document.write(`Phone-no:${document.getElementById("phone").value}<br>`);
    msg.document.write(`Occupation:${document.getElementById("occu").value}<br>`);
    msg.document.write(`Skill:${document.getElementById("skill").value}<br>`);
    msg.document.write(`Comment:${document.getElementById("comment").value}<br>`);    
}
function reset(){
    document.getElementById("name").value='';
    document.getElementById("email").value='';
    document.getElementById("dob").value='';
    document.getElementById("gender").value='';
    document.getElementById("phone").value='';
    document.getElementById("occu").value='';
    document.getElementById("skill").value='';
    document.getElementById("comment").value='';        
}



