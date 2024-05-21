const items=[]
const add =()=>{
    if (arr.value==''){
        alert('input something mumu man')
    } else{
        items.push(arr.value)
        arr.value=''
        disp.innerHTML=''
        for(i=0; i<items.length; i++){
            console.log(items);   
         disp.innerHTML += `<p>${i + 1}. ${items[i]}</p>`
        }
    }
   
}