let family = {                          // family   (object {})
    incomes: [2500.5, 50.43, 30],       // outcomes (array  [])
    outcomes: [50.92, 60, 43.34, 30]    // incomes  (array  [])
}

// AS WE CAN CALCULATE INCOMES AND OUTCOMES, WE CAN CREATE A FUNCTION DOES IT.
let sum = (array) => {
    let total = 0

    // for of (it runs all the array in family object)
    for (const value of array) {
        total += value
    }
    return total
}

// FUNCTION that checkes balance and sends message
function calcBalance () {
    const calculateIncomes = sum(family.incomes)
    const calculateOutcomes = sum(family.outcomes)

    const total = calculateIncomes - calculateOutcomes
    const itsOk = total >= 0

    let balanceText = "negative"

    if(itsOk){
        balanceText = "positive"
    }
    console.log(`Your balance is ${balanceText}: €${total.toFixed(2)}`)
}

calcBalance()