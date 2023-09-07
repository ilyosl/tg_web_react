import React from 'react'
import Button from '../Button/button'
import { useTelegram } from '../../hooks/useTelegram'

const Header = (props) => {
    const {onClose, user} = useTelegram();
    return (
        <div className={'header'}>
            <Button onClik={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header