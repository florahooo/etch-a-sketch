const container = document.querySelector('.container');
const inputBox = document.querySelector('.input-box')

makeGrid()
const gridButton = document.getElementById('grid-button')
gridButton.addEventListener('click', makeGrid);

function makeGrid() {

    let number =  24//prompt("Please enter the squares per side", "16");

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

function clearBoard() {

}




/*const gridBox = document.querySelectorAll('.grid');

console.log(gridBox);

gridBox.forEach((box) => {

    box.addEventListener('click', epicClick());

})

function epicClick() {

    console.log('hey hey hey')
}*/

onHoverBlack();

const blackButton = document.getElementById('black-button');
const rainbowButton = document.getElementById('rainbow-button');

blackButton.addEventListener('click', onHoverBlack);
rainbowButton.addEventListener('click', onHoverRainbow)

function onHoverBlack() {

    const gridBox = document.querySelectorAll('.grid');

    for (i = 0; i < gridBox.length; i++) {

        let currentBox = gridBox[i]

        currentBox.addEventListener('mouseover', function() {
            currentBox.style.backgroundColor= "black";
        })

    }
}


function onHoverRainbow() {

    const gridBox = document.querySelectorAll('.grid');
    

    for (i = 0; i < gridBox.length; i++) {

        let currentBox = gridBox[i]
        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        currentBox.addEventListener('mouseover', function() {
            currentBox.style.backgroundColor= "#" + randomColor;
        })

    }

}

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', resetBoard);

function resetBoard() {

    const gridBox = document.querySelectorAll('.grid');

    for (i = 0; i < gridBox.length; i++) {

        let currentBox = gridBox[i]
        currentBox.style.backgroundColor= "whitesmoke";
        }

    }

    


