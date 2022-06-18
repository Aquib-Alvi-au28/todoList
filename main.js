let addBtn = document.querySelector('.add-btn')
let inp = document.querySelector('.inp')
let ul = document.querySelector('.ul')



let addTodo = () => {
    let value = inp.value;
    if (value) {
        let li = document.createElement('li');
        let span = document.createElement('span')
        span.innerText = value;
        li.append(span)
        li.classList.add('todo')


        let dltBtn = document.createElement('button');
        dltBtn.classList.add('dlt-btn')
        let dltIcon = document.createElement('i')
        dltIcon.classList.add("fa-solid")
        dltIcon.classList.add("fa-trash-can")
        dltBtn.append(dltIcon)
        li.append(dltBtn)

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn')
        let editIcon = document.createElement('i')
        editIcon.classList.add("fa-regular")
        editIcon.classList.add("fa-pen-to-square")
        editBtn.append(editIcon)
        li.append(editBtn)

        let strikeBtn = document.createElement('button');
        strikeBtn.classList.add('strike-btn')
        let strikeIcon = document.createElement('i')
        strikeIcon.classList.add("fa-solid")
        strikeIcon.classList.add("fa-check")
        strikeBtn.append(strikeIcon)
        li.append(strikeBtn)

        ul.append(li)


        let clickCount = 0
        let editInp = ""
        editBtn.addEventListener('click', (e) => {
            clickCount++

            if (clickCount == 1) {
                editInp = prompt("Enter the new todo", value)
                e.currentTarget.previousSibling.previousSibling.innerText = editInp;
            } else {
                editInp = prompt("Edit the selected item", editInp)
                e.currentTarget.previousSibling.previousSibling.innerText = editInp;
            }

        })

        dltBtn.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove()
        })

        strikeBtn.addEventListener('click', (e) => {
            e.currentTarget.previousSibling.previousSibling.previousSibling.innerHTML = `<s>${e.currentTarget.previousSibling.previousSibling.previousSibling.innerText}</s>`
        })
        inp.value = ""
    } else {
        alert("Please enter todo")
    }
}

// Adding todos through click.

addBtn.addEventListener('click', addTodo)

// Adding todos through enter key.

inp.addEventListener('keyup', () => {
    if (event.key == 'Enter') {
        addTodo();
    }
})