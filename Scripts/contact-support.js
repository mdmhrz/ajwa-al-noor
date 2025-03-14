function formatTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}
function addMessage(message, isUser = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`;
    messageDiv.innerHTML = `
<div class="max-w-[70%]">
<div class="${isUser ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'} px-4 py-2 rounded-lg">
${message}
</div>
<div class="text-xs text-gray-500 mt-1 ${isUser ? 'text-right' : ''}">
${formatTime()}
</div>
</div>
`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
function addTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typingIndicator';
    typingDiv.className = 'flex justify-start mb-4';
    typingDiv.innerHTML = `
<div class="max-w-[70%]">
<div class="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
<div class="flex gap-1">
<div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
<div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
<div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
</div>
</div>
</div>
`;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}
const automaticResponses = [
    "Hi there! How can I help you today?",
    "I understand your concern. Let me check that for you.",
    "Thanks for reaching out! I'll be happy to assist you.",
    "Could you please provide more details about your issue?",
    "I'm looking into this right now for you."
];
function getRandomResponse() {
    return automaticResponses[Math.floor(Math.random() * automaticResponses.length)];
}
function handleSendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message) {
        addMessage(message, true);
        messageInput.value = '';
        addTypingIndicator();
        setTimeout(() => {
            removeTypingIndicator();
            addMessage(getRandomResponse(), false);
        }, 2000);
    }
}
document.getElementById('sendMessage').addEventListener('click', handleSendMessage);
document.getElementById('messageInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSendMessage();
    }
});
document.getElementById('chatToggle').addEventListener('click', () => {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('hidden');
});
const dropZone = document.querySelector('.file-drop-zone');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
});
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
});
['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
});
function highlight(e) {
    dropZone.classList.add('dragging');
}
function unhighlight(e) {
    dropZone.classList.remove('dragging');
}
document.getElementById('supportForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="ri-loader-4-line animate-spin"></i> Submitting...';
    setTimeout(() => {
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
        successMessage.innerHTML = '<div class="flex items-center gap-2"><i class="ri-checkbox-circle-line"></i> Your request has been submitted successfully!</div>';
        document.body.appendChild(successMessage);
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="ri-send-plane-line"></i> Submit Request';
        e.target.reset();
        setTimeout(() => successMessage.remove(), 5000);
    }, 1500);
});