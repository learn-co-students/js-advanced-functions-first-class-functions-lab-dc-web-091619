const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2);
}

const returnLastTwoDrivers = function(array) {
  return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function(fare) {
    return integer * fare;
  }
}

const fareDoubler = function(integer) {
  return createFareMultiplier(2)(integer);
}

const fareTripler = function(integer) {
  return createFareMultiplier(3)(integer);
}

function selectDifferentDrivers(array, driverfunction) {
  return driverfunction(array);
}