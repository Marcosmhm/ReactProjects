import { lazy } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom'
const Footer = lazy(() => import('./Footer'));
const Navbar = lazy(() => import('./Navbar'));
const ScrollToTop = lazy(() => import('./ScrollToTop'));
import Loading from './Loading';

export default function Layout() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </>
  )
}