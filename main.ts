
type contects = {
    id: number;
    name: string;
    phone: string;
}


const contect: contects[] = [];

contect.push({ id: 1, name: 'Hana Jaamac', phone: '063408449' });
displayDate();

function displayDate() {
    const tbody = document.querySelector('tbody');
    tbody.remove();
    const newTbody = document.createElement('tbody');
    newTbody.className = 'text-center bg-yellow-100 text-gray-700 font-mono';

    for (const eachcontect of contect) {
        const row = document.createElement('tr');

        const id = document.createElement('td');
        id.className = 'border border-gray-600';
        id.textContent = eachcontect.id.toString();

        const name = document.createElement('td');
        name.className = 'text-left pl-5 border border-gray-600';
        name.textContent = eachcontect.name;

        const phone = document.createElement('td');
        phone.className = 'text-left pl-5 border border-gray-600';
        phone.textContent = eachcontect.phone;

        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(phone);
        newTbody.appendChild(row);
    }
    const table = document.querySelector('table');
    table.appendChild(newTbody);
}

function add() {
    const input1 = document.querySelector('.inp1') as HTMLInputElement;
    const name = input1.value;
    const input2 = document.querySelector('.inp2') as HTMLInputElement;
    const phone = input2.value;
    if (phone.length >= 10) {

        alert('This number is not availble')
        input2.value = "";
        return;
    }
    if (input1.value === "" || input2.value === "") {
        alert(' Please Enter your Name and Phone !!')
        return;
    }

    // let removeD = contect.filter(e => e.phone === phone)
    // if (removeD.length <= 0) {
    //     alert(' This Number is already exsist');
    //     return;
    // }

    for (const eachContect of contect) {
        if (phone === eachContect.phone) {
            alert(' This Number is already exsist');
            input2.value = '';
            return;
        }
    }
    contect.push({
        id: contect.length + 1,
        name: name,
        phone: phone
    })
    displayDate();
    // console.log(aryContects)
    input1.value = '';
    input2.value = '';
}

const buttonAdd = document.querySelector('.button')
buttonAdd.addEventListener('click', add);

function search() {
    const search = document.getElementById('input') as HTMLInputElement;
    let h = search.value.toUpperCase();
    const table = document.querySelector('table');
    const tr = table.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            const textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(h) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none'
            }
        }
    }
}

const searchBox = document.getElementById('input');
searchBox.addEventListener('keyup', search)

