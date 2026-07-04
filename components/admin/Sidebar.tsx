'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  LayoutDashboard, 
  FileText, 
  Mail, 
  Users, 
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/blogs', label: 'Blogs', icon: FileText },
  { href: '/admin/newsletters', label: 'Newsletters', icon: Mail },
  { href: '/admin/subscribers', label: 'Subscribers', icon: Users },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <div className="flex items-center justify-between mb-6">
            <Link href="/admin" className="text-lg font-bold" onClick={() => setOpen(false)}>
              Admin
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="space-y-2">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = pathname === item.href || 
                (item.href !== '/admin' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-muted'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>

      <aside className="hidden md:block w-64 border-r bg-muted/10 h-screen fixed left-0 top-0">
        <div className="p-4 border-b">
          <Link href="/admin" className="text-lg font-bold">
            Admin
          </Link>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = pathname === item.href || 
              (item.href !== '/admin' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-muted'
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}