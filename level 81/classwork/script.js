const form = document.getElementById('myForm');
const btn = document.getElementById('btn');
// function validateForm(){
//   const nameValue = form.elements.name.value;

//   if(nameValue === "Andria"){
//     console.log("Hello Admin");
//   } else if(nameValue === "Giorgi"){
//     console.log("Hello Moderator");
//   } else{
//     console.log("Hello User");
//   }
// }

// btn.onclick = validateForm;

const dataBase = [];

function validateForm() {
  const emailValue = form.elements.email.value;
  const passValue = form.elements.password.value;

  if(emailValue == '' || passValue == '') {
      alert('Please fill in all fields');
      return;
  }

  const acc = {
      email: emailValue,
      password: passValue
  }

  dataBase.push(acc);

  console.log(dataBase)

}


btn.onclick = validateForm;


