const firstBtn = document.querySelector('.btn1')
const secondBtn = document.querySelector('.btn2')

firstBtn.addEventListener('click', onFirstBtnClick)
secondBtn.addEventListener('click', onSecondBtnClick)

function onFirstBtnClick() {
  const firstRow = 'мама мыла раму'
  const secondRow = 'собака друг человека'
  const userLetter = prompt('Введи букву')
  function getRow(firstRow, secondRow) {
    const firstRowCount = firstRow.split('').filter((letter) => letter === userLetter).length
    const secondRowCount = secondRow.split('').filter((letter) => letter === userLetter).length

    if (userLetter.length !== 1) {
      return 'Ты ввел не одну букву'
    }
    if (firstRowCount > secondRowCount) {
      return `Строка ${firstRow} содержит больше этих букв`
    }
    if (firstRowCount < secondRowCount) {
      return `Строка ${secondRow} содержит больше этих букв`
    }
    if (firstRowCount === secondRowCount && firstRowCount !== 0) {
      return 'В строках равное количество этих букв'
    }
    return 'В строках нет такой буквы'
  }
  alert(getRow(firstRow, secondRow))
}

function onSecondBtnClick() {
  function formattedPhone(phone) {
    const lenPhone = phone.length
    let tt = phone.split('')
    if (lenPhone == 12) {
      tt.splice(2, '', ' (')
      tt.splice(6, '', ') ')
      tt.splice(10, '', '-')
      tt.splice(13, '', '-')
      return tt.join('')
    } else {
      return 'Не корректный номер'
    }
  }
  alert(`Formated number: ${formattedPhone('+71234567890')}`) // +7 (123) 456-78-90
}
