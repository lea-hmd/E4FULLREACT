import React from 'react'

export type Page = {
    id: number
    link?: string
    title: string
    logout?: boolean
    userMenu?: boolean
    privateRoute?: boolean
    icon?: React.ReactNode
}
