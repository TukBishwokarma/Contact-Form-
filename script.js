Username: "tuk@gmail.com",
function sendEmail() {
Email.send({
 Host: "smtp.gmail.com",
Password: "password",
 To: 'tukbishwokarma@gmail.com',
 From: document.getElementById("email").value,
 Subject: "New contact form enquiry",
 Body: "Name: " + document.getElementById("name").value
     + "<br>Email: " + document.getElementById("email").value
     + "<br>Phone no: " + document.getElementById("phone").value
     + "<br>Message: " + document.getElementById("message").value
}).then(
 message => {
     alert("Message sent successfully");
     document.getElementById("contactForm").reset();
 }
);
}