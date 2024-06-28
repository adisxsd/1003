
// Update your wishes array to include photo URLs
document.getElementById('triggerImage').addEventListener('click', function() {
    // document.getElementById('initialScreen').remove(); // Remove the initial screen
    const initialScreen = document.getElementById('initialScreen');
    initialScreen.classList.add('fade-out');
    setTimeout(() => {
        initialScreen.remove(); // Remove the initial screen
        revealCard(); // Function to reveal the card content
    }, 500); // Sesuaikan dengan durasi animasi fade-out (dalam milidetik)
});

function revealCard() {
    const cardHTML = `
    <div class="card">
    <div class="outside">
        <div class="front">
            <p>Happy Birthday</p>
            <div class="cake">
                <div class="top-layer"></div>
                <div class="middle-layer"></div>
                <div class="bottom-layer"></div>
                <div class="candle"></div>
            </div>
        </div>
        <div class="back"></div>
    </div>
    <div class="inside">
        <p id="birthdayWish">KLIK NEXT</p>
        <img id="wishPhoto" src="" alt="Wisher Photo">
        <button id="nextButton" onclick="nextWish()">Next</button>
        
    </div>
</div>
    `;

    document.body.innerHTML += cardHTML; // Append the card HTML to the body

    // If you have any initialization code for the card (like setting up the first wish or photo), call it here
    // For demonstration, let's call nextWish() to set the first wish
    nextWish(); // This function needs to be defined as you previously did, to set the wishes and photos
    const audio = document.getElementById('birthdayAudio');

    // Set volume ke 0 (muted) sebelum dimainkan
    audio.volume = 0;

    // Menerapkan efek fade in pada volume
    const fadeInInterval = setInterval(function () {
        if (audio.volume < 1.0) {
            audio.volume += 0.001; // Atur sesuai kebutuhan
        } else {
            clearInterval(fadeInInterval);
        }
    }, 500); //
    audio.volume = 0.001; // Mulai dari 1%
    audio.play();
    const maxVolume = 0.05; // Target

    // Tambahkan kelas untuk animasi fade-in pada card
    const card = document.querySelector('.card');
    card.classList.add('fade-in');
}
function activateBalloons() {
    const balloonsContainer = document.querySelector('.balloons');
    balloonsContainer.style.height = 'auto'; // Atur ulang dimensi untuk menampilkan balon
    const balloons = document.querySelectorAll('.balloon');
    
    // Atur animasi pada setiap balon
    balloons.forEach((balloon, index) => {
        balloon.style.opacity = '1';
        balloon.style.animationDelay = index * 0.5 + 's'; // Menetapkan penundaan animasi berbeda pada setiap balon
    });
}

// Define nextWish() and other necessary functions here, as previously coded

const wishes = [
    {
        text: "i know this is too much but we just want you to know that we love you, and i love you. HAPPY 20!!",
        photo: "./a.png"
    },
    {
        text: "HBD LUV semoga panjag umur dan sehat selalu orang baik kurangin tu gengsi udah 20 tahun coo ...",
        photo: "./salsa.png"
    },
    {
        text: "lakukan apapun yg km mau dan yg bikin km happy !!!! BAHAGIA SELALU SENG !!!! semoga gamtekmu gak ngulang lagi ya🤪 kalau orang ngechat tu dibales !!!😘😍🥰🤩",
        photo: "./salsa.png"
    },
    {
        text: "🌹🌹🌹🌹 Selamat ulang tahun! Semoga ulang tahunmu dipenuhi kebahagiaan,",
        photo: "./dinka.png"
    },
    {
        text: "'Atamanaa 'an yamtali eid miladik bilahazat saeidatin (أتمنى أن يملأ عيد ميلادك بلحظات سعيدة).🌹🌹",
        photo: "./dinka.png"
    },
    {
        text: "Happy birthday salnong semoga menjadi wanita sholehah kebanggaan mama ayah dan janlup rajin sholat ya!!!!!",
        photo: "./fara.png"
    },
    {
        text: "happy bday nonggg! lancar2 ye kuliahnyaa, semoga selalu diberkahiiii sm Allah dan jd kebanggaan ortu, keluargaa.",
        photo: "./zubeid1.png"
    },
    {
        text: "Semangat kuliahnya semoga sampe wisuda lancar teruss, dan tetep jd org extrovert yg banyak temann! just keep being u sehat selalu dan sukses terus!🫶🏻💐💐",
        photo: "./zubeid.png"
    },
    {
        text: "HAPPY BIRTHDAY SYALNONGGGG…… ciee sudah 20tahun. tau kan harus apa? yuk mandiri dan dewasaa haha.",
        photo: "./akmal.png"
    },
    {
        text: "semoga dikepala dua ini kamu menjadi pribadi yang lebih baik dan bisa abhejeng sobbhu. ",
        photo: "./akmal.png"
    },
    
    {
        text: "semoga apapun yang kamu harapkan bisa tercapai di tahun ini dan terakhir smg ga jomblo lagi yaaa…",
        photo: "./akmal.png"
    },
    {
        text: "semoga dengan bertambahnya umur semakin kuat dan cepat lulus di teknik industri, industri jaya jaya jaya. (kata aldo pake foto osis)",
        photo: "./aldo.png"
    },
    {
        text: "last ni lastt, happy turning 20 va! semua doa baik dah diwakilin temen temen yang lain. Semoga selalu bahagia yaaa",
        photo: "./a3.png"
    },
    {
        text: "you've once said 'temen-temen kuliah ga se seru temen sma' but look at you now! selain kita, banyak yang sayang juga kan",
        photo: "./a2.png"
    },
    {
        text: "May your journey ahead be as bright as your smile today. Happy wishes for a next wonderful time!",
        photo: "./a2.png"
    },
    
];

let currentWishIndex = 0;

function nextWish() {
    currentWishIndex = (currentWishIndex + 1) % wishes.length;
    const currentWish = wishes[currentWishIndex];
    document.getElementById('birthdayWish').innerText = currentWish.text;

    
    document.getElementById('wishPhoto').src = currentWish.photo;
}

function revealContent() {
    const card = document.querySelector('.card');
    card.classList.add('reveal');
    nextWish();
}
function goBack() {
    history.back(); 
}


if (sessionStorage.getItem('initialScreenShown') === 'true') {
    goBack(); 
}