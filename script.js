const container = document.querySelector('.container');
const inputBox = document.querySelector('.input-box')



function makeGrid(number) {

    for (i = 0; i < number; i++) {

        for (y = 0; y < number; y++) {

            const gridElement = document.createElement('div');
            const gridSize = 500;


            gridElement.classList.add('grid');
            gridElement.style.width = `${gridSize/number}px`
            gridElement.style.height = `${gridSize/number}px`
        
            container.append(gridElement);

        }
    }

}

makeGrid(32)

/*const gridBox = document.querySelectorAll('.grid');

console.log(gridBox);

gridBox.forEach((box) => {

    box.addEventListener('click', epicClick());

})

function epicClick() {

    console.log('hey hey hey')
}*/


function onHover() {

    const gridBox = document.querySelectorAll('.grid');

    for (i = 0; i < gridBox.length; i++) {

        let currentBox = gridBox[i]

        currentBox.addEventListener('mouseover', function() {
            currentBox.style.backgroundColor= "black";
        })

    }
}

onHover();

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', resetBoard);

function resetBoard() {

    const gridBox = document.querySelectorAll('.grid');

    for (i = 0; i < gridBox.length; i++) {

        let currentBox = gridBox[i]
        currentBox.style.backgroundColor= "whitesmoke";
        }

    }

/*document.querySelector('input-form').addEventListener('submit', function(event){
event.preventDefault();
let userInput = document.getElementById('input').value; 
alert('hello' + userInput);
});*/

