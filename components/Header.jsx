import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'

function Header() {
    return (

        <header className='container mx-auto'>

            <nav className='py-6 px-4 flex justify-between items-center'>
                <Link href="/">
                    <Image src={'/TrackrLogo.png'} alt='Trackr Logo'
                        width={700} height={1000} className='h-10 w-auto object-contain' />
                </Link>

                <div className='flex items-center gap-4'>
                    <Link href="/project/create">
                        <Button variant="destructive" className="flex items-center gap-2">
                            <PenBox size={18} />
                            <span>
                                Create Project
                            </span>
                        </Button>
                    </Link>
                    <SignedOut>
                       <SignInButton forceRedirectUrl='/onboarding'>
                        <Button variant="outline">Login</Button>
                       </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>

            </nav>
        </header>
    )
}

export default Header