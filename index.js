// Code your solution in this file!
const logDriverNames = function(names) {
    return names.forEach(function(driver) {
        console.log(driver.name);
    })
}

const logDriversByHometown = function(names, hometown) {
    return names.forEach(function(driver) {
        if (driver.hometown === hometown) {
            console.log(driver.name);
        }
    })
}

const driversByRevenue = function(names) {
    return names.slice().sort(function(a, b) {
        return a.revenue - b.revenue;
    })
}

const driversByName = function(names) {
    return names.slice().sort(function(a, b) {
        return (a.name).localeCompare(b.name);
    })
}

const totalRevenue = function(names) {
    return names.reduce(function(total, currentDriver) {
        return currentDriver.revenue + total;
    }, 0);
}

const averageRevenue = function(names) {
    let total = names.reduce(function(total, currentDriver) {
        return currentDriver.revenue + total;
    }, 0);

    return (total / names.length)
}
