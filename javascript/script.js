// Smooth Scroll for Navbar Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add smooth scrolling effect to sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('scroll-animation');
});

// CSS animation for sections
const style = document.createElement('style');
style.innerHTML = `
    .scroll-animation {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .scroll-animation.visible {
        opacity: 1;
        transform: translateY(0);
    }

    /* Opening animation */
    .opening-animation {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 1s ease-out, transform 1s ease-out;
    }

    .opening-animation.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Add 'visible' class to sections when they are in view
function handleScroll() {
    document.querySelectorAll('.scroll-animation').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Add opening animation to the entire page
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('opening-animation');
    setTimeout(() => document.body.classList.add('visible'), 100);
});

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Trigger on load to show animations for already visible sections

//discord nya ini lek ku yang ku cinta kek opepek
document.getElementById('game-request-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const gameName = document.getElementById('game-name').value;
    const gameDetails = document.getElementById('game-details').value;
    const discordUsername = document.getElementById('discord-username').value;

    // Prepare data for Discord webhook
    const message = {
        content: `# Request Modpack\n**Client:** ${gameName}\n**Details:** ${gameDetails}\n**Discord Username:** ${discordUsername}`
    };

    // Send data to Discord webhook
    fetch('https://discord.com/api/webhooks/1273987541544079503/XC_PJZsHb6gSRqUpqX_9Q7mVO4tNii3EIuRjulinEn8Us2M2ZAKFIjCvEIcMvS2zXNXv', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message) // Send the correct message content
    })
    .then(response => {
        if (response.ok) {
            console.log('Success:', response);
            alert('Your request has been submitted successfully!');
            document.getElementById('game-request-form').reset(); // Reset the form
        } else {
            console.error('Error:', response);
            alert('Failed to send request.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send request.');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const notification = document.getElementById('notification');
    const closeNotificationBtn = document.getElementById('close-notification');

    // Show the notification
    notification.classList.add('visible');

    // Hide the notification when the close button is clicked
    closeNotificationBtn.addEventListener('click', function() {
        notification.classList.remove('visible');
    });
});
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73))) {
        e.preventDefault();
    }
});

