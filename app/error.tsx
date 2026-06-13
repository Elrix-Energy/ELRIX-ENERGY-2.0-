"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('[GlobalError]', error);
  }, [error]);

  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--space-8)',
        gap: 'var(--space-4)',
        color: 'var(--ink-1)',
      }}
    >
      <AlertTriangle
        size={56}
        style={{ color: 'var(--accent)', marginBottom: 'var(--space-2)' }}
        aria-hidden="true"
      />
      <h1 style={{ fontSize: 'clamp(1.5rem, 3vw + 1rem, 2.25rem)', margin: 0 }}>
        Something went wrong
      </h1>
      <p style={{ maxWidth: '36ch', color: 'var(--ink-3)', lineHeight: 1.6 }}>
        An unexpected error occurred. We&apos;ve logged it and will investigate. Please
        try refreshing or head back home.
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          className="btn btn-primary"
          onClick={reset}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
        >
          <RefreshCcw size={16} aria-hidden="true" />
          Try again
        </button>
        <Link
          href="/"
          className="btn btn-ghost"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
        >
          <Home size={16} aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
