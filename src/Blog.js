import './App.css';
import {Component} from 'react';


class Blog extends Component{    
    constructor(props){
        super(props)    
    }
    render(){                        
        return(            
            <div className="inner-div">
                <img src="" ></img>
                <div className='favorite'>
                    <h3>{this.props.item.title}</h3>                        
                    {this.props.item.favorite === true ?  
                    <button className='buttons' onClick={e => this.props.addToFavourites(this.props.item)}>&#11088;</button> 
                    : 
                    <button className='buttons' onClick={e => this.props.addToFavourites(this.props.item)}>&#x2605;</button>
                    }                        
                </div>
                {this.props.item.description}
            </div>               
        )        
    }
}

export default Blog