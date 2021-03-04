import React from 'react';
import Header from "./header";

const Layout = (props) => {
    return(
        <>
            <Header/>
            <div className="container">
            {props.children}
            </div>
        </>
    )
}

export default Layout;