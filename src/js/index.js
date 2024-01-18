const activateItems = document.querySelectorAll('.item');

activateItems.forEach((item) => {
    item.addEventListener('click', () => {
        const actualItem = document.querySelector('.active')

        if (actualItem) {
            actualItem.classList.remove('active')
        }

        item.classList.add('active')

    })
})