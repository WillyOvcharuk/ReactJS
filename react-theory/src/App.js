import React, { Component } from 'react'; 
import './App.css';
import { render } from 'react-dom';
import Car from './Car/Car';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js'
import Counter from './Counter/Counter'

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      // {name: 'Audi', year: 2016},
      // {name: 'Mazda', year: 2013},
    ],
    pageTitle: 'React Components'
  }

  onChangeName = (name, index) => {
    //console.log(name, index);
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  handleInput = (event) => {
    // console.log('handleInput');
    // console.log(event.target.value);
    this.setState({
      pageTitle: event.target.value
    })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1);

    this.setState({cars})
  }

  
  render() {
    console.log('render')

    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars

    return (
      <div style={divStyle}>
          <h1>{this.state.pageTitle}</h1>
          
          <Counter />

          <br />

          {/* <input type="text" onChange={this.handleInput}/> */}

          <button 
            style={{marginTop: '20px'}}
            onClick={this.toggleCarsHandler}
          >Toggle cars</button>

          { this.state.showCars
              ?this.state.cars.map((car, index) => {
                return (
                  //<ErrorBoundary>
                    <Car
                      key={index} 
                      name={car.name}
                      year={car.year}
                      onDelete={this.deleteHandler.bind(this, index)}
                      onChangeName={event => this.onChangeName(event.target.value, index)}
                    />
                  //</ErrorBoundary>
                )
              })
            : null 
          }

          {/* <Car 
            name={cars[0].name} 
            year={cars[0].year} 
            onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}  
          />
          <Car 
            name={cars[1].name} 
            year={cars[1].year} 
            onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
          />
          <Car 
            name={cars[2].name} 
            year={cars[2].year} 
            onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
          /> */}
            
      </div>
    );
  }
}

export default App;
