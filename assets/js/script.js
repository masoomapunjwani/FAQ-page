window.onload = function () {
  fetch("http://localhost:3000/questionanswer")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].answer);

      // data.forEach((data) => {
        let body = document.querySelector("#faqs");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");

        h4.textContent = data[0].question;
        p.textContent = data[0].answer;

        body.append(h4);
        h4.append(p);

        p.style.fontWeight = "400"
      // })
    });
};
