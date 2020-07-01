import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Hangman extends Component
{

    Draw() {
        const { count } = this.props;
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'white';

        switch (count) {
            case 0:
                ctx.clearRect(0,0, 400, 400);
                break;
            case 1:
                ctx.fillRect(0, 300, 400, 100);
                break;
            case 2:
                ctx.fillRect(100, 100, 20, 200);
                break;
            case 3:
                ctx.fillRect(90, 80, 200, 20);
                break;
            case 4:
                ctx.fillRect(200, 100, 10, 30);
                break;
            case 5:
                ctx.beginPath();
                ctx.arc(205, 130, 15, 0, 2 * Math.PI);
                ctx.fill();
                break;
            case 6:
                ctx.fillRect(202, 130, 6, 50);
                break;
            case 7:
                ctx.lineWidth = 6;
                ctx.beginPath();
                ctx.moveTo(205, 180);
                ctx.lineTo(190, 200);
                ctx.stroke();
                break;
            case 8:
                ctx.beginPath();
                ctx.moveTo(205, 180);
                ctx.lineTo(220, 200);
                ctx.stroke();
                break;
            case 9:
                ctx.beginPath();
                ctx.moveTo(205, 150);
                ctx.lineTo(190, 170);
                ctx.stroke();
                break;
            case 10:
                ctx.beginPath();
                ctx.moveTo(205, 150);
                ctx.lineTo(220, 170);
                ctx.stroke();
                break;
            default:
                break;
        }
    }

    componentDidMount(){
        this.Draw();
    }

    componentDidUpdate(prevProps) {
        if(this.props.count !== prevProps.count)
        {
            this.Draw()
        }
    }

    render() {
        const { count } = this.props;
        return (
            <canvas ref="canvas" width="400px" height="400px" count={count} >
                Votre naviguateur n'est pas compatible
            </canvas>
        )
    }
}

Hangman.propTypes = {
    count: PropTypes.number.isRequired
}

export default Hangman