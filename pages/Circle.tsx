import React from 'react'
import MainContent from '../src/components/Main'
import Link from 'next/link'
const Circle: React.FC = () => {
    return (
        <MainContent>
            <div>
                Circle page
                <Link href="/Home">Backk</Link>
            </div>
        </MainContent>
    )
}

export default Circle