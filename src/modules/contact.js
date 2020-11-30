function contact() {
  const element = document.createElement('div');

  element.innerHTML = `<div class="contact-items">
      <span class="contact-us">Address:</span>
      <span class="contact-info">Kharkiv, Nauki.av. 9</span>
      <span class="contact-us">Email:</span>
      <span class="contact-info">ourrestaurant@gmail.com</span>
      <span class="contact-us">Phone:</span>
      <span class="contact-info">+38(093)1234567</span>
      <span class="contact-us">Delivery 24/7:</span>
      <span class="contact-info">+38(095)8934567</span>
     </div> `;

  return element;
}

export default contact;
