
let id = (id) => document.getElementById(id);


let usernameEl = id("username");
let emailEl = id("email");
let passwordEl = id("password");
let confirmPasswordEl = id("confirm-password");
let form = id("signup");
let formName = id("form-username");
let formEmail = id("form-email");
let formPassword = id("form-password");
let formConfirmPassword = id("form-confirm-password");
let iconFailureUsername = id("failure-username");
let iconSuccessUsername = id("success-username");
let iconFailureEmail = id("failure-email");
let iconSuccessEmail = id("success-email");
let iconFailurePassword = id("failure-password");
let iconSuccessPassword = id("success-password");
let iconFailureConfirmPassword = id("failure-confirm-password");
let iconSuccessConfirmPassword = id("success-confirm-password");

let msgUsername = id("msg-username");
let msgEmail = id("msg-email");
let msgPassword = id("msg-password");
let msgConfirmPassword = id("msg-confirm-password");



const checkUsername = () => {
    let valid = false;
    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        msgUsername = "Username cannot be blank.";
    
        formName.style.border = "2px solid red";
        iconFailureUsername.style.opacity = "1";
        iconSuccessUsername.style.opacity = "0";

    }
    else if (!isBetween(username.length, min, max)) {
        msgUsername = "Username must be between (min, max) characters')";
        formName.style.border = "2px solid red";
        iconFailureUsername.style.opacity = "1";
        iconSuccessUsername.style.opacity = "0";
    }
    else {

        msgUsername = "";
        valid = true;
        formName.style.border = "2px solid green";
        iconFailureUsername.style.opacity = "0";
        iconSuccessUsername.style.opacity = "1";


    }

    $('#msg-username').html(msgUsername);

    return valid;
}
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();

    if (!isRequired(email)) {
        msgEmail = "Email cannot be blank."

        formEmail.style.border = "2px solid red";
        iconFailureEmail.style.opacity = "1";
        iconSuccessEmail.style.opacity = "0";


    }
    else if (!isEmailValid(email)) {
        msgEmail = "Email is not valid."

        formEmail.style.border = "2px solid red";
        iconFailureEmail.style.opacity = "1";
        iconSuccessEmail.style.opacity = "0";

    }
    else {
        msgEmail = "";
        valid = true;
        formEmail.style.border = "2px solid green";
        iconFailureEmail.style.opacity = "0";
        iconSuccessEmail.style.opacity = "1";
    }

    $('#msg-email').html(msgEmail);
    return valid;
};

const checkPassword = () => {
    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        msgPassword = "Password cannot be blank.";

        formPassword.style.border = "2px solid red";
        iconFailurePassword.style.opacity = "1";
        iconSuccessPassword.style.opacity = "0";


    } else if (!isPasswordSecure(password)) {
        msgPassword = "Password not valid.";

        formPassword.style.border = "2px solid red";
        iconFailurePassword.style.opacity = "1";
        iconSuccessPassword.style.opacity = "0";

    }
    else {
        msgPassword = "";
        valid = true;
        formPassword.style.border = "2px solid green";
        iconFailurePassword.style.opacity = "0";
        iconSuccessPassword.style.opacity = "1";
    }

    $('#msg-password').html(msgPassword);
    return valid;

};

const checkConfirmPassword = () => {

    let valid = false;

    const confirmPassword = confirmPasswordEl.value.trim();

    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        msgConfirmPassword = "Please enter password again!";

        formConfirmPassword.style.border = "2px solid red";
        iconFailureConfirmPassword.style.opacity = "1";
        iconSuccessConfirmPassword.style.opacity = "0";



    }
    else if (password !== confirmPassword) {

        msgConfirmPassword = "The password nt match.";
        formConfirmPassword.style.border = "2px solid red";
        iconFailureConfirmPassword.style.opacity = "1";
        iconSuccessConfirmPassword.style.opacity = "0";
    }
    else {
        msgConfirmPassword = "";
        valid = true;
        formConfirmPassword.style.border = "2px solid green";
        iconFailureConfirmPassword.style.opacity = "0";
        iconSuccessConfirmPassword.style.opacity = "1";
    }
    $('#msg-confirm-password').html(msgConfirmPassword);
    return valid;
};

const isEmailValid = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);

}

const isPasswordSecure = (password) => {

    const re = /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/;
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;



form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkUsername();
    checkPassword();
    checkEmail();
    checkPassword();
    checkConfirmPassword();

    let isValidUsername = checkUsername();
    let isValidEmail = checkEmail();
    let isValidPassword = checkPassword();
    let isValidConfirmPassWord = checkConfirmPassword();

    if( isValidUsername === true && isValidEmail === true
        && isValidPassword === true && isValidConfirmPassWord === true){
            alert("create new account successfully!");
        }

    
});


