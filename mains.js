
let topDiv = document.getElementById('top')
let bottomDiv = document.getElementById('bottom')
let plusMinus = document.getElementById('plusminus')
let topColors = ['#fac8be','#acb1f3','#f3aceb'];
let bottomColors = ['#224048','#2c1e43','#431e42'];
let count = 0;
window.onload = () => {
        topDiv.style.backgroundColor = topColors[count]
        bottomDiv.style.backgroundColor = bottomColors[count]
    }

const changeColorF = () => {
    count++
    if(count < 3){
        topDiv.style.backgroundColor = topColors[count]
        bottomDiv.style.backgroundColor = bottomColors[count]  
    }
    if(count >= 3){
        count = 0;
        topDiv.style.backgroundColor = topColors[count]
        bottomDiv.style.backgroundColor = bottomColors[count]
    } 
}
