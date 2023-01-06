import React, { FC } from "react";
import Typography from "../Typography/Typography";

interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement>{

    children?: any

}

const MenuItem:FC<MenuItemProps> = ({ children, ...props }) => {
    return (
        <div className="menu-item" {...props} >
            {
                typeof children === 'string' ?
                <Typography variant={'body2'} >{children}</Typography>
                :
                <>{children}</>
            }
        </div>
    )
};

export default MenuItem;