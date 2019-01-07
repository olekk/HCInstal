var quotes = ['Projektowanie i montaż instalacji elektrycznych',
             '<br>Instalacje średniego napięcia do 20KV',
              'Wykonywanie pomiarów kompensacji mocy',
              '<br>Zabudowa baterii kondensatorów',
              'Instalacje odgromowe',
              '<br>Montaż instalacji niskoprądowych',
              'Domofony',
              '<br>Telewizja przemysłowa',
              'Instalacje alarmowe',
              '<br>Monitoring budynków',
              'Wykonanie instalacji oddymiania',
              '<br>Instalacje komputerowe',
              'Dokonanie pomiarów elektrycznych',
              '<br>Wykonanie pomiarów natężenia oświetlenia',
              'Montaż systemów fotowoltanicznych'];

var number = 0;

addEventListener('load', nextQuote, false);

function nextQuote() {
    show();
    if (number > 3) {
        number = 0;
    }

    document.getElementById('quotes').innerHTML = quotes[number];

    setTimeout('nextQuote()', 4500);
    setTimeout('hide()', 4000);
    number++;
}

function hide() {
    $("#quotes").fadeOut(500);
}

function show() {
    $("#quotes").fadeIn(500);
}

