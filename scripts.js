document.addEventListener('DOMContentLoaded', () => {
    // Variable declarations at the top
    const signupBtn = document.getElementById('signup-btn');
    const signupModal = document.getElementById('signup-modal');
    const closeBtns = document.querySelectorAll('.close-btn');
    const signupForm = document.getElementById('signup-form');
    const verificationSection = document.getElementById('verification-section');
    const verifyBtn = document.getElementById('verify-btn');
    const joinChatBtn = document.getElementById('join-chat-btn');
    const chatArea = document.getElementById('chat-area');
    const messages = document.getElementById('messages');
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');
    const heroSection = document.getElementById('hero-section');

    // Background image rotation setup
    const images = ['hump3.jpeg', 'hump2.jpeg', 'hump1.jpeg', 'hump4.jpeg', 'hump5.jpeg', 'hump9.jpeg', 'hump7.jpeg', 'hump10.jpeg', 'hump13.jpeg', 'hump3.jpeg'];
    let currentImageIndex = 0;

    function changeBackgroundImage() {
        if (heroSection) { // Check if heroSection exists
            heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }
    }

    setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds

    // Open the signup modal
    signupBtn.onclick = function() {
        signupModal.style.display = 'block';
    };

    // Close modals when clicking close buttons or outside modal
    closeBtns.forEach(btn => {
        btn.onclick = function() {
            btn.closest('.modal').style.display = 'none';
        };
    });

    window.onclick = function(event) {
        if (event.target === signupModal) {
            signupModal.style.display = 'none';
        }
    };

    // Signup form submission for sending verification code
    signupForm.onsubmit = async function(event) {
        event.preventDefault();
        const email = document.getElementById('signup-email').value;
        code = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit code

        try {
            await fetch('/send-verification-code', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, code })
            });
            alert(`Verification code sent to ${email}`);
            verificationSection.style.display = 'block';
        } catch (error) {
            alert('Error sending email');
        }
    };

    // Verify the code entered by the user
    verifyBtn.onclick = function() {
        const enteredCode = document.getElementById('verification-code').value;
        if (enteredCode == code) {
            alert("Email verified! You can now join the chat.");
            joinChatBtn.disabled = false; // Enable join chat button
            signupModal.style.display = 'none'; // Close the modal
        } else {
            alert("Verification code is incorrect.");
        }
    };

    // Enable chat area after verification
    joinChatBtn.onclick = function() {
        chatArea.style.display = 'block';
    };

    // Send a chat message
    sendChatBtn.onclick = function() {
        const message = chatInput.value;
        if (message.trim()) {
            const userEmail = document.getElementById('signup-email').value; // Get user email for display
            messages.innerHTML += `<div class="message"><strong>${userEmail}:</strong> ${message}</div>`;
            chatInput.value = ''; // Clear input field
        }
    };

    // Initial background image set-up
    changeBackgroundImage();
});
