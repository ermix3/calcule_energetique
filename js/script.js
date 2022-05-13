const checkBoxList = document.querySelectorAll('input[type="checkbox"]'),
    btnCalculer = document.getElementById('calculer'),
    resultatInput = document.getElementById('result'),
    inputs = document.querySelectorAll('input[type="number"]'),
    valeurCal = [2.75, 1.8, 0.4, 80, 116, 140];

for (let e = 0; e < checkBoxList.length; e++)
    checkBoxList[e].addEventListener('click', function() {
        checkBoxList[e].checked ?
            ((inputs[e].disabled = !1), (inputs[e].style = 'background: rgba(255,255,255,0.6); color:#000; ')) :
            ((inputs[e].disabled = !0), (inputs[e].value = 0));
    });

function isError(t) {
    for (let e = 0; e < t.length; e++)
        t[e].checked && '0' === inputs[e].value ?
        (inputs[e].style = 'border:1px solid red; background: red;') :
        (inputs[e].style = 'border:None; ');
}

btnCalculer.addEventListener('click', function() {
    let t = 0;
    for (let e = 0; e < checkBoxList.length; e++)
        checkBoxList[e].checked && (t += valeurCal[e] * Number(inputs[e].value));
    0 !== t ?
        ((resultatInput.value = t), (resultatInput.style.color = '#000')) :
        ((resultatInput.value = 'Ressayer'),
            (resultatInput.style.color = '#f00')),
        isError(checkBoxList);
});