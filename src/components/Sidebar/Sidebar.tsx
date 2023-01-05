import React, { FC } from 'react';
import IconButton from '../IconButton/IconButton';
import ListItem from '../ListItem/ListItem';
import Stack from '../Stack/Stack';
import Typography from '../Typography/Typography';

interface SideBarPorps {

    data: any,
    active: any,
    onChange: Function

}

const Sidebar:FC<SideBarPorps> = ({ data, active, onChange }) => {

    if(!Array.isArray(data))
    {
        throw new Error("Error: Please check the data")
    }

    if(!Array.isArray(active))
    {
        throw new Error("Error: Please check the data")
    }

    if(active?.length < 2)
    {
        throw new Error("Error: Please check the data")
    }

    const _onChangeParent = (index: number) => {

        onChange([index, 0, 0])

    }

    const _onChangeChild = (index: number) => {

        onChange([active[0], index, 0])

    }

    return (
        <Stack direction={'row'} >
            <Stack p={2} gap={1} w={1} bgColor={'bg-white'} >

                {
                    data?.map((item: any, index: number) => {

                        const { icon, title } = item

                        return (
                            <Stack onClick={() => { _onChangeParent(index) }} >
                                <IconButton icon={icon} size='medium' titleVariant='caption' active={index === active[0]} >
                                    {title}
                                </IconButton>
                            </Stack>
                        )
                    })
                }

            </Stack>

            <Stack
                w={5}
                gap={2}
                h={100}
                mh={100}
            >

                {
                    data[active[0]]?.children?.map((item: any, index: number) => {

                        const { icon, title } = item

                        return (
                            <ListItem active={index === active[1]} title={title} icon={icon} onClick={() => { _onChangeChild(index) }} />
                        )
                    })
                }

            </Stack>

        </Stack>
    )
};

export default Sidebar;