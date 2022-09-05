import React from 'react';
import { useParams } from "react-router-dom";

const InventoryItemDetail = () => {
    let params = useParams();
    console.log(params)
    return (
        <div>
            <p>inventory item detail</p>
        </div>
    );
};

export default InventoryItemDetail;