import React, { useEffect, useState } from 'react'
import { Card, Divider  } from 'vtex.styleguide'
import Results from './Results'
import UserForm from './UserForm'
import store from '../Redux/store'
import { Provider } from 'react-redux'


const Filter = (props: any) => {

  
    
    return (

      <Provider store={store}>

  <div style={{ padding: '10px', color: '#585959', background: '#fafafa' }}>
  <Card>
    <div className="flex">
         <UserForm></UserForm>
      <div
        style={{ flexGrow: 1 }}
        className="flex items-stretch w-20 justify-center">
        <Divider orientation="vertical" />
      </div>
         <Results ></Results>
    </div>
  </Card>
</div>
     </Provider>
    
    )
}



export default Filter
