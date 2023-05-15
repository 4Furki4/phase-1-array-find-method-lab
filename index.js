// code your solution here
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    // { year: "2015", result: "W"},
    { year: "2014", result: "N/A"}
]
function superbowlWin(array){
    const result = array.find((el) => el.result === 'W')
    if(result) return  result.year
    else return result
}
