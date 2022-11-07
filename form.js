function validate() {
    if (document.myForm.Name.value === "" && document.myForm.Email.value === "" && document.myForm.Age.value === "" && document.myForm.number.value === "") {
        alert("Please enter all the details first!");
        return false;
    }

    if (document.myForm.Name.value === "") {
        alert("Please enter your name!");
        document.myForm.Name.focus();
        return false;
    }

    if (document.myForm.Email.value === "") {
        alert("Please share your email!");
        document.myForm.Email.focus();
        return false;
    }

    if (document.myForm.Age.value === "") {
        alert("Please enter your age as it is mandatory!")
        document.myForm.Age.focus();
        return false;
    }

    if (document.myForm.number.value === "") {
        alert("We'll need your mobile number too! 😅")
        document.myForm.number.focus();
        return false;
    }

    alert("Response received. Thank you!");
    alert("You may close this tab now!")
    window.location.reload()
}