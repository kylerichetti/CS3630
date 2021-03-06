import React from 'react';
import Form from './Form';
import Tile from './Tile';
import bookApi from './services/bookApi.js';

class FormView extends React.Component{

    constructor(props){
        super(props);
        this.action = this.action.bind(this);  
        this.state = {
            books: []
        }      
    }

    action({value}){
        bookApi(value)
            .then(res => {
                this.setState(state => ({
                    books: [res.items[0].volumeInfo, ...state.books]
                }))
            })
    }

    render(){
        return(        
            <div>
                <h1>Form View</h1>
                <Form submitAction={this.action} />

                {
                    this.state.books.map(book => (
                        <Tile
                            title={book.title}
                            img={book.imageLinks.thumbnail}
                         />
                    ))
                }

            </div>
        )
    }
}

export default FormView;