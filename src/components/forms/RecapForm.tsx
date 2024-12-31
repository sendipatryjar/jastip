"use client";

import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { FormSelect } from './FormSelect';
import { RecapData } from '@/utils/types';

interface RecapFormProps {
  onSubmit: (data: Omit<RecapData, 'id' | 'created_at'>) => Promise<void>;
}

const ORDER_STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending' },
  { value: 'processing', label: 'Diproses' },
  { value: 'shipped', label: 'Dikirim' },
  { value: 'delivered', label: 'Diterima' }
];

export default function RecapForm({ onSubmit }: RecapFormProps) {
  const [formData, setFormData] = useState<Omit<RecapData, 'id' | 'created_at'>>({
    photo: '',
    process_date: '',
    ship_date: '',
    address: '',
    tracking_number: '',
    order_status: 'pending',
    price: 0,
    name: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData(prev => ({
            ...prev,
            photo: event.target?.result as string
          }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    setFormData({
      photo: '',
      process_date: '',
      ship_date: '',
      address: '',
      tracking_number: '',
      order_status: 'pending',
      price: 0,
      name: ''
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Input Data Pesanan</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Foto Produk
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full"
          />
          {formData.photo && (
            <img 
              src={formData.photo} 
              alt="Preview" 
              className="mt-2 h-32 object-cover rounded-lg"
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Tanggal Proses"
            type="date"
            name="process_date"
            value={formData.process_date}
            onChange={handleInputChange}
          />
          
          <FormInput
            label="Tanggal Kirim"
            type="date"
            name="ship_date"
            value={formData.ship_date}
            onChange={handleInputChange}
          />
        </div>

        <FormTextArea
          label="Alamat Pengiriman"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
       <FormInput
            label="Nama Customer"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Nomor Resi"
            type="text"
            name="tracking_number"
            value={formData.tracking_number}
            onChange={handleInputChange}
          />

          <FormInput
            label="Harga Produk"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>

        <FormSelect
          label="Status Pesanan"
          name="order_status"
          value={formData.order_status}
          onChange={handleInputChange}
          options={ORDER_STATUS_OPTIONS}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Simpan Data Pesanan
        </button>
      </form>
    </div>
  );
}