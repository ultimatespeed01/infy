// Function to load the footer
function loadFooter() {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            // Insert the footer HTML into the footer element
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Load the footer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadFooter);
