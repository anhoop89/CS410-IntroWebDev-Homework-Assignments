let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Add your code here 
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const newsletter = document.getElementsByName("answer");
  const date = document.getElementById('date');

  //check the radio button 
  var radio_check = false;
  if (newsletter[0].checked || newsletter[1].checked)
    radio_check = true;

  //check input is empty or not. 
  if (!isNaN(username.value) && !isNaN(email.value) && !isNaN(date.value) && !radio_check)
    console.warn("You must enter some data to submit this form");
  else {
    console.log("======= Form Submission =======");
    //Username
    if (!isNaN(username.value))
      console.log("\tUsername   : no submission");
    else
      console.log("\tUsername   : " + username.value);
    //Email
    if (!isNaN(email.value))
      console.log("\tEmail      : no submission");
    else
      console.log("\tEmail      : " + email.value);
    //Newsletter
    if (newsletter[0].checked) {
      console.log("\tNewsletter : " + newsletter[0].value);
    } else if (newsletter[1].checked) {
      console.log("\tNewsletter : " + newsletter[1].value);
    }
    else
      console.log("\tNewsletter : no submission");
    //Date
    if (!isNaN(date.value))
      console.log("\tDate       : no submission");
    else
      console.log("\tDate       : " + date.value);
  }
  event.preventDefault();
}