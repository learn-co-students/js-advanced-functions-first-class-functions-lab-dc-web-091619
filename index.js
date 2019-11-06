// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer){
    return function(multiplyer){
        return integer * multiplyer;
    }
}

const fareDoubler = createFareMultiplier(2); //two passed into the multiplyer method to double the number since we have the function taking a multipler parameter

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, method){
    return  method(arrayOfDrivers);
}