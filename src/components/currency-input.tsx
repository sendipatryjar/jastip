import React from 'react';

interface CurrencyInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: string;
  disabled?: boolean;
}

export function CurrencyInput({
  label,
  value,
  onChange,
  placeholder,
  icon,
  disabled = false
}: CurrencyInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    onChange(value);
  };

  const formatValue = (value: string) => {
    if (!value) return '';
    return new Intl.NumberFormat('id-ID').format(parseInt(value));
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative rounded-lg shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-xl">{icon}</span>
        </div>
        <input
          type="text"
          value={formatValue(value)}
          onChange={handleChange}
          disabled={disabled}
          className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}