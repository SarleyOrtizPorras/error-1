import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getfirestore, doc, getDoc } from 'firebase/firestore';


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const querydb = getfirestore();
        const queryDoc = doc(querydb, 'products', detalleId);
        getDoc(queryDoc)
             .then(res => setData({ id: res.id, ...res.data() }))
    }, [detalleId])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;