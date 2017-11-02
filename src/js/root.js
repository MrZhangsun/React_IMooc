import React from "react";
import ReactDOM from "react-dom";
import PCIndex from "./components/pc_index";
import MediaQuery from "."
class Root extends React.Component{
    render(){
        return(
            <div>
                <PCIndex/>
            </div>
        );
    };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));