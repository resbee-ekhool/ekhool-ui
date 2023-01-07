import React, { FC } from 'react';
import Button from '../Button/Button';
import '../../scss/styles.scss'

interface CollapsePorps extends React.HTMLAttributes<HTMLDivElement> {

    children?: any,

    component?: any

}

class Collapse extends React.Component<CollapsePorps> {

    state = {
        exapanded: false
    }

    render(): React.ReactNode {

        const { exapanded } = this.state;
        const { children, className, component, ...props } = this.props;

        return (
            <div className={className} {...props} >
            
                <div onClick={() => { this.setState({ exapanded: !exapanded }) }} >
                    {
                        component ? 
                        (
                            <>{component}</> 
                        )
                        : 
                        (
                            <Button>Collapse</Button>
                        )
                    }
                </div>

                {
                    exapanded &&
                    <div className='collapse-content column gap-2' >
                        {children}
                    </div>
                }

            </div>
        )
    }
}

export default Collapse;