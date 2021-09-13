    import React, { useEffect } from 'react'
    import "../../react/styles.global.css"
    import { useLazyQuery } from 'react-apollo'
    import GET_HISTORICO from '../GraphQl/getHistorico.gql'
    import { Table, Spinner } from 'vtex.styleguide'
    import "../../react/styles.global.css"


    const DisplayDetails = (props:any) => {


       const {devolution} = props
     
      
      
       const [getHistoricData, { data, error, loading }] = useLazyQuery(GET_HISTORICO, {
        fetchPolicy: 'network-only',
        variables: {
          id:devolution.documentid
        },
      })

      useEffect(() => {
        getHistoricData()
        
    }, [])


    if(error)
    {
        console.log(error)
        return ( <div className="w-100 pt5"> 
        <div className="w-100">
            ¡Algo salió mal. Cierra esta ventana e intenta de nuevo!
            </div></div>)
    }
    else if(loading)
    {
        return (<Spinner></Spinner>)
    }
    else{
       


        const tableSchema = {
            properties: {
                date: {
                title: 'Registro:',
                // default is 200px
                width: 100,
                cellRenderer: (data:any) => {
                   
                    let fecha = data.cellData.substring(0,10).split("-")

                    return `${fecha[1]}/${fecha[2]}/${fecha[0]}`
                    

                },

                
                
              },
              state: {
                title: 'Estado',
                width:100
              },
              comments: {
                title: 'Comentarios',
                width:330, 
                truncate:false,
                cellRenderer: (data:any) => (
                   
                    <div className="details-comments"> {data.cellData}</div>
                    

                ),
              },
              attachements: {
                title: 'Datos Adjuntos',
                width:150
              }
            }
        
        }
       
        
        return (
            <div className="w-100 pt5"> 
                <div className="w-100"> 
                    <h4>Devolución # {devolution.documentid}</h4>
                </div>
                <div className="w-100 bb b--gray flex pb2 pt2"> 
                     <div className="w-50 flex">
                        <div className="w-50 flex">
                           <b> Fecha de Creación:</b>
                        </div>
                     <div className="w-50 flex">
                            {devolution.fcreacion}
                     </div>
                    </div>
                    <div className="w-50 flex">
                        <div className="w-50 flex">
                           <b> Motivo:</b>
                        </div>
                     <div className="w-50 flex">
                         {devolution.motivo}
                     </div>
                    </div>
                </div>
                <div className="w-100 bb b--gray flex pb2 pt2"> 
                     <div className="w-50 flex">
                        <div className="w-50 flex">
                          <b>  Estado Actual:</b>
                        </div>
                     <div className="w-50 flex">
                            {devolution.status}
                     </div>
                    </div>
                    <div className="w-50 flex">
                        <div className="w-50 flex">
                            <b>Valor Total:</b>
                        </div>
                     <div className="w-50 flex">
                         {devolution.totaldevolucion}
                     </div>
                    </div>
                </div>
                <div className="w-100 bb b--gray flex pb2 pt2"> 
                     <div className="w-50 flex">
                        <div className="w-50 flex">
                           <b> Cliente Solicitante:</b>
                        </div>
                     <div className="w-50 flex">
                            {devolution.clientname}
                     </div>
                    </div>
                    <div className="w-50 flex">
                        <div className="w-50 flex">
                           <b> Cédula Cliente:</b>
                        </div>
                     <div className="w-50 flex">
                         {devolution.clientId}
                     </div>
                    </div>
                </div>
                <div className="w-100 bb b--gray flex pb2 pt2"> 
                     <div className="w-50 flex">
                        <div className="w-50 flex">
                           <b> Droguista:</b>
                        </div>
                     <div className="w-50 flex">
                            {devolution.seller}
                     </div>
                    </div>
                </div>
               

                <div className="w-100 bb b--gray flex pb2 pt2"> 
                    <h4>Histórico del Registro:</h4>
                </div>
                <div className="w-100 bb b--gray  pb2 pt2"> 
                    <Table
                     fullWidth
                     items={data?.historicoDevoluciones?.historicos}
                     schema={tableSchema} />

                </div>
                

                
            </div>
        )
    }
    }
    
    
    
    export default DisplayDetails
    