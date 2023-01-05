import React, { FC } from 'react';
import '../../scss/styles.scss'

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {

    children: any,
    shadow?: number,
    p?: number,
    padding?: number,
    gap?: number,
    allCenter?: true,
    w?: number,
    width?: number,
    cursor?: 'pointer' | 'not-allowed' | 'progress' | undefined,
    direction?: 'row' | 'column' | 'auto',
    h?: number,
    height?: number,
    bgColor?: any,
    mh?: number | string,

}

const Stack:FC<StackProps> = ({ children, shadow, p, padding, gap, allCenter, w, width, cursor, direction = 'column', h, height, bgColor, mh, ...props }) => {
    return (
        <div 
            className={`stack col gap-${gap} w-${w || width} shadow-${shadow} p-${padding || p} ${allCenter ? 'all-center' : ''} ${cursor} ${direction} h-${h || height} ${bgColor} mh-${mh}`}
            {...props}
        >
            {children}
        </div>
    )
};

export default Stack;