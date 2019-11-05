// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
   return function(fare){
       return num * fare
   }
}

const fareDoubler = createFareMultiplier(2)
//WHAT?

const fareTripler = createFareMultiplier(3)
//copied above

function selectDifferentDrivers(driverArr, func){
    return func(driverArr)
}