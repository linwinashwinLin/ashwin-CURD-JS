let persons = [];

function createPerson() {
    const pName = document.getElementById("name").value
    const scName = document.getElementById("scname").value;
    const imgUrl = document.getElementById("img").value;
    persons.push({ pName, scName, imgUrl });
    console.log(pName + scName + imgUrl);
    displayPersons();
}


function displayPersons() {
    const personView = document.getElementById("view");
    let div = "";
    persons.forEach((person, index) => {
        div += `
        <div class="record">
            <h2>${person.pName}</h2>
            <h3>${person.scName}</h3>
            <img src="${person.imgUrl}" alt="${person.pName}">
             <button onclick="editPersons(${index})">EDIT</button>
             <button onclick="deletePersons(${index})">DELETE</button>
        </div>
    `;
    })

    personView.innerHTML = div;
};


function editPersons(index) {
    console.log(index);

    newName = prompt("Enter Name", persons[index].pName);
    newScName = prompt("Enter SC Name", persons[index].scName);
    newImg = prompt("Enter New Image", persons[index].imgUrl);

    persons[index].pName = newName;
    persons[index].scName = newScName;
    persons[index].imgUrl = newImg;


    displayPersons();

};

function deletePersons(index) {
    console.log(index);

    persons.splice(index, 1); // Removes 1 element at the specified index
    displayPersons();
};


