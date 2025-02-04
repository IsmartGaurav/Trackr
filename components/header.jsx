import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { PenBox } from 'lucide-react'
import React from 'react'
import UserMenu from './user-menu'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { checkUser } from '@/lib/checkUser'

const Header = async () => {

    await checkUser()

    return (
        <header className="container mx-auto">
            <nav className="py-6 px-4 flex justify-between items-center">

                <Link href="/">
                    <h1 className="text-2xl font-bold">
                        <Image
                            src={"/logo.png"}
                            alt="Trackr"
                            width={200}
                            height={56}
                            className="h-10 w-auto object-contain"
                        />
                    </h1>
                </Link>

                <div className="flex items-center gap-4">
                    <Link href="/project/create">
                        <Button variant="destructive" className="flex items-center gap-2">
                            <PenBox size={18} />
                            <span className="hidden md:inline">Create Project</span>
                        </Button>
                    </Link>
                    <SignedOut>
                        <SignInButton forceRedirectUrl="/onboarding">
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <UserMenu />
                    </SignedIn>
                </div>
            </nav>
        </header>

    )
}

export default Header