function my_function(){
    a=document.getElementById('num1').value;
    try{
        if(isNaN(a)){
            throw "Error"
        }
        else{
            throw ""
        }
    }
    catch(err){
        document.getElementById("p1").innerHTML=err;
    }
   }

   function my_function1(){
    b=document.getElementById('num2').value;
    c=document.getElementById('num3').value;
    try{
        if(c == 0){
            throw "Error"
        }
        else{
            throw ""
        }
    }
    catch(err){
        document.getElementById("p2").innerHTML=err;
    }
    finally{
        document.getElementById('num2').value="";
        document.getElementById('num3').value="";
    }
   }

   function negative(){
    try{
        a=document.getElementById('num4').value;
        if(a < 0){
            throw "Error"
        }
        else{
            throw ""
        }
    }
    catch(err){
        document.getElementById("p3").innerHTML=err;
    }
    finally{
        document.getElementById('num4').value="";
    }
   }

   function myarray(arr){
    if(arr.length === 0){
        throw "Error! The array is empty"
    }
}
    
    try{
        let arr1=["Apple","Banana","Orange"];
            myarray(arr1);
        let arr2=[];
            myarray(arr2);    
    }
    catch(err){
        document.getElementById("p4").innerHTML=err;
        console.log(err);
    }

function string(str){
    if(str.length == 0);
        throw "The sring is empty"
}

try{
    let str1="Hello! How are you?"
          string(str1);
    let str2=""
         string(str2);
}
catch(err){
    document.getElementById("p5").innerHTML=err;
}
   
  