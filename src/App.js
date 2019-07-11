import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            searchString: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://flighter-hw7.herokuapp.com/api/flights', {
            method: 'GET',
            headers: {
                'Authorization': 'oWVo2GoRWpYcWwhm2TxXsjov',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.flights
                })
            });
    }

    handleChange() {
        this.setState({
            searchString: this.refs.search.value
        });
    }

    deleteLocalStorage() {
        localStorage.clear();
    }

    deleteSessionStorage() {
        sessionStorage.clear();
    }

    render() {
        const { isLoaded, items, filterText } = this.state;

        let _items = this.state.items;
        let search = this.state.searchString.trim().toLowerCase();

        if (search.length > 0) {
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

        let style = {
            border: '1px solid blue',
            width: "220px"
        };

        console.log(_items);
        const list = _items
            .map(item => {
                return <li key={item.id}>
                    Name: {item.name} <br />
                    Price: {item.current_price} <br />
                    Number of seats: {item.no_of_seats} <br />
                    Base price: {item.base_price} <br />
                    Flys At: {item.flys_at} <br />
                    Lands At: {item.lands_at} <br />
                    Number of booked seats: {item.no_of_booked_seats} <br />
                    Company Name: {item.company_name} <br />
                </li>
            })
        if (!isLoaded) {
            return <div>They see me Loadin' they Hatin'...</div>;
        }
        else {
            return (
                <div className="App">
                    <input type="text"
                        style={style}
                        value={this.state.searchString}
                        ref="search"
                        onChange={this.handleChange}
                        placeholder="Filter by Flight Name OR by Flight Price"
                    /><br />
                    <button
                        onClick={this.deleteLocalStorage}>
                        Delete Local Storage</button><br />
                    <button
                        onClick={this.deleteSessionStorage}>
                        Delete Session Storage</button><br />
                    <ul>
                        {list}
                    </ul>
                </div>
            );
        }
    }
}

export default App;