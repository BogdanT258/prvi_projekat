import './App.css';
import {Component} from 'react';


class Blog extends Component{
    render(){          
        return(
            <div key={this.props.id} className="inner-div">
                <img src="" ></img>
                <div className='favorite'>
                    <h3>{this.props.title}</h3>                        
                    {this.props.favorite === true ?  
                    <button className='buttons' onClick={e => this.props.addToFavourites(this.props)}>&#11088;</button> 
                    : 
                    <button className='buttons' onClick={e => this.props.addToFavourites(this.props)}>&#x2605;</button>
                    }                        
                </div>
                {this.props.description}
            </div>   
        )        
    }
}

export default Blog