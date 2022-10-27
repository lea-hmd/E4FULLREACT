import React from 'react'
import Navbar from '../components/common/Navbar'

type LayoutProps = {
    children?: React.ReactNode
    darkMode: boolean
    // eslint-disable-next-line no-unused-vars
    handleChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Layout({
    children,
    darkMode,
    handleChangeMode,
}: LayoutProps) {
    return (
        <>
            <Navbar
                {...{
                    darkMode,
                    handleChangeMode,
                }}
            />
            {children}
        </>
    )
}
