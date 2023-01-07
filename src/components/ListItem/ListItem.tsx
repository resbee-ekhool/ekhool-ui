import React, { FC } from 'react';
import IconButton from '../IconButton/IconButton';
import Typography from '../Typography/Typography';
import '../../scss/styles.scss'
interface ListItemPorps extends React.HTMLAttributes<HTMLDivElement> {

    children?: any,
    active?: boolean,
    title: string,
    icon: string,
    endIcon?: string

}

const ListItem:FC<ListItemPorps> = ({ active = false, title, icon, endIcon, ...props }) => {

    if(typeof title !== 'string')
    {
        return (
            <>
                {title}
            </>
        )
    }

    return (
        <div className={`p-2 pointer ${active ? 'list-item-active' : 'list-item'} br-2`} {...props} >
            <div className='row gap-2' >
                <IconButton icon={icon} size='small' />
                <Typography variant={active ? 'subtitle2' : 'body2'}>{title}</Typography>
            </div>
            
            {
                endIcon &&
                <div>
                    {
                        typeof endIcon === 'string' ? 
                        <IconButton icon={endIcon} /> : 
                        <>{endIcon}</>
                    }
                </div>
            }

        </div>
    )
};

export default ListItem;