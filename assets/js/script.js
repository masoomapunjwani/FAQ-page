window.onload = function () {
  fetch("http://localhost:3000/questionanswer")
    .then((response) => response.json())
    .then((data) => {

      data.forEach((item) => {
        let body = document.querySelector("#faqs");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");

        h4.textContent = item.question;
        p.textContent = item.answer;

        body.append(h4);
        h4.append(p);
        p.style.fontWeight = "400";
      });
    });
};


