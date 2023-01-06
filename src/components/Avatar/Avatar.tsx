import React, { FC } from 'react';

interface AvatarPorps extends React.HTMLAttributes<HTMLDivElement> {

    size?: 'small' | 'medium' | 'large' | null | undefined,

    src?: string

}

const Avatar:FC<AvatarPorps> = ({ size, src, className, ...props }) => {
    return (
        <div className={`avatar-${size} pointer ${className}`} {...props} >
            <img className='fill' src={src} />
        </div>
    )
};

export default Avatar;