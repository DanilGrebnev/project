import { type FC } from 'react'
import cn from 'shared/lib/classnames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'

import s from './Navbar.module.scss'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    return <div className={cn(s.Navbar, className)}></div>
}
