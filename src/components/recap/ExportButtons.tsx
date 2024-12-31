"use client";

import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface ExportButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function ExportButton({ onClick, disabled }: ExportButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white 
        ${disabled 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
        }`}
    >
      <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
      Export ke Excel
    </button>
  );
}