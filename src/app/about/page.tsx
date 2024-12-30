'use client';

import React from 'react';
import { Navbar } from '@/components';
import { Hero } from '@/components/about/Hero';
import { Features } from '@/components/about/Features';
import { Process } from '@/components/about/Process';
import { Contact } from '@/components/about/Contact';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Contact />
      </main>
    </>
  );
}