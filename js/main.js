  //getting all attribute
  const form = document.querySelector("form"),
  eInput = form.querySelector(".input"),
  text = form.querySelector(".text");

  form.addEventListener("submit", (e)=>{
    e.preventDefault(); //preventing form from submitting
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //regex pattern to validate email
    form.classList.add("error");
    form.classList.remove("valid");
    if(eInput.value == ""){
      text.innerText = "Oops! Please add your email";
    }else if (!eInput.value.match(pattern) ) { //if patter is not matched with the user's enter value
      text.innerText = "Oops! Please check your email";
    }else{
      form.classList.replace("error" , "valid"); //replacing error class with valid class
      text.innerText = "Well done!";
      text.style.color = "cyan";
    }
  });