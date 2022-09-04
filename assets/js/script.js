
// ====================
// window.onload = function () {
//   fetch("http://localhost:3000/questionanswer")
//     .then((response) => response.json())
//     .then((data) => {


//       data.forEach((item) => {
//         let body = document.querySelector("#faqs");
//         let q = document.querySelector("#faqsquestion");
//         let a = document.querySelector("#faqsanswer");
//         let h4 = document.createElement("h4");
//         let p = document.createElement("p");

//         h4.textContent = item.question;
//         p.textContent = item.answer;

//         body.append(h4);
//         body.appendChild(p);
//         p.style.fontWeight = "400";
//       });
//     });
// };
// =====================

window.onload = function () {
  fetch("http://localhost:3000/questionanswer")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      document.querySelector(".q1").textContent = data[0].question;
      document.querySelector(".a1").textContent = data[0].answer;
      document.querySelector(".q2").textContent = data[1].question;
      document.querySelector(".a2").textContent = data[1].answer;
      document.querySelector(".q3").textContent = data[2].question;
      document.querySelector(".a3").textContent = data[2].answer;
      document.querySelector(".q4").textContent = data[3].question;
      document.querySelector(".a4").textContent = data[3].answer;
      document.querySelector(".q5").textContent = data[4].question;
      document.querySelector(".a5").textContent = data[4].answer;
      document.querySelector(".q5").textContent = data[5].question;
      document.querySelector(".a6").textContent = data[5].answer;
      document.querySelector(".q7").textContent = data[6].question;
      document.querySelector(".a7").textContent = data[6].answer;
      document.querySelector(".q8").textContent = data[7].question;
      document.querySelector(".a8").textContent = data[7].answer;
      document.querySelector(".q9").textContent = data[8].question;
      document.querySelector(".a9").textContent = data[8].answer;
      document.querySelector(".q10").textContent = data[9].question;
      document.querySelector(".a10").textContent = data[9].answer;
      document.querySelector(".q11").textContent = data[10].question;
      document.querySelector(".a11").textContent = data[10].answer;
      
      setTimeout(formSubmit(), 1000)
      newsletterPrompt()
    });

};

function formSubmit(e) {
  let form = document.querySelector("#form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Thank you for your message, your inquiry has been received. A representative will get back to you shortly. ")
    form.reset()
  })
}

function newsletterPrompt(e){
  let button = document.querySelector("#create-acc-btn")
  let fButton = document.querySelector("#footerBtn")
  button.addEventListener("click", (e) => {
    prompt("Sign Up for our monthly newsletter.")
})
  fButton.addEventListener("click", (e) => {
    prompt("Sign Up for our monthly newsletter.")
})
}
// ====> Accordion

  const items = document.querySelectorAll(".accordion button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    for (i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }

    if (itemToggle == "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }

  items.forEach((item) => item.addEventListener("click", toggleAccordion));



