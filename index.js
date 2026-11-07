const first_input = document.getElementById("firstInput")
const second_input = document.getElementById("secondInput")
const third_input = document.getElementById("thirdInput")
const button = document.getElementById("Button")
const result = document.querySelector(".result")

let first_error = document.getElementById("firstInputError")
let second_error = document.getElementById("secondInputError")
let third_error = document.getElementById("thirdInputError")


button.addEventListener("click", () => {

    const first = first_input.value
    const second = second_input.value
    const third = third_input.value

    first_error.textContent = " "
    second_error.textContent = " "
    third_error.textContent = " "

    if (Number.isNaN(Number(first))) {
        // console.log("e1")
        first_error.textContent = "Вы ввели не число"
    }
    else if ((second === "+" || second === "-") === false) {
        // console.log("e2")
        second_error.textContent = "вы ввели не верное действие, введите: '+' или '-'"
    }
    else if (Number.isNaN(Number(third))) {
        // console.log("e3")
        third_error.textContent = "Вы ввели не число"
    }
    else {
        if (second === "+") {
            // console.log("+")
            result.innerHTML = Number(first) + Number(third)
        }
        else if (second === "-") {
            // console.log("-")
            result.innerHTML = Number(first) - Number(third)
        };
    };
    
});