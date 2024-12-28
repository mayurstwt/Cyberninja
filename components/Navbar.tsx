import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MobileMenu } from './MobileMenu'

const navItems = [
  { href: '/learn', label: 'Learn' },
  { href: '/', label: "What's New" },
  { href: '/pricing', label: 'pricing' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 px-5 min-h-[10vh] items-center md:px-0 z-50 w-full bg-black text-white flex justify-center">
      <div className="container flex h-16 items-center">
        <Link href={'/'}>
        <h1 className='text-3xl font-bold tracking-wider'>CyberNinja</h1>
        </Link>
        <nav className="ml-auto hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto md:ml-4">
          <Link href={"/login"}>
          <Button variant="outline">Sign In</Button>
          </Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  )
}

