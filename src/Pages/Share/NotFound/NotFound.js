import React from 'react';
import Notfound from '../../../Image/NotFound.png'

const NotFound = () => {
    return (
        <div>
            <img style={{height : '650px'}} className='w-100' src={Notfound} alt="" />
        </div>
    );
};

export default NotFound;