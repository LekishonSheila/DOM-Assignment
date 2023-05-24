// Change document background color to silver
document.body.style.backgroundColor = 'silver';

// Change the font color for h1 title tag to green
let h1 = document.getElementById('title');
h1.style.color = 'green';

// Change the font case for h3 title tags to uppercase
let h3 = document.getElementsByTagName('h3');
for (let i = 0; i < h3.length; i++) {
    h3[i].style.textTransform = 'uppercase';
    
}
// Add one more fruit to the fruits list
let fruList = document.getElementById('fruList');
let newfruit = document.createElement('li');
newfruit.textContent ='Passion';
fruList.appendChild(newfruit);

// Add one more vegetable to the vegetables list
let vegList = document.getElementById('vegList');
let newVegetable = document.createElement('li');
newVegetable.textContent = 'spinach';
vegList.appendChild(newVegetable);







