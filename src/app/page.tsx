// solução de importação
import dynamic from 'next/dynamic';

export const Width = dynamic(() => import('@/components/Width'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Width />
    </main>
  );
}