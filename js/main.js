// Copy to clipboard functionality
document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const codeBlock = button.parentElement.querySelector('.code-content');
            const text = codeBlock.innerText;

            try {
                await navigator.clipboard.writeText(text);

                // Visual feedback
                const originalText = button.innerText;
                button.innerText = 'Copied!';
                button.style.background = 'rgba(16, 185, 129, 0.2)';
                button.style.color = '#10B981';

                setTimeout(() => {
                    button.innerText = originalText;
                    button.style.background = '';
                    button.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
                button.innerText = 'Error';
            }
        });
    });
});
