console.log(`Ajax - Warsztat - pobierz dane po kliknięciu przycisku`);

let btnGetData = document.getElementById('get-data');

const getData = () => {

    fetch(' https://akademia108.pl/api/ajax/get-post.php').then(res => res.json())
        .then(data => {

            let pId = document.creatElement('p');
            let pUserId = document.creatElement('p');
            let pTitle = document.creatElement('p');
            let pBody = document.creatElement('p');

            pId.InnerText = `post ID: ${data.id}`;
            pUserId.innerText = `User ID: ${data.userId}`;
            pTitle.innerText = `Title: ${data.title}`;
            pBody.innerText = `Body: ${data.body}`;
            let hr = document.createElement('hr');

            document.body.appendChild(pID);
            document.body.appendChild(pUserId);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);

            // console.log(data);
        })

        .catch.error(error);
    console.log('getData()');
}

btnGetData.addEventListener('click', getData);