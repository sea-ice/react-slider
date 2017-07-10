/**
 * Created by Jack on 2017/7/10.
 */
import React, {Component} from 'react'
import './SliderIndicators.css'

class SliderIndicators extends Component {
    constructor (props) {
        super(props)

        this.handleIndicatorClick = this.handleIndicatorClick.bind(this)
    }

    handleIndicatorClick (e) {
        this.props.handleIndicatorClick(e.target)
    }

    render () {
        let activeIndex = this.props.activeIndex,
            len = this.props.count,
            indicators = []
        for(let i = 0; i < len; i++) {
            indicators.push(
                <li className={'slider-indicator' + (i === activeIndex ? ' active-indicator' : '')}
                    onClick={this.handleIndicatorClick}
                    key={i}></li>
            )
        }
        return (<ul className="slider-indicators">
                    {indicators}
                </ul>)
    }
}

export default SliderIndicators