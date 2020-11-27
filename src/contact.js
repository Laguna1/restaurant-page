function contact() {
    const element = document.createElement("div");
  
    element.innerHTML = `<div class="contact-items">
    <span class="contact-us">Address</span>
      <span class="contact-us">Phone</span>
      <span class="contact-us">Delivery</span>
     </div> `;
  
    return element;
  }
  
  export { contact };