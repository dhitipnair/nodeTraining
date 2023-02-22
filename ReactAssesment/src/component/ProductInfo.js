import React, { Component } from 'react'
import Product from './Product'
import {} from './product.css';


export class ProductInfo extends Component {
  products = [
    {
        "title": "Apple",
        "type": "Fruits",
        "description": "Fresh Apples available",
        "url": "https://www.wallpaperflare.com/static/947/293/305/pple-leaves-tail-slice-wallpaper.jpg",
        "price": "Rs.128",
        "rating": 4
    }, 
    {
        "title": "Dragon Fruit",
        "type": "Fruit",
        "description": "Sweet fresh Dragon Fruit ",
        "url": "https://th.bing.com/th/id/R.5e1b599c1d67acd55b5658a5a587a1d5?rik=mi6I%2bWfuDCyflQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-jZB9heGJ58U%2fUIceYs7j22I%2fAAAAAAAAKL0%2fsxy4GDHRE5w%2fs1600%2fIMG_0249.JPG&ehk=HVsZnfzZzBQew4bU8C4XnIDVu8gl4%2fp2VHEX%2fXYo5Qo%3d&risl=&pid=ImgRaw&r=0",
        "price": "Rs.290.45",
        "rating": 5
    }, 
    {
        "title": "Brocoli",
        "type": "Fruit",
        "description": "Fresh brocoli available",
        "url": "https://th.bing.com/th/id/R.60331a2e67ae8eadeeba0cd68363d114?rik=ZwcO9IoH6suCyw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-jWeRRnyX-VE%2fWQX674gHsLI%2fAAAAAAAABkU%2ftAoB82mDfY0oRe9RU0t4KMUrT9wL8s74ACK4B%2fs1600%2fbroccoli.jpg&ehk=g7eLMymMcibpJDqh%2fxj1tJWeld3lGdv4LAg76SPTrkM%3d&risl=&pid=ImgRaw&r=0",
        "price": "Rs.90",
        "rating": 3.5
    }, 
    {
        "title": "Maggie",
        "type": "Instant Food",
        "description": "Maggie available",
        "url": "https://n2.sdlcdn.com/imgs/d/j/h/SnapdealRadio1-316fa.jpg",
        "price": "Rs.190",
        "rating": 4.5
    }
  ]
  constructor()
  {
      super();
      this.state = {
          products: this.products
      }
  }
  render() {
    return (
        <div>
        
        {this.state.products.map((element)=>{
             return <div className='features' key={element.price}>
             <Product  title={element.title} price={element.price} description={element.description} imageUrl={element.url}/> 
         </div>
        })}
            
        </div>
     
    )
  }
}

export default ProductInfo