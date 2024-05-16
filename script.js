const day=document.getElementById("day")
const hours=document.getElementById("hours")
const min=document.getElementById("min")
const sec=document.getElementById("sec")

function update() {
const currentyear=new Date().getFullYear();
const newyear=new Date(`january 1 ${currentyear+1} 00:00:00`);
const currentdate=new Date();
const diff=newyear-currentdate;
const d=Math.floor(diff/1000/60/60/24)
day.innerHTML=d<10?"0"+d:d;
const h=Math.floor((diff/1000/60/60)%24)
hours.innerHTML=h<10?"0"+h:h;
const m=Math.floor((diff/1000/60)%60)
min.innerHTML=m<10?"0"+m:m;
const s=Math.floor((diff/1000)%60)
sec.innerHTML=s<10?"0"+s:s;
}
update()
setInterval(update,1000)