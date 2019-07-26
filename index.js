function logDriverNames(drivers) {
  // — Receives an array of driver objects and logs the name attribute of each driver to the console.
  return drivers.forEach( 
    function(driver) {
      console.log(`${driver.name}`)
    }
  );
}

function logDriversByHometown(drivers, location) {
// — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
  return drivers.filter(
    function(driver) {
      return driver.hometown === location
    }
  ).forEach(
    function(driver) {
      console.log(`${driver.name}`)
    }
  )
}

function driversByRevenue(drivers) {
  // — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
  return drivers.sort(function(a,b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  // — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
  return drivers.sort(function(a,b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  // — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
  return drivers.reduce(
    function(driver) {}
  )
}

function averageRevenue(drivers) {
  // — Receives an array of driver objects and returns the average revenue earned by each driver.
}
