// Code your solution in this file!
function logDriverNames(driversArr) {
    const callback = function (el, i, arr) {
        console.log(el.name)
    }

    driversArr.forEach(callback)
}

function logDriversByHometown(driversArr, location) {
    const callback = function (driver) {
        if (driver.hometown === location) {
            console.log(driver.name)
        }
    }

    driversArr.forEach(callback)
}

function driversByRevenue(driversArr) {
    let revenueArr = driversArr.slice().sort(function(driver1, driver2) {
        return driver1.revenue - driver2.revenue
      })
    return revenueArr

}

function driversByName(driversArr) {
  let nameArr = driversArr.slice().sort(function(driver1, driver2) {
    return (driver1.name).localeCompare(driver2.name)
  })
return nameArr
}

function totalRevenue(driversArr) {
    let totalRev = 0
 
  driversArr.forEach(function (driver) {
    totalRev += driver.revenue
  })
 
  return totalRev
}

function averageRevenue(driversArr) {
    let totalRev = 0
    let count = 0
 
  driversArr.forEach(function (driver) {
    totalRev += driver.revenue
    count++
  });
 
  return totalRev/count
}