//For profile change
var userImage = document.getElementById("userImage");
var changeProfile = document.getElementById("userProfile");

// //get the username and password form Login form
var userName = document.getElementById("username");
var passWord = document.getElementById("pass");

//get the username and password from signup form
var signUpUsername = document.getElementById("username-signup")
var userPassword = document.getElementById("pass-signup")

//Store the signup username and password in the localstorage
localStorage.setItem("username", "signUpUsername");
localStorage.setItem("password", "userPassword");

//Get the signup username and password from the localstorage
var dataBaseUserName = localStorage.getItem("username");
var dataBasepassword = localStorage.getItem("password");





// for login restriction
function login() {
    // event.preventDefault()
    var userName = document.getElementById("username").value
    var passWord = document.getElementById("pass").value

    var signUpUsername = document.getElementById("username-signup").value;
    var userPassword = document.getElementById("pass-signup").value;

    if (userName === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Username can't be empty!`
        });
    } else if (passWord === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Password can't be empty!`
        });
    }
    else if (userName == signUpUsername && passWord == userPassword) {
        alert("Login successfull!")
        window.location.href = "main.html"
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User not found!',
        });
    }
    var userName = document.getElementById("username").value = "";
    var passWord = document.getElementById("pass").value = "";
}

// // for change profile image
// changeProfile.onchange = function () {
//     userImage.src = URL.createObjectURL(changeProfile.files[0])
// }


// function for sign up form
function signUp() {
    event.preventDefault()
    var signUpUsername = document.getElementById("username-signup").value
    var userPassword = document.getElementById("pass-signup").value

    if (signUpUsername === "" || userPassword === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You cant signup without username and password!',
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: `${signUpUsername} signup successfully!`,
            showConfirmButton: false,
            timer: 1500
        });
    }

    localStorage.setItem("username", signUpUsername);
    localStorage.setItem("password", userPassword);

    // var signUpUsername = document.getElementById("username-signup").value = "";
    // var userPassword = document.getElementById("pass-signup").value = "";

    // console.log("Username localStorage:", signUpUsername);
    // console.log("Password localStorage:",userPassword);
}

// function for register form
function register() {
    var signup = document.getElementById("signUp").style.display = "block"
    var login = document.getElementById("form").style.display = "none"
}

// function for close sign up form
function closePopUp() {
    var signup = document.getElementById("signUp").style.display = "none"
    var login = document.getElementById("form").style.display = "flex"
}

// function for forget password
function forgetBtnPopup() {
    Swal.fire({
        title: 'Do you want to change your password?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't change`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved!', '', 'info')
        }
    })

}

