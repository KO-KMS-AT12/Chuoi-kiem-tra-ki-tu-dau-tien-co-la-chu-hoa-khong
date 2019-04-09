function checkFirstUpperCase(str) {
    let regexp =/^[A-Z]/;
    if (regexp.test(str)){
        console.log("String's first charater is uppercase");
    }else {
        console.log("String's first charater is not uppercase")
    }
}
checkFirstUpperCase('Nguyen van Nam');
checkFirstUpperCase('NGUYEN VAN NAM');
checkFirstUpperCase('nguyen van Nam');