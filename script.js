document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function(){
        navMenu.classList.toggle('active');

        const icon = menuToggle.querySelector('i');
        if(icon.classList.contains('fa-bars')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            icon.classList.add('fa-solid');   
        } else{
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            icon.classList.add('fa-solid');
        }
        
    });

    document.querySelectorAll('nav a').forEach(Link => {
        Link.addEventListener('click', function(){
            navMenu.classList.remove('active');
           
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-solid');
        });
    });

    const texts = [
        "Frontend Developer",
        "Html & Css Designer",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function type(){
        const currentText = texts[textIndex];
        const typingElement = document.querySelector(".typing-text");

        if(isDeleting){
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else{
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }
        if(!isDeleting && charIndex === currentText.length){
            isDeleting =true;
            typingDelay = 1500;

        } else if(isDeleting && charIndex === 0){
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingDelay = 500;
        }
        setTimeout(type, typingDelay);
    }
    setTimeout(type, 1000);

    document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
        anchor.addEventListener('click', function(e){
            e.preventDefault();

            const targetId  = this.getAttribute('href');
            if(targetId === '#') 
                return;

            const targetElement = document.querySelector(targetId);
            if(targetElement){
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
