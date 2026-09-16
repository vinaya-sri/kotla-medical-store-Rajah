// =====================================
// MOBILE MENU
// =====================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// Open / close mobile menu

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when clicking navigation link

const navItems = document.querySelectorAll("#navLinks a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =====================================
// CONTACT FORM
// =====================================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", async function (event) {

    /*
       Page refresh avvakunda stop chestundi.
    */

    event.preventDefault();


    // Button ni select chestunnam

    const submitButton =
        contactForm.querySelector("button");


    // Customer enter chesina details

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Empty fields check

    if (!name || !email || !phone || !message) {

        formMessage.textContent =
            "Please fill all the details.";

        return;
    }


    // Sending message

    formMessage.textContent =
        "Sending your message...";

    submitButton.disabled = true;

    submitButton.textContent =
        "Sending...";


    try {

        /*
           Formspree ki customer details send chestunnam.

           IMPORTANT:
           index.html lo form action lo
           YOUR_FORM_ID place lo actual Formspree ID
           undali.
        */

        const response =
            await fetch(contactForm.action, {

                method: "POST",

                body: new FormData(contactForm),

                headers: {
                    "Accept": "application/json"
                }

            });


        if (response.ok) {

            // Success message

            formMessage.textContent =
                "✅ Message sent successfully!";

            formMessage.style.color =
                "green";


            // Form clear

            contactForm.reset();

        } else {

            // Error message

            formMessage.textContent =
                "❌ Message could not be sent. Please try again.";

            formMessage.style.color =
                "red";

        }

    } catch (error) {

        console.error(error);

        formMessage.textContent =
            "❌ Something went wrong. Please try again.";

        formMessage.style.color =
            "red";

    }


    // Button back to normal

    submitButton.disabled = false;

    submitButton.textContent =
        "Send Message";

});