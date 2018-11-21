// Lecture: Project - Coding Task 3 - Solution

/*
var ul = document.querySelector('ul');

//**********ADD ITEMS
document.getElementById('add-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // console.log('Hello');

    var addInput = document.getElementById('add-input');
    
    if(addInput.value !== '') {
        var li = document.createElement('li'),
            firstPar = document.createElement('p'),
            secondPar = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            input = document.createElement('input');

        firstIcon.className = "fa fa-pencil-square-o";
        secondIcon.className = "fa fa-times";
        input.className = "edit-note";
        input.setAttribute('type', 'text');

        firstPar.textContent = addInput.value;

        secondPar.appendChild(firstIcon);
        secondPar.appendChild(secondIcon);
        li.appendChild(firstPar);
        li.appendChild(secondPar);
        li.appendChild(input);
        ul.appendChild(li);
        // console.log(li);
        addInput.value = '';
    }
});
*/
var ul = document.querySelector('ul');
console.log(ul);
document.getElementById('add-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    var addInput = document.getElementById('add-input');
    if(addInput.value !== '') 
    {
    
    
    var li = document.createElement('li'),
        firstPar = document.createElement('p'),
        secondPar = document.createElement('p'),
        firstIcon = document.createElement('i'),
        secondIcon = document.createElement('i'),
        input = document.createElement('input');

    firstIcon.className = 'fa fa-pencil-square-o';
    secondIcon.className = 'fa fa-times';
    input.className = 'edit-note';
    input.setAttribute('type', 'text');

    firstPar.textContent = addInput.value;
    
    secondPar.appendChild(firstIcon);
    secondPar.appendChild(secondIcon);
    li.appendChild(firstPar);
    li.appendChild(secondPar);
    li.appendChild(input);

    ul.appendChild(li);
    addInput.value = '';
    }

 /// Edit and Delete
 ul.addEventListener('click', function(e){
    
   console.log(e.target.classList[0]);      
     
 });

 
});