import React, {Component} from 'react'
import PropTypes from 'prop-types'


class Mask extends Component{

    generateMask() {
        const { word, usedChar } = this.props
        let mask = ""
        for (let i = 0; i < word.length; i++)
        {
            let chara = word.charAt(i)
            mask += (usedChar.includes(chara)) ? chara + " " : "_ "
        }
        return mask
    }

    componentDidUpdate(prevProps) {
        if(this.props.usedChar !== prevProps.usedChar)
        {
            this.setState({mask: this.generateMask()})
        }
    }

    render(){
        return(
            <span className="mask">
                {this.generateMask()}
            </span>
        )
    }
}

Mask.propTypes = {
    word: PropTypes.string.isRequired,
    usedChar: PropTypes.string.isRequired
}

export default Mask