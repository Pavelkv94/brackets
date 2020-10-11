module.exports = function check(str, bracketsConfig) {
  //проверка на четность длины
    if (str.length % 2 !== 0) {
        return false;
    }
    //преобразим str В массив
    let arr = str.split("");
    //Сравним элементы str и конфига
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
          //если в массиве рядом стоят парные скобки то убираем их
            if (
                arr[i] === bracketsConfig[j][0] &&
                arr[i + 1] === bracketsConfig[j][1]
            ) {
                arr.splice(i, 2);
                i -= 2;
            }
        }
    }
    //смотрим, остались в массиве элементы или он пустой
    return arr.length === 0;
};
