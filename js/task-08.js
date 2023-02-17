const formEl = document.querySelector(".login-form");
const allInputs = document.querySelectorAll("input");
// console.log(allInputs);
// const user = [...allInputs].reduce((input) => {
//     input.name = input.value;
// });
// console.log([...allInputs]);

formEl.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const user = {
        email: formElements.email.value,
        password: formElements.password.value,
    };

    if (user.email === "" || user.password === "") {
        alert("All form fields must be completed!");
    } else {
        formEl.reset();
        console.log(user);
    }
}
