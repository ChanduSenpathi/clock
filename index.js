let sec=document.querySelector('.seconds-hand')
let min=document.querySelector('.minute-hand')
let hour=document.querySelector('.hour-hand')
const setTiming=()=>{
    let date=new Date()
    let seconds=date.getSeconds()
    let secondsDeg=((seconds/60)*360)+90  
    sec.style.transform=`rotate(${secondsDeg}deg)`

    let minutes=date.getMinutes()
    let minutesDeg=((minutes/60)*360)+90
    min.style.transform=`rotate(${minutesDeg}deg)`
    
    let hours=date.getHours()
    let hourDeg=((hours/12)*360)+90
    hour.style.transform=`rotate(${hourDeg}deg)`
}
setInterval(setTiming, 1000);