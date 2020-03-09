import React from 'react'
import classes from './Car.css'
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass'

/*
    як можна поетапно спростити код
*/
// function car() {
//     return (
//         <h2>This is car component</h2>
//     )
// }

// const car = () => {
//     return (<h2>This is car component</h2>)
// }

// const car = () => <h2>This is car component</h2>



/*export default props => (
    
    <React.Fragment>
        <h3>Car name: {props.name}</h3>
        { props.children }
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </React.Fragment>
)*/

class Car extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if(this.props.key === 0) {
            this.inputRef.current.focus()
        }
    }

    render() {
        const inputClasses = [classes.input]

        if (this.props.name !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }
        console.log(this)
        // if (this.props.name.length > 4) {
        //     inputClasses.push(classes.bold)
        // }
        return (
            <div>
                <h3>Car name: {this.props.name}</h3>
                { this.props.children }
                <p>Year: <strong>{this.props.year}</strong></p>
                <input 
                    ref={this.inputRef}
                    type="text" 
                    onChange={this.props.onChangeName} 
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }

}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    key: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
}

export default withClass(Car, classes.Car)