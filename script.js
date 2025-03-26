document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Display a confirmation message
        alert(`Thank you, ${name}! Your message has been sent.`);

        // Optionally, reset the form
        form.reset();
    });

    const images = document.querySelectorAll("#projects img");
    const overlay = document.createElement("div");
    overlay.classList.add("fullscreen-overlay");
    document.body.appendChild(overlay);

    const overlayImage = document.createElement("img");
    overlay.appendChild(overlayImage);

    images.forEach((img) => {
        img.addEventListener("click", () => {
            overlayImage.src = img.src; // Set the clicked image as the overlay image
            overlay.classList.add("active");
        });
    });

    overlay.addEventListener("click", () => {
        overlay.classList.remove("active"); // Close the overlay when clicked
    });
});