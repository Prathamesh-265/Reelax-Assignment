import React, { useState } from 'react';
import { Tag, ChevronUp, ChevronDown } from 'lucide-react';

const COUPONS = [
  { code: 'WELCOME20', description: '20% off on your first month' },
  { code: 'ANNUAL50', description: '50% off on annual plans' },
];

export default function CouponSection({ selectedCoupon, onCouponChange }) {
  const [isOpen, setIsOpen] = useState(true);
  const [inputCode, setInputCode] = useState('');

  const handleApplyInput = () => {
    const found = COUPONS.find(
      (c) => c.code.toLowerCase() === inputCode.trim().toLowerCase()
    );
    if (found) {
      onCouponChange(found.code);
      setInputCode('');
    }
  };

  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 py-3.5 bg-white hover:bg-neutral-50 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <Tag className="w-4 h-4 text-neutral-500" />
          <span className="text-sm font-semibold text-neutral-800">Apply Coupon</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-neutral-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        )}
      </button>

      {/* Expandable body */}
      {isOpen && (
        <div className="px-4 pb-4 bg-white border-t border-neutral-100">
          {/* Input row */}
          <div className="flex gap-2 mt-3">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleApplyInput()}
              className="input-base flex-1"
            />
            <button
              onClick={handleApplyInput}
              className="text-primary-500 hover:text-primary-600 text-sm font-semibold px-3 whitespace-nowrap transition-colors"
            >
              Apply
            </button>
          </div>

          {/* Coupon list */}
          <div className="mt-3 flex flex-col gap-2">
            {COUPONS.map((coupon) => {
              const isSelected = selectedCoupon === coupon.code;
              return (
                <button
                  key={coupon.code}
                  onClick={() =>
                    onCouponChange(isSelected ? null : coupon.code)
                  }
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md border text-left transition-all duration-150 ${
                    isSelected
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                >
                  <div>
                    <span className="text-sm font-semibold text-neutral-800 mr-2">
                      {coupon.code}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {coupon.description}
                    </span>
                  </div>
                  {/* Radio indicator */}
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected
                        ? 'border-primary-500'
                        : 'border-neutral-300'
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-primary-500" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
