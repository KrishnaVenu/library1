






function validate(){
    let email=document.getElementById("email").value;
    let pwd =document.getElementById("pwd").value;
    let error1=document.getElementById("error1");
    
    let regexp=/^([A-Za-z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regexp1=/^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%&*]+.{8,15})$/;
    
     if(!regexp.test(email)){ 
         document.getElementById("error1").innerHTML="invalid id"; 
          error1.style.color="red"; 
         return false;
        }
        
                else if(!(regexp1.test(pwd))){
                  document.getElementById("error2").innerHTML="invalid";
                   error2.style.color="red"; 
                    return false;
                }
                
                 else{   
                    return true;
               
                 }
            }
    
