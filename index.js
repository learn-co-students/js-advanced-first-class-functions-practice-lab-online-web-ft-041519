function logDriverNames(drivers) {
    drivers.forEach(function(driver) {
        console.log(driver.name);
    });
};

function logDriversByHometown(drivers, hometown) {
    drivers.forEach(function(driver) {
        if(driver.hometown === hometown) {
            console.log(driver.name);
        };
    });
};

function driversByRevenue(drivers) {
    return drivers.slice().sort(function(d1, d2) {
        return d1.revenue - d2.revenue;
    });
};

function driversByName(drivers) {
    return drivers.slice().sort(function(d1, d2) {
        return d1.name.localeCompare(d2.name);
    });
};

function totalRevenue(drivers) {
    return drivers.reduce(function(sum, driver) {
        return sum + driver.revenue;
    }, 0);
};

function averageRevenue(drivers) {
    const total = totalRevenue(drivers);
    return total / drivers.length;
};