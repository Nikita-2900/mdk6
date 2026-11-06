const first_input = document.getElementById("firstInput")
const second_input = document.getElementById("secondInput")
const third_input = document.getElementById("thirdInput")
const button = document.getElementById("Button")
const result = document.querySelector(".result")

const first_error = document.getElementById("firstInputError")
const second_error = document.getElementById("secondInputError")
const third_error = document.getElementById("thirdInputError")


button.addEventListener("click", () => {

    const first = first_input.value
    const second = second_input.value
    const third = third_input.value
    if (Number.isNaN(first)) {
        first_error.innerHTML = "Вы ввели не число"
    }
    else if (Number.isNaN(third)) {
        third_error.innerHTML = "Вы ввели не число"
    }
    else if (!second === "+" || !second === "-") {
        second_error.innerHTML = "вы ввели не верное действие, введите: '+' или '-'"
    }
    else {
        if (second === "+") {
            result.innerHTML = Number(first) + Number(third)
        }
        else if (second === "-") {
            result.innerHTML = Number(first) - Number(third)
        }
    };
    
});