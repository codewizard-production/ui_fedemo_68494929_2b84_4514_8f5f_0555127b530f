import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PetCareCenterTiles
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
            
                <Route path="/products/tiles" element={<PetCareCenterTiles {...props} title={'Tiles'} />} />
        </Routes>
    )

};

export default Component;