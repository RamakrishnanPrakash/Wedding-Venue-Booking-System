/*
var onBtn=true
document.getElementById("arrow1").addEventListener('click',()=>{
    display("list1");
 });
document.getElementById("arrow").addEventListener('click',()=>{
   display("list");
});
document.getElementById("arrow2").addEventListener('click',()=>{
    display("list2");
 });


function display(lis){
    var list=document.getElementById(lis); 
    if(onBtn==false){
        list.style.display="none";
        onBtn=true;
    }
   else{
    list.style.display="block";                 
                                                          
    onBtn=false;
   }
}
*/


//login and registration card show

var container=document.querySelector('.msg-container');

document.getElementById('xa').addEventListener('click',()=>{
    console.log("click");
    container.classList.remove('msg-container-active');
})