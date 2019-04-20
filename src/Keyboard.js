import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './Keyboard.css'


class Keyboard extends Component{

    render() {
        const { keys, usedChar, onClick } = this.props
        return (
            <div id="keyboard">
                {keys.map((oneChar) => <div className={`letter ${usedChar.indexOf(oneChar) !== -1 ? "disabled" : ""}`} key={oneChar} onClick={() => onClick(oneChar)}>{oneChar}</div>)}
            </div>
        )
    }
}

Keyboard.propTypes = {
    keys: PropTypes.array.isRequired,
    usedChar: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Keyboard