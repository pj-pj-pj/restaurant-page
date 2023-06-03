import './style.css';
import homepageInit from './homepage';
import fbLogo from './assets/facebook-app-symbol.png';
import igLogo from './assets/instagram.png';
import twtLogo from './assets/twitter.png';



export default function init() {
  homepageInit();
  const text = document.querySelector('.text');
  if (text !== null) {
    text.remove();
  }

  const main = document.querySelector('main');
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact');
  contact.append(contactHeader, form, contactDetails, smHolder);
  main.append(contact);
}

const contactHeader = document.createElement('div');
contactHeader.setAttribute('id', 'contact-header');
(function contHeaderInit() {
  const header = document.createElement('h1');
  header.textContent = 'CONTACT US';
  const line = document.createElement('div');
  line.className = 'line';
  contactHeader.append(header, line);
})();

const form = document.createElement('form');
(function formInit() {
  const inputFullName = document.createElement('input');
  inputFullName.type = 'text';
  inputFullName.name = 'fname';
  inputFullName.placeholder = 'Full Name';
  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.name = 'email';
  inputEmail.placeholder = 'E-mail';
  const inputMessage = document.createElement('input');
  inputMessage.type = 'text';
  inputMessage.name = 'msg';
  inputMessage.placeholder = 'Message';
  const inputSubmit = document.createElement('button');
  inputSubmit.textContent = 'Submit';
  form.append(inputFullName, inputEmail, inputMessage, inputSubmit);
})();

const contactDetails = document.createElement('div');
contactDetails.className = 'contact-details';
(function contactDetailsInit() {
  const contactText = document.createElement('h2');
  const basedText = document.createElement('h2');
  const ctDetails = document.createElement('p');
  const btDetails = document.createElement('p');
  contactText.textContent = 'Contact';
  basedText.textContent = 'Based in';
  ctDetails.textContent = 'folafola@breads.com';
  btDetails.textContent = 'Nueva Ecija, Philippines';
  contactDetails.append(contactText, ctDetails, basedText, btDetails);
})();

const smHolder = document.createElement('div');
smHolder.className = 'social-media';
(function socialMediaInit() {
  const fbLink = document.createElement('a');
  fbLink.href = 'https://facebook.com';
  fbLink.target = '_blank';
  const fb = new Image();
  fb.src = fbLogo;
  fbLink.appendChild(fb);
  const igLink = document.createElement('a');
  igLink.href = 'https://instagram.com';
  igLink.target = '_blank';
  const ig = new Image();
  ig.src = igLogo;
  igLink.appendChild(ig);
  const twtLink = document.createElement('a');
  twtLink.href = 'https://twitter.com';
  twtLink.target = '_blank';
  const twt = new Image();
  twt.src = twtLogo;
  twtLink.appendChild(twt);
  smHolder.append(twtLink, fbLink, igLink);
})();
