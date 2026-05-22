# Reelax – Review Your Details (Checkout Page)

A pixel-perfect, responsive React implementation of the Reelax checkout/billing page from the Figma design assignment.

## 🚀 Live Demo
- Hosted App: https://reelax-assignment1.vercel.app
## 🛠️ Tech Stack
| Tool | Purpose |
|------|---------|
| **Vite** | Fast build tool & dev server |
| **React 18** | UI framework with hooks |
| **Tailwind CSS v3** | Utility-first styling matching Figma tokens |
| **Lucide React** | Icon library matching Figma vectors |
| **Inter (Google Fonts)** | Typography matching Figma design |

## 🗂️ Project Structure
```
src/
├── components/
│   ├── common/
│   │   ├── InputField.jsx       # Reusable text input
│   │   └── SelectField.jsx      # Reusable dropdown
│   ├── layout/
│   │   └── Navbar.jsx           # Top navigation bar
│   └── checkout/
│       ├── BillingForm.jsx      # Left-panel form
│       ├── CouponSection.jsx    # Coupon accordion
│       └── OrderSummary.jsx     # Right-panel order summary
├── CheckoutPage.jsx             # Page-level state management
├── App.jsx                      # Root component
├── main.jsx                     # React entry point
└── index.css                    # Tailwind base + custom utilities
```

## ⚙️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd reelax-checkout
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   App runs at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```
