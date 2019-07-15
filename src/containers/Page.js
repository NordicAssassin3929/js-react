import React from 'react';
import { Link } from 'react-router-dom';
import '../css/page.css';

export function Page(props) {
    const { data, handle } = props;

    const list = data
        .map(item => {
            return <div className="page-footer" key={item.id}>
                <div className="grid-item">
                    <img src="data:image/jpeg;base64,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" ></img>
                    <div className="info">
                        Departs At: {item.flys_at} <br />
                        Name: {item.name} <br />
                        Price: {item.current_price} <br />
                    </div>
                </div>
            </div>
        })

    return (
        <div className="container">
            <div className="page-header">
                <Link to='/login'><button id="login">Login</button></Link>
                <Link to='/register'><button id="register">Register</button></Link>
            </div>
            <div className="page-main">
                <div className="best-flights">
                    <p className="find">Find best flights for you and your friends!</p>
                </div>
                <div className="search-item">
                    <select id="myList">
                        <option value="1">one</option>
                        <option value="2">two</option>
                        <option value="3">three</option>
                        <option value="4">four</option>
                    </select>
                </div>
                <div className="search-item"><label>Amsterdam</label></div>
                <div className="search-item"><select id="myList">
                    <option value="1">one</option>
                    <option value="2">two</option>
                    <option value="3">three</option>
                    <option value="4">four</option>
                </select></div>
                <div className="search-item">
                    <button>Search</button>
                </div>
                <input type="text"
                    onChange={handle}
                    placeholder="Filter by Flight Name OR by Flight Price"
                /><br />
            </div>
            {list}
        </div>
    );
}