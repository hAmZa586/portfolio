let name = document.getElementById("name")                                                  
let email = document.getElementById("email")
let subject = document.getElementById("subject")
let message = document.getElementById("message")
let Error_name = document.getElementById("error-name")
let email_error = document.getElementById("error-email")
let subject_error = document.getElementById("error-subject")
let message_error = document.getElementById("error-message")
Submit = ()=>{
    Validation();
}
function Validation(){
    let users = {
        name:name.value,
        email:email.value,
        subject:subject.value,
        message:message.value
    }
    if(name.value=="" && email.value=="" && subject.value=="" && message.value==""){
        alert("Please fill all fields")
    }
    else if(name.value === '' || name.value == null){
        text = `<p class="alert alert-danger" role="alert">Name Required</p>`
        Error_name.innerHTML = text
    }
    else if(email.value === '' || email.value == null){
        text = `<p class="alert alert-danger" role="alert">Email Required</p>`
        email_error.innerHTML = text   
    }
   
    else if(subject.value === '' || subject.value == null){
        text = `<p class="alert alert-danger" role="alert">Subject Required</p>`
        subject_error.innerHTML = text  
    }
   
    else if(message.value === '' || message.value == null){
        text = `<p class="alert alert-danger" role="alert">Message Required</p>`
        message_error.innerHTML = text  
    }
    else{
        Error_name.innerHTML = ""
        email_error.innerHTML = ""
        subject_error.innerHTML = ""
        message_error.innerHTML = ""
        firebase.database().ref('Students').push(users)
        ConformationMesage()
        Refresh();

    }
}
function ConformationMesage(){
    swal({
        title: "Good job!",
        text: "You Message Has Been Submitted!",
        icon: "success",
        button: "Ok!",
      });
}
function Refresh(){
    let name = document.getElementById("name")                                                  
    let email = document.getElementById("email")
    let subject = document.getElementById("subject")
    let message = document.getElementById("message")
    name.value = null
    email.value = null
    subject.value = null
    message.value = null
}
