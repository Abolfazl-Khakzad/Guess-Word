import React from 'react';
import {PureComponent} from 'react';
class PureCompo extends PureComponent {
    constructor(){
        super();
        this.state = {
            name : ""
        }
        this.counter = 0;
    }

    handleChangeName = ()=>{
        this.setState({
            name : document.getElementById("myinput").value
        })
    }
    handleHideName = ()=>{
        
            document.getElementById("myinput").value = " "
        
    }
    render() { 
        return (  
            <>
                <div className='container w-100 h-100'>
                    <div className='form mt-5'>
                        <h4 className='text-center'>GUESS THE WORD</h4>
                        <input type="text" className='form-control' autoComplete='off' id='myinput'/>
                        <span className='d-flex justify-content-center'>
                        <button className='btn btn-warning mt-3 ms-3 ' onClick={this.handleChangeName}>sumbit</button>
                        <button className='btn btn-primary mt-3 ms-3 ' onClick={this.handleHideName}>hide</button>
                        </span>
                        <span className='d-flex justify-content-center mt-3'>
                            {this.counter++}
                        </span>
                    </div>
                </div>            
            </>
        );
    }
}
 
export default PureCompo;