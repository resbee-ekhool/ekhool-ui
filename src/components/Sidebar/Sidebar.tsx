import React, { FC, useState } from 'react';
import Button from '../Button/Button';
import Collapse from '../Collapse/Collapse';
import IconButton from '../IconButton/IconButton';
import ListItem from '../ListItem/ListItem';
import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';
import Stack from '../Stack/Stack';
import Typography from '../Typography/Typography';
import '../../scss/styles.scss'
interface SideBarPorps extends React.HTMLAttributes<HTMLDivElement> {

    data: any,
    onChange: any,
    accountUrl?: string,
    expanded?: boolean,
    position?: 'fixed' | 'relative' | 'absolute' | 'sticky' | 'inherit' | null | undefined

}

const initialHoverMenu: any = { children: [], title: '' }

const SidebarArrow= () => {
    return (
        <div
            style={{
                borderRadius: '0 3px 0 0',
                left: 65,
                // borderTop: 'dashed 1px #919EAB',
                // borderRight: 'dashed 1px #919EAB',
                height: 12,
                width: 12,
                position: 'absolute',
                transform: 'rotate(-135deg)',
                backgroundColor: '#fff',
                marginTop: 12,
                boxShadow: '2px -2px 2px 0px rgb(0 0 0 / 20%)',
            }}
        />
    )
}

class Sidebar extends React.Component<SideBarPorps> {

    state = {
        hovered: false,
        hoveredMenu: initialHoverMenu,
        hoveredIndex: -1,
        sidebarOpen: this.props?.expanded || false
    }

    _onChangeChild = (item: any) => {

        this.props.onChange(item?.path)

    }

    componentDidUpdate(prevProps: Readonly<SideBarPorps>, prevState: Readonly<{}>, snapshot?: any): void {
        if(!this.state.hovered)
        {
            if(this.props.expanded != this.state.sidebarOpen)
            {
                this.setState({
                    sidebarOpen: this.props.expanded
                })
            }
        }
    }

    render(): React.ReactNode {

        let { hovered, hoveredMenu, hoveredIndex, sidebarOpen } = this.state;
        const { data, accountUrl, expanded, position = 'fixed' } = this.props

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

        const dataToMap = hovered ? hoveredMenu?.children : currentItemChildren;
        const title = hovered ? hoveredMenu?.title : parentItem?.title;

        return (
            <div 
                onMouseLeave={(e) => {
                    if(hovered)
                    {
                        this.setState({
                            hovered: false,
                            hoveredMenu: initialHoverMenu,
                            hoveredIndex: -1,
                            sidebarOpen: expanded
                        })
                    }
                }}
                className={`sidebar ${position}`}
                {...this.props}
            >
                <Stack p={2} gap={2} borderEnd={1} mh={100} className={'sidebar-container'} >

                    {
                        data?.map((item: any, index: number) => {

                            const { icon, title, active } = item

                            return (
                                <Stack
                                    onMouseOver={(e) => {
                                        this.setState({
                                            hovered: true,
                                            hoveredMenu: item,
                                            hoveredIndex: index,
                                            sidebarOpen: true
                                        })
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

                {
                    sidebarOpen &&
                    <Stack mh={100} className={'sidebar-data'} >

                        <Stack w={100} p={3} borderEnd={1} height={100} shadow={hovered ? 'side-bar-shadow' : ''} br={hovered ? 2 : 0} bgColor={this.props.style.backgroundColor} >

                            <Typography variant={'subtitle1'} >{title}</Typography>

                            <Stack gap={2} mt={2} h={75} p={1} >

                                {
                                    dataToMap?.map((item: any, index: number) => {

                                        const { icon, title, active, component, children } = item

                                        if(component)
                                        {
                                            return <>{component}</>
                                        }

                                        if(Array.isArray(children))
                                        {
                                            return (
                                                <Collapse
                                                    component={
                                                        <ListItem active={active} title={title} icon={icon} onClick={() => { this._onChangeChild(item) }} endIcon={'expand_more'} />
                                                    }
                                                >
                                                    {
                                                        children?.map((i, ind) => {
                                                            return (
                                                                <ListItem active={i.active} title={i.title} icon={i.icon} onClick={() => { this._onChangeChild(i) }} />
                                                            )
                                                        })
                                                    }
                                                </Collapse>
                                            )
                                        }

                                        return (
                                            <ListItem active={active} title={title} icon={icon} onClick={() => { this._onChangeChild(item) }} />
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
                }

            </div>
        )
    }
}

export default Sidebar;