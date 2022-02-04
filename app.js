const icons = document.querySelectorAll('.card__icon');
const questions = document.querySelectorAll('.card__content')

icons.forEach((icon) => {
 icon.addEventListener('click', (e)=>{
 
const selectedCard = e.currentTarget.parentElement.parentElement
selectedCard.classList.toggle('active')
    questions.forEach((question) => {
        if (selectedCard !== question)
        question.classList.remove('active')
      })
    })
  })
