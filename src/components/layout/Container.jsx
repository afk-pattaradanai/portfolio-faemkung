import { cn } from '@/lib/cn';

export default function Container({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', className)} {...rest}>
      {children}
    </Tag>
  );
}
