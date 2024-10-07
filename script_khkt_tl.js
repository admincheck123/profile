// Copy Code Function
function copyCode(elementId) {
    const code = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(code).then(() => {
        // Change button text and color
        const button = document.querySelector(`button[onclick="copyCode('${elementId}')"]`);
        button.innerText = 'Đã sao chép!';
        button.classList.add('copied');

        // Revert button text and color after 2 seconds
        setTimeout(() => {
            button.innerText = 'Sao chép';
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Accordion for code sections
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.querySelector('i').classList.replace('fa-minus', 'fa-plus');
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                this.querySelector('i').classList.replace('fa-plus', 'fa-minus');
            }
        });
    });
});
