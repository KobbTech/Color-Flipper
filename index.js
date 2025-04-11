const body = document.getElementsByTagName('body')[0];

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'lime', 'teal', 'navy', 'maroon', 'olive', 'silver', 'gold', 'coral', 'salmon', 'khaki', 'plum', 'orchid', 'lavender', 'wheat', 'tan', 'peachpuff', 'lightblue', 'lightgreen', 'lightpink', 'lightsalmon', 'lightyellow', 'lightgray', 'lightcyan', 'lightcoral', 'lightseagreen', 'lightsteelblue', 'lightgoldenrodyellow', 'lightslategray', 'lightpink', 'lightblue', 'lightgreen', 'lightyellow', 'lightgray', 'lightcyan', 'lightcoral', 'lightseagreen', 'lightsteelblue', 'lightgoldenrodyellow', 'lightslategray', 'lightpink', 'lightblue', 'lightgreen', 'lightyellow', 'lightgray', 'lightcyan', 'lightcoral', 'lightseagreen', 'lightsteelblue', 'lightgoldenrodyellow', 'lightslategray'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return body.style.backgroundColor = colors[randomIndex];
    
}