function noBack(){window.history.forward()}
        noBack();
        window.onload=noBack;
        window.onpageshow=function(evt){if(evt.persisted)noBack()}
        window.onunload=function(){void(0)}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText);
        var data = "";
        
        for(var i=0;i<response.length;i++){
            if(response[i].completed==true){
            
            data += '<li class=" list-group-item">' +'<input type="checkbox" value="" disabled checked>'+' '+' '+ response[i].title + '   '+  '</li>';
            }
            else{
            data += '<li class=" list-group-item">' +'<input type="checkbox" value="" >'+' '+' '+ response[i].title + '   '+  '</li>';
            } 
        }
        document.getElementById("demo").innerHTML= data;
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos")
xhttp.send();

document.getElementById('demo').onclick = function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var count=checkboxes.length;
    function countval(number){
       return new Promise(function(resolve,reject){
            if (number==95){
                resolve('success');
            }else{ reject('error');}
        });
    }
    let promise = countval(count);
    promise
    .then(function(){alert("Congrats. 5 Tasks have been Successfully Completed "); return job(count);})
    .catch(function(){ return job(count);})

  }
  