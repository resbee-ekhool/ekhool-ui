import React, { FC } from 'react';
import '../../scss/styles.scss'
interface StackProps extends React.HTMLAttributes<HTMLDivElement> {

    children: any,
    shadow?: number | string,
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
    borderEnd?: number | string,
    ml?: number | string,
    position?: 'absolute' | 'relative' | undefined,
    mt?: number | string,
    br?: number

}

const Stack:FC<StackProps> = ({ children, shadow, p, padding, gap, allCenter, w, width, cursor, direction = 'column', h, height, bgColor, mh, borderEnd, ml, position, mt, br, className = "", ...props }) => {
    return (
        <div 
            className={`stack col ${gap ? `gap-${gap}` : ''} ${w || width ? `w-${w || width}` : ''} ${shadow ? `shadow-${shadow}` : ''} ${p || padding ? `p-${padding || p}` : ''} ${className} ${allCenter ? 'all-center' : ''} ${cursor ? cursor : ''} ${direction ? direction : ''} ${h || height ? `h-${h || height}` : ''} ${bgColor ? bgColor : ''} ${mh ? `mh-${mh}` : ''} ${shadow ? shadow : ''} ${borderEnd ? `border-end-${borderEnd}` : ''} ${ml ? `ml-${ml}` : ''} ${position ? position : ''} ${mt ? `mt-${mt}` : ''} ${br ? `br-${br}` : ''}`}
            {...props}
        >
            {children}
        </div>
    )
};

export default Stack;