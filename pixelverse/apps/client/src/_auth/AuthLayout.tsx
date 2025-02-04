import { Features } from '@/components/shared/Features';
import { Hero } from '@/components/shared/Hero';
import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div className='flex justify-center flex-col'>
          <Hero />
          <Features/>
          
        </div>
        
      )}
    </>
  )
}

export default AuthLayout