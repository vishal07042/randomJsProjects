






const time = document.querySelector('.time');
const btn = document.querySelector('.btn');
const tray = document.querySelector('.btntr')
const h3 = document.querySelector('.trays')

let count = 0;
let min = 0;
let hours = 0;
let milliseconds=0;
let intervalId;

function clic() {
    clearInterval(intervalId);

    intervalId = setInterval(() => {

        milliseconds= milliseconds+1;
        if(milliseconds>59){
            milliseconds=0;
            count=count+1;
        }
        

        if (count > 59) {
            count = 0;
            min = min + 1;

            if (min > 59) {
                min = 0;
                hours = hours + 1;
            }
        }

        time.textContent = `${hours}:${min}:${count} :${milliseconds}`;
    }, 10);
}

btn.addEventListener('click', clic);

tray.addEventListener('click', function (){ 
 const w=   document.createElement('div')
 
 w.textContent=`${hours}:${min}:${count} :${milliseconds}`;

//  w.setAttribute('class','div').


    h3.append(w)
    
})
