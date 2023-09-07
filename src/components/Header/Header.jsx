import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Header.css';
import Button from '../Button/Button';

const Header = (props) => {
    const {onClose, user} = useTelegram();
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header