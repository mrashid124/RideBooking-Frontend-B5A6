// import React from 'react';

import type { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";


interface IProps {
    children: ReactNode;
}


function CommonLayout({ children }: IProps) {

    return (
        <div className="min-h-screen flex flex-col">
            {/* <h1>CommonLayout component</h1> */}

                <Navbar />
                <div className="grow-1">
                    {children}
                </div>
                <Footer />

        </div>
    );
}

export default CommonLayout;