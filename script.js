<!DOCTYPE html>
<html>
<head>
  <title>SriMathi Tea Stall Menu</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .item { margin-bottom: 10px; }
    button { margin: 0 5px; }
  </style>
</head>
<body>
  <h2>Srimathi Tea Stall</h2>

  <div class="item">
    Tea (₹10): 
    <button onclick="decrease('tea')">-</button>
    <span id="tea-qty">0</span>
    <button onclick="increase('tea')">+</button>
  </div>

  <div class="item">
    Coffee (₹15): 
    <button onclick="decrease('coffee')">-</button>
    <span id="coffee-qty">0</span>
    <button onclick="increase('coffee')">+</button>
  </div>

  <div class="item">
    Biscuit A (₹5): 
    <button onclick="decrease('biscuitA')">-</button>
    <span id="biscuitA-qty">0</span>
    <button onclick="increase('biscuitA')">+</button>
  </div>

  <!-- Add more items like BiscuitB, Samosa, Sweet, Cake, etc. -->

  <h3>Total: ₹<span id="total">0</span></h3>

  <a id="payLink" href="#" style="font-size:18px; background:green; color:white; padding:10px 20px; text-decoration:none; border-radius:5px;">
    Pay with UPI
  </a>

  <script>
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

      // Update UPI link (but do NOT auto-open)
      let upiId = "paytmqr5yc0n7@ptys";  
      let name = encodeURIComponent("SRIMATHI S");
      let note = encodeURIComponent("Order from Srimathi Tea Stall");
      let uri = `upi://pay?pa=${upiId}&pn=${name}&am=${total}&cu=INR&tn=${note}`;
      document.getElementById("payLink").href = uri;
    }
  </script>
</body>
</html>
