import React, { useState } from 'react';
import { useEffectOnce } from 'react-use';
import { Page } from '../containers/Page';

export function Home() {

    const [items, setItems] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [searchString, setString] = useState('');

    useEffectOnce(() => {
        fetch('https://flighter-hw7.herokuapp.com/api/flights', {
            method: 'GET',
            headers: {
                //localStorage
                // already user exists ?
                'Authorization': 'oWVo2GoRWpYcWwhm2TxXsjov',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                setLoaded(true);
                setItems(json.flights);
            });
    });

    const handleChange = (e) => {
        setString(e.target.value);
    }
    
    let _items = items;
    let search = searchString.trim().toLowerCase();

    if (search.length > 0) {
        // if search isn't a number
        if (!search.match(/^-{0,1}\d+$/)) {
            _items = _items.filter(item => {
                localStorage.setItem('Flight name', item.name);
                sessionStorage.setItem('Flight base price', item.base_price);
                return item.name.toLowerCase().match(search);
            });
        }
        else {
            _items = _items.filter(item => {
                return item.current_price > search;
            });
        }
    }

    if (!isLoaded) {
        return <div>They see me Loadin' they Hatin'...</div>;
    }
    else {
        console.log(searchString);
        return (
            _items && handleChange ? <Page data={_items} handle={handleChange} /> : null
        );
    }
}
