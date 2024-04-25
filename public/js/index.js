
var onBtn=true
document.getElementById("arrow1").addEventListener('click',()=>{
    displays("list1");
 });
 document.getElementById("arrow2").addEventListener('click',()=>{
    displays("list2");
 });
document.getElementById("arrow3").addEventListener('click',()=>{
   displays("list3");
});

 document.getElementById("arrow4").addEventListener('click',()=>{
    displays("list4");
 });
 document.getElementById("arrow5").addEventListener('click',()=>{
     displays("list5");
  });


function displays(lis){
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



//login and registration card show

var container=document.querySelector('.msg-container');

document.getElementById('xa').addEventListener('click',()=>{
    console.log("click");
    container.classList.remove('msg-container-active');
})

/**-------------------------------------------------------------------------------------- */

// console.log("Hii Im Terminal");

const suggestionBox=document.getElementById('suggestion');
const inputBox=document.getElementById("search-input");

inputBox.addEventListener('keyup',fillterSuggestion);

async function fillterSuggestion(){

    try{
   let input=this.value;
   // console.log(this.value);
   const responce=await fetch('../json/data.json');
   const dataArray=await responce.json();
   //console.log(dataArray);
   var suggest=[];
   if(input.length){
   suggest=dataArray.filter((data)=>{
    return data.search.toLowerCase().includes(input.toLowerCase());
    
   })
   //console.log(suggest);
      }
    suggestionBox.style.display="none";
    if(!suggest.length){
        suggestionBox.innerHTML="";
    }
    display(suggest);
    
    }catch(error){
       console.log("File Not Found",error);
    }
}

function display(suggest){
    if(suggest.length===0){
        suggestionBox.style.display="none"
    }
    
    var template=suggest.map((data)=>{
       
         return `<li onclick=selectData(this)>${data.search}</li>`
    })
        
        suggestionBox.style.display="block";
        suggestionBox.innerHTML=`<ul>${template.join('')}</ul>`;
    
   

    
}
function selectData(list){
    inputBox.value=list.innerHTML;
    suggestionBox.style.display="none";
    
}
inputBox.addEventListener('click',()=>{
    inputBox.select();
})