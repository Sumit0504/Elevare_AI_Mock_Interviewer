import React, { ReactNode } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { isAuthenticated } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';

 const Rootlayout = async ({children} : {children : ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className='root-layout'>
      <nav>
        <Link href = '/' className='flex items-center gap-2'>
          <Image src = '/Logo.svg' alt = 'Logo' width={45} height={40}/>
          <h2 className='text-primary-100'>Elevare</h2>
        </Link>
        {children}
      </nav>
    </div>
  )
}

export default Rootlayout