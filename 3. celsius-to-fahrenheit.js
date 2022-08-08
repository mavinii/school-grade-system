// convertsDegree('50F')
function convertsDegree(degree){

    // checking if F or C exists including Upper and Lower values
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

    // Error checking
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Invalid information supplied')
    }

    // replacing F with nothing, and converting string as a Number
    // formula as a function (error function)?
    // signing C to this string
    let updateDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // Checking if Celsius exists
    if(celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign
}

try {
    console.log(convertsDegree('10C'))
    console.log(convertsDegree('50F'))
    convertsDegree('das')
} catch (error) {
    console.log(error.message)
}