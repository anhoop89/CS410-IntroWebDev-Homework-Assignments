let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {

  //check input is empty or not. 
  if (!isNaN(form.username.value) && !isNaN(form.email.value) && !isNaN(form.date.value) && !form.answer.checked)
    console.warn("You must enter some data to submit this form");
  else {
    console.log("======= Form Submission =======");
    //Username
    if (!isNaN(form.username.value))
      console.log("\tUsername   : no submission");
    else
      console.log("\tUsername   : " + form.username.value);
    //Email
    if (!isNaN(form.email.value))
      console.log("\tEmail      : no submission");
    else
      console.log("\tEmail      : " + form.email.value);
    //Newsletter
    if (!isNaN(form.answer.value))
      console.log("\tNewsletter : no submission");
    else {
      if (form.answer.checked) {
        console.log("\tNewsletter : " + form.answer.value);
      } else if (!form.answer.checked) {
        console.log("\tNewsletter : " + form.answer.value);
      } else
        console.log("\tNewsletter : no submission");
    }
    //Date
    if (!isNaN(form.date.value))
      console.log("\tDate       : no submission");
    else
      console.log("\tDate       : " + form.date.value);
  }
  event.preventDefault();
}