// ams tijd

console.log("test1")

const amsterdamTimeElement = document.getElementById("amsterdamTime");

function updateTime() {
    const amsterdamTime = new Date().toLocaleTimeString("nl-NL", { timeZone: "Europe/Amsterdam" });
    amsterdamTimeElement.textContent = amsterdamTime;
}

updateTime();

setInterval(updateTime, 1000);

// typewriter

console.log("test2")

function typeWriter(text, speed) {
    let i = 0;
    const demo = document.getElementById("demo");
    demo.innerHTML = "";

    function type() {
        if (i < text.length) {
            demo.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

typeWriter('R&B, also known as Rhythm and Blues. It is a genre thats deeply rooted in Africa- America. It is a blend of jazz, blues and gospel. Known for its soulful melodies, vocals and emotional lyrics. Take a look in a few of my favorite R&B albums and popular songs.', 50);

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// vinyl player + audio

console.log("test3");

document.addEventListener('DOMContentLoaded', function () {
    const playButtons = document.querySelectorAll('button[id^="playButton"]');
    const audios = document.querySelectorAll('audio[id^="audio"]');

    playButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            togglePlay(index);
        });
    });

    function togglePlay(index) {
        const audio = audios[index];
        if (audio.paused) {
            stopAllAudios();
            audio.play();
            rotateVinyl(document.getElementById(`vinyl${index + 1}`), index);
        } else {
            audio.pause();
            cancelAnimationFrame(animationFrameIds[index]);
        }
    }

    function stopAllAudios() {
        audios.forEach(audio => {
            audio.pause();
        });
        animationFrameIds.forEach(id => {
            cancelAnimationFrame(id);
        });
    }

    function rotateVinyl(vinyl, index) {
        let rotation = 0;
        function rotate() {
            rotation += 2;
            vinyl.style.transform = `rotate(${rotation}deg)`;
            if (rotation >= 360) {
                rotation = 0;
            }
            animationFrameIds[index] = requestAnimationFrame(rotate);
        }
        rotate();
    }

    const animationFrameIds = [];

    const vinyls = document.querySelectorAll('.vinyl-container img');

    vinyls.forEach((vinyl, index) => {
        vinyl.style.transform = `rotate(0deg)`;
    });
});

