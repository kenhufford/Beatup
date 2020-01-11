import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            query: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.deleteQuery = this.deleteQuery.bind(this)
    }

    deleteQuery(e){
        this.setState({
            query: ""
        })
    }

    update(e) {
        this.setState({
            query: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        setTimeout((() => {
            if (this.state.query === "") {
                this.props.history.push("/groups");
              } else {
                this.props.history.push(`/search/?${this.state.query}`);
              }}), 300);
    }

    render(){
        return(
            <div className="search-bar-div">
                <form className="search-bar-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={this.update} 
                    placeholder="Find your fight club" className="search-bar-input"/>
                    <i  onClick={this.deleteQuery} className="fas fa-backspace"></i>
                </form>
                <button className="search-bar-button" onClick={this.handleSubmit}>Search</button>
            </div>
        )
    }


}


export default SearchBar

