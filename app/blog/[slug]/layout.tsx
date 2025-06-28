import { ScrollProgress } from '@/app/components/motion-primitives/scroll-progress';

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className='pointer-events-none fixed top-0 left-0 w-full z-10'>
        <div className='absolute left-0 top-0 h-0.5 w-full bg-neutral-200 dark:bg-[#111111]' />
        <ScrollProgress
          className='absolute top-0 h-0.5 bg-[linear-gradient(to_right,transparent,#0090FF_75%,#0090FF_100%)]'
          springOptions={{
            stiffness: 280,
            damping: 18,
            mass: 0.3,
          }}
        />
      </div>
      {children}
    </section>
  );
}
