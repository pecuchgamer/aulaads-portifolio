window .alert("Bem Vindo")
window .confirm("Conheça a AidVerse")
window .prompt("escreva seu nome")

const checkbox = document.getElementById('cheK');
const body = document.body;

function toggleDarkMode() {
    if (checkbox.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

function loadTheme() {
    
    const savedTheme = localStorage.getItem('theme');
    
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      
        checkbox.checked = true; 
        body.classList.add('dark-mode');
    } else {
 
        checkbox.checked = false; 
        body.classList.remove('dark-mode');
    }
}


loadTheme();


checkbox.addEventListener('change', toggleDarkMode);