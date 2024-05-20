<template>
  <div class="form-contact__content">
    <h2 class="section-title">Contact</h2>
    <p class="description-section">
        N'hésitez pas à me contacter en remplissant le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
    </p>
    <span id="error-msg">Veuillez remplir tous les champs</span>
    <form class="frm-contact" @submit.prevent="sendEmail">
      <label for="name">Prénom</label>
      <input class="input-text" type="text" name="firstName" id="firstName" placeholder="Saisissez votre prénom" v-model="firstName">

      <label for="lastName">Nom</label>
      <input class="input-text" type="text" name="lastName" id="lastName" placeholder="Saisissez votre nom de famille" v-model="lastName">

      <label for="fromEmail">Email</label>
      <input class="input-text" type="email" name="fromEmail" id="fromEmail" placeholder="Saisissez votre adresse électronique" v-model="fromEmail">

      <label for="subject">Objet</label>
      <input class="input-text" type="text" name="subject" id="subject" placeholder="Objet" v-model="subject">

      <label for="message">Message</label>
      <textarea name="message" id="message" placeholder="Saisissez votre message" v-model="message"></textarea>
      <input class="btn" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { Email } from "../assets/smtp/smtp.js";

export default {
  name: "FormContact",
  data() {
    return {
      firstName: "",
      lastName: "",
      toEmail: process.env.VUE_APP_EMAIL_GET,
      fromEmail: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    /*
     *
     *  Sending email directly from the browser without needing a backend server
     *  using SMTP. js. SMTP. js is a JavaScript SMTP client library
     *  that allows you to send mail through client-side JavaScript by wrapping the SMTP protocol
     *
     *  https://smtpjs.com/
     *  https://app.elasticemail.com
     *  https://medium.com/@nishit.josh07/send-email-using-javascript-in-vue-application-without-any-use-of-server-language-a300b1e0684c
     *
     */
    sendEmail() {
      if (
        !this.firstName ||
        !this.lastName ||
        !this.subject ||
        !this.fromEmail ||
        !this.message
      ) {
        document.getElementById("error-msg").style.display = "block";
      } else {
        let ebody = `
                <b>Name : </b>${this.firstName.trim()} ${this.lastName.trim()}
                <br>
                <br>
                <b>Email : </b>${this.fromEmail.trim()}
                <br>
                <br>
                <b>Message : </b>${this.message.trim()}`;

        Email.send({
          SecureToken: "b3404224-a852-4ff4-acc8-cbd083f362d8",
          To: this.toEmail,
          From: this.toEmail,
          Subject: this.subject.trim(),
          Body: ebody,
        }).then((message) => alert(message));

        document.getElementById("error-msg").style.display = "none";
        document.querySelector("form").reset();

        this.firstName = "";
        this.lastName = "";
        this.subject = "";
        this.message = "";
      }
    },
  },
};
</script>

<style>
.form-contact__content {
  width: 40%;
  padding: 2em;
  font-family: Roboto-Regular;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  margin-bottom: 2em;
  background-color: hsla(0, 0%, 97%, 0.5);
  box-shadow: 0 0 10px #353434;
}

.frm-contact {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2em;
}

.input-text {
  height: 50px;
  background-color: var(--header-bg-color);
  border: none;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid var(--main-color);
}

.frm-contact textarea {
  background-color: var(--header-bg-color);
  border: none;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid var(--main-color);
  width: 100%;
  height: 200px;
  resize: none;
}

.frm-contact label {
  margin-bottom: 1em;
  margin-top: 1em;
}

.btn {
  font-family: Roboto-Regular;
  text-transform: uppercase;
  background-color: var(--main-color);
  color: white;
  font-size: 0.8em;
  padding: 0.5em 2em;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;
  border: none;
  align-self: flex-end;
  margin-top: 1em;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px #aaa8a8;
}

#error-msg {
  width: 100%;
  height: 3em;
  margin-top: 1em;
  border-radius: 10px;
  padding: 1em;
  align-content: center;
  background-color: rgb(241, 132, 132);
  display: none;
}

.description-section{
  margin-top: 2em;
  font-family: Roboto-Regular;
  text-align: center;
}

@media screen and (max-width: 810px) {
  .form-contact__content {
    width: 90%;
  }
}
</style>
