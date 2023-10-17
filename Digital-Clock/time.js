function newtime() {
  let time = new Date();
  let hours =  time.getHours();
  let mins = time.getMinutes();
  let seconds = time.getSeconds();
  let day = time.getDay();
  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();
  return (date + " / "+ month + " / " + year + " , " + hours + " h : " + mins + " m : " + seconds + " s");
}
function printtime() {
  let tm = document.getElementsByClassName("time");
  createtime = document.createElement("time");
  createtime.innerText = newtime();
  tm[0].replaceChildren(createtime);
}

setInterval(printtime, 1000);
