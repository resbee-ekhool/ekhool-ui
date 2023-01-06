import React, { FC, useState } from 'react';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import ListItem from '../ListItem/ListItem';
import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';
import Stack from '../Stack/Stack';
import Typography from '../Typography/Typography';

interface SideBarPorps {

    data: any,
    onChange: Function,
    accountUrl?: string

}

const initialHoverMenu: any = { children: [], title: '' }

const SidebarArrow= () => {
    return (
        <div
            style={{
                borderRadius: '0 3px 0 0',
                left: 65,
                borderTop: 'dashed 1px #919EAB',
                borderRight: 'dashed 1px #919EAB',
                height: 12,
                width: 12,
                position: 'absolute',
                transform: 'rotate(-135deg)',
                backgroundColor: '#fff',
                marginTop: 12
            }}
        />
    )
}

const Sidebar:FC<SideBarPorps> = ({ data, onChange = () => {}, accountUrl }) => {

    const [hovered, setHovered] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(initialHoverMenu);
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    if(!Array.isArray(data))
    {
        throw new Error("Error: Please check the data")
    }

    const currentParentItem = data?.filter((i) => (i.active))

    if(currentParentItem?.length < 1)
    {
        throw new Error("Error")
    }

    const parentItem = currentParentItem?.length > 0 && currentParentItem[0]
    const currentItemChildren = parentItem?.children || [];

    const _onChangeParent = (item: any) => {
        
        onChange(currentItemChildren[0]?.path)

    }

    const _onChangeChild = (item: any) => {

        onChange(item?.path)

    }

    const dataToMap = hovered ? hoveredMenu?.children : currentItemChildren;
    const title = hovered ? hoveredMenu?.title : parentItem?.title;

    return (
        <div 
            onMouseLeave={(e) => {
                if(hovered)
                {
                    setHovered(false)
                    setHoveredMenu(initialHoverMenu)
                    setHoveredIndex(-1)
                }
            }}
            className='sidebar'
        >
            <Stack p={2} gap={2} w={1} bgColor={'bg-white'} borderEnd={1} mh={100} >

                {
                    data?.map((item: any, index: number) => {

                        const { icon, title, active } = item

                        return (
                            <Stack
                                onMouseOver={(e) => {
                                    setHovered(true)
                                    setHoveredMenu(item)
                                    setHoveredIndex(index)
                                }}
                                p={1}
                            >

                                {
                                    hoveredIndex === index && <SidebarArrow/>
                                }
                                
                                {
                                    typeof title === 'string' ?
                                    <IconButton icon={icon} size='medium' titleVariant='caption' active={active} >
                                        {title}
                                    </IconButton>
                                    :
                                    <>
                                        {title}
                                    </>
                                }

                            </Stack>
                        )
                    })
                }

            </Stack>

            <Stack mh={100} >

                <Stack w={5} p={3} borderEnd={1} height={100} shadow={hovered ? 'side-bar-shadow' : ''} br={hovered ? 2 : 0} >

                    <Typography variant={'subtitle1'} >{title}</Typography>

                    <Stack gap={2} mt={2} h={75} p={1} >
                
                        {
                            dataToMap?.map((item: any, index: number) => {

                                const { icon, title, active, component } = item

                                if(component)
                                {
                                    return <>{component}</>
                                }

                                return (
                                    <ListItem active={active} title={title} icon={icon} onClick={() => { _onChangeChild(item) }} />
                                )
                            })
                        }

                    </Stack>

                    {
                        accountUrl &&
                        <Stack h={25} w={100} >
                            <iframe src={accountUrl} />
                        </Stack>
                    }

                </Stack>

            </Stack>

        </div>
    )
};

export default Sidebar;