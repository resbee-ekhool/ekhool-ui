import React, { FC } from 'react';
import Avatar from '../Avatar/Avatar';
import IconButton from '../IconButton/IconButton';
import Menu from '../Menu/Menu';
import Typography from '../Typography/Typography';

interface HeaderProps {

    logo?: string,

    onClickMenu?: any,

    onLogoClick?: any,

    user: { avatar: string, name: string, accountUrl: string },

    data?: any

}

const Header:FC<HeaderProps> = ({ 
        logo, 
        onClickMenu = () => {}, 
        onLogoClick = () => {},
        user,
        data
}) => {

    return (
        <div className='header' >

            <div className='row gap-6' >
                <IconButton icon={'menu'} onClick={onClickMenu} />
                
                {
                    logo && <img src={logo} className='header-logo pointer' onClick={onLogoClick} />
                }

            </div>

            <div className='row gap-4' >

                {
                    Array.isArray(data) && data?.map((item, index) => {

                        const { component } = item;

                        if(component)
                        {
                            return component
                        }

                        return (
                            <h1>kjgc</h1>
                        )
                    })
                }

                {
                    user && 
                    <Menu
                        component={
                            <div className='row align-center gap-2 pointer border-1 p-1 px-2 br-2' >
                                <Typography 
                                    variant={'body2'} 
                                    style={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 1,
                                        maxWidth: 120
                                    }} >{user?.name}</Typography>
                                <Avatar
                                    size={'medium'}
                                    src={user?.avatar}
                                />
                            </div>
                        }
                        align={'right'}
                    >

                        <div className='w-5 h-100'>
                            <iframe src={user?.accountUrl} />
                        </div>

                    </Menu>
                }
                
            </div>

        </div>
    )
};

export default Header;