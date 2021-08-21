//function for memory
function memoryOfComputer(amount) {

    const extraMemoryCost = document.getElementById('extra-memory-amount');
    extraMemoryCost.innerText = amount;

    const subTotal = document.getElementById('sub-total-amount');
    const subTotalAmount = parseFloat(subTotal.innerText);

    const totalAmountInner = document.getElementById('total-amount-inside');
    const totalAmountOuter = document.getElementById('total-amount');

    totalAmountInner.innerText = subTotalAmount + amount;
    totalAmountOuter.innerText = subTotalAmount + amount;

}


//function for ssd
function ssdOfComputer(amount) {

    const extraSSDCost = document.getElementById('extra-storage-amount');
    extraSSDCost.innerText = amount;

    const subTotal = document.getElementById('sub-total-amount');
    const subTotalAmount = parseFloat(subTotal.innerText);

    const extraMemoryCost = document.getElementById('extra-memory-amount');
    const extraMemoryCostAmount = parseFloat(extraMemoryCost.innerText)

    const totalAmountInner = document.getElementById('total-amount-inside');
    const totalAmountOuter = document.getElementById('total-amount');

    totalAmountInner.innerText = subTotalAmount + amount + extraMemoryCostAmount;
    totalAmountOuter.innerText = subTotalAmount + amount + extraMemoryCostAmount;

}

//function for deliveryCost
function deliveryCostOfComputer(amount) {

    const deliveryCost = document.getElementById('delivery-amount');
    deliveryCost.innerText = amount;

    const subTotal = document.getElementById('sub-total-amount');
    const subTotalAmount = parseFloat(subTotal.innerText);

    const extraMemoryCost = document.getElementById('extra-memory-amount');
    const extraMemoryCostAmount = parseFloat(extraMemoryCost.innerText)

    const extraSSDCost = document.getElementById('extra-storage-amount');
    const extraSSDCostAmount = parseFloat(extraSSDCost.innerText);

    const totalAmountInner = document.getElementById('total-amount-inside');
    const totalAmountOuter = document.getElementById('total-amount');

    totalAmountInner.innerText = subTotalAmount + amount + extraMemoryCostAmount + extraSSDCostAmount;
    totalAmountOuter.innerText = subTotalAmount + amount + extraMemoryCostAmount + extraSSDCostAmount;

}
//function for promoCode
function promoCode() {
    const promoCodeText = document.getElementById('promoCode');
    const promoCodeValue = promoCodeText.value;
    const totalAmountInner = document.getElementById('total-amount-inside');
    const totalAmountInnerValue = parseFloat(totalAmountInner.innerText);
    const totalAmountOuter = document.getElementById('total-amount');

    if (promoCodeValue == 'stevekaku') {
        totalAmountOuter.innerText = totalAmountInnerValue - (totalAmountInnerValue * 0.2);
    }
    else {
        alert("Promo Code invalid");
    }
}




//events for memory
document.getElementById('eight-gb-memory-button').addEventListener('click', function () {
    memoryOfComputer(0);
});
document.getElementById('sixteen-gb-memory-button').addEventListener('click', function () {
    memoryOfComputer(180);
});

//events for ssd
document.getElementById('two-fifty-six-gb-ssd-button').addEventListener('click', function () {
    ssdOfComputer(0);
});
document.getElementById('five-hundrend-twelve-gb-ssd-button').addEventListener('click', function () {
    ssdOfComputer(100);
});
document.getElementById('one-tb-ssd-button').addEventListener('click', function () {
    ssdOfComputer(180);
});

//events for delivery cost
document.getElementById('free-delivery-button').addEventListener('click', function () {
    deliveryCostOfComputer(0);
});
document.getElementById('paid-delivery-button').addEventListener('click', function () {
    deliveryCostOfComputer(20);
});

//events for promoCode
document.getElementById('promo-code-apply-button').addEventListener('click', function () {
    promoCode();
})