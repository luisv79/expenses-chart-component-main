const Slider = document.getElementById("myRange");
const discount = document.getElementById("discount");
const price = document.getElementById("precio");
const pageviews = document.getElementById("vistas");
const sliderFill = document.querySelector(".slider-range");

const priceList = [
    { views: "10K", price: 8 },
    { views: "50K", price: 12 },
    { views: "100K", price: 16 },
    { views: "500K", price: 24 },
    { views: "1M", price: 36 }
];

function updatePrice() {
    const index = Slider.value;
    const selectedPlan = priceList[index];
    let finalPrice = selectedPlan.price;
    if (discount.checked) {
        finalPrice = finalPrice * 0.75; // Apply 25% discount
    }
    price.textContent = finalPrice.toFixed(2);
    pageviews.textContent = selectedPlan.views;
}

sliderFill.addEventListener("input", () => {
    const progress = (Slider.value / Slider.max) * 100;

    sliderFill.style.background = `linear-gradient(to right, var(--Soft-Cyan) ${progress}%, var(--Light-Grayish-Blue) ${progress}%)`;
});

Slider.addEventListener("input", updatePrice);
discount.addEventListener("change", updatePrice);
updatePrice(); // Initialize the price and views on page load
