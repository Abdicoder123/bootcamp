console.log("Donation.js loaded.")
document.addEventListener("DOMContentLoaded", () => {
    const stripe = Stripe("<%= Rails.application.credentials.dig(:stripe, :publishable_key) %>");
    const elements = stripe.elements();
    const cardElement = elements.create("card");
    cardElement.mount("#card-element");
  
    const form = document.getElementById("payment-form");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });
  
      if (error) {
        alert(error.message);
      } else {
        form.submit();
      }
    });
  });