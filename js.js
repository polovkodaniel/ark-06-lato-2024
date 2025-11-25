function cytat(imie) {
    if (imie == 'Ewa') {
        document.getElementById('Ewa').style.display = 'none';
        document.getElementById('Krzysztof').style.display = 'block';
    }
    else if (imie == 'Krzysztof') {
        document.getElementById('Krzysztof').style.display = 'none';
        document.getElementById('Joanna').style.display = 'block';
    }
    else if (imie == 'Joanna') {
        document.getElementById('Ewa').style.display = 'block';
        document.getElementById('Joanna').style.display = 'none';
    }
}