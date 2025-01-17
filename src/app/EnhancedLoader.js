'use client';

import React, { useState, useEffect } from 'react';
import Loader from '@/components/Loader/Loader';

function EnhancedLoader({ children, loadingTime = 500 }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, [loadingTime]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
}

export default EnhancedLoader;
