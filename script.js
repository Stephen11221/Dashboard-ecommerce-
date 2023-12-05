// Modal submit customers data to the table  

let customersName;
let email;
let phoneno;
let product;

document.getElementById("submit").onclick=function(){
    
    customersName=document.getElementById("name").value ;
    console.log(customersName);

    email = document.getElementById("email").value;
    console.log(email);

    phoneno=document.getElementById("phoneno"). value ;
    console.log(phoneno);


    product = document.getElementById("product").value;
    console.log(product);

    document.getElementById("dataName").innerHTML =customersName;
    document.getElementById("dataEmail").innerHTML=email;
    document.getElementById("dataPhone") .innerHTML =phoneno;
    document.getElementById("dataProduct").innerHTML=product;
}
