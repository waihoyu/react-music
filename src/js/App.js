import React from 'react'
import { Button } from 'antd';


class App extends React.Component{
    render(){
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>
          </div>
        )
       
    }
}
export default App