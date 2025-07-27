// function showPopup() {
//   document.getElementById('popup-details').style.display = 'flex';
// }

// function hidePopup() {
//   document.getElementById('popup-details').style.display = 'none';
// }



document.addEventListener('DOMContentLoaded', function () {
    const viewMoreButtons = document.querySelectorAll('.viewmore');

    viewMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the parent product box and its popup
            const productBox = button.closest('.product-box');
            const popup = productBox.querySelector('.popup-details');

            // Get the product data from the card
            const productImageSrc = productBox.querySelector('.product-img img').src;
            const productName = productBox.querySelector('h2').textContent;

            // Find the elements inside the popup to update
            const popupImage = popup.querySelector('.popup-img');
            const popupTitle = popup.querySelector('.popup-title');

            // Set the data in the popup
            popupImage.src = productImageSrc;
            popupImage.alt = productName; // Set alt text for accessibility
            popupTitle.textContent = productName;

            // Show the popup
            popup.classList.add('show');
        });
    });

    // --- This part for closing the popup remains the same ---
    
    // Function to hide the popup
    function closePopup(popup) {
        if (popup) {
            popup.classList.remove('show');
        }
    }

    // Add event listener to all close buttons
    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup-details');
            closePopup(popup);
        });
    });

    // Also close the popup if the user clicks on the background overlay
    document.querySelectorAll('.popup-details').forEach(popup => {
        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                closePopup(popup);
            }
        });
    });
});
