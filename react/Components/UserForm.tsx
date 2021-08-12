import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Card, Divider, DatePicker,Input, Dropdown, Button   } from 'vtex.styleguide'



const UserForm = (props: any) => {

  
    const {setReportFilter}=props
    const initialMessages = {

        title:'Filtros:',
        message:'Por favor, seleccione los filtros para el reporte que quiere crear:',
        color:'gray'
    }

    const today = new Date()
    
    const initialFilter = {
        
        initialDate:today,
        finalDate: today,
        cc:'',
        status:'Todos',
        orderformid:''
    }

    
    const [messages,setMessages] = useState(initialMessages)
    const [filter,setFilter] = useState(initialFilter)

    const statusOptions = [
        { value: 'Todos', label: 'Todos' },
        { value: 'En Proceso', label: 'En Proceso' },
        { value: 'Rechazado', label: 'Rechazado' },
        { value: 'Finalizado', label: 'Finalizado' },
        { value: 'Confirmado', label: 'Confirmado' },

    ]
    
    const setFinalFilter = useCallback(
        () => 
        {
            setReportFilter(filter)
            
            
        },
        
        [filter],
    )
    
 
    return (



      <div className="w-100">
        <h2 className="mt0 mb6"><span className={messages.color} >{messages.title}</span></h2>
        <p className="f6 ma0">
            <span className={messages.color} >{messages.message}</span>
        </p>
        <br/>
        <Divider orientation="horizontal" />
        <div className="reports-form-row">
        <div className="w-50">
            <div className="w-90">
        <DatePicker
      label="Fecha Inicial de Creación de la Solicitud :"
      size="small"
      value={filter.initialDate}
      onChange={
        (date: Date)=> 
        {
            let iniDate = date.getTime()
            let finDate = filter.finalDate.getTime()
            let diff = (finDate-iniDate)/(1000*60*60*24)
 
           
         if(diff>180)
         {
             setMessages({
                 title:'¡No podemos cambiar la fecha inicial para la consulta!',
                 message:'La fecha final no puede superar en más de 180 días a la fecha inicial.',
                 color:'red'
             })
         }
         else
         {
        
            setFilter({  initialDate:date,
            finalDate: filter.finalDate,
            cc:filter.cc,
            status:filter.status,
            orderformid:filter.orderformid })
            }

            setMessages(
                initialMessages
            )
        }
    
    }
      locale="en-US"
        /></div></div>
    <div className="w-50 ">
    <div className="w-90">
       <DatePicker
      label="Fecha Final de Creación de la Solicitud:"
      size="small"
      value={filter.finalDate}
      onChange={(date: Date)=>
        {
           let iniDate = filter.initialDate.getTime()
           let finDate = date.getTime()
           let diff = (finDate-iniDate)/(1000*60*60*24)
           let today = new Date().getTime();
           let tomorrow = finDate>today ? true : false
          
           
        if(diff>180)
        {
            setMessages({
                title:'¡No podemos cambiar la fecha final para la consulta!',
                message:'La fecha final no puede superar en más de 180 días a la fecha inicial.',
                color:'red'
            })
        }
        else if(tomorrow)
        {
            setMessages({
                title:'¡No podemos cambiar la fecha final para la consulta!',
                message:'La fecha final no puede ser superior al día actual.',
                color:'red'
            })
        }
        else if(diff<=-1)
        {
            setMessages({
                title:'¡No podemos cambiar la fecha final para la consulta!',
                message:'La fecha final no puede ser inferior a la fecha inicial',
                color:'red'
            })
        }
        else
        {
            setMessages(
                initialMessages
            )
            setFilter({  initialDate:filter.initialDate,
            finalDate: date,
            cc:filter.cc,
            status:filter.status,
            orderformid:filter.orderformid })}
        }
        }
      locale="en-US"
    />
    </div>
    </div>
      </div>
      <div className="reports-form-row">
        <div className="w-50">
            <div className="w-90">
            <Input
                
                type="text"
                value={filter.cc}
                onChange={(e: { target: { value: any } }) => 
                    {
                        let regex = /[^0-9]/g;
                        
                        if(!e.target.value.match(regex))
                        {

                            setFilter({ 
                            initialDate:filter.initialDate,
                            finalDate: filter.finalDate,
                            cc:e.target.value ,
                            status:filter.status,
                            orderformid:filter.orderformid })
                            setMessages(
                                initialMessages
                            )
                        }
                        else{
                            setMessages({
                                title:'¡Información Inválida!',
                                message:'La cédula solo puede contener caracteres numéricos',
                                color:'red'
                            })
                        }

                    }
                }
                label="Cédula del Usuario:"
            />
            </div>
        </div>
        <div className="w-50">
            <div className="w-90">
            <Input
                type="text"
                value={filter.orderformid}
                onChange={(e: { target: { value: any } }) =>
                { 
                    let regex = /[^0-9-]/g;
                    
                    if(!e.target.value.match(regex))
                    {


                    setFilter({ 

                    
                    initialDate:filter.initialDate,
                    finalDate: filter.finalDate,
                    cc:filter.cc ,
                    status:filter.status,
                    orderformid:e.target.value })

                    setMessages(
                        initialMessages
                    )
                    }
                
                    else{
                        setMessages({
                            title:'¡Información Inválida!',
                            message:'El ID de la orden solo puede contener caracteres numéricos o guiones',
                            color:'red'
                        })
                    }
                }

                }
                label="Id de la Orden:"
            />
            </div>
        </div>
      </div>

      <div className="reports-form-row">
        <div className="w-50">
            <div className="w-90">
    <Dropdown
      label="Estado:"
      size="small"
      options={statusOptions}
      value={filter.status}
      onChange={(_:number, v:string) => {

        setFilter({ 
    
            initialDate:filter.initialDate,
            finalDate: filter.finalDate,
            cc:filter.cc ,
            status:v,
            orderformid:filter.orderformid })

            setMessages(
                initialMessages
            )
      }}
    />
            </div>
        </div>
        <div className="w-50 flex">
            <div className="w-40">
            
            <Button variation="secondary" onClick={()=>
            {
                     setFilter(initialFilter)
                
            }}>Restablecer Filtros</Button>
            </div>
            <div className="w-40 ml8">
            <Button variation="primary" onClick={()=>
            {
                     setFinalFilter()
                
            }}>Consultar Datos</Button>
            </div>
        </div>
    </div>


      </div>
     
     
    
    
    )
}


const mapDispatchToProps = (dispatch:any) =>
{
    return (
    {

        setReportFilter: (value:any) => 
        {
            dispatch({ type:'SET_REPORT_FILTER', payload:{value} })
        }
            

    }
 )

}

export default connect(null, mapDispatchToProps)(UserForm)
