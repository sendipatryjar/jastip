"use client";

import React from 'react';

interface Column {
  label: string;
  className?: string;
}

interface TableHeaderProps {
  columns: Column[];
}

export function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            scope="col"
            className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${column.className || ''}`}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}