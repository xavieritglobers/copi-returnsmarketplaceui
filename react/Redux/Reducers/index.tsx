
const initialValue  = {

    reportFilter:{

        initialDate:new Date(),
        finalDate: new Date(),
        cc:'',
        status:'Todos',
        orderformid:''

    },
    reportData:{
        items:[]
    }
}


const reducer = (state=initialValue,action:any) =>
{
  switch(action.type)
  {
    /*Sets the main filter in order to get the report data */ 
    case 'SET_REPORT_FILTER' :
        {
            const newFilter = action.payload
          
            return {...state, reportFilter:newFilter.value}
    
        }
    
    
     
    default:
      return state
  }
  
}

export default reducer