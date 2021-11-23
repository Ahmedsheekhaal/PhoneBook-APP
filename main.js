var contect = [];
contect.push({ id: 1, name: 'Hana Jaamac', phone: '063408449' });
displayDate();
function displayDate() {
    var tbody = document.querySelector('tbody');
    tbody.remove();
    var newTbody = document.createElement('tbody');
    newTbody.className = 'text-center bg-yellow-100 text-gray-700 font-mono';
    for (var _i = 0, contect_1 = contect; _i < contect_1.length; _i++) {
        var eachcontect = contect_1[_i];
        var row = document.createElement('tr');
        var id = document.createElement('td');
        id.className = 'border border-gray-600';
        id.textContent = eachcontect.id.toString();
        var name_1 = document.createElement('td');
        name_1.className = 'text-left pl-5 border border-gray-600';
        name_1.textContent = eachcontect.name;
        var phone = document.createElement('td');
        phone.className = 'text-left pl-5 border border-gray-600';
        phone.textContent = eachcontect.phone;
        row.appendChild(id);
        row.appendChild(name_1);
        row.appendChild(phone);
        newTbody.appendChild(row);
    }
    var table = document.querySelector('table');
    table.appendChild(newTbody);
}
function add() {
    var input1 = document.querySelector('.inp1');
    var name = input1.value;
    var input2 = document.querySelector('.inp2');
    var phone = input2.value;
    if (phone.length >= 10) {
        alert('This number is not availble');
        input2.value = "";
        return;
    }
    if (input1.value === "" || input2.value === "") {
        alert(' Please Enter your Name and Phone !!');
        return;
    }
    // let removeD = contect.filter(e => e.phone === phone)
    // if (removeD.length <= 0) {
    //     alert(' This Number is already exsist');
    //     return;
    // }
    for (var _i = 0, contect_2 = contect; _i < contect_2.length; _i++) {
        var eachContect = contect_2[_i];
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
    });
    displayDate();
    // console.log(aryContects)
    input1.value = '';
    input2.value = '';
}
var buttonAdd = document.querySelector('.button');
buttonAdd.addEventListener('click', add);
function search() {
    var search = document.getElementById('input');
    var h = search.value.toUpperCase();
    var table = document.querySelector('table');
    var tr = table.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            var textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(h) > -1) {
                tr[i].style.display = '';
            }
            else {
                tr[i].style.display = 'none';
            }
        }
    }
}
var searchBox = document.getElementById('input');
searchBox.addEventListener('keyup', search);
