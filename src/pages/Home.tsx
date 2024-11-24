import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
// import { TrustedBy } from '@/components/TrustedBy';

export function Home() {
  return (
    <div>
      <Hero />
      {/* <TrustedBy/> */}
      <Features />
    </div>
  );
}