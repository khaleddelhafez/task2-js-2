let btnsubmit = document.querySelector("#signup-btn")
let btnlogin  = document.querySelector("#login-btn")

let loginpage = document.querySelector("#loginpage")
let signuppage = document.querySelector("#signuppage")

let showlogin = ()=>{
    loginpage.classList.add("active")
}
let showsignup = ()=>{
    loginpage.classList.remove("active")
}
loginpage.addEventListener("click" , ()=>showlogin())
signuppage.addEventListener("click" , ()=>showsignup())

let fullname = document.querySelector(".fullname")
let email = document.querySelector(".emailaddress")
let password = document.querySelector(".password")
let checkbox = document.querySelector("#check")

let email_login = document.querySelector(".email-login")
let password_login = document.querySelector(".password-login")

var userName = null
var userEmail = null
var userPassword = null

btnsubmit.addEventListener("click" , ()=>{
    if (fullname.value !='' && email.value !='' && password.value !=''){
        alert("Welcome" + " " + fullname.value.split(" ")[0] + " " + "your account has been created successfully")
        userName = fullname.value
        userEmail = email.value
        userPassword = password.value
        showlogin()
        fullname.value =''
        email.value ='' 
        password.value =''
    }
})

btnlogin.addEventListener("click" , ()=>{
    if(email_login.value !="" && password_login.value !=""){
        if(userEmail == email_login.value && userPassword == password_login.value){
            alert("Welcome" + " " + userName.split(" ")[0])
            email_login.value = ''
            password_login.value =''
        }else{
        alert("incorrect email or password")
        email_login.value = ''
        password_login.value = ''
        }
    }
})