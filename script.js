document.addEventListener("DOMContentLoaded", function () {
    const factBtn = document.getElementById("fact-btn");
    const factDisplay = document.getElementById("fact");
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    if (factBtn && factDisplay) {
        const spaceFacts = [
            "A day on Venus is longer than a year on Venus!",
            "There’s a huge cloud of alcohol in space!",
            "Neutron stars can spin 600 times per second!",
            "A spoonful of a neutron star weighs about a billion tons!",
            "One million Earths could fit inside the Sun!"
        ];

        factBtn.addEventListener("click", function () {
            const randomFact = spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
            
            factDisplay.style.opacity = 0;
            setTimeout(() => {
                factDisplay.textContent = randomFact;
                factDisplay.style.opacity = 1;
            }, 300);
        });
    }

    if (contactForm && successMessage) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            successMessage.textContent = "✅ Message sent successfully!";
            successMessage.style.display = "block";
            
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 3000);
            
            contactForm.reset();
        });
    }
});

