
# Everyday – Project Documentation

## Project Overview

Everyday is an online storefront concept for a plain white crew-neck T-shirt. The project focuses on creating a simple and user-friendly shopping experience while exploring different ways to present the same product and purchase process.

The website is designed around a minimalist brand identity. It allows users to select a shirt size, choose a quantity, review their cart, and complete a simulated checkout. No real payments or purchases are made.

## Project Goals

- Create two different versions of the same shopping experience.
- Keep product information and pricing consistent between both versions.
- Make it easy for users to select a size and quantity.
- Display accurate cart totals.
- Prevent invalid selections and quantities.
- Provide a simulated checkout process.
- Use SQLite to save completed orders and demonstrate data persistence.
- Compare both versions through independent peer testing.

## Product Information

| Detail | Information |
|---|---|
| Brand | Everyday |
| Product | White Crew-Neck T-Shirt |
| Price | $28.00 |
| Available Sizes | S, M, L, XL |
| Payment | Simulated checkout only |

## Website Versions

### Version A – Simple Purchase Flow

Version A focuses on keeping the shopping process straightforward. Users can view the product, select a size, choose a quantity, add the item to their cart, and proceed through checkout.

The goal is to minimize unnecessary steps and make purchasing as simple as possible.

### Version B – Detailed Purchase Flow

Version B provides a more detailed shopping experience. It gives users additional opportunities to review their selections, check quantities and prices, make cart changes, and confirm their order before completing checkout.

The goal is to provide more information and control throughout the purchase process.

Both versions use the same product information, pricing, validation rules, and order-saving system. Their main differences are in layout and how the purchase steps are presented.

## Main Features

### Product Selection
Users can select from four available shirt sizes: S, M, L, and XL.

### Quantity Selection
Users can choose how many shirts they want to purchase. The website should prevent quantities that are zero, negative, or invalid.

### Shopping Cart
The cart displays the selected product, size, quantity, and calculated total.

### Price Calculation
The total is calculated using the product price multiplied by the selected quantity.

For example:
- 1 shirt = $28.00
- 2 shirts = $56.00
- 3 shirts = $84.00

### Simulated Checkout
Users can review their order and complete a simulated checkout. The process does not collect real payment information.

### SQLite Database
SQLite is used to store completed order information. The database should retain saved records after the application is closed and reopened.

## Testing and Verification

The following areas are used to evaluate both versions:

- Selecting each available shirt size.
- Attempting to continue without selecting a size.
- Entering valid and invalid quantities.
- Checking that cart totals are calculated correctly.
- Adding products and reviewing the cart.
- Editing or removing cart items, where supported.
- Completing the simulated checkout.
- Confirming that completed orders are saved in SQLite.
- Closing and reopening the application to verify that saved records remain available.

Testing results and any issues discovered during development should be documented as the features are completed.

## Peer Testing

A peer will independently test both versions using the same purchase task.

**Test task:** Purchase two white T-shirts in size Medium, add them to the cart, check the total, and complete the simulated checkout.

The expected total is $56.00.

Peer feedback will be used to identify usability problems and decide which version provides the better shopping experience. Any accepted changes should be connected to a GitHub issue and the commit or pull request that addresses the feedback.

## Technology

The project uses:

- HTML for page structure.
- CSS for styling and layout.
- JavaScript for product selection, cart behavior, validation, and checkout interactions.
- SQLite for storing completed order records.
- GitHub for version control and project documentation.

## Project Limitations

This project is a demonstration storefront, not a real online store. It does not process actual payments, ship products, or collect real customer payment information.

The checkout process is simulated for educational purposes.

## Final Evaluation

The two versions will be compared based on usability, clarity, ease of navigation, error handling, and the overall checkout experience.

The final launch recommendation will be based on testing results and peer feedback rather than appearance alone.
