"use client";

import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

interface ActionButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export function ActionButtons({ onEdit, onDelete }: ActionButtonsProps) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={onEdit}
        className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
        title="Edit"
      >
        <PencilIcon className="h-5 w-5" />
      </button>
      <button
        onClick={onDelete}
        className="p-1 text-red-600 hover:text-red-800 transition-colors"
        title="Delete"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>
  );
}