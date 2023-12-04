let ekran = document.getElementById('ekran');
let ilkSayi = '';
let ikinciSayi = '';
let operator = '';

function ekraniTemizle() {
    ekran.value = '';
    ilkSayi = '';
    ikinciSayi = '';
    operator = '';
}

function sayiEkle(sayi) {
    ekran.value += sayi;
}

function operatorSec(secilenOperator) {
    operator = secilenOperator;
    ilkSayi = ekran.value;
    ekran.value = '';
}

function calculate() {
    ikinciSayi = ekran.value;
    let sonuc;
    if (operator === '+') {
        sonuc = parseFloat(ilkSayi) + parseFloat(ikinciSayi);
    } else if (operator === '-') {
        sonuc = parseFloat(ilkSayi) - parseFloat(ikinciSayi);
    } else if (operator === '*') {
        sonuc = parseFloat(ilkSayi) * parseFloat(ikinciSayi);
    } else if (operator === '/') {
        sonuc = parseFloat(ilkSayi) / parseFloat(ikinciSayi);
    } else {
        console.log("Geçersiz Operatör Girdiniz!");
        return;
    }

    ekran.value = sonuc;
}
