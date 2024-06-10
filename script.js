const music = document.querySelector('#music')
music.pause()
const card = document.querySelector('.card')

let state = 0
card.onclick = () => {
    const dobrada = document.querySelector('.card--dobrada')
    const heart = document.querySelector('.heart')
    const invite = document.querySelector('.image')
    if (state++ === 0) {
        heart.remove()
    } else {
        dobrada.style.animation = 'open-card .5s forwards'
        music.volume = .3
        music.play()
        setTimeout(() => {
            invite.style.animation = 'show-card 1s forwards'
        }, 1000);
    }
}