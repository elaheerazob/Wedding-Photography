import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>Copyright {'\u00A9'} {year} </small></p>
        </footer>
    );
};

export default Footer;