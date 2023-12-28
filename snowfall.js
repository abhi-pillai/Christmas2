document.addEventListener('DOMContentLoaded', function () {
    const snowfallContainer = document.getElementById('snowfall');

    for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.left = `${Math.random() * 100}vw`;

        snowfallContainer.appendChild(snowflake);
    }
});
