import { navbarConfig } from '@/config/Navbar';
import Image from 'next/image';
import React from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';
import { TrackedLink } from './TrackedLink';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-3.5">
          <TrackedLink
            href="/"
            className="group shrink-0"
            track={{
              name: 'button_click',
              data: { buttonId: 'logo', section: 'navbar' },
            }}
          >
            <Image
              className="h-11 w-11 rounded-xl border border-neutral-200/80 bg-neutral-100 object-cover transition-transform duration-300 ease-in-out group-hover:scale-95 dark:border-neutral-800 dark:bg-neutral-900 shadow-sm"
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
            />
          </TrackedLink>

          <div className="flex flex-col justify-center">
            <TrackedLink
              href="/"
              className="text-sm sm:text-base font-semibold tracking-tight text-foreground transition-colors hover:text-primary leading-tight"
              track={{
                name: 'button_click',
                data: { buttonId: 'name', section: 'navbar' },
              }}
            >
              {navbarConfig.name || 'Sayandeep Saha'}
            </TrackedLink>

            <div className="flex items-center gap-3.5 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              {navbarConfig.navItems.map((item) => (
                <TrackedLink
                  className="transition-colors hover:text-foreground hover:underline hover:decoration-2 hover:underline-offset-4"
                  key={item.label}
                  href={item.href}
                  track={{
                    name: 'button_click',
                    data: { buttonId: item.label, section: 'navbar' },
                  }}
                >
                  {item.label}
                </TrackedLink>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </Container>
  );
}
