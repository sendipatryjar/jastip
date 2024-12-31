"use client";

import React from 'react';
import { StatusBadge } from './StatusBadge';
import { ActionButtons } from './ActionButtons';
import { RecapData } from '@/utils/types';

interface RecapTableRowProps {
  recap: RecapData;
  onEdit: () => void;
  onDelete: () => void;
}

export function RecapTableRow({ recap, onEdit, onDelete }: RecapTableRowProps) {
  return (
    <tr className="hover:bg-gray-50">
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
        <span className="text-sm text-gray-900">{recap.name === null || '' ? '-' : recap.name}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">{recap.tracking_number}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">{recap.process_date}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">{recap.ship_date}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusBadge status={recap.order_status as any} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        Rp {recap.price.toLocaleString('id-ID')}
      </td>
      <td className="px-6 py-4">
        <p className="text-sm text-gray-900 max-w-xs truncate">
          {recap.address}
        </p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <ActionButtons onEdit={onEdit} onDelete={onDelete} />
      </td>
    </tr>
  );
}