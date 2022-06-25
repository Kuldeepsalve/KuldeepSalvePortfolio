
function validateForm() {
    var name = document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject = document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";

    if (sendEmail()) {
        document.getElementById('reset').click();
        document.querySelector('.status').innerHTML = "";
    }
}



function sendEmail() {
    // try{
    //     Email.send({
    //         Host: "smtp.gmail.com",
    //         Username: "temprorymail1@gmail.com",
    //         Password: "tempmailpass",
    //         To: 'kuldeepsalve786@gmail.com',
    //         From: document.getElementById('email').value,
    //         Subject: document.getElementById('subject').value,
    //         Body: "Name: " + document.getElementById('name').value + '<br>' + "Email: " + document.getElementById('email').value + "<br>" + "Message: " + document.getElementById('message').value,
    //     }).then(
    //         message => document.querySelector('.status').innerHTML = "Message Sent Successfully."
    //     );
    // }catch(e) {
    //     console.log(e);
    // }

    let body = "Name: " + document.getElementById('name').value + "%0D%0AEmail: " + document.getElementById('email').value + "%0D%0AMessage: " + document.getElementById('message').value;
    window.open('mailto:kuldeepsalve786@gmail.com?subject=' + document.getElementById('subject').value + '&body=' + body);
    return true;
}