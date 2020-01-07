import React, { Component } from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'

 class Category extends Component {
    state = {
        categories: []
    }

    fetchCategories=()=>{
        axios.get('http://127.0.0.1:8000/category/')
            .then(response => { 
                this.setState({categories:response.data})
            })
            .catch(error => {  
            })
    }

    componentDidMount() {
        this.fetchCategories()
    }

    render() {
        return (
            <div className='menu-holder' > 
                <nav className='home-nav'>
                    <ul className='nav-list'>
                        {
                        this.state.categories.map(c => <li  key={c.id}  className="nav-list-item"><Link to={`/products/${c.title}`}>{c.title}</Link></li> )
                        }
                    </ul>                    
                </nav>
            </div>
        )
    }
}


export default Category;