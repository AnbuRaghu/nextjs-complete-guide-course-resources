import Link from 'next/link';

import Header from '@/components/header';

export default function Sample() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/sampleSlug">About Us</Link></p>
    </main>
  );
}
