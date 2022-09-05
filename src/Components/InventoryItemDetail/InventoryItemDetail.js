import React from 'react';
import { useParams } from "react-router-dom";

const InventoryItemDetail = () => {
    let params = useParams();
    params = params.itemId
    console.log(params)
    return (
        <div>
            <p>inventory item detail {params}</p>
        </div>
    );
};

export default InventoryItemDetail;