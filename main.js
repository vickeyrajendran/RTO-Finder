const inputEl=document.querySelector('input')
// import data from data.json
async function getjsonData(){
    const response=await fetch("data.json")
    const json=await response.json()
    return json
}


inputEl.addEventListener('keyup',(e)=>{
    //   check validations here
async function searchRecord(value){
console.log('search',value.toUpperCase());
 const jsonData= await getjsonData()
 const finded=jsonData.find((record) =>{
   return record.rto_code===value || value.toUpperCase().startsWith(record.rto_code)
});
const resultSectionEl=document.querySelector('#resultSection')
if(finded){
    resultSectionEl.classList.remove('hidden')  
    // update UI field
    resultSectionEl.querySelector('#rtoId').innerText=finded.id
    resultSectionEl.querySelector('#rtoCode').innerText=finded.rto_code
    resultSectionEl.querySelector('#rtoLocation').innerText=finded.location
    resultSectionEl.querySelector('#rtoType').innerText=finded.type
    resultSectionEl.querySelector('#rtoDistrict').innerText=finded.district
}
else{
    resultSectionEl.classList.add('hidden')
     alert('Oops! Dont put space between TN and RTO code or wrong RTO Code')
}


console.log(finded);
}
if(e.key==='Enter'){
    if(inputEl.value.length>3){
        searchRecord(inputEl.value)
        console.log('pressed');
    }
    

}

})
