// memory function
function memory(gb) {
    document.getElementById('memory-' + gb);
    if (gb == '8gb') {
        const extraCostMemory = document.getElementById('extra-memory-cost');
        const extraCost = 0;
        extraCostMemory.innerText = extraCost;
        return Number(extraCostMemory.innerText);
    }
    else {
        const extraCostMemory = document.getElementById('extra-memory-cost');
        const extraCost = 180;
        extraCostMemory.innerText = extraCost;
        return Number(extraCostMemory.innerText);
    }

}
// storage function
function storage(gb) {
    document.getElementById('storage-' + gb);
    if (gb == '256gb') {
        const extraStorageCost = document.getElementById('extra-storage-cost');
        const extraCost = 0;
        extraStorageCost.innerText = extraCost;
        return Number(extraStorageCost.innerText);
    }
    else if (gb == '512gb') {
        const extraStorageCost = document.getElementById('extra-storage-cost');
        const extraCost = 100;
        extraStorageCost.innerText = extraCost;
        return Number(extraStorageCost.innerText);
    }
    else {
        const extraStorageCost = document.getElementById('extra-storage-cost');
        const extraCost = 180;
        extraStorageCost.innerText = extraCost;
        return Number(extraStorageCost.innerText);
    }
}

//
function shippingCharge(charge){
    document.getElementById(charge + '-shipping');
    if(charge == 'free'){
        const charge = document.getElementById('shipping-charge');
        const cost = 0;
        charge.innerText = cost;
        return Number(charge.innerText);
    }
    else{
        const charge = document.getElementById('shipping-charge');
        const cost = 20;
        charge.innerText = cost;
        return Number(charge.innerText);
    }
}

// memory function call part
document.getElementById('memory-8gb').addEventListener('click', function () {
    const memoryCost = memory('8gb');
});

document.getElementById('memory-16gb').addEventListener('click', function () {
    const memoryCost = memory('16gb');
});

// storage function call part

document.getElementById('storage-256gb').addEventListener('click', function () {
    const storageCost = storage('256gb');
});

document.getElementById('storage-512gb').addEventListener('click', function () {
    const storageCost = storage('512gb');
});

document.getElementById('storage-1tb').addEventListener('click', function () {
    const storageCost = storage('1tb');
});

// Choose Your delivery option function call

document.getElementById('free-shipping').addEventListener('click', function(){
    const free = shippingCharge('free');
});

document.getElementById('costly-shipping').addEventListener('click', function(){
    const cost = shippingCharge('costly');
});