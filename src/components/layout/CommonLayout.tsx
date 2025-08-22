// import React from 'react';

import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


interface IProps {
    children: ReactNode;
}


function CommonLayout({ children }: IProps) {

    return (
        <div className="min-h-screen flex flex-col">
            {/* <h1>CommonLayout component</h1> */}
            <div>
                <Navbar />
                {children}
                <Footer />
                </div>
        </div>
    );
}

export default CommonLayout;