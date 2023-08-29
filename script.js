const container = document.querySelector('.container');

function makeGrid(number) {

    for (i = 0; i < number; i++) {

        for (y = 0; y < number; y++) {

            const gridElement = document.createElement('div');

            gridElement.classList.add('grid');
            gridElement.style.width = '31.25px'
            gridElement.style.height = '31.25px'
        
            container.append(gridElement);

        }
       
    
    }
}

makeGrid(16)