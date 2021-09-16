import React from "react";

class FiltroDePreco extends React.Component{
    state = {

    };

    render()
    {
        return(
            <div class = "filtroPreco">
                <input type="number"></input>
                <label>valor mínimo</label>
            </div>
        );
    }
}

export default FiltroDePreco;