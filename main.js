let addBtn = document.querySelector('.add-btn')
let inp = document.querySelector('.inp')
let ul = document.querySelector('.ul')



let addTodo = () => {
    let value = inp.value;
    if (value) {
        if (ul.childElementCount < 7) {
            let li = document.createElement('li');
            let span = document.createElement('span')
            span.innerText = value;
            li.append(span)
            li.classList.add('todo')
            // li.innerText = value;

            let dltBtn = document.createElement('button');
            dltBtn.classList.add('dlt-btn')
            let dltIcon = document.createElement('i')
            dltIcon.classList.add("fa-solid")
            dltIcon.classList.add("fa-trash-can")
            dltBtn.append(dltIcon)
            li.append(dltBtn)

            let strikeBtn = document.createElement('button');
            strikeBtn.classList.add('strike-btn')
            let strikeIcon = document.createElement('i')
            strikeIcon.classList.add("fa-solid")
            strikeIcon.classList.add("fa-check")
            strikeBtn.append(strikeIcon)
            li.append(strikeBtn)

            ul.append(li)
            inp.value = ""



            dltBtn.addEventListener('click', (e) => {
                e.currentTarget.parentElement.remove()
            })

            strikeBtn.addEventListener('click', (e) => {
                e.currentTarget.previousSibling.previousSibling.innerHTML = `<s>${value}</s>`
            })
        } else {
            alert("Maximum number of todos reached")
        }




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