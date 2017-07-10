/**
 * Created by Jack on 2017/7/10.
 */
import React, {Component} from 'react'
import './SliderArrows.css'

class SliderArrows extends Component {
    constructor (props) {
        super(props)

        this.handleArrowClick = this.handleArrowClick.bind(this)
    }

    handleArrowClick (e) {
        this.props.handleArrowClick(e.target.className);
    }

    render () {
        let arrows = this.props.arrows
        return (
            <div className="slider-arrows">
                {arrows.left ?
                    <a className="left-arrow" onClick={this.handleArrowClick}>
                        <i></i>
                    </a> : null}
                {arrows.right ?
                    <a className="right-arrow" onClick={this.handleArrowClick}>
                        <i></i>
                    </a> : null}
            </div>
        )
    }
}

export default SliderArrows