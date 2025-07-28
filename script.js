// Run when the window loads
window.onload = function() {
    // Mobile menu toggle
    const menuBar = document.getElementById('menu-bar');
    const dropdownMenu = document.querySelector('.horizontal-list1');
  
    menuBar.onclick = function() {
        dropdownMenu.classList.toggle('show');
        console.log('Menu bar clicked');
    };

    // Animate progress bars
    const progressBars = document.querySelectorAll('.skill-progress');
    progressBars.forEach((progressBar) => {
        const progressValue = progressBar.getAttribute('data-progress');
        const progressBarChild = progressBar.querySelector('div');
        
        setTimeout(() => {
            progressBarChild.style.width = `${progressValue}%`;
        }, 500);
    });
};

// Modal open/close functions
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Handle click outside modal to close it
window.addEventListener('click', function(event) {
    const modals = document.getElementsByClassName('project-modal');
    for (let modal of modals) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});
