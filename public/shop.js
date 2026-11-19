
"use strict";

(() => {
  const form = document.querySelector("#product-form");
  if (!form) return;

  const sizeError = document.querySelector("#size-error");
  const bagCount = document.querySelector("#bag-count");
  const bagStatus = document.querySelector("#bag-status");
  const bagItems = document.querySelector("#bag-items");
  const clearBag = document.querySelector("#clear-bag");
  const checkoutButton = document.querySelector("#checkout-button");
  const checkoutStatus = document.querySelector("#checkout-status");

  const sizes = ["S", "M", "L", "XL"];
  const bag = [];
  let checkingOut = false;

  const renderBag = () => {
    bagCount.textContent = String(bag.length);
    clearBag.disabled = bag.length === 0;
    checkoutButton.disabled = bag.length === 0 || checkingOut;

    bagItems.replaceChildren();

    sizes.forEach((size) => {
      const quantity = bag.filter((item) => item === size).length;

      if (!quantity) return;

      const item = document.createElement("li");
      item.textContent = `White T-shirt · Size ${size} · Quantity ${quantity}`;
      bagItems.append(item);
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const selected = form.querySelector('input[name="size"]:checked');

    if (!selected || !sizes.includes(selected.value)) {
      sizeError.hidden = false;

      form.querySelectorAll('input[name="size"]').forEach((input) => {
        input.setAttribute("aria-invalid", "true");
      });

      form.querySelector('input[name="size"]').focus();
      return;
    }

    sizeError.hidden = true;
    bag.push(selected.value);

    renderBag();

    const itemWord = bag.length === 1 ? "item" : "items";

    bagStatus.textContent =
      `Added a white T-shirt in size ${selected.value}. Your demo bag has ${bag.length} ${itemWord}.`;

    checkoutStatus.textContent = "";
  });

  form.addEventListener("change", () => {
    sizeError.hidden = true;

    form.querySelectorAll('input[name="size"]').forEach((input) => {
      input.removeAttribute("aria-invalid");
    });
  });

  clearBag.addEventListener("click", () => {
    bag.length = 0;

    renderBag();

    bagStatus.textContent =
      "Your demo bag is empty. Choose a size to try it again.";

    checkoutStatus.textContent = "";

    form.querySelector('input[name="size"]:checked')?.focus();
  });

  checkoutButton.addEventListener("click", async () => {
    if (bag.length === 0 || checkingOut) return;

    checkingOut = true;
    checkoutButton.textContent = "Saving order...";
    renderBag();

    const items = sizes
      .map((size) => ({
        size,
        quantity: bag.filter((item) => item === size).length,
      }))
      .filter((item) => item.quantity > 0);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Could not save your order.");
      }

      bag.length = 0;

      bagStatus.textContent =
        "Your demo bag is empty. Your order was saved.";

      checkoutStatus.textContent =
        `Demo order #${result.orderId} saved successfully. Total: $${Number(result.total).toFixed(2)}.`;

    } catch (error) {
      checkoutStatus.textContent =
        error.message || "Something went wrong. Please try again.";

    } finally {
      checkingOut = false;
      checkoutButton.textContent = "Place demo order";
      renderBag();
    }
  });

  const styleChoices = document.querySelectorAll("[data-style-choice]");
  const styleSuggestion = document.querySelector("#style-suggestion");

  if (!styleSuggestion) return;

  styleChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const understated =
        choice.dataset.styleChoice === "understated";

      styleChoices.forEach((option) => {
        option.setAttribute(
          "aria-pressed",
          String(option === choice),
        );
      });

      styleSuggestion.textContent = understated
        ? "Keep it easy: pair the white tee with pieces you already enjoy wearing."
        : "Try the white tee with a color or pattern you already like.";

      styleSuggestion.hidden = false;
    });
  });
})();
