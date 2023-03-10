import React, { FC } from 'react';
import Button from '../Button/Button';
import '../../scss/styles.scss'

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {

    children?: any,

    component?: any | null | undefined,

    align?: 'left' | 'right' | 'center' | undefined | null,

    id: string

}

const Menu:FC<MenuProps> = ({ children, component, className, align = 'left', id, ...props }) => {

    function openMenu() {
        if(typeof document == 'object')
        {
            document?.getElementById(id).classList.toggle("show");
        }
    }
      
    if(typeof window === 'object')
    {
        window.onclick = function(event) {
            if (!(event.target as HTMLInputElement)?.matches('.ek-drop-down')) {
                var dropdowns = document.getElementsByClassName("menu-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                
                  if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                  }
                }
            }
        }
    }

    return (
        <div className={`menu ${className}`}>

            <div onClick={() => { openMenu() }} >
                <div className='fill ek-drop-down pointer' />
                {
                    component ? 
                    <>{component}</>
                    :
                    <Button>Menu</Button>
                }
            </div>

            <div id={id} className={`menu-content shadow-9 br-2 ${id}`} style={{ left: align === 'left' ? 0 : undefined, right: align === 'right' ? 0 : undefined }} >
                {children}
            </div>
        </div>

    )
};

export default Menu;