// memory function
function memory(gb) {
    document.getElementById('memory-' + gb);
    if (gb == '8gb') {
        const extraCostMemory = document.getElementById('extra-memory-cost');
        const extraCost = 0;
        extraCostMemory.innerText = extraCost;
        Number(extraCostMemory.innerText);

    }
    else {
        const extraCostMemory = document.getElementById('extra-memory-cost');
        const extraCost = 180;
        extraCostMemory.innerText = extraCost;
        Number(extraCostMemory.innerText);

    }

}
// storage function
function storage(gb) {
    document.getElementById('storage-' + gb);
    if (gb == '256gb') {
        const extraStorageCost = document.getElementById('extra-storage-cost');
        const extraCost = 0;
        extraStorageCost.innerText = extraCost;
        Number(extraStorageCost.innerText);
    }
    else if (gb == '512gb') {
        const extraStorageCost = document.getElementById('extra-storage-cost');
        const extraCost = 100;
        extraStorageCost.innerText = extraCost;
        Number(extraStorageCost.innerText);

    }
    else {
        const extraStorageCost = document.getElementById('extra-storage-cost');
        const extraCost = 180;
        extraStorageCost.innerText = extraCost;
        Number(extraStorageCost.innerText);

    }
}

// shipping charge function
function shippingCharge(charge) {
    document.getElementById(charge + '-shipping');
    if (charge == 'free') {
        const charge = document.getElementById('shipping-charge');
        const cost = 0;
        charge.innerText = cost;
        Number(charge.innerText);

    }
    else {
        const charge = document.getElementById('shipping-charge');
        const cost = 20;
        charge.innerText = cost;
        parseInt(charge.innerText);
    }
}

//total price functtion

function total() {
    const updateValue = document.getElementById('extra-memory-cost').innerText;
    const updateStorageValue = document.getElementById('extra-storage-cost').innerText;
    const updateChargeValue = document.getElementById('shipping-charge').innerText;
    const chargeTotal = parseInt(updateChargeValue)
    const storageTotal = parseInt(updateStorageValue);
    const updateTotal = parseInt(updateValue);
    const totalText = document.getElementById('fixed-price').innerText;
    const totalNumber = parseInt(totalText);
    const total = updateTotal + totalNumber + storageTotal + chargeTotal;
    let totalMemory = document.getElementById('total').innerText = total;
    document.getElementById('promo-total').innerText = totalMemory;
}

// memory function call part
document.getElementById('memory-8gb').addEventListener('click', function () {
    memory('8gb');
    total();
});

document.getElementById('memory-16gb').addEventListener('click', function () {
    memory('16gb');
    total();
});

// storage function call part

document.getElementById('storage-256gb').addEventListener('click', function () {
    storage('256gb');
    total();
});

document.getElementById('storage-512gb').addEventListener('click', function () {
    storage('512gb');
    total();
});

document.getElementById('storage-1tb').addEventListener('click', function () {
    storage('1tb');
    total();
});

// Choose Your delivery option function call

document.getElementById('free-shipping').addEventListener('click', function () {
    shippingCharge('free');
    total();
});

document.getElementById('costly-shipping').addEventListener('click', function () {
    shippingCharge('costly');
    total();
});

// promo part

document.getElementById('promo-apply').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-input').value;
    if (promoCode == '') {
        document.getElementById('Error-massage').innerText = 'Please Enter valid input';
    }
    if (promoCode == 'stevekaku') {
        const totalText = document.getElementById('promo-total').innerText;
        let afterPromoTotal = (totalText * .2);
        const total = parseFloat(totalText);
        let totalCost = (total - afterPromoTotal);
        document.getElementById('promo-total').innerText = totalCost;
        document.getElementById('promo-apply').disabled = true;
    }
});