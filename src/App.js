import './App.css';
import {Component} from 'react';
import Blog from './Blog.js';

class Blogs extends Component{
  constructor(props){
    super(props)
    this.state = {
      objArray: [
          {id:1, title:"My First Blog Post", description:"Lorem ipsum dolor sit amet. Qui dolorem nobis aut ipsa ducimus et laudantium praesentium ut repellendus adipisci. Sed nostrum dolore et eveniet voluptates est quia delectus hic ullam aliquid et dicta nihil eos consequuntur eveniet. Est corporis vitae quo atque mollitia et tempora distinctio non maiores!", image: "", favorite:false},
          {id:2, title:"Blog Post 1", description:"Lorem ipsum dolor sit amet. Qui dolorem nobis aut ipsa ducimus et laudantium praesentium ut repellendus adipisci. Sed nostrum dolore et eveniet voluptates est quia delectus hic ullam aliquid et dicta nihil eos consequuntur eveniet. Est corporis vitae quo atque mollitia et tempora distinctio non maiores!", image: "", favorite:false},
          {id:3, title:"Blog Post 2", description:"Lorem ipsum dolor sit amet. Qui dolorem nobis aut ipsa ducimus et laudantium praesentium ut repellendus adipisci. Sed nostrum dolore et eveniet voluptates est quia delectus hic ullam aliquid et dicta nihil eos consequuntur eveniet. Est corporis vitae quo atque mollitia et tempora distinctio non maiores!", image: "", favorite:false},
          {id:4, title:"Blog Post 3", description:"Lorem ipsum dolor sit amet. Qui dolorem nobis aut ipsa ducimus et laudantium praesentium ut repellendus adipisci. Sed nostrum dolore et eveniet voluptates est quia delectus hic ullam aliquid et dicta nihil eos consequuntur eveniet. Est corporis vitae quo atque mollitia et tempora distinctio non maiores!", image: "", favorite:false}
      ],
      favouritesArr: []          
    }    
  }

 
 addToFavourites = (obj) => {                
    this.setState({
      objArray: this.state.objArray.map(item => {
        if (item === obj) {
          item.favorite = !item.favorite;
          return item;
        }else return item;
      })             
    })
    if (obj.favorite !== false) {      
      this.setState({        
        favouritesArr: [...this.state.favouritesArr, obj]
      })
    }else
    {
      let filteredArray = this.state.favouritesArr.filter(item => item !== obj)
      this.setState({
        favouritesArr: filteredArray
      })
    }
  }
  
      render(){   
        return (
          <div className="App">
              <div className='header'>
                <h1>My Blog</h1>
                <h2>All Blogs</h2>
              </div>
              <div className='blog-div'>
              {this.state.objArray.map(item => {
                return(                                                                   
                    <Blog key={item.id} item={item} addToFavourites={this.addToFavourites}/>                                                
              )
              })}
              </div>
              <div>
                <h2>Favourites</h2>
              </div>              
              <div className='blog-div'>
              {this.state.favouritesArr.map(item => {
                return(                                                                     
                    <Blog key={item.id} item={item} addToFavourites={this.addToFavourites}/>                                                 
              )
              })}
              </div>
          </div>
        );
      }
      
      
}





export default Blogs;

