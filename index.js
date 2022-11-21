const kits = ['kick', 'bongo', 'crash', 'Djembe', 'floorTom', 'Bass', 'RackTom', 'Snare', 'Tabla', 'timpani'];

const containerEl = document.querySelector('.container');

kits.forEach(kit => {
    const btnEl = document.createElement('button');
    btnEl.classList.add('btn')
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = "url(images/" + kit + ".jpg)";
    containerEl.appendChild(btnEl);
    const audioEl = document.createElement('audio');
    audioEl.src = "sound/" + kit + ".mp4";
    containerEl.appendChild(audioEl);

    btnEl.addEventListener('click', () => {
        audioEl.play();
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === kit.slice(0, 1)) {
            audioEl.play();
            btnEl.style.transform = 'scale(1.2)';
            setTimeout(() => {
                btnEl.style.transform = 'scale(1)';
            }, 100);
        }
    });
});