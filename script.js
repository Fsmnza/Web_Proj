document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact');
    var successMessage = document.getElementById('success-message');
    form.classList.add('show');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault(); 
        } else {
            successMessage.classList.add('show');
            form.reset();
        }
    });

    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var guests = document.getElementById('number-guests').value;
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;
        var message = document.getElementById('message').value;
        if (!name || !email || !phone || guests === 'number-guests' || !date || time === 'time' || !message) {
            alert('Please fill in all required fields.');
            return false;
        }
        return true;
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#splide-equipment', {
        type: 'loop',
        perPage: 2,
        gap: '1rem',
        autoplay: true,
        pagination: false,
        breakpoints: {
            768: {
                perPage: 1,
            },
        },
    }).mount();
});












const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');






searchicon1.addEventListener('click', function(){
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
})

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function(){
    setTimeout(()=>{
        cross.style.display = 'block';
    },200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click', function(){
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
})
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("backgroundAudio");
    
});
const rotatingImage = document.getElementById('rotatingImage');
let rotationAngle = 0;

function rotateImage() {
    rotationAngle = (rotationAngle + 1) % 360;
    rotatingImage.style.transform = `rotate(${rotationAngle}deg)`; 
    requestAnimationFrame(rotateImage); 
}

rotatingImage.addEventListener('mouseover', () => {
    rotateImage(); 
});




document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        perPage: 3,
        perMove: 1,
        type    : 'loop',
        autoplay: true,
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide1', {
        perPage: 3,
        perMove: 1,
        type    : 'loop',
        autoplay: true,
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-mobile', {
        perPage: 1,
        perMove: 1,
        type    : 'loop',
        autoplay: true,
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-mobile1', {
        perPage: 1,
        perMove: 1,
        type    : 'loop',
        autoplay: true,
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-equipment', {
        perPage: 1,
        perMove: 1,
        type    : 'loop',
        autoplay: true,
    }).mount();
});

function changeImage() {
    var origSplide = document.getElementById('splide');
    var notOrigSplide = document.getElementById('splide1');   
    if(origSplide.style.display == 'block'){
        origSplide.style.display = 'none';
        notOrigSplide.style.display = 'block';
    }
    else{
        origSplide.style.display = 'block';
        notOrigSplide.style.display = 'none';
    }
}

function changeImage1() {
    var origSplide = document.getElementById('splide-mobile');
    var notOrigSplide = document.getElementById('splide-mobile1');   
    if(origSplide.style.display == 'block'){
        origSplide.style.display = 'none';
        notOrigSplide.style.display = 'block';
    }
    else{
        origSplide.style.display = 'block';
        notOrigSplide.style.display = 'none';
    }
}


