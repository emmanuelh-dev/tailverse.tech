import Link from 'next/link';
import React from 'react';

export default function Components() {
  return (
    <section className='mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8'>
      <div className='max-w-2xl'>
        <h2 className='text-base font-semibold leading-7 text-white'>
          Components
        </h2>
        <p className='mt-4 text-4xl lg:text-8xl font-extrabold tracking-tight text-white'>
          Beautifully Gradients, ready for your next project.
        </p>
      </div>
      <div className='max-w-xl'>
        <p className='mt-4 text-base leading-7 text-slate-500'>
          Over 500+ professionally designed, fully responsive, expertly crafted
          component examples you can drop into your Tailwind projects and
          customize to your heart’s content.
        </p>
      </div>
      <div className='mt-6'>
        <Link
          className='text-base font-semibold text-white hover:underline underline-offset-2'
          href='/'
        >
          Browse all components <span aria-hidden='true'>→</span>
        </Link>
      </div>
    </section>
  );
}
