import React from 'react';

interface WeightInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function WeightInput({ value, onChange }: WeightInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^\d.]/g, '');
    if (newValue === '' || /^\d*\.?\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Berat Barang (kg)
      </label>
      <div className="relative rounded-lg shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-xl">⚖️</span>
        </div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Masukkan berat dalam kg"
        />
      </div>
    </div>
  );
}