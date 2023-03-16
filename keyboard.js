const NROWS = 3
const NCOLS = 10

// listen for the "load" event of the window object


// create a Letter class
class Letter {
    constructor(ch, callback) {
        // assign the passed in character to the object
        Object.assign(this, { ch })
        // create a div element
        this.div = document.createElement('button')
        // set the class name to 'letter'
        this.div.className = 'letter'
        this.div.type = 'submit'
        // set the inner HTML of the div to the character
        this.div.innerHTML = ch
        // add a click event listener to the div, currently empty
        this.div.addEventListener('click', () => {
            if (ch === "ENTER") {
                ch = "Enter"
            }
            else if (ch === "\u232B") {
                ch = "Backsapce"
            }
            callback(ch)
        });
    }
}

class Row {
    constructor(letters) {
        this.letters = letters
        this.div = document.createElement('div')
        this.div.className = 'row'
    }
    addLettersToDiv() {
        this.letters.forEach(letter => {
            this.div.appendChild(letter.div);
        });
    }
}

class Keyboard {
    constructor(callback) {
        this.rows = []
        this.div = document.createElement('div')
        this.callback = callback

        // create an array of letters
        const letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ENTER", "z", "x", "c", "v", "b", "n", "m", "\u232B"]
        let keyboard_count = 0;
        // loop over the number of rows
        for (let i = 0; i < NROWS; i++) {
            const row_letters = []
            // loop over the number of columns
            let NCOLS = (i % 3) ? 9 : 10;
            for (let j = 0; j < NCOLS; j++) {
                row_letters.push(new Letter(letters[keyboard_count], this.callback))
                keyboard_count++
            }
            const row = new Row(row_letters)
            row.addLettersToDiv()
            this.rows.push(row)
            this.rows.forEach(row => {
                this.div.appendChild(row.div)
            });
            // append the row to the board

        }
    }
}

