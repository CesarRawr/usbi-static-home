const creditNames = [
    {
        name: "María Fernanda Pérez Gómez",
        position: "Desarrolladora Principal"
    },
    {
        name: "Juan Carlos Rodríguez Hernández",
        position: "Diseñador de Interfaz de Usuario"
    },
    {
        name: "Laura Alejandra Sánchez Martínez",
        position: "Desarrolladora Frontend"
    },
    {
        name: "Andrés Eduardo López Silva",
        position: "Desarrollador Backend"
    },
    {
        name: "Carolina Isabel Torres Ramírez",
        position: "Especialista en Experiencia del Usuario"
    },
    {
        name: "Daniel Alejandro Cruz Vargas",
        position: "Coordinador de Proyecto"
    }
];

let actualCreditPosition = 0;
const backBtn = document.querySelector(".back-button");

const creditsChanger = setInterval(() => {
    const creditBox = document.querySelector(".credits");
    creditBox.style.opacity = "0";

    setTimeout(() => {
        const positionBox = creditBox.querySelector(".credit-position");
        const nameBox = creditBox.querySelector(".credit-names");

        positionBox.innerText = creditNames[actualCreditPosition]["position"];
        nameBox.innerText = creditNames[actualCreditPosition]["name"];

        updateActualCreditPosition(++actualCreditPosition);
        creditBox.style.opacity = "1";
    }, 301);
}, 3600);

function updateActualCreditPosition(creditPosition) {
    if (creditPosition >= creditNames.length) {
        actualCreditPosition = 0;
        return;
    }

    actualCreditPosition = creditPosition;
}

backBtn.addEventListener("click", () => {
    history.back();
})
