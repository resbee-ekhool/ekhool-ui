import React, { FC } from 'react';
import Stack from '../Stack/Stack';
import Typography from '../Typography/Typography';

interface IconButtonPorps extends React.HTMLAttributes<HTMLDivElement>{

    children?: any,
    size?: 'small' | 'medium' | 'large' | 'larger',
    titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption',
    icon: string,
    active?: boolean

}

const IconButton:FC<IconButtonPorps> = ({ children, size = 'medium', titleVariant, icon, active, ...props}) => {
    return (
        <Stack allCenter={true} cursor={'pointer'} {...props} >
            <span className={`material-icons-round icon-${size} ${active ? 'icon-active' : active === false ? 'icon-inactive' : ''} `}>
                {icon}
            </span>
            {
                children &&
                <Typography variant={titleVariant} color={active ? 'primary-main' : active === false ? 'icon-inactive' : undefined} >{children}</Typography>
            }
        </Stack>
    )
};

export default IconButton