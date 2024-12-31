document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    const hr = document.querySelector('div > div > div:last-child');

    h1.style.opacity = '0';
    p.style.opacity = '0';
    p.style.transform = 'translateY(20px)';
    hr.style.width = '0';

    setTimeout(() => {
        h1.style.transition = 'opacity 1s ease-out';
        h1.style.opacity = '1';
    }, 300);

    setTimeout(() => {
        p.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        p.style.opacity = '1';
        p.style.transform = 'translateY(0)';
    }, 800);

    setTimeout(() => {
        hr.style.transition = 'width 1s ease-out';
        hr.style.width = '6rem';
    }, 1300);

    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }

    document.addEventListener('click', (event) => {
        createBubble(event.clientX, event.clientY);
    });

    const githubBtn = document.querySelector('.github-btn');
    githubBtn.addEventListener('mouseover', () => {
        githubBtn.style.transform = 'scale(1.05)';
    });
    githubBtn.addEventListener('mouseout', () => {
        githubBtn.style.transform = 'scale(1)';
    });
});

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'absolute rounded-full bg-white opacity-20';
    particle.style.width = `${Math.random() * 5 + 1}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
    container.appendChild(particle);
}

function createBubble(x, y) {
    const bubble = document.createElement('div');
    bubble.className = 'absolute rounded-full bg-white opacity-20';
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.style.width = '0';
    bubble.style.height = '0';
    bubble.style.transition = 'all 0.5s ease-out';
    document.getElementById('bubbles').appendChild(bubble);

    setTimeout(() => {
        bubble.style.width = '100px';
        bubble.style.height = '100px';
        bubble.style.opacity = '0';
    }, 0);

    setTimeout(() => {
        bubble.remove();
    }, 500);
}

