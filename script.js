var typed = new Typed('#element', {
  strings: ['Web Developer!', 'Coder!', 'AI Engineer!'],
  typeSpeed: 60,
});

document.addEventListener("DOMContentLoaded", function() {

  emailjs.init("7Wx4n9ICY4UxRFfw6");

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    emailjs.send("service_n96gx1c", "template_030e3ng", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    })

    .then(function(response) {
      alert("Email sent successfully!");
      console.log("SUCCESS", response);
    })

    .catch(function(error) {
      alert("Failed to send email");
      console.log("FAILED", error);
    });

  });

});