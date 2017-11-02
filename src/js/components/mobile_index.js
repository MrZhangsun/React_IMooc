import React from 'react';
import MobileHeader from "./mobile_header";
import MobileFooter from "./moblie_footer";

export default class MoblieIndex extends React.Component{
    render(){
        return(
            <div>
                <MobileHeader/>
                <MobileFooter/>
            </div>
        );
    };
}