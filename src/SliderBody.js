/**
 * Created by Jack on 2017/7/10.
 */
import React, {Component} from 'react'
import './SliderBody.css'

class SliderBody extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <ul className='slider-images'>
                {this.props.images.map(
                    (item, index) => <li key={item.path}
                                        className='slider-image'
                                        style={{
                                            marginLeft: item.marginLeft + 'px',
                                            zIndex: item.zIndex,
                                            opacity: item.opacity
                                        }}>
                                        <a href={item.linkTo}>
                                            <img src={item.path} alt="Slider"/>
                                        </a>
                                    </li>)}
            </ul>
        )
    }
}

export default SliderBody