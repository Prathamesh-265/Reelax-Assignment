import React from 'react';
import { PlusCircle, CreditCard } from 'lucide-react';
import CouponSection from './CouponSection';

const PLAN = {
  name: 'Startup',
  price: 4999,
  period: 'month',
  credits: '5,000',
};

const SUBTOTAL = 14999;
const TAX_RATE = 0.18;

function formatINR(amount) {
  return `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default function OrderSummary({ selectedCoupon, onCouponChange, walletApplied, onWalletToggle }) {
  const walletBalance = 500;
  const tax = parseFloat((SUBTOTAL * TAX_RATE).toFixed(2));
  const walletDiscount = walletApplied ? walletBalance : 0;
  const total = SUBTOTAL + tax - walletDiscount;

  return (
    <div className="flex flex-col gap-4">
      {/* Plan Card */}
      <div className="bg-white rounded-xl shadow-card p-5">
        <h2 className="text-xl font-bold text-neutral-900 mb-4">Order Summary</h2>

        {/* Selected Plan */}
        <div className="border border-neutral-200 rounded-lg p-4 mb-3">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-neutral-900">
                  ₹{PLAN.price.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-neutral-500">/{PLAN.period}</span>
              </div>
              <p className="text-xs text-neutral-500 mt-1">
                Includes {PLAN.credits} credits/mo.
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-primary-500 uppercase tracking-wide">
                SELECTED PLAN
              </p>
              <p className="text-base font-bold text-neutral-800 mt-0.5">{PLAN.name}</p>
            </div>
          </div>
        </div>

        {/* Upgrade to Growth Plan */}
        <button className="w-full flex items-center justify-center gap-2 border border-neutral-200 hover:border-primary-500 hover:text-primary-500 rounded-lg py-2.5 text-sm font-medium text-neutral-600 transition-colors duration-150">
          <PlusCircle className="w-4 h-4" />
          Upgrade to Growth Plan
        </button>
      </div>

      {/* Wallet + Coupon Card */}
      <div className="bg-white rounded-xl shadow-card p-5 flex flex-col gap-3">
        {/* Wallet Balance */}
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-primary-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-800">Wallet Balance</p>
              <p className="text-xs text-neutral-500">
                ₹{walletBalance.toFixed(2)} available
              </p>
            </div>
          </div>
          <button
            onClick={onWalletToggle}
            className={`text-sm font-semibold transition-colors ${
              walletApplied
                ? 'text-rose-500 hover:text-rose-600'
                : 'text-primary-500 hover:text-primary-600'
            }`}
          >
            {walletApplied ? 'Remove' : 'Apply'}
          </button>
        </div>

        {/* Coupon Section */}
        <CouponSection
          selectedCoupon={selectedCoupon}
          onCouponChange={onCouponChange}
        />
      </div>

      {/* Price Breakdown */}
      <div className="bg-white rounded-xl shadow-card px-5 pt-5 pb-5">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-600">Subtotal</span>
            <span className="text-sm font-semibold text-neutral-800">
              {formatINR(SUBTOTAL)}
            </span>
          </div>

          {walletApplied && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-600">Wallet Discount</span>
              <span className="text-sm font-semibold text-emerald-600">
                -{formatINR(walletDiscount)}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-600">Tax (18% GST)</span>
            <span className="text-sm font-semibold text-neutral-800">
              {formatINR(tax)}
            </span>
          </div>

          <div className="border-t border-neutral-100 pt-3">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-neutral-900">
                Total due today
              </span>
              <span className="text-xl font-bold text-primary-500">
                {total.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Proceed to Payment */}
        <button className="w-full mt-5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold py-3 rounded-lg transition-colors duration-150">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
