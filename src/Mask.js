import React, {Component} from 'react'
//import PropTypes from 'prop-types'

const charTab = []

class Mask extends Component{

    constructor(props){
        super(props)

    }

    generateMask(word) {
        for (let i = 0; i < word.length; i++)
        {
            charTab.push(word.charAt(i))
        }
        //console.log(charTab);
    }


    render(){
        const { word } = this.props
        return(
            this.generateMask(word),
            <span>
            </span>
        )
    }
}

export default Mask