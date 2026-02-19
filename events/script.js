let btn1=document.querySelector("#btn1");
let currMode="light";

btn1.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
});