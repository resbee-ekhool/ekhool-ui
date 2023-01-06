import React, { FC } from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLDivElement>{

    children: any,
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption',
    color?: 'primary-main' | 'icon-inactive' | null | undefined | any

}

const Typography:FC<TypographyProps> = ({ variant = 'body1', children, color, className, ...props }) => {
    
    switch (variant)
    {
        case 'body1':
            return <p className={`body1 ${color} ${className}`} {...props} >{children}</p>;
        
        case 'h1':
            return <h1 className={`h1 ${color} ${className}`} {...props} >{children}</h1>;

        case 'h2':
            return <h2 className='h2' >{children}</h2>;

        case 'h3':
            return <h3 className='h3' >{children}</h3>;

        case 'h4':
            return <h4 className='h4' >{children}</h4>;

        case 'h5':
            return <h5 className='h5' >{children}</h5>;

        case 'h6':
            return <h6 className='h6' >{children}</h6>;

        case 'subtitle1':
            return <h6 className={`subtitle1 ${color} ${className}`} {...props} >{children}</h6>;

        case 'subtitle2':
            return <h6 className={`subtitle2 ${color} ${className}`} {...props} >{children}</h6>;

        case 'body2':
            return <p className={`body2 ${color}`} >{children}</p>;

        case 'caption':
            return <p className={`caption ${color}`} >{children}</p>;
            
        
        default :
            return <></>
    }

};

export default Typography;