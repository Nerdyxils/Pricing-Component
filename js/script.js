const monthly = [...document.querySelectorAll('.monthly')];
const annually = [...document.querySelectorAll('.annually')];
const checkbox = document.querySelectorAll('#checkbox');

function priceSwitch () {
    if (checkbox.checked) {
        for (let month of monthly) {
            month.style.display = "block";
        }
        for (let year of annually) {
            year.style.display = "none";
        }
    } else {
        for (let month of monthly) {
            month.style.display = "none";
        }
        for (let year of annually) {
            year.style.display = "block";
        }
    }
}

function checkKey(e) {
    console.log(e);

    if (e.key === "Enter") {
        checkbox.checked = !checkbox.checked;
        priceSwitch();
    }
}

for (var i = 0 ; i < checkbox.length; i++) {
checkbox[i].addEventListener('click', priceSwitch);
};
for (var j = 0 ; i < checkbox.length; j++) {
checkbox[j].addEventListener('keypress', checkKey);
};

