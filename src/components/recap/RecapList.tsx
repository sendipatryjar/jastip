"use client";

import React, { useState } from 'react';
import { TableHeader } from './TableHeader';
import { RecapTableRow } from './RecapTableRow';
import { EditableRow } from './EditableRow';
import { RecapData } from '@/utils/types';
import { ExportButton } from './ExportButtons';
import { exportToExcelWithBase64Images } from '@/utils/exportUtils';

const columns = [
  { label: 'Foto', className: 'w-20' },
  { label: 'Nama' },
  { label: 'No. Resi' },
  { label: 'Tgl Proses' },
  { label: 'Tgl Kirim' },
  { label: 'Status' },
  { label: 'Harga' },
  { label: 'Alamat' },
  { label: 'Aksi', className: 'w-24' }
];

interface RecapListProps {
  recaps: RecapData[];
  onUpdate: (data: RecapData) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export default function RecapList({ recaps, onUpdate, onDelete }: RecapListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleSave = async (data: RecapData) => {
    await onUpdate(data);
    setEditingId(null);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      await onDelete(id);
    }
  };
  const handleExport = () => {
    exportToExcelWithBase64Images(recaps,  "recap-export");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Daftar Pesanan</h2>
        <div className="flex items-center gap-4">
          <p className="text-gray-500">Total: {recaps.length} pesanan</p>
          <ExportButton
            onClick={handleExport} 
            disabled={recaps.length === 0} 
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
              {recaps.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-300">
                  <TableHeader columns={columns} />
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {recaps.map((recap) => (
                      editingId === recap.id ? (
                        <EditableRow
                          key={recap.id}
                          recap={recap}
                          onSave={handleSave}
                          onCancel={() => setEditingId(null)}
                        />
                      ) : (
                        <RecapTableRow
                          key={recap.id}
                          recap={recap}
                          onEdit={() => handleEdit(recap.id)}
                          onDelete={() => handleDelete(recap.id)}
                        />
                      )
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-12 bg-white">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    Belum ada pesanan
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Pesanan yang sudah dibuat akan muncul di sini
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}