const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const dots = $$('.tab-item');
const slides = $$('.slide-users');
const prevBtn = $('.prev');
const nextBtn = $('.next');
const optionE = $$('.option-item');
const extendEs = $$('.extend');
const skillsSection = $('.skills-section')
const progressBars = $$('.container-skills-progress-bar')
var taskbar = $('.options');


optionE.forEach((option, index) => {
    const extendE = extendEs[index]
    option.onclick = function(){
        clickTop();

        $('.option-item.active').classList.remove('active');
        $('.extend.active').classList.remove('active');

        this.classList.add('active');
        extendE.classList.add('active');
    }
});
function clickTop(){
    document.documentElement.scrollTop = 0
}
window.onscroll = function(){
    if(document.documentElement.scrollTop > 300 ||
        document.body.scrollTop > 300    
    ){
        taskbar.style.position = 'fixed';
        taskbar.style.top = 0;
        taskbar.style.width = '180px';
        taskbar.style.marginTop = '30px';
        taskbar.style.transition = 'all .2s linear'
    }else {
        taskbar.style.position = 'static';
        taskbar.style.marginTop = 0;
        taskbar.style.transition = 'all .2s linear'
    }
}
dots.forEach((dot, index) =>{
    const slide = slides[index];

    dot.onclick = function(){
        $('.tab-item.active').classList.remove('active');
        $('.slide-users.active').classList.remove('active')

        this.classList.add('active')
        slide.classList.add('active')
    }
})
var slideNumber = 0;
nextBtn.addEventListener('click', (e)=>{
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
    dots.forEach((dot)=>{
        dot.classList.remove('active')
    })
    slideNumber++;

    if (slideNumber > slides.length - 1) {
        slideNumber = 0;
    }
    slides[slideNumber].classList.add('active');
    dots[slideNumber].classList.add('active')
})
prevBtn.addEventListener('click', (e)=>{
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
    dots.forEach((dot)=>{
        dot.classList.remove('active')
    })
    
    slideNumber--;
    if (slideNumber < 0) {
        slideNumber = slides.length - 1;
    }
    slides[slideNumber].classList.add('active')
    dots[slideNumber].classList.add('active')
})

var playSlide;
var repeater = () => {
    playSlide = setInterval(()=>{
        slides.forEach((slide)=>{
            slide.classList.remove('active')
        })
        dots.forEach((dot)=>{
            dot.classList.remove('active')
        })
        slideNumber++
        if(slideNumber > slides.length - 1){
            slideNumber = 0
        }
        slides[slideNumber].classList.add('active')
        dots[slideNumber].classList.add('active')
    }, 5000)
}
repeater()

function showProgress(){
    progressBars.forEach((progressBar) =>{
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1
        progressBar.style.width = `${value}%`
        progressBar.style.transition = "all .4s linear"
    })
}
function hideProgress(){
    progressBars.forEach((progressBar) =>{
        progressBar.style.opacity = 0
        progressBar.style.width = 0
        // progressBar.style.transition = "all .4s linear"
    })
}
window.addEventListener('scroll', ()=>{
    const sectionPosition = skillsSection.getBoundingClientRect().top
    const screenPositon = window.innerHeight

    if(sectionPosition < screenPositon){
        showProgress()
    }else {
        hideProgress()
    }
})