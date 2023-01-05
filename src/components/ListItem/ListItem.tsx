import React, { FC } from 'react';
import IconButton from '../IconButton/IconButton';
import Typography from '../Typography/Typography';
import '../../scss/styles.scss'

interface ListItemPorps extends React.HTMLAttributes<HTMLDivElement> {

    children?: any,
    active?: boolean,
    title: string,
    icon: string

}

const ListItem:FC<ListItemPorps> = ({ active = false, title, icon, ...props }) => {
    return (
        <div className={`p-2 gap-2 pointer ${active ? 'list-item-active' : 'list-item'} br-2`} {...props} >
            <IconButton icon={icon} size='small' />
            <Typography variant={active ? 'subtitle2' : 'body2'}>{title}</Typography>
        </div>
    )
};

export default ListItem;