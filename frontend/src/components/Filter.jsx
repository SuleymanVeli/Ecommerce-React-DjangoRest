import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/actions/actionProducts'
import axios from 'axios'

const setItemUrl = (items, url) => {
    let write = true;
    let is_write = false;
    let _is_write = false;
    for (var i = 0; i < items.length; i++) {
        if (_is_write) is_write = true
        _is_write = false;
        for (var j = 0; j < items[i].items.length; j++) {
            if (items[i].items[j].select) {
                if (write) url = url + "&features="
                if (is_write) url = url + "|"
                if (_is_write) url = url + ","
                url = url + items[i].items[j].title
                _is_write = true
                is_write = false
                write = false
            }
        }
    }
    return url
}


const Filter = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);

    let { category } = useParams();
    let url = "?category=" + category;
    url = setItemUrl(items, url)
    dispatch(fetchProducts(url))

    let id = 0
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/filter/?category=${category}`)
            .then(response => {
                setItems(
                    response.data.map((d) => {
                        id++
                        return {
                            id: id,
                            title: d.title,
                            select: false,
                            items: d.features.map((i) => {
                                id++
                                return {
                                    id: id,
                                    title: i.title,
                                    select: false
                                }
                            })
                        }
                    })
                )
            })

    }, [id]);

    return (
        <div className='fi-items'>
            {items.map((item) => (
                <div key={item.id} className="fi-item">
                    <div className="fi-title" onClick={() => {                                
                                setItems(
                                    items.map(data => {
                                        if (item.id === data.id) {
                                            data.select = !data.select;
                                        }                                        
                                        return data;
                                    })
                                )
                            }} >
                        {item.title}
                    </div>

                    <div className="fi-list" style={item.select ? { display: 'block' } : { display: 'none' }} >
                        <div className="fi-wrapper">
                            <ul>{item.items.map((list) => (
                                <li key={list.id}  onClick={() => {                                            
                                            setItems(
                                                items.map(data => {
                                                    data.items.map(dataitem => {
                                                        if (list.id === dataitem.id) {
                                                            dataitem.select = !dataitem.select;
                                                        }
                                                        return dataitem;
                                                    })
                                                    return data;
                                                })
                                            )
                                        }}
                                        style={list.select ? { backgroundColor: '#DD6E42', color:"white" } : {  }}
                                        >
                                    {list.title}                                    
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default Filter;