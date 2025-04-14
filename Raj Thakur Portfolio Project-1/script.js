const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
            'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
            'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
            'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
            'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }
});

//------------------------    dark mode      --------------------

if (localStorage.theme === 'dark' || (!('theme' in localStorage)
 && window.matchMedia('(prefers-color-scheme: dark)').matches)){
document.documentElement.classList.add('dark')
}else{
    document.documentElement.classList.remove('dark')
}
function toggleTheme(){
    document.documentElement.classList.toggle('dark')

    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light'
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const buttons = document.querySelectorAll(".card button");

    cards.forEach(card => {
        card.addEventListener("mouseover", function() {
            card.style.transform = "translateY(-10px)";
            card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseout", function() {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });

    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "#0056b3";
            button.style.transform = "translateY(-2px)";
            button.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
        });

        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "#007BFF";
            button.style.transform = "translateY(0)";
            button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });

        button.addEventListener("mousedown", function() {
            button.style.backgroundColor = "#003f7f";
            button.style.transform = "translateY(0)";
            button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });

        button.addEventListener("mouseup", function() {
            button.style.backgroundColor = "#0056b3";
            button.style.transform = "translateY(-2px)";
            button.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
        });
    });
});

document.getElementById('animatedButton').addEventListener('click', function () {
    window.open('link_to_certificate.pdf', '_blank');
  });

document.querySelectorAll('a img').forEach((img) => {
    img.addEventListener('mouseenter', () => {
      img.classList.add('transform', 'scale-110', 'shadow-custom-shadow', 'transition', 'duration-500', 'ease-in-out');
    });
  
    img.addEventListener('mouseleave', () => {
      img.classList.remove('transform', 'scale-110', 'shadow-custom-shadow', 'transition', 'duration-500', 'ease-in-out');
    });
  });
    
  