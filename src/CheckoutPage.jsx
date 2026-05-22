import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

import BillingForm from './components/checkout/BillingForm';
import OrderSummary from './components/checkout/OrderSummary';

const initialForm = {
  companyName: '',
  email: '',
  gstNumber: '',
  panNumber: '',
  premise: '',
  street: '',
  state: '',
  city: '',
  country: 'India',
  pinCode: '',
};

export default function CheckoutPage() {
  const [formData, setFormData] = useState(initialForm);
  const [selectedCoupon, setSelectedCoupon] = useState('WELCOME20');
  const [walletApplied, setWalletApplied] = useState(false);

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      // Reset city when state changes
      ...(field === 'state' ? { city: '' } : {}),
    }));
  };

  const handleCancel = () => {
    setFormData(initialForm);
  };

  const handleSave = () => {
    console.log('Saving details:', formData);
    alert('Details saved successfully!');
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Back to Plans */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-5">
        <button className="flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to plans
        </button>
      </div>

      {/* Two-column layout */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left: Billing Form */}
          <div className="w-full lg:flex-1">
            <BillingForm
              formData={formData}
              onChange={handleFormChange}
              onCancel={handleCancel}
              onSave={handleSave}
            />
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:w-[380px] xl:w-[400px]">
            <OrderSummary
              selectedCoupon={selectedCoupon}
              onCouponChange={setSelectedCoupon}
              walletApplied={walletApplied}
              onWalletToggle={() => setWalletApplied((p) => !p)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
