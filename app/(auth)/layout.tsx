import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/actions/auth.action';

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  // Allow access to sign-in and sign-up pages
  if (!isUserAuthenticated && !["/auth/sign-in", "/auth/sign-up"].includes(window.location.pathname)) {
    redirect('/auth/sign-in'); // Redirect to sign-in page instead of looping
  }

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
