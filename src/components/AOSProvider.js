'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      // You can add global AOS configuration here
      duration: 1000,
      once: false,
      easing: 'ease-in-out-cubic',
    });
  }, []);

  return <>{children}</>;
}