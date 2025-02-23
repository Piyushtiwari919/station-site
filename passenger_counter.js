let count = 0;
const countEl = document.getElementById("count_el")

const btnEl = document.getElementById("increment-btn")
const saveEl = document.getElementById("save-el")
const saveBtn = document.getElementById("save-btn")

const resetBtn = document.getElementById("reset-btn")

btnEl.addEventListener("click",()=>{
    count++;
    countEl.innerText=count;
})
saveBtn.addEventListener('click',()=>{
    let msgVar =` ${count} -`
    saveEl.innerText+=msgVar;
    console.log(count);
    
})
resetBtn.addEventListener('click',function (){
    count=0;
    countEl.innerText=count;
    saveEl.innerText="previous entries :";
})

