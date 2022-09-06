let display = document.getElementById('displayId');

let columns = Array.from(document.getElementsByClassName('column'));

columns.map(column => {
    column.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C': {
                display.innerText = '';
                break;
            }
            case '←': {
               if (display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
               }
               break;
            }
            case '=': {
                if (display.innerText === '') {
                    display.innerText = '';
                    return;
                }
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error not invalid value!'
                }
                break;
            }
            default: {
                if (display.innerText.length > 20) {
                    return;
                }
                display.innerText += e.target.innerText;
                break;
            }   
        }
    })
})

