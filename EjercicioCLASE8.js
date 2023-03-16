let htmlGraduates = "30 45 25 34 18 23 16 50 72 70";
let cssGraduates = "50 45 71 34 23 45 65 75 63 43 74 70";
let jsGraduates = "70 65 58 45 23 57 34 17 72";
let nodejsGraduates = "45 56 73 34 65 72 70 32";


let htmlGraduatesArr = htmlGraduates.split(' ').map(Number);
let cssGraduatesArr = cssGraduates.split(' ').map(Number);
let jsGraduatesArr = jsGraduates.split(' ').map(Number);
let nodejsGraduatesArr = nodejsGraduates.split(' ').map(Number);

function calcularAverage(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

function calculateAverageCourse(htmlGraduatesArr, cssGraduatesArr, jsGraduatesArr, nodejsGraduatesArr, courseNumber) {
    switch (courseNumber) {
        case 1:
            return calcularAverage(htmlGraduatesArr);
        case 2:
            return calcularAverage(cssGraduatesArr);
        case 3:
            return calcularAverage(jsGraduatesArr);
        case 4:
            return calcularAverage(nodejsGraduatesArr);
        default:
            console.log('Flaco te la mandaste, que te pasa');
            break;
    }
}

console.log("El promedio de la clase es: " + calculateAverageCourse(htmlGraduatesArr, cssGraduatesArr, jsGraduatesArr, nodejsGraduatesArr, 3));