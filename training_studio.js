let first_img= document.getElementById('first_img');
let first_h4= document.getElementById('first_h4');
let first_pp= document.getElementById('first_pp');



function secondtraining() {
    first_img.src="training-image-02.jpg";
    first_h4.innerHTML='Second Training Class';
    first_pp.innerHTML='Yoga is a mind and body practice. Various styles of yoga combines physical postures, breathing <br /> techniques, and meditation or relaxation.'
}


function thirdtraining() {
    first_img.src="/training-image-03.jpg"
    first_h4.innerHTML='Third Training Class'
    first_pp.innerHTML='Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. <br> Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id <br> felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.'
}

function fourthtraining() {
    first_img.src="/training-image-04.jpg"
    first_h4.innerHTML='Fourth Training Class'
    first_pp.innerHTML='Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br> Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum <br> commodo et.'
}

function firsttraining() {
    first_img.src="/training-image-01.jpg"
    first_h4.innerHTML='First Training Class'
    first_pp.innerHTML='Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. <br> Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia <br> gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam'
}




let fit1=document.getElementById('fit1')
let fit2=document.getElementById('fit2')
let mus1=document.getElementById('mus1')
let mus2=document.getElementById('mus2')
let bod1=document.getElementById('bod1')
let bod2=document.getElementById('bod2')
let yog1=document.getElementById('yog1')
let yog2=document.getElementById('yog2')
let adv1=document.getElementById('adv1')
let adv2=document.getElementById('adv2')

// let mon = document.getElementById('mon');
// let tue = document.getElementById('tue');
// let wed = document.getElementById('wed');
// let thurs = document.getElementById('thurs');
// let fri = document.getElementById('fri');

// // mon.addEventListener('click', monday)

function monday() {
    fit1.innerHTML='10:00AM - 11:30AM';
    fit2.innerHTML='';
    mus1.innerHTML='';
    mus2.innerHTML='';
    bod1.innerHTML='';
    bod2.innerHTML='2:00PM - 3:30PM';
    yog1.innerHTML='';
    yog2.innerHTML='';
    adv1.innerHTML='';
    adv2.innerHTML='';
}




function tuesday() {
    fit1.innerHTML=''
    fit2.innerHTML='2:00PM - 3:30PM'
    mus1.innerHTML=''
    mus2.innerHTML=''
    bod1.innerHTML='10:00AM - 11:30AM'
    bod2.innerHTML=''
    yog1.innerHTML=''
    yog2.innerHTML=''
    adv1.innerHTML=''
    adv2.innerHTML=''
}





function wednesday() {
    fit1.innerHTML=''
    fit2.innerHTML=''
    mus1.innerHTML=''
    mus2.innerHTML=''
    bod1.innerHTML=''
    bod2.innerHTML=''
    yog1.innerHTML='10:00AM - 11:30AM'
    yog2.innerHTML=''
    adv1.innerHTML=''
    adv2.innerHTML='2:00PM - 3:30PM';
    mon.style.color = '#ffffff';
    tue.style.color = '#ffffff';
    wed.style.color = '#ed563b';
    thurs.style.color = '#ffffff';
    fri.style.color = '#ffffff';
}

function thursday() {
    fit1.innerHTML=''
    fit2.innerHTML=''
    mus1.innerHTML=''
    mus2.innerHTML='2:00PM - 3:30PM'
    bod1.innerHTML=''
    bod2.innerHTML=''
    yog1.innerHTML=''
    yog2.innerHTML=''
    adv1.innerHTML='10:00AM - 11:30AM'
    adv2.innerHTML='';
    mon.style.color = '#ffffff';
    tue.style.color = '#ffffff';
    wed.style.color = '#ffffff';
    thurs.style.color = '#ed563b';
    fri.style.color = '#ffffff';
}

function friday() {
    fit1.innerHTML=''
    fit2.innerHTML=''
    mus1.innerHTML='10:00AM - 11:30AM'
    mus2.innerHTML=''
    bod1.innerHTML=''
    bod2.innerHTML=''
    yog1.innerHTML=''
    yog2.innerHTML='2:00PM - 3:30PM'
    adv1.innerHTML=''
    adv2.innerHTML='';
    mon.style.color = '#ffffff';
    tue.style.color = '#ffffff';
    wed.style.color = '#ffffff';
    thurs.style.color = '#ffffff';
    fri.style.color = '#ed563b';
}


function sticky() {
    let navigation = document.querySelector('nav');

    stickypoint = 500;
    
    if (window.pageYOffset>stickypoint) {
        navigation.classList.add('sticky')
    } else {
        navigation.classList.remove('sticky')  
    }
}
window.addEventListener('scroll', sticky)


