/* 

function Calculator() {
    let display;
    let reset = false;
    const displayElement = document.querySelector(".display");


    const input = {
        seven: "7",
        eight: "8",
        nine: "9",
        divide: "/",
        four: "4",
        five: "5",
        six: "6",
        multiply: "*",
        one: "1",
        two: "2",
        three: "3",
        add: "+",
        zero: "0",
        point: ".",
        subtract: "-",
    };

    this.buttonClick = function() {
        if(reset) {
            displayElement.innerText = "";
        }
        display = input[this.id]
        displayElement.innerText += display;
        reset = false;
    }

    this.getResult = function() {
        try {
            const result = new Function(`return ${displayElement.innerText}`);
            displayElement.innerText = result();
            reset = true;
        } catch {
            displayElement.innerText = "Error: Incorrect input"
            reset = true;
        }
        

    }

} */


//with Classes:


class Calculator {

    #display;
    #reset = false;
    #displayElement = document.querySelector(".display");

    
    #input = {
        seven: "7",
        eight: "8",
        nine: "9",
        divide: "/",
        four: "4",
        five: "5",
        six: "6",
        multiply: "*",
        one: "1",
        two: "2",
        three: "3",
        add: "+",
        zero: "0",
        point: ".",
        subtract: "-",
    };

    buttonClick(id) {
        if(this.#reset) {
            this.#displayElement.innerText = "";
        }
        this.#display = this.#input[id]
        this.#displayElement.innerText += this.#display;
        this.#reset = false;
    }
    

    getResult() {
        try {
            const result = new Function(`return ${this.#displayElement.innerText}`);
            this.#displayElement.innerText = result();
            this.#reset = true;
        } catch {
            this.#displayElement.innerText = "Error: Incorrect input"
            this.#reset = true;
        }
        
    }
    

}
const calc = new Calculator();

document.querySelectorAll(".input").forEach(element => element.addEventListener("click", () => {
    calc.buttonClick(element.id); // Pass the clicked element's id
    })
);

document.querySelector("#sum").addEventListener("click", () => {
    calc.getResult();
});

