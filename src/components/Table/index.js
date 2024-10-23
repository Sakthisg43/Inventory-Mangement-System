import React, { useEffect, useState } from "react";
import axios from 'axios'

const Table=()=>{

    const [data,setData]=useState();
    useEffect(()=>{
     axios.get('https://apis-technical-test.conqt.com/Api/Item-Supplier/Get-All-Items').then((response)=>setData(response.data.data.items))
    },[])

    useEffect(()=>{
       console.log(data)
    },[data])




    return(
        <table border={1}>
            <thead>
                <th>Supplier</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>City, Country</th>
                <th>Email</th>
                <th>Phone Number</th>

            </thead>
            <tbody>
{data?.map((value)=>(
    <tr>
    <td>{value.Supplier.supplierName}</td>
    <td>{value.itemName}</td>
    <td>{value.quantity}</td>
    <td>{value.unitPrice}</td>
    <td>{value.Supplier.cityName}</td>
    <td>{value.Supplier.email}</td>
    <td>{value.Supplier.phoneNumber}</td>
    </tr>

))}
            </tbody>
        </table>
    )
}

export default Table;