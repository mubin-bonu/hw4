function showValue() {
    alert(input.value);
}

let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
let date = new Date();
let month = date.getMonth();
alert (months[month]);

