const body = document.getElementsByTagName('body')[0];


function setColor(name) {
    body.style.backgroundColor = name;

    // Get the computed style to retrieve the actual color code
    const computedStyle = window.getComputedStyle(body);
    const colorCode = computedStyle.backgroundColor;

    const display = document.getElementById('display');
    display.innerText = `Current Color Code: ${colorCode}`;
}

// function setColor(name) {
//     body.style.backgroundColor = name;

//     //now i want to create a function that will display the color code of the current background color and disply it in a h4 tag with an id of 'display'
//     const colorCode = body.style.backgroundColor;
//     const display = document.getElementById('display');
//     display.innerText = `Current Color Code: ${colorCode}`;
// }

// function randomColor() {
//     const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'lime', 'teal', 'navy', 'maroon', 'olive', 'silver', 'gold', 'coral', 'salmon', 'khaki', 'plum', 'orchid', 'lavender', 'wheat', 'tan', 'peachpuff', 'lightblue', 'lightgreen', 'lightpink', 'lightsalmon', 'lightyellow', 'lightgray', 'lightcyan', 'lightcoral', 'lightseagreen', 'lightsteelblue', 'lightgoldenrodyellow', 'lightslategray', 'lightpink', 'lightblue', 'lightgreen', 'lightyellow', 'lightgray', 'lightcyan', 'lightcoral', 'lightseagreen', 'lightsteelblue', 'lightgoldenrodyellow', 'lightslategray', 'lightpink', 'lightblue', 'lightgreen', 'lightyellow', 'lightgray', 'lightcyan', 'lightcoral', 'lightseagreen', 'lightsteelblue', 'lightgoldenrodyellow', 'lightslategray'];
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     return body.style.backgroundColor = colors[randomIndex];
    
// }


function randomCol() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;

    //now i want to create a function that will display the color code of the current background color and disply it in a h4 tag with an id of 'display'
    const colorCode = body.style.backgroundColor;
    const display = document.getElementById('display');
    display.innerText = `Current Color Code: ${colorCode}`;
}
 randomCol();

