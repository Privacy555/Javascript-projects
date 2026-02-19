const URL="https://jsonplaceholder.typicode.com/posts";
const factPara=document.querySelector("#facts");

const getfacts=async ()=>{
    let response=await fetch(URL);
    let data= await response.json();
   
    const text=data[1].body;
    console.log(data[1].body);
    factPara.innerText=text;
}
document.querySelector(".btn").addEventListener("click",getfacts)