let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    alert(`${itemName} added to your cart.`);
}

document.getElementById('pav_bhaji').addEventListener('click', () => addToCart('Pav Bhaji', 200));
document.getElementById('pizza').addEventListener('click', () => addToCart('Pizza', 300));
document.getElementById('fried_rice').addEventListener('click', () => addToCart('Fried Rice', 220));
document.getElementById('matar_paneer').addEventListener('click', () => addToCart('Matar Paneer', 230));
document.getElementById('palak_tofu').addEventListener('click', () => addToCart('Palak Tofu Tikka Masala', 240));
document.getElementById('paneer_angara').addEventListener('click', () => addToCart('Paneer Angara', 260));
document.getElementById('shahi_paneer').addEventListener('click', () => addToCart('Shahi Paneer', 210));
document.getElementById('veg_biryani').addEventListener('click', () => addToCart('Veg Biryani', 270));
document.getElementById('barbeque').addEventListener('click', () => addToCart('Barbeque Grill Meat', 200));
document.getElementById('chicken_wings').addEventListener('click', () => addToCart('Chicken Fried Wings', 250));
document.getElementById('chicken_fry').addEventListener('click', () => addToCart('Chicken Fry', 220));
document.getElementById('roasted_chicken').addEventListener('click', () => addToCart('Roasted Chicken', 230));
document.getElementById('salmon').addEventListener('click', () => addToCart('Boiled Tofu with Salmon', 240));

document.querySelectorAll('.customize button').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        const itemName = row.querySelector('td:nth-child(2)').innerText;
        const itemPrice = parseInt(row.querySelector('td:nth-child(3)').innerText.replace('₹', ''));
        
        const customizations = [];
        row.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            customizations.push(checkbox.id);
        });

        const customMessage = customizations.length > 0 ? ` with customizations: ${customizations.join(', ')}` : '';
        addToCart(itemName + customMessage, itemPrice + customizations.length * 20);  // Each customization adds ₹20
    });
});

document.getElementById('order-submit').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        let cartSummary = "Your order:\n";
        let totalPrice = 0;
        cart.forEach(item => {
            cartSummary += `${item.name} - ₹${item.price}\n`;
            totalPrice += item.price;
        });
        cartSummary += `\nTotal Price: ₹${totalPrice}`;
        alert(cartSummary);
    }
});