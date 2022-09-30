
  let obj=[];
  for(let i =0;i<20;i++){
    fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => obj.push(data.results[0]));
  }


setTimeout(() => {
  render(obj);
}
, 4000)
function newObj(){
    obj=[];
    setTimeout(() => {
        for(let i =0;i<20;i++){
            fetch('https://randomuser.me/api')
            .then((response) => response.json())
            .then((data) => obj.push(data.results[0]));
          }
    }
    , "100")

}

function render(data){
    var bigDiv=document.getElementById('big-div')
    bigDiv.innerHTML='';
        data.forEach(e=>{
            var newList=`<div class="inner-div">
                  <div>
                      <img src="${e.picture.medium}" alt="">
                  </div>
                  <div>
                      <span>name:${e.name.title} ${e.name.last}</span>
                      <span>email:${e.email}</span>
                      <span>Phone:${e.phone}</span>
                      <button id=${e.email}>Show Dob</button>
                  </div>
              </div>`
              bigDiv.innerHTML+= newList
              })

let buttonList=document.querySelectorAll('button')
buttonList.forEach(e=>{
    e.addEventListener('click',function(){
     for(let i = 0; i < data.length;i ++){
         if(data[i].email==e.id){
           if(e.innerText.includes('Show')){
             e.innerText = 'Birthday: '+ data[i].dob.date
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
     }
    })
   })
    }

const reloadButton = document.getElementById('reload')
reloadButton.addEventListener('click',()=>{
newObj()
setTimeout(() => {
    render(obj);
}
, "2000")
})
