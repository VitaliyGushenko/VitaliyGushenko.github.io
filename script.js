const listButton = document.querySelectorAll('.more')

for (key of listButton) {
  key.onclick = (event) => {
    const number = event.target.name.split('_')[1]
    if (document.querySelector('.programm__info__' + number).style.display === 'inline') {
      document.querySelector('.programm__info__' + number).style.display = 'none'
      document.querySelector('.more[name= ' + event.target.name + ']').classList.remove('selected')
      console.log(document.querySelector('.more[name= ' + event.target.name + ']'))
    }
    else {
      document.querySelector('.programm__info__' + number).style.display = 'inline';
      document.querySelector('.more[name= ' + event.target.name + ']').classList.add('selected')
    }
  }
}