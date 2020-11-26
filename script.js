let name = document.getElementById("username");
let psw = document.getElementById("password");
let name1 = document.getElementById("username1");
let psw1 = document.getElementById("password1");




function preset(callback){

    if(callback()==true){
                if(name.value=="admin" && psw.value=="12345"){ 
                    document.getElementById("username").className = "form-control is-valid";
                    document.getElementById("password").className = "form-control is-valid";               
                    return true; 
                }
                else{
                    psw1.innerHTML= "Username or Password is incorrect";
                    psw1.style.color= "red";
                    name1.innerHTML= "";
                    name1.style.color= "red";
                    document.getElementById("username").className = "form-control is-invalid";
                    document.getElementById("password").className = "form-control is-invalid";
                    return false;
                }
                 
    }
    else{
        return false;
    }      
}

function validation(){
   
    let store1 = false;
    let store2 = false;
    let kkk1  = /^([A-Za-z\.]+)$/;
    
    if(name.value.trim() == "" ){
        store1= false;
        name1.innerHTML= "Name can not be empty";
        name1.style.color= "red";
        document.getElementById("username").className = "form-control is-invalid";
        
    }
    else if(kkk1.test(name.value.trim())){
        store1 = true;
        name1.innerHTML= "Looks Good";
        name1.style.color= "green";
        document.getElementById("username").className = "form-control is-valid";


    }
    else{
        store1= false;
        name1.innerHTML= "Names must be of letters";
        name1.style.color= "red";
        document.getElementById("username").className = "form-control is-invalid";

    }

    if(psw.value.trim() == "" ){
        store2= false;
        psw1.innerHTML= "Name can not be empty";
        psw1.style.color= "red";
        document.getElementById("password").className = "form-control is-invalid";
        
    }
    else if(psw.value.length< 5){
        store2 = false;
        psw1.innerHTML= "Minimum Five Characters Required";
        psw1.style.color= "red";
        document.getElementById("password").className = "form-control is-invalid";


    }
    else{
        
        psw1.innerHTML= "Looks Good";
        psw1.style.color= "green";
        document.getElementById("password").className = "form-control is-valid";
        store2= true;
    }


    if(store1 ==true && store2==true){
        return true;
    }
    else{
        return false;
    }
   
}
// const errorFlags={ usernameErrFlag:true, passwordErrFlag:true } 
//   const validate=(el,authValue)=>{ 
//       let flagName=el+"ErrFlag"; 
//         if($(`#${el}`).val()===authValue){ 
//             errorFlags[flagName]=false; 
//             const msg=''; 
//             $(`#${el}Error`).html(msg); 
//             $(`#${el}Error`).addClass('hidden'); 
//         } 
//         else{ 
//             errorFlags[flagName]=true; 
//             const msg=`Invalid ${el} `; 
//             $(`#${el}Error`).html(msg); 
//             $(`#${el}Error`).removeClass('hidden'); 
//         } 
//     } 
// $('#username').on('input',(e)=>{validate('username','admin')}); 
// $('#password').on('input',(e)=>{validate('password','12345')}); 
// const redirectAndAuthenticate=()=>{ 
//     window.localStorage.setItem('username',JSON.stringify({username:'admin',password:'12345'})); 
//     window.location='main.html'; 
// } 
// const loginAction=(e,callback)=>{ 
//     if(!errorFlags['usernameErrFlag'] && !errorFlags['passwordErrFlag']){
//          e.preventDefault(); 
//          callback(); 
//         } 
//     } 
// $('#loginBtn').on('click',(e)=>{ loginAction(e,redirectAndAuthenticate); } )