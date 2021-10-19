let numberPg = document.getElementById('number-pg');
let resultPg = document.getElementById('result-pg');
let pointsPg = document.getElementById('points-pg');

function result() {
    let output =[];
    let j = 0;
    for (let i = 3; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output[j] = i;
            j++;
        } else if (i % 3 === 0) {
            output[j] = i;
            j++;
        } else if (i % 5 === 0) {
            output[j] = i;
            j++;
        }
    }
    return output;
}

    let sortNumRevPop = result();
    let x = Math.floor(Math.random() * (sortNumRevPop.length));
    let points = 0;


numberPg.textContent = sortNumRevPop[x];

function fizz() {
    if ((sortNumRevPop[x] % 3 === 0) && (sortNumRevPop[x] % 5 !== 0)){
        document.getElementById('result-pg').style.color = 'green';
        resultPg.textContent = `Number: ${sortNumRevPop[x]} divide only by 3 is good answer!!!`;
        x = Math.floor(Math.random() * (sortNumRevPop.length));
        numberPg.textContent = sortNumRevPop[x];
        points += 1;
        pointsPg.textContent = `Your points: ${points}`;
    } else {
        document.getElementById('result-pg').style.color = 'red';
        resultPg.textContent = `Number: ${sortNumRevPop[x]} divide only by 3 is bad answer.`;
        x = Math.floor(Math.random() * (sortNumRevPop.length));
        numberPg.textContent = sortNumRevPop[x];
        points -= 1;
        pointsPg.textContent = `Your points: ${points}`;
    }
}

function fizzbuzz(){
    if ((sortNumRevPop[x] % 3 === 0) && (sortNumRevPop[x] % 5 === 0) ) {
        document.getElementById('result-pg').style.color = 'green';
        resultPg.textContent = `Number: ${sortNumRevPop[x]} divide by 3 and 5 is good answer!!!`;
        x = Math.floor(Math.random() * (sortNumRevPop.length));
        numberPg.textContent = sortNumRevPop[x];
        points += 1;
        pointsPg.textContent = `Your points: ${points}`;
    } else {
        document.getElementById('result-pg').style.color = 'red';
        resultPg.textContent = `Number: ${sortNumRevPop[x]} divide by 3 and 5 is bad answer`;
        x = Math.floor(Math.random() * (sortNumRevPop.length));
        numberPg.textContent = sortNumRevPop[x];
        points -= 1;
        pointsPg.textContent = `Your points: ${points}`;
    }
}

function buzz(){
    numberPg.textContent = sortNumRevPop[x];
    if ((sortNumRevPop[x] % 5 === 0) && (sortNumRevPop[x] % 3 !== 0)) {
        document.getElementById('result-pg').style.color = 'green';
        resultPg.textContent = `Number: ${sortNumRevPop[x]} divide only by 5 is good answer!!!`;
        x = Math.floor(Math.random() * (sortNumRevPop.length));
        numberPg.textContent = sortNumRevPop[x];
        points += 1;
        pointsPg.textContent = `Your points: ${points}`;
    } else {
        document.getElementById('result-pg').style.color = 'red';
        resultPg.textContent = `Number: ${sortNumRevPop[x]} divide only by 5 is bad answer`;
        x = Math.floor(Math.random() * (sortNumRevPop.length));
        numberPg.textContent = sortNumRevPop[x];
        points -= 1;
        pointsPg.textContent = `Your points: ${points}`;
    }
}