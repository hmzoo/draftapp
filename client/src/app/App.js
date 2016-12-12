import React, {Component} from 'react';

import ItemList from './items/ItemListContainer'

class App extends Component {

    render() {
        return (
            <div >
              ITEMLISTS
              <ItemList />
            </div>
        );
    }
}

export default App;
