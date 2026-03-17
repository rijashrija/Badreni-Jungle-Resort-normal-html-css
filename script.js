// Comprehensive script for Badreni Jungle Resort
document.addEventListener("DOMContentLoaded", () => {
    console.log("Badreni Resort Script Initialized");

    // Elements for Gallery Lightbox
    const images = document.querySelectorAll(".gallery-item img, .offer-item img");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const caption = document.getElementById("caption");
    const close = document.querySelector(".close");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    let currentIndex = 0;

    // Gallery Lightbox Logic
    const galleryImages = document.querySelectorAll(".gallery-item img");
    if (galleryImages.length > 0 && popup && popupImg && caption) {
        galleryImages.forEach((img, index) => {
            img.addEventListener("click", () => {
                popup.style.display = "flex";
                popupImg.src = img.src;
                caption.textContent = img.dataset.caption;
                currentIndex = index;
            });
        });
    }

    // Offer Inquiry Popup Logic (for offers.html)
    const offerImages = document.querySelectorAll(".offer-item img");
    const inquiryPopup = document.getElementById("inquiry-popup");
    const inquiryClose = document.querySelector(".inquiry-close");

    if (offerImages.length > 0 && inquiryPopup) {
        offerImages.forEach((img) => {
            img.addEventListener("click", () => {
                inquiryPopup.style.display = "flex";
                document.body.style.overflow = "hidden"; // Prevent scrolling
            });
        });
    }

    if (inquiryClose && inquiryPopup) {
        inquiryClose.onclick = () => {
            inquiryPopup.style.display = "none";
            document.body.style.overflow = "auto";
        };
    }

    // Close Inquiry Overlay when clicking background
    window.addEventListener("click", (e) => {
        if (inquiryPopup && e.target.classList.contains('inquiry-overlay')) {
            inquiryPopup.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Main Lightbox Controls
    if (close) {
        close.onclick = () => {
            if (popup) popup.style.display = "none";
        };
    }

    function showImage(index) {
        if (popupImg && images[index]) {
            popupImg.src = images[index].src;
            if (caption) caption.textContent = images[index].dataset.caption || "";
        }
    }

    if (next) {
        next.onclick = () => {
            if (images.length === 0) return;
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            showImage(currentIndex);
        };
    }

    if (prev) {
        prev.onclick = () => {
            if (images.length === 0) return;
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            showImage(currentIndex);
        };
    }

    // Numeric Stepper Logic (V2 - Functional)
    const steppers = document.querySelectorAll(".numeric-stepper");
    console.log(`Found ${steppers.length} steppers`);

    steppers.forEach((stepper) => {
        const minusBtn = stepper.querySelector(".minus");
        const plusBtn = stepper.querySelector(".plus");
        const input = stepper.querySelector(".stepper-input");
        const countDisplay = stepper.querySelector(".stepper-count");
        const labelDisplay = stepper.querySelector(".stepper-label");

        function updateDisplay(value) {
            if (countDisplay) countDisplay.textContent = value;
            if (input) input.value = value;
            
            // Update label (singular/plural)
            if (labelDisplay) {
                const singular = labelDisplay.dataset.singular;
                const plural = labelDisplay.dataset.plural;
                labelDisplay.textContent = (parseInt(value) === 1) ? singular : plural;
            }
        }

        if (minusBtn && plusBtn && input) {
            minusBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                let value = parseInt(input.value) || 0;
                let min = parseInt(input.getAttribute("min")) || 0;
                if (value > min) {
                    value -= 1;
                    updateDisplay(value);
                }
            });

            plusBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                let value = parseInt(input.value) || 0;
                let max = parseInt(input.getAttribute("max")) || 99;
                if (value < max) {
                    value += 1;
                    updateDisplay(value);
                }
            });
        } else {
            console.warn("Stepper missing elements:", { minusBtn, plusBtn, input });
        }
    });
});
