// console.log("Hii I am Otp");
function moveToNext(current,nextBox){
    if(current.value.length==1){
        document.getElementById(nextBox).focus();
    }

    // if(current.value.length>1){
    //     console.log("HII");
    //     current.value=current.value.slice(0,current.value.length);
    // }
}