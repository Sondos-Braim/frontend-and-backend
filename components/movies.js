import React, { Component } from "react";

class Movies extends Component {

    state={
        movies:[]
    }

    loadBooks = () =>{
        fetch('http://127.0.0.1:8000/api/v1/movies/',{
            method:'GET',
            headers:{'Content-Type':'application/json',
                Authorization :`Token  ${this.props.token}`        
        },
            body:JSON.stringify(this.state.credentials)
        })
        .then(data =>data.json())
        .then(
            data => {
               this.setState({movies:data})

            }
        ).catch(error => console.error("here",error))


    }
    
    render() {
        console.log(this.state.movies)
        return (
            <div>
                    <h1>Movies</h1>
                    {this.state.movies.map(movie=>{
                        return <h3 key={movie.id}>{movie.title}</h3>
                    })}
                    <button onClick={this.loadBooks} >Load movies</button>
            </div>
        );
    }
}

export default Movies;