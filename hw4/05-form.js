let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Add your code here
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const newsletter = document.getElementsByName("answer");
  const date = document.getElementById('date').value;

  //check the radio button 
  var radio_check = false;
  if (newsletter[0].checked || newsletter[1].checked)
    radio_check = true;

  //check input is empty or not. 
  if (!isNaN(username) && !isNaN(email) && !isNaN(date) && !radio_check)
    console.warn("You must enter some data to submit this form");
  else {
    console.log("======= Form Submission =======");
    //Username
    if (!isNaN(username))
      console.log("\tUsername   : no submission");
    else
      console.log("\tUsername   : " + username);
    //Email
    if (!isNaN(email))
      console.log("\tEmail      : no submission");
    else
      console.log("\tEmail      : " + email);
    //Newsletter
    if (newsletter[0].checked) {
      console.log("\tNewsletter : " + newsletter[0].value);
    } else if (newsletter[1].checked) {
      console.log("\tNewsletter : " + newsletter[1].value);
    }
    else
      console.log("\tNewsletter : no submission");
    //Date
    if (!isNaN(date))
      console.log("\tDate       : no submission");
    else
      console.log("\tDate       : " + date);
  }
  event.preventDefault();
}