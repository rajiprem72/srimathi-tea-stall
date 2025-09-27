let prices = {
  tea: 10,
  coffee: 15,
  biscuitA: 5,
  biscuitB: 3,
  samosa: 10,
  sweet: 10,
  cake: 6,
  ooty_varki: 5,
  groundnut_burfi: 5
};

let quantities = {
  tea: 0,
  coffee: 0,
  biscuitA: 0,
  biscuitB: 0,
  samosa: 0,
  sweet: 0,
  cake: 0,
  ooty_varki: 0,
  groundnut_burfi: 0
};

function increase(item) {
  quantities[item]++;
  update();
}

function decrease(item) {
  if (quantities[item] > 0) {
    quantities[item]--;
    update();
  }
}

function update() {
  let total = 0;

  for (let item in quantities) {
    document.getElementById(item + "-qty").innerText = quantities[item];
    total += quantities[item] * prices[item];
  }

  document.getElementById("total").innerText = total;

  // UPI payment link
  let upiId = "paytmqr5yc0n7@ptys";  
  let name = encodeURIComponent("SRIMATHI S");
  let note = encodeURIComponent("Order from Srimathi Tea Stall");
  let uri = `upi://pay?pa=${upiId}&pn=${name}&am=${total}&cu=INR&tn=${note}`;

  // ✅ Only update the Pay button, don't auto-redirect
  document.getElementById("payLink").href = uri;
}
