async function getImages() {
    try {
        await fetch(DOG_API)
            .then(res => res.json())
            .then(data => data.message.forEach(element => apiArray.push(element)));
    } catch (err) {
        console.log('api fail: ', err);
    } finally {
        const page = apiArray.length - 1;
        renderNumbersOfImage(page);
    }

}

function renderNumbersOfImage(numbers) {

    numbers = numbers / itemsOnPage;

    for (let i = 1; i <= numbers; i++) {
        let li = document.createElement('li');
        li.textContent = `${i}`;
        UL_TAG.append(li);
    }
    for (const item of LI_TAG) {
        item.addEventListener('click', paginations);
    }
}

function printImages(array) {

    if (divContainerImg.children.length !== 0) {
        divContainerImg.innerHTML = '';
    }
    let countId = 0;
    for (const item of array) {
        if (countId === itemsOnPage) return;
        countId++;
        const div = document.createElement('div');
        const img = document.createElement('img');

        div.className = 'image-container';
        div.id = countId;
        img.className = 'image-item';
        img.id = `image-${countId}`;
        img.src = item;
        divContainerImg.prepend(div);
        div.prepend(img);
        for (const item of IMG) {
            item.addEventListener('click', getBigImage);
        }
    }
}

export default { printImages, renderNumbersOfImage, getImages }