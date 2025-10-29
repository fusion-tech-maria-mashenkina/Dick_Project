const firstDiv = document.querySelector('.firstClass');
const secondDiv = document.querySelector('.secondClass');
const thirdDiv = document.querySelector('.thirdClass');

const cart = document.querySelector('.cartContainer');
const inp = document.querySelector('.inputNumber');
const txtNum = document.querySelector('.textNumber');
const btnMinus = document.querySelector('.buttonMinus');
const btnPlus = document.querySelector('.buttonPlus');
const btnClear = document.querySelector('.buttonClear');

// const dinamycDiv1 = document.createElement('input');
// const dinamycDiv2 = document.createElement('button');

// dinamycDiv1.classList.add('dinamycDiv1');
// document.body.appendChild(dinamycDiv1);

console.log(7, inp)

console.log(2, firstDiv);

if (firstDiv) {
    // Описываем все состояния, через которые будет проходить div
    const states = [
        {
            bg: "red",
            width: "100px",
            height: "100px",
            text: "красный блок"
        },
        {
            bg: "green",
            width: "200px",
            height: "200px",
            text: "hello"
        },
        {
            bg: "blue",
            width: "150px",
            height: "150px",
            text: "bye"
        },
        {
            bg: "orange",
            width: "250px",
            height: "250px",
            text: "again"
        }
    ];

    let index = 0;

    // необязательно, но красиво: плавная анимация
    firstDiv.style.transition = "all 0.3s";
    firstDiv.classList.add("marginBottomClass");
    // применяем стартовое состояние
    applyState(index);

    const onClickCallBack = () => {
        index = (index + 1) % states.length; // зацикливаем
        applyState(index);
    }


    // при каждом клике переключаемся на следующее состояние
    firstDiv.addEventListener("click", () => {
        onClickCallBack();
    });

    function applyState(i) {
        const s = states[i];
        firstDiv.style.background = s.bg;
        firstDiv.style.width = s.width;
        firstDiv.style.height = s.height;
        firstDiv.innerHTML = s.text;
    }
}

btnMinus.addEventListener('click', function () {
    const num = parseFloat(inp.value);
    if (!isNaN(num)) {
        inp.value = num - 1;
        txtNum.textContent = inp.value;
    }
});

btnPlus.addEventListener('click', function () {
    const num = parseFloat(inp.value);
    if (!isNaN(num)) {
        inp.value = num + 1;
        txtNum.textContent = inp.value;
    }
});

btnClear.addEventListener('click', function () {
    inp.value = '';
    txtNum.textContent = '';
});


if (inp && txtNum) {
    inp.addEventListener('input', () => {
        console.log(103, inp.value);
        const num = parseFloat(inp.value);
        console.log(105, num, inp.value);
        if (!isNaN(num)) {
            txtNum.textContent = num;
        } else {
            txtNum.textContent = '—';
        }

    });
}