import './index.css';
const cookieBanner = document.querySelector('.cookie-consent')
const acceptBtn = document.querySelector('.cookie-consent__button')

acceptBtn.addEventListener('click', () => {
    cookieBanner.classList.add('hide')
    localStorage.setItem('isAccepted', 'yes')
})

window.addEventListener('load', () => {
    const isAccepted = localStorage.getItem('isAccepted')
    isAccepted && cookieBanner.classList.add('hide')
})
