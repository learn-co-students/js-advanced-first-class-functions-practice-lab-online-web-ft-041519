// Code your solution in this file!

function logDriverNames(array) {
    
    function f_function (item) {
        console.log(item.name);
    }

    return array.forEach(f_function)
     
}

function logDriversByHometown(array, hometown) {
    
    const store = array.filter (function(num) {return num.hometown === hometown});
    
    return store.forEach(function (product) {
        console.log(product.name);
      });

}

function driversByRevenue(array) {
   
    return array.slice().sort(function (driverOne, driverTwo) {
        return driverOne.revenue - driverTwo.revenue;
      });

    }


function driversByName(array) {
 
    return array.slice().sort((a, b) => (a.name > b.name) ? 1 : -1)

}

function totalRevenue(array) {
 
    return array.reduce(function (acc, obj) { return acc + obj.revenue; }, 0);
    
}

function averageRevenue(array) {
 
    return array.reduce(function (acc, obj) { return acc + obj.revenue; }, 0) / array.length ;
    
}
