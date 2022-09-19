import {PureComponent} from 'react';
import PureCompo from './PureComponent';


class ParentCompo extends PureComponent {
    render() { 
        return (  
            <PureCompo/>
        );
    }
}
 
export default ParentCompo;