import 'bootstrap';

import './scss/style.scss'
import './assets/img/logo/logo.png'
import './assets/img/logo/about-logo.png'
import './assets/img/icons/play-icon.png'
import './assets/img/other/Items.png'
import './assets/img/other/avatar1.png'
import './assets/img/other/avatar2.png'
import './assets/img/other/avatar-active.png'
import './assets/img/other/avatar4.png'
import './assets/img/other/avatar5.png'
import './assets/img/icons/big.png'
import './assets/img/icons/phone.png'
import './assets/img/icons/tv.png'
import './assets/img/icons/paint.png'
import './assets/img/icons/game.png'
import './assets/img/icons/mobile.png'
import './assets/img/icons/card.png'
import './assets/img/icons/parth.png'
import './assets/img/icons/paper.png'
import './assets/img/icons/facebook.png'
import './assets/img/icons/twitter.png'
import './assets/img/icons/dribbble.png'
import './assets/img/icons/instagram.png'
import './assets/img/icons/google.png'
import './assets/img/icons/youtube.png'
import './assets/img/works/1-1.png'
import './assets/img/works/1-2.png'
import './assets/img/works/1-3.png'
import './assets/img/works/1-4.png'
import './assets/img/works/1-5.png'
import './assets/img/works/1-6.png'
import './assets/img/works/2-1.png'
import './assets/img/works/2-2.png'
import './assets/img/works/2-3.png'
import './assets/img/works/2-4.png'
import './assets/img/works/2-5.png'
import './assets/img/works/2-6.png'


const body = document.body;
const video = document.querySelector('.video');
const close = document.querySelector('.close');

video.addEventListener('click', () => {
    body.style.overflow = 'hidden'
    console.log('video')
});
close.addEventListener('click', () => {
    body.style.overflow = 'auto'
    console.log('close')
})

const review = document.querySelector('.review');
const nameQuotes = document.querySelector('.name-quotes');
const positionQuotes = document.querySelector('.position-quotes');
const arrAvatarBtn = Array.from(document.querySelectorAll('.avatar-btn'));

const arr = [
    {
        nameQuotes:  'SEMF UCUK',
        review: `Once when I was six I saw a magnificent picture in a book about the jungle, called True Stories. 
        It showed a boa constrictor swallowing a wild beast. 
        Here is a copy of the picture.
        In the book it said: 
        "Boa constrictors swallow their prey whole, without chewing. 
        Afterward they are no longer able to move, and they sleep for six months they need for digestion."`,
        positionQuotes: 'CEO & FOUNDER'
    },
    {
        review:`The grown-ups advised me to put away my drawings of boa constrictors, 
        outside or inside, and apply myself instead to geography, history, arithmetic, and grammar. 
        That is why I gave up, at the age of six, a magnificent career as an artist.
        I had been discouraged by the failure of my drawing Number One and of my drawing Number Two.`,
        nameQuotes:'DIK ADALIN',
        positionQuotes:'ENGINEERING'
    },
    {
        review:`This is Photoshop's version of Lorem Ipsum. 
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
        lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. 
        Nam nec tellus a odio tincidunt auctor a ornare odio.
        Sed non mauris vitae erat consequat auctor eu in elit.`,
        nameQuotes:'JANE GALADRIEL',
        positionQuotes:'CEO TENGKUREP'
    },
    {
        review: `So then I had to choose another career. I learned to pilot airplanes. 
        I have flown almost everywhere in the world. And, as a matter of fact, geography has been a big help to me. 
        I could tell China from Arizona at first glance, which is very useful if you get lost during the night.`,
        nameQuotes:'JENG KOL',
        positionQuotes:'DESIGNER'
    },
    {
        review:`The first night, then, I went to sleep on the sand a thousand miles from any inhabited country.
         I was more isolated than a man shipwrecked on a raft in the middle of the ocean. 
         So you can imagine my surprise when I was awakened at daybreak by a funny little voice saying, 
         "Please..." draw me a sheep...`,
        nameQuotes:'PET ROMAK',
        positionQuotes:'MARKETING'
    }

];

function avatarReplacement(element) {
    review.innerHTML = element.review;
    nameQuotes.innerHTML = element.nameQuotes;
    positionQuotes.innerHTML = element.positionQuotes;
};

arrAvatarBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        arrAvatarBtn.forEach(b => {
            b.classList.remove('active')
        })
        btn.classList.add('active')
        const i = arrAvatarBtn.indexOf(btn);
        const curElement = arr[i];
        avatarReplacement(curElement)
    })
})
