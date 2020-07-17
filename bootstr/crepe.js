let btnplus=Array.from(document.getElementsByClassName("btn-outline-success-1"));
for(let i=0; i<btnplus.length;i++){
    btnplus[i].addEventListener("click",function()
    {
        btnplus[i].nextElementSibling.innerText++;
        sum();
    })
}
let btnminus=Array.from(document.getElementsByClassName("btn-outline-danger"));
for(let i=0; i<btnminus.length;i++){
    btnminus[i].addEventListener("click",function(){
    if(btnminus[i].previousElementSibling.innerText>0){
        btnminus[i].previousElementSibling.innerText--;
        sum();
    }})};

function sum()
{let price=document.getElementsByClassName("card-text");
let qte=document.getElementsByClassName("qte");
let sum=0;
for(let i=0; i<price.length;i++){
    console.log(price[i].innerHTML)
    sum+=price[i].innerText*qte[i].innerText;
}
return (document.getElementById("total").innerHTML="Total Price:"+sum +"DT")}
//trash
let trash=document.querySelectorAll(".fa-trash-alt")
// trash.map((el)=>el.addEventListener("click",function k()
// {
//     el.parentNode.parentNode.remove();
//     sum();
// }));

for (let i=0;i<trash.length;i++){
    trash[i].addEventListener("click",function t(){
        trash[i].parentNode.parentNode.remove();
        sum()
        trash.length--
        console.log(trash)
    })
}


let heart=Array.from(document.querySelectorAll(".fa-heart"));

    heart.map(el=>el.addEventListener("click",function(){
    if (el.style.color==="red"){
        el.style.color="gray";
    }
    else 
    {el.style.color="red";}
}));


