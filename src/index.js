import data from './data.json' assert {type:'json'};

const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const cards = document.querySelectorAll('.time');
const btns = document.querySelectorAll('.btn');
 
 defaultData();

function updataData(e){
    const type = e.target.dataset.time;
    cards.innerHTML = '';
        cards.forEach((card,index) =>{
            card.innerHTML = `<p class="text-3xl sm:text-5xl">${data[index].timeframes[`${type}`].current}hrs</p>
            <p class="text-xs text-accent_blue-100">Last day ${data[index].timeframes[`${type}`].previous}-hrs</p>`
        });
}
function defaultData(){
    cards.innerHTML = '';
        cards.forEach((card,index) =>{
            card.innerHTML = `<p class="text-3xl sm:text-5xl">${data[index].timeframes.weekly.current}hrs</p>
            <p class="text-xs text-accent_blue-100">Last day ${data[index].timeframes.weekly.previous}-hrs</p>`
        });
}

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        removeActiveClasses();
        btn.classList.add('active');
        updataData(e);
    })
});

function removeActiveClasses() {
    btns.forEach(btn => {
        btn.classList.remove('active');
    })
}
