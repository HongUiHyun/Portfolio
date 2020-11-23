import  React, {Component} from 'react';


class Myname extends Component{
    static defaultProps = {
        name:'React'
    }
    render(){
        return(
            <h1>
                안녕하세요. 제 이름은 {this.props.name}입니다.
            </h1>
        )
    }
}

export default Myname;