"use client";

import React from 'react';
import { RecapData } from '@/utils/types';

interface EditableRowProps {
  recap: RecapData;
  onSave: (data: RecapData) => void;
  onCancel: () => void;
}

export function EditableRow({ recap, onSave, onCancel }: EditableRowProps) {
  const [editedData, setEditedData] = React.useState(recap);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedData);
  };

  return (
    <tr className="bg-blue-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          {recap.photo && (
            <img
              src={recap.photo}
              alt="Product"
              className="h-10 w-10 rounded-full object-cover"
            />
          )}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          type="text"
          name="name"
          value={editedData.name}
          onChange={handleChange}
          className="w-full px-2 py-1 text-sm border rounded"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          type="text"
          name="tracking_number"
          value={editedData.tracking_number}
          onChange={handleChange}
          className="w-full px-2 py-1 text-sm border rounded"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          type="date"
          name="process_date"
          value={editedData.process_date}
          onChange={handleChange}
          className="w-full px-2 py-1 text-sm border rounded"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          type="date"
          name="ship_date"
          value={editedData.ship_date}
          onChange={handleChange}
          className="w-full px-2 py-1 text-sm border rounded"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <select
          name="order_status"
          value={editedData.order_status}
          onChange={handleChange}
          className="w-full px-2 py-1 text-sm border rounded"
        >
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          type="number"
          name="price"
          value={editedData.price}
          onChange={handleChange}
          className="w-full px-2 py-1 text-sm border rounded"
        />
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          name="address"
          value={editedData.address}
          onChange={handleChange}
          className="w-full px-2 py-1 text-sm border rounded"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex space-x-2">
          <button
            onClick={handleSubmit}
            className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
}