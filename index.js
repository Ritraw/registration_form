const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    
    pwFields.forEach(password => {
        if(password.type === "password"){
            password.type = "text";
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return;
        }
        password.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
    })
    
  })
  })      
  
  links.forEach(link => {
  link.addEventListener("click", e => {
  forms.classList.toggle("show-signup");
  })
  })


const username = document.getElementById('username');
const mobile = document.getElementById('mobileno');
const loginMobile = document.getElementById('loginmobile');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
let error = true;


forms.addEventListener('submit',e=>{
  e.preventDefault();

  validateInputs();
});

const isValidEmail = email =>{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const isValidNumber =(input_str)=>{
  var no = /^(0|91)?[7-9][0-9]{9}$/;
  return no.test(input_str);
}



const setError = (element, message) =>{
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = element =>{
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const validateInputs = ()=>{
  const usernamevalue = username.value.trim();
  const emailValue = email.value.trim();
  const mobileValue = mobile.value.trim();
  const loginMobileValue = loginMobile.value.trim();
  const genderValue = gender.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();

  if(usernamevalue === ''){
    setError(username , 'Username is required');
  }
  else{
    setSuccess(username);
    error = false;
  }

  if(loginMobileValue === ''){
    setError(loginMobile, 'Mobile Number is required');
  }else if(!isValidNumber(loginMobileValue)){
    setError(loginMobile, 'Provide a valid mobile number');
  }else{
    setSuccess(loginMobile);
    error = false;
  }

  if(mobileValue === ''){
    setError(mobile, 'Mobile Number is required');
  }else if(!isValidNumber(mobileValue)){
    setError(mobile, 'Provide a valid mobile number');
  }else{
    setSuccess(mobile);
    error = false;
  }

  if(emailValue === ''){
    setError(email, 'Email is required');
  }else if (!isValidEmail(emailValue)){
    setError(email, 'Provide a valid email address');
  }else{
    setSuccess(email);
    error = false;
  }

  if(genderValue === ''){
    setError(gender , 'Please enter your gender');
  }
  else{
    setSuccess(gender);
    error = false;
  }

  

  if(password1Value === ''){
    setError(password1, 'Password is required');
  }else if (password1Value.length < 8){
    setError(password1, 'Password must be atleast 8 character.');
  }
  else{
    setSuccess(password1)
    error = false;
  }

  if(password2Value === ''){
    setError(password2, 'Please confirm your password');
  } else if(password2Value !== password1Value){
    setError(password2, "Passwords doesn't match");
  }else{
    setSuccess(password2);
    error = false;
  }


  
}



