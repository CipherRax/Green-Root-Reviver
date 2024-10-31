

// signupForm.onsubmit = async function(event) {
//     event.preventDefault();
//     const email = document.getElementById('signup-email').value;
//     const code = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit code
    
//     try {
//         await fetch('/send-verification-code', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, code })
//         });
//         alert('Verification code sent to ' + email);
//         verificationSection.style.display = 'block';
//     } catch (error) {
//         alert('Error sending email');
//     }
// };

// verifyBtn.onclick = async function() {
//     const enteredCode = document.getElementById('verification-code').value;
//     if (enteredCode == code) {
//         alert("Email verified! You can now join the chat.");
//         joinChatBtn.disabled = false;
//         signupModal.style.display = 'none';
//         // Save user to database (see server-side code below)
//     } else {
//         alert("Verification code is incorrect.");
//     }

    
// };


// // Hero section background image rotation




// // Modal and sign-up form handling
// const signupBtn = document.getElementById('signup-btn');
// const signupModal = document.getElementById('signup-modal');
// const closeBtns = document.querySelectorAll('.close-btn');
// const signupForm = document.getElementById('signup-form');
// const verificationSection = document.getElementById('verification-section');
// const verifyBtn = document.getElementById('verify-btn');
// const joinChatBtn = document.getElementById('join-chat-btn');
// const chatArea = document.getElementById('chat-area');
// const messages = document.getElementById('messages');
// const chatInput = document.getElementById('chat-input');
// const sendChatBtn = document.getElementById('send-chat-btn');

// // Open sign-up modal
// signupBtn.onclick = () => signupModal.style.display = 'block';

// // Close modals
// closeBtns.forEach(btn => btn.onclick = () => btn.closest('.modal').style.display = 'none');

// // Sign-up form submission
// signupForm.onsubmit = async function(event) {
//     event.preventDefault();
//     const email = document.getElementById('signup-email').value;
//     const code = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit code
    
//     try {
//         await fetch('/send-verification-code', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, code })
//         });
//         alert(`Verification code sent to ${email}`);
//         verificationSection.style.display = 'block';
//     } catch (error) {
//         alert('Error sending email');
//     }
// };

// // Verification code handling
// verifyBtn.onclick = function() {
//     const enteredCode = document.getElementById('verification-code').value;
//     if (enteredCode == code) {
//         alert("Email verified! You can now join the chat.");
//         joinChatBtn.disabled = false;
//         signupModal.style.display = 'none';
//     } else {
//         alert("Verification code is incorrect.");
//     }
// };

// // Chat functionality
// joinChatBtn.onclick = () => chatArea.style.display = 'block';

// sendChatBtn.onclick = function() {
//     const message = chatInput.value;
//     if (message.trim()) {
//         messages.innerHTML += `<div>${message}</div>`;
//         chatInput.value = '';
//     }
// };

// // change background pic

// document.addEventListener('DOMContentLoaded', () => {
//     // Array of background images with direct paths
//     const images = [
//         'hump1.jpeg',
//         'hump2.jpeg',
//         'hump3.jpeg'
//     ];

//     // Get the hero section element
//     const heroSection = document.getElementById('hero-section');

//     // Check if the element is found
//     if (!heroSection) {
//         console.error("Element with ID 'hero-section' not found");
//         return; // Stop the script if element is not found
//     }

//     // Initialize index for current image
//     let currentImageIndex = 0;

//     // Function to change the background image
//     function changeBackgroundImage() {
//         // Set the background image with URL formatting for CSS
//         heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;

//         // Increment index and reset if end of array is reached
//         currentImageIndex = (currentImageIndex + 1) % images.length;
//     }

//     // Call changeBackgroundImage every 3 seconds
//     setInterval(changeBackgroundImage, 3000);
// });




document.addEventListener('DOMContentLoaded', () => {
    // Modal and signup form handling
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

    // Background image rotation setup
    const heroSection = document.getElementById('heroSection');
    const images = ['hump1.jpeg', 'hump2.jpeg', 'hump3.jpeg'];
    let currentImageIndex = 0;
    let code;  // Verification code variable

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

    // Background image rotation for the hero section
    function changeBackgroundImage() {
        heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Change hero background image every 3 seconds
    setInterval(changeBackgroundImage, 3000);
});
