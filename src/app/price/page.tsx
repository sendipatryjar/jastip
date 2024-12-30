"use client";

import React, { useState } from "react";
import { Typography, Card, TypographyProps } from "@material-tailwind/react";
import { Navbar } from "@/components";

const FAQS = [
  {
    title: "Bagaimana Caranya Order?",
    desc: "Kamu bisa infokan produk yang ingin dibeli, semisal mengirimkan link di whatsapp ataupun foto produk pada ecommerce kita di Tokopedia atau Shoope, dan juga infokan alamat pengiriman.",
  },
  {
    title: "Berapa Lama Estimasi barang sampai jika menggunakan Udara?",
    desc: "Untuk estimasi barang sampai itu 10-14 hari kerja sejak barang diterima oleh gudang dicina, namun jika terjadi redline itu akan membutuhkan waktu 3-4 minggu.",
  },
  {
    title: "Bagaimana jika ingin Order di Whatsapp?",
    desc: "Jika kamu ingin order direct Whatsapp, kamu bisa menyelesaikan pembayaran pertama berupa harga barang + admin jasa, lalu pembayaran kedua untuk ongkir itu menyusul ketika barang sampai dibatam.",
  },
  {
    title: "Bagaimana jika ingin Order di Ecommerce?",
    desc: "Untuk order di ecommerce, kita akan mengirimkan rincian harga estimasi terkait produk yang ingin dibeli dan selanjutnya akan dibuatkan link produk untuk di order customer. Namun akan ada DP senilai 20% dari nilai total yang ada, dan dibayarkan manual transfer ke kami.",
  },
  {
    title: "Dapatkah aku melakukan cancel order",
    desc: "Untuk barang yang sudah dibeli, tidak dapat dilakukan cancel order",
  },
  {
    title: "Apakah ada garansi dari produk yang kami beli?",
    desc: "Untuk Garansi mungkin ada tapi itu Internasional, namun kami tidak dapat membantu terkait klaim garansi barang, karena kami bersifat hanya jasa untuk membantu membelikan",
  },
];

export default function PRICEPage() {
  const [price, setPrice] = useState('')
  const [ongkir, setOngkir] = useState(0)
  const [admin, setAdmin] = useState(55000)
  return (
   <>
     <Navbar />
     <section className="px-8 py-20 bg-[#b9aeef]">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="white" className="mb-4" >
            Cara Menghitung Harga Barang
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-white lg:w-3/5"
          >
       {''}
          </Typography>
        </div>

        <div className="flex flex-row items-center align-center">
          <input value={price} className="p-2 rounded-xl mr-4" placeholder="Masukkan Harga Barang" />
          <input value={price} className="p-2 rounded-xl  mr-4" placeholder="Masukkan Ongkir Barang" />
          <input value={admin}  className="p-2 rounded-xl" placeholder="Masukkan Harga Admin" />
        </div>
        <div className="bg-gray-900 items-center mt-4 p-2 rounded-full">
          <p className="text-white text-center">Hitung</p>
        </div>
      </div>
    </section>
   </>
   
  );
}


