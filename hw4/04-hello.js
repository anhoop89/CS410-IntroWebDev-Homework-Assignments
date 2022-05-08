// Add your code here

let head = document.querySelector('head');
let css_link = document.createElement('link');
css_link.rel = "stylesheet";
css_link.href = "../styles.css";
head.appendChild(css_link);

let main = document.querySelector('main');
main.className = "container";
main.style.display = "block";
main.style.maxWidth = "50vw";
main.style.margin = "auto";
main.width = "60%";
main.style.paddingTop = "100px";

let heading1 = document.createElement('h1');
heading1.textContent = "04-hello.js";
main.appendChild(heading1);

let image_element = document.createElement('img');
image_element.setAttribute('id', 'cat_image');
image_element.src = "https://placekitten.com/300/300?image=4";
image_element.alt = "This is a cat photo";
image_element.style.display = "block";
image_element.style.marginLeft = "auto";
image_element.style.marginRight = "auto";
image_element.width = "200";
image_element.height = "200";
image_element.style.borderRadius = "50%";
main.appendChild(image_element);

let p_element = document.createElement('p');
p_element.style.textAlign = "left";
main.appendChild(p_element);

// There’s no need to recreate the ::first-line pseudo-element
// with JavaScript. Instead you can change the font weight of
// the first sentence in your bio.
let span_element = document.createElement('span');
span_element.setAttribute('id', 'first_sentence');
span_element.textContent = "Hi! My name is Spongebob and this is my introduction. ";
span_element.style.fontWeight = "bold";
p_element.appendChild(span_element);

let sec_span_element = document.createElement('span');
sec_span_element.setAttribute('id', 'rest_sentences');
sec_span_element.textContent = " I work as fry cook and I would like to get my drivers license in the near future. In my free time, I enjoy hanging out with my best friend Patrick. ";
p_element.appendChild(sec_span_element);



