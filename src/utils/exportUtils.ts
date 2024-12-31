import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver'; // Menggunakan FileSaver.js untuk menyimpan file di browser
import { RecapData } from './types';

export const exportToExcelWithBase64Images = async (data: RecapData[], fileName: string = 'recap-export') => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Recap Data');

  // Tentukan kolom yang akan digunakan
  worksheet.columns = [
    { header: 'Nomor Resi', key: 'tracking_number' },
    { header: 'Tanggal Proses', key: 'process_date' },
    { header: 'Tanggal Kirim', key: 'ship_date' },
    { header: 'Status', key: 'order_status' },
    { header: 'Harga', key: 'price' },
    { header: 'Alamat', key: 'address' },
    { header: 'Photo', key: 'photo' }
  ];

  // Menambahkan data terlebih dahulu
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    
    // Menambahkan data ke worksheet tanpa gambar
    worksheet.addRow({
      tracking_number: item.tracking_number,
      process_date: item.process_date,
      ship_date: item.ship_date,
      order_status: item.order_status,
      price: item.price,
      address: item.address,
      photo: '' // Kolom untuk foto, kosong karena gambar disisipkan terpisah
    });
  }

  // Menambahkan gambar ke worksheet setelah data
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    
    // Jika ada foto dalam base64
    if (item.photo) {
      const imageId = workbook.addImage({
        base64: item.photo, // base64 dari foto
        extension: 'png', // Ekstensi gambar (png, jpg, dll)
      });

      // Menyisipkan gambar ke dalam worksheet di baris yang sesuai
      worksheet.addImage(imageId, {
        tl: { col: 6, row: i + 1 }, // Menempatkan gambar pada kolom Photo dan baris yang sesuai
        ext: { width: 100, height: 100 }, // Ukuran gambar
      });
    }
  }

  // Menyesuaikan tinggi baris untuk gambar agar tidak tumpang tindih
  worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
    if (rowNumber > 1) {
      row.height = 100; // Sesuaikan tinggi baris agar gambar pas
    }
  });

  // Buat file dalam format Blob
  const buffer = await workbook.xlsx.writeBuffer();

  // Simpan file menggunakan FileSaver.js
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `${fileName}.xlsx`);
};
