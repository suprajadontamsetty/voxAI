import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/actions/auth.action';
import { headers } from 'next/headers';


const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  const path = headers().get('next-url') || '';

  if (!isUserAuthenticated && !path.startsWith('/auth/')) {
    redirect('/auth/sign-in');
  }  

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
