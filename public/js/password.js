document.getElementById('eye1').addEventListener('click',()=>{
 let password=document.getElementById('password1');
   let type=password.getAttribute('type')==='password'?'text':'password'
   password.setAttribute('type',type);
});
document.getElementById('eye2').addEventListener('click',()=>{
    let password=document.getElementById('password2');
      let type=password.getAttribute('type')==='password'?'text':'password'
      password.setAttribute('type',type);
   });