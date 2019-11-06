// Code your solution in this file!

const returnFirstTwoDrivers = (arr) => {
   return [arr[0],arr[1]]
};

const returnLastTwoDrivers = (arr) => {
    return [arr[arr.length-2],arr[arr.length-1]]
};

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = i => {
    return num => i*num
};

const fareDoubler = (i) => createFareMultiplier(2)(i);

const fareTripler = (i) => createFareMultiplier(3)(i);

function selectDifferentDrivers(arr,func) {
    return func(arr);
}


