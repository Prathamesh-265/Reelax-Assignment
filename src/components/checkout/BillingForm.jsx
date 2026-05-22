import React from 'react';
import InputField from '../common/InputField';
import SelectField from '../common/SelectField';

const STATES = [
  { value: 'AP', label: 'Andhra Pradesh' },
  { value: 'TS', label: 'Telangana' },
  { value: 'KA', label: 'Karnataka' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'DL', label: 'Delhi' },
  { value: 'TN', label: 'Tamil Nadu' },
  { value: 'GJ', label: 'Gujarat' },
  { value: 'RJ', label: 'Rajasthan' },
  { value: 'UP', label: 'Uttar Pradesh' },
  { value: 'WB', label: 'West Bengal' },
];

const CITIES = {
  TS: [{ value: 'HYD', label: 'Hyderabad' }, { value: 'WRG', label: 'Warangal' }],
  AP: [{ value: 'VJA', label: 'Vijayawada' }, { value: 'VIZ', label: 'Visakhapatnam' }],
  KA: [{ value: 'BLR', label: 'Bengaluru' }, { value: 'MYS', label: 'Mysuru' }],
  MH: [{ value: 'MUM', label: 'Mumbai' }, { value: 'PUN', label: 'Pune' }],
  DL: [{ value: 'DEL', label: 'New Delhi' }],
  TN: [{ value: 'CHN', label: 'Chennai' }, { value: 'CBE', label: 'Coimbatore' }],
  GJ: [{ value: 'AMD', label: 'Ahmedabad' }, { value: 'SRT', label: 'Surat' }],
  RJ: [{ value: 'JPR', label: 'Jaipur' }, { value: 'JDH', label: 'Jodhpur' }],
  UP: [{ value: 'LKO', label: 'Lucknow' }, { value: 'AGR', label: 'Agra' }],
  WB: [{ value: 'KOL', label: 'Kolkata' }],
};

export default function BillingForm({ formData, onChange, onCancel, onSave }) {
  const handleChange = (field) => (e) => {
    onChange(field, e.target.value);
  };

  const availableCities = formData.state ? (CITIES[formData.state] || []) : [];

  return (
    <div className="bg-white rounded-xl shadow-card p-6 sm:p-8">
      <h1 className="text-2xl font-bold text-neutral-900 mb-6">Review your details</h1>

      <h2 className="text-base font-semibold text-neutral-800 mb-5">Billing Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
        {/* Company Name */}
        <InputField
          label="Company Name"
          id="companyName"
          placeholder="abhigyan"
          value={formData.companyName}
          onChange={handleChange('companyName')}
        />

        {/* Email */}
        <InputField
          label="Email"
          id="email"
          type="email"
          placeholder="abhigyan.pandey@getreelax.com"
          value={formData.email}
          onChange={handleChange('email')}
        />

        {/* GST Number */}
        <InputField
          label="GST Number"
          id="gstNumber"
          placeholder="GST Number"
          optional
          value={formData.gstNumber}
          onChange={handleChange('gstNumber')}
        />

        {/* PAN Number */}
        <InputField
          label="PAN Number"
          id="panNumber"
          placeholder="PAN Number"
          optional
          value={formData.panNumber}
          onChange={handleChange('panNumber')}
        />

        {/* Premise/House no. */}
        <InputField
          label="Premise/House no."
          id="premise"
          placeholder="Premise/House no."
          value={formData.premise}
          onChange={handleChange('premise')}
        />

        {/* Street */}
        <InputField
          label="Street"
          id="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange('street')}
        />

        {/* State */}
        <SelectField
          label="State"
          id="state"
          placeholder="Select state"
          options={STATES}
          value={formData.state}
          onChange={handleChange('state')}
        />

        {/* City */}
        <SelectField
          label="City"
          id="city"
          placeholder="Select city"
          options={availableCities}
          value={formData.city}
          onChange={handleChange('city')}
        />

        {/* Country */}
        <InputField
          label="Country"
          id="country"
          placeholder="India"
          value={formData.country}
          onChange={handleChange('country')}
        />

        {/* Pin Code */}
        <InputField
          label="Pin Code"
          id="pinCode"
          placeholder="Pincode"
          value={formData.pinCode}
          onChange={handleChange('pinCode')}
        />
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-100 mt-8 mb-6" />

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3">
        <button onClick={onCancel} className="btn-secondary">
          Cancel
        </button>
        <button onClick={onSave} className="btn-primary">
          Save Details
        </button>
      </div>
    </div>
  );
}
