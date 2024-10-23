import React, { useEffect, useState } from "react";
import Input from "../Input";
import './index.css';
import axios from 'axios'

const DetailsForm=()=>{

    const [item,setItem]=useState(false);
    const [supplier,setSupplier]=useState(false);

    const [itemDetails,setItemDetails]=useState({});
    const [supplierDetails,setsupplierDetails]=useState({});





    const Checkfields=[
        {
            type:'checkbox',
            name:'item',
            value:item,
            label:'item',
        },
        {
            type:'checkbox',
            name:'supplier',
            value:supplier,
            label:'supplier'
        }
    ]

    const fields=[
        {
            type:'text',
            name:'itemname',
            value:itemDetails.itemName,
            label:'Item Name',
            placeholder:'Enter item Name*',
            maxLength:255,
        },
        {
            type:'number',
            name:'quantity',
            value:itemDetails.quantity,
            label:'Quantity',
            placeholder:'Enter quantity',
            maxLength:4,
        },
        {
            type:'number',
            name:'unitprice',
            value:itemDetails.unitprice,
            label:'Unit Price',
            placeholder:'Enter unit price',
        },
        {
            type:'date',
            name:'submission',
            value:itemDetails.date,
            label:'Date of Submission',
            placeholder:'Select date',
        },


    ]
    const Supplierfields=[
        {
            type:'text',
            name:'suppliername',
            value:supplierDetails.suppliername,
            label:'Supplier Name',
            placeholder:'Enter supplier Name*',
        },
        {
            type:'text',
            name:'Companyname',
            value:supplierDetails.company,
            label:'Company Name',
            placeholder:'Enter company name',
        },
        {
            type:'text',
            name:'country',
            value:supplierDetails.country,
            label:'Country',
            placeholder:'Enter Country ',
        },
        {
            type:'text',
            name:'state',
            value:supplierDetails.state,
            label:'State',
            placeholder:'Select State',
        },
        {
            type:'text',
            name:'city',
            value:supplierDetails.city,
            label:'City',
            placeholder:'Select City',
        },
        {
            type:'email',
            name:'email',
            value:supplierDetails.email,
            label:'Email Address',
            placeholder:'Enter email address',
        },


    ]

    const inputValue=(value,name)=>{
        console.log(value)


        if(name==='item')
        {
            setItem(!item);
        }
        else if(name==='supplier')
        {
            setSupplier(!supplier)
        }
          if(name==="itemname") {
             setItemDetails({...itemDetails,
                itemName:value,
             })
         }
         else if(name==='quantity')
         {
            setItemDetails({...itemDetails,
                quantity:value,
             })
         }
         else if(name==='unitprice' )
         {
            
                setItemDetails({...itemDetails,
                    unitprice:value,
                 })
             
         }
         else if(name==='submission')
         {
            
                setItemDetails({...itemDetails,
                    date:value,
                 })
             
         }

         if(name==='suppliername')
         {
             setsupplierDetails({...supplierDetails,suppliername:value})
         }
         else if(name==='Companyname')
         {
            setsupplierDetails({...supplierDetails,Companyname:value})

         }
         else if(name==='country')
         {
            setsupplierDetails({...supplierDetails,country:value})

         }
         else if(name==='state')
         {
            setsupplierDetails({...supplierDetails,state:value})

         }
         else if(name==='city')
         {
            setsupplierDetails({...supplierDetails,city:value})

         }
         else if(name==='email')
         {
            setsupplierDetails({...supplierDetails,email:value})

         }

    }

    useEffect(()=>{
       console.log("payload",itemDetails)
    },[itemDetails])

    const saveChanges=()=>{
       

        axios.post('https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers',{
            itemDetails:{
            itemName:itemDetails.itemName,
            quantity:Number(itemDetails.quantity),
            unitPrice:Number(itemDetails.unitprice),
            currency:"$",
            submissionDate:itemDetails.date,
            },
            supplier:{
            supplierName:supplierDetails.suppliername,
            companyName:supplierDetails.Companyname,
            email:supplierDetails.email,
            phoneCode:"+91",
            phoneNumber:7007402687,
            countryId:"1",
            stateId:"1",
            cityId:"1"
            }
           }
           ).then(()=>{setItemDetails({});setsupplierDetails({})})


    }
    return(
        <div className="checkbox">
            <Input fields={Checkfields} inputValue={inputValue}/>

           { item &&<div className="itemDetails">
                 <span className="itemHead">Item Details</span>
                 <div className="itemDetailsForm">
                    <Input fields={fields} inputValue={inputValue}/>
                 </div>
            </div>
}
            { supplier &&<div className="itemDetails">
                 <span className="itemHead">Supplier Details</span>
                 <div className="itemDetailsForm">
                    <Input fields={Supplierfields} inputValue={inputValue}/>
                 </div>
            </div>



}
{(item || supplier) &&<div className="submission">
                <h1 className="submitHead">Submitted Data</h1>
                <span className="submitedtext">The data submitted by users will be displayed below</span>
                <button className="buttonContainer" onClick={saveChanges}>Save Changes</button>
                </div>}
        </div>
    )
}

export default DetailsForm