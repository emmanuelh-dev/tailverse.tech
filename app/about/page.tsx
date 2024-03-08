'use client';
import React from 'react';
import Main from './components/Main';
import Components from './components/Components';
import GradientsExamples from '../tailwind-gradient-generator/components/GradientsExamples';
import GRADIENTS from '@/data/gradients';
import { Link } from 'lucide-react';
const WelcomePage = () => {
  return (
    <div className='container'>
      <Main />
      <Components />
      <div className='flex flex-col items-end mt-16'>
        <GradientsExamples gradients={GRADIENTS.slice(0, 6)} />
        <Link
          className='mr-4 text-base font-semibold text-white hover:underline underline-offset-2'
          href='/'
        >
          Browse all gradients
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
