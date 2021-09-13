import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux';
import ReportTable from './ReportTable'

const DisplayData = (props:any) => {


    const {data, setReportData} = props
    const devoluciones = data?.devoluciones.devoluciones

  
 
  let itemsForSet = new Array();
  for(var i= 0;i<devoluciones?.length;i++)
  {

 

    let dev = devoluciones[i]

    

    let fecha = dev.fechacreado.substring(0,10).split("-")
    let item = {

        orderformid:dev.orderformid,
        fcreacion:`${fecha[1]}/${fecha[2]}/${fecha[0]}`,
        seller:dev.seller.name,
        sellerId:dev.seller.id,
        clientname: dev.cliente.name,
        clientId: dev.cliente.cedula,
        clientaddress:`${dev.cliente.address}, ${dev.cliente.city}`,
        status: dev.status,
        motivo:dev.motivo,
        totaldevolucion:`${Intl.NumberFormat('en-US', { style: 'currency', currency:'usd' }).format(dev.totaldevolucion)}`,
        totalprods:dev.totalprods,
        documentid:dev.documentid
    }
     itemsForSet.push(item)
     
  }

  /*SORT ITEMS BY ID ASC*/ 
  itemsForSet.slice().sort((a:any,b:any)=>{ return a.fcreacion < b.fcreacion ? -1 : a.fcreacion > b.fcreacion ? 1 : 0})
  
  //let [items,setItems] = useState( itemsForSet)

 

  const reportData={
    devoluciones:itemsForSet,
    paginacion:data?.devoluciones.paginacion
    }

   
    setReportData(reportData)
    

  
  
     return (


        <div className="fl w-100 pt5">
                    <ReportTable></ReportTable>
            </div>
    )
}


const mapDispatchToProps = (dispatch:any) =>
{
    return (
    {

        setReportData: (items:any) => 
        {
            dispatch({ type:'SET_REPORT_DATA', payload:{items} })
        }
            

    }
 )

}


  


export default connect(null, mapDispatchToProps)(DisplayData)
