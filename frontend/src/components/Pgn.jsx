import React, { Component } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


export default class Pgn extends Component {
    

    getItem=(num)=>{        
        let url = this.props.url 
        var n = url.search("&page=");

        if(n===-1) {
            url += `&page=${num}`
        }
        else {
            url = url.slice(0, n)
            url +=`&page=${num}`
        }        
        console.log('Pgn')
        console.log(url)
        this.props.getItem(url)
    }
    
    

    render() {
        const items = [];
        let i;
        for (i = 1; i <= this.props.count; i++) {
            items.push(i)
        }
        return (
        <Pagination aria-label="Page navigation example">            
            {items.map(item => (
                <PaginationItem key={item}>
                    <PaginationLink onClick={()=>this.getItem(item)}>
                        {item}
                    </PaginationLink>
                </PaginationItem>)
            )}            
        </Pagination>
        )
    }
}







    

   