document
  .querySelector("#feedbackForm")
  .addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
      e.target.querySelector("input[type='text']").value;

    const email =
      e.target.querySelector("input[type='email']").value;

    const message =
      e.target.querySelector("textarea").value;

    const feedback = {
      name,
      email,
      message,
      time: new Date().toLocaleString()
    };

    let data =
      JSON.parse(localStorage.getItem("feedbacks")) || [];

    data.push(feedback);

    localStorage.setItem(
      "feedbacks",
      JSON.stringify(data)
    );

    alert("Thank you for your feedback ");

    e.target.reset();
});