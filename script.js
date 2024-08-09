const txt = document.getElementById('text-mostra')
const foto = document.getElementsByClassName('photo')
const caixa = document.querySelector('#infos')

foto[0].addEventListener('mouseenter', ()=>{
    txt.innerHTML = '<p>Igreja Evangélica Rios de Vida de Capela de Santana</p> <p>R. Pastor Misael Cardoso, nº175 - Imigrantes - Capela de Santana</p>'
})

foto[1].addEventListener('mouseenter', ()=>{
    txt.innerHTML = '<small>Nossos pastores:</small><p><h3>Pastor Edson</h3></p> <p><h3>Pastora Ana Paula</h3></p> <small>--Clique na imagem para ser direcionado para o instagram dos pastores--</small>'
    foto[1].style.cursor = 'pointer'
}) 

foto[1].addEventListener('click', ()=>{
    window.open('https://www.instagram.com/praana_predson/', '_blank')
})

caixa.addEventListener('mouseout', ()=>{
    txt.innerHTML = ''
})

//LINKS

const links = document.querySelectorAll('.js-link')
const sections = document.querySelectorAll('.section')

window.addEventListener('scroll', ()=>{
    sections.forEach(section => {
        let top = window.scrollY
        let offset = section.offsetTop - 50
        let highSection = section.offsetHeight
        let idSection = section.getAttribute('id')
        
        if(top >= offset && top < offset + highSection / 2.5) {
            links.forEach(link => {
                link.classList.remove('actived')

                document.querySelector(`header nav a[href*=${idSection}]`).classList.add('actived')
            })
        }
    })
})

//CRONOGRAMA

const cronogramaLinks = document.querySelectorAll('.cronograma-link')
const cronogramaArticles = document.querySelectorAll('.js-article')

cronogramaLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()

        cronogramaLinks.forEach(link => link.classList.remove('clicked'))
        link.classList.add('clicked')

        const targetId = link.getAttribute('id')
        cronogramaArticles.forEach(article => {
            articleId = article.getAttribute('id')
            article.classList.remove('cronograma-article')
            article.classList.add('hidden')
            if (articleId == targetId) {
                article.classList.remove('hidden')
                article.classList.add('cronograma-article')
            }
            //console.log(`${targetId}`)
            //console.log(`${articleId}`)
        })
    })
})