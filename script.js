let overral = 0

while (overral < 10) {
    const user = +prompt('');
    let computer = '';
    const num = Math.floor(Math.random() * 3);

    if (num === 0) {
        computer = 'Камень';
    } else if (num === 1) {
        computer = 'Бумага';
    } else if (num === 2) {
        computer = 'Ножницы';
    }

    if (user === computer) {
        alert('Drag');
    } else if (user === 0 || computer === 1) {
        alert('Computer Won');
    } else if (user === 0 || computer === 2) {
        alert('You Won');
    } else if (user === 1 || computer === 0) {
        alert('Computer Won') 
    } else if (user === 1 || computer === 1) {
        alert('You Won')
    } else if (user === 2 || computer === 0) {
        alert('You Won')
    } else if (user === 2 || computer === 2) {
        alert('Computer Won')
    }
}

alert('Game Over')