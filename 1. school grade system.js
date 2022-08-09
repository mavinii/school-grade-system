/** School grade system
 *  Create an algorithm that transforms the grade of a school into a numeric system between A B C D E
 * 
    * From 90 or higher = A
    * between 80 - 90   = B
    * between 70 - 79   = C
    * between 60 - 69   = D
    * less then 60      = E
 */

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score < 90
    let scoreC = score >= 70 && score < 79
    let scoreD = score >= 60 && score < 69
    let scoreE = score >= 0 && score < 59

    let scoreFinal;

    if(scoreA){
        scoreFinal = "A"
    } else if(scoreB){
        scoreFinal = "B"
    } else if(scoreC){
        scoreFinal = "C"
    } else if(scoreD){
        scoreFinal = "D"
    } else if(scoreE) {
        scoreFinal = "E"    
    } else {
        scoreFinal = "Invalid Score!"
    }
    return scoreFinal
}
console.log(getScore(92))