import React from 'react'

export type Page = {
    id: number
    title: string
    link: string
    privateRoute?: boolean
    userMenu?: boolean
    logout?: boolean
    icon?: React.ReactNode
}
