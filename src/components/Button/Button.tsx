import React, { FC } from 'react';
import Typography from '../Typography/Typography';
import '../../scss/styles.scss'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {

    children: any,

    startIcon?: any,

    endIcon?: any

}

const Button:FC<ButtonProps> = ({ children, className, startIcon, endIcon, ...props }) => {
    return (
        <button className={`btn row gap-2 align-center`} {...props} >
            {startIcon}
            {
                typeof children === 'string' ? 
                <Typography>{children}</Typography>
                :
                <>{children}</>
            }
            {endIcon}
        </button>
    )
};

export default Button;