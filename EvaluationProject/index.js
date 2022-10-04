//-----------------View------------------

const bigDiv=document.getElementById('big-div')
const renderData = (number) =>{
for(let i =0;i<number;i++){
    fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => {return data.results[0]})
    .then((a)=>{
        var newList=`<div class="inner-div">
        <div>
            <img src="${a.picture.medium}" alt="">
        </div>
        <div>
        <span>name:${a.name.title} ${a.name.last}</span>
        <span>email:${a.email}</span>
        <span>Phone:${a.phone}</span>
        <button id=${a.email} value=${a.dob.date}>Show Dob</button>
        </div>
    </div>`
    bigDiv.innerHTML+= newList
     })
     .then(()=>{
    assignButton();
     })
  }
}
renderData(20)

//------------Model--------------
const showDobButton=(e)=>{
    if(e.innerText=='Show Dob'){
        e.innerText ='Birthday: '+ e.value;
        e.style.userSelect = 'text'
        e.style.border='none';
        e.style.backgroundColor='white';
        e.style.padding='0';
    }else{
        e.innerText='Show Dob'
        e.style.userSelect="none";
        e.style.border='1px solid grey';
        e.style.backgroundColor='buttonface';
        e.style.padding='1px 6px 1px 6px';
        e.style.borderRadius='2px'
    }
}

const assignButton=()=>{
    const buttonList=document.querySelectorAll('button')
    if(buttonList.length===20){
    buttonList.forEach(e=>{
        e.addEventListener('click',()=>{
            showDobButton(e)
        })
    })}
}


//------------Controller--------------

let submitInput=document.getElementById('submit-input')
submitInput.addEventListener('click',()=>{
    bigDiv.innerHTML='';
    renderData(20)
})
