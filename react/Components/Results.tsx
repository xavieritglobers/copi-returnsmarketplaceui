import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DisplayData from './DisplayData'
import { useLazyQuery } from 'react-apollo'
import GET_REPORT from '../GraphQl/getReport.gql'



const Results = (props:any) => {

   
    const {reportFilter,  setReportData} = props

   

    const {initialDate, finalDate, cc, status,orderformid, sellerId, page, offset} = reportFilter
    
    const [getReportData, { data, error }] = useLazyQuery(GET_REPORT, {
        fetchPolicy: 'network-only',
        variables: {
            initialDate:initialDate, 
            finalDate:finalDate, 
            cc:cc,
            status:status,
            orderformid:orderformid, 
            sellerId:sellerId, 
            page:page, 
            offset:offset
        },
      })

      useEffect(() => {
          getReportData()
          
         
          return () => {
              let devoluciones = {devoluciones:[], paginacion:{page: 0, pageSize: 0, total: 0}}
              setReportData( devoluciones)
          }
      }, [reportFilter])

    
      if(error)
      {
        console.log("ERROR",error)
        return (   
        <div className="w-100 pt5"> 
        <div className="w-100"> 
          Algo salió mal. Por favor, intenta de nuevo.
        </div>
        </div>)
      }
        
    
     else {
  
    return (
       <div className="w-100 pt5"> 
       <div className="w-100"> 
         <h2 className="mt0 mb6">Resultados para la búsqueda Realizada:</h2>
        </div>
         <div className="w-100 bb b--gray flex pb5"> 
         <div className="w-50 flex">
             <div>
            <b>Rango de Fechas:&nbsp;</b> {' '}
        </div>
        <div >
             {` ${initialDate.getDate()}/${initialDate.getMonth()+1}/${initialDate.getFullYear()}`} -
            {` ${finalDate.getDate()}/${finalDate.getMonth()+1}/${finalDate.getFullYear()}`}
        </div>
        </div>
        
        <div className="w-30 flex">
         <div>
            <b>Total Registros:&nbsp;</b> {' '}
        </div>
        <div >
                {` ${data ? data?.devoluciones?.paginacion?.total : 0}`}
        </div>
        </div>
       
        </div>
        <div className="w-100 bb b--gray flex pb5 pt5"> 

            <DisplayData data={data}></DisplayData>
        
         </div>
         </div>
    )
     }
}

const mapStateToProps = (state:any) =>{
  
    return {
      reportFilter: state.reportFilter, 
     
    }
}


const mapDispatchToProps = (dispatch:any) =>
{
    return (
    {

        setReportData: (data:any) => 
        {
            dispatch({ type:'SET_REPORT_DATA', payload:{data} })
        }
            

    }
 )

}

export default  connect( mapStateToProps, mapDispatchToProps)(Results)
