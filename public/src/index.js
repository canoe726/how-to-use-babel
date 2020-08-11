class Car {
    constructor(name, types, cost) {
        this.name = name;
        this.types = types;
        this.cost = cost;
    }

    get carName() {
        return this.name;
    }

    get carTypes() {
        return this.types
    }

    get carCost() {
        return this.cost;
    }

    getToday() {
        return new Date();
    }
}

document.querySelector('.title').innerHTML = '자동차 객체';

function makeUlElement(name, types, cost) {
    let benz = new Car(name, types, cost);

    var newUl = document.createElement('ul');
    newUl.setAttribute('class', 'car');

    newUl.innerHTML += `<li>${benz.carName}</li>`;
    newUl.innerHTML += `<li>${benz.carTypes}</li>`;
    newUl.innerHTML += `<li>${benz.carCost}</li>`;

    document.body.appendChild(newUl);
}

makeUlElement('벤츠 E250', '승용차', 6300);
makeUlElement('포르쉐 911', '스포츠카', 14400);

