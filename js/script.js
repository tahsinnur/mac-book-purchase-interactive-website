function updateCost(extraField, price){
    const extraFieldSelection = document.getElementById(extraField + '-cost');
    extraFieldSelection.innerText = price;
}

// handler for memory selection section
document.getElementById('memory-btn1').addEventListener('click', function(){
    updateCost('memory', '0');
    updateTotal();
})
document.getElementById('memory-btn2').addEventListener('click', function(){
    updateCost('memory', '180');
    updateTotal();
})

// handler for storage selection section
document.getElementById('storage-btn1').addEventListener('click', function(){
    updateCost('storage', '0');
    updateTotal();
})
document.getElementById('storage-btn2').addEventListener('click', function(){
    updateCost('storage', '100');
    updateTotal();
})
document.getElementById('storage-btn3').addEventListener('click', function(){
    updateCost('storage', '180');
    updateTotal();
})

// handler for delivery selection section
document.getElementById('delivery-btn1').addEventListener('click', function(){
    updateCost('delivery', '0');
    updateTotal();
})
document.getElementById('delivery-btn2').addEventListener('click', function(){
    updateCost('delivery', '20');
    updateTotal();
})

const baseTotal = document.getElementById('base-total');
const extraMemoryCost = document.getElementById('memory-cost');
const extraStorageCost = document.getElementById('storage-cost');
const extraDeliveryCost = document.getElementById('delivery-cost');
const subTotalPrice = document.getElementById('sub-total');
const finalTotal = document.getElementById('final-total');

// total price calculation
function updateTotal(){
    const basePrice = parseInt(baseTotal.innerText);
    const memoryCost = parseInt(extraMemoryCost.innerText);
    const storageCost = parseInt(extraStorageCost.innerText);
    const deliveryCost = parseInt(extraDeliveryCost.innerText);
    const totalPrice = basePrice + memoryCost + storageCost + deliveryCost;
    subTotalPrice.innerText = totalPrice;
    finalTotal.innerText = totalPrice;
}

// handler for promo code apply button

document.getElementById('promo-btn').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-input');
    const promoCode = 'stevekaku';
    if(promoInput.value.toLowerCase() == promoCode.toLowerCase()){
        getDiscountedTotal();
        promoInput.value = '';
    }  
    else if(promoInput.value == ''){
        alert('Please Input Promo Code');
    }
    else{
        alert('Wrong Promo Code');
        promoInput.value = '';
    }
})

// discounted total calculation
function getDiscountedTotal(){
    const finalTotalValue = parseInt(finalTotal.innerText);
    const discountValue = finalTotalValue * .20;
    finalTotal.innerText = finalTotalValue - discountValue;
}