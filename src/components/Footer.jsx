import React from "react";
import { Footers } from "./styledComponents";
import { BsSkype, BsFacebook } from 'react-icons/bs';

export default function Footer() {
    return (
        <Footers>
            <div className="pt-2 d-flex justify-content-center text-light">
                <BsSkype className="m-1"/>
                <BsFacebook className="m-1"/>
            </div>
            <div className="px-4 pt-1 d-flex justify-content-center text-light">
                <p>Todos los derechos resevados.</p>
            </div>
        </Footers>
    )
}