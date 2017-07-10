/**
 * Created by Jack on 2017/7/10.
 */

import React, {Component} from 'react'
import './Slider.css'
import SliderBody from './SliderBody'
import SliderIndicators from './SliderIndicators'
import SliderArrows from "./SliderArrows";

class Slider extends Component {
    constructor (props) {
        super(props);

        let imageW = parseInt(this.props.rootElemW),
            images = props.src,
            len = images.length,
            half = Math.floor(len / 2),
            zIndex = -1;
        this.state = {
            images: images.map((item, index) => {
                item.marginLeft = imageW * (index - half);
                item.zIndex = half >= index ? ++zIndex : --zIndex;
                item.opacity = half === index ? 1 : 0
                return item
            }),
            activeIndex: half
        };
        if(this.props.arrows)
            this.state.arrows = {
                left: true,
                right: true
            }

        if(this.props.autoPlay) {
            let timeout = this.props.msPerSlide || 2000,
                timer = setInterval(() => {
                    if(!this.props.cycle && this.state.activeIndex === len - 1)
                        clearInterval(timer)
                    this.handleArrowClick('right-arrow')
                }, timeout)
        }
        this.handleArrowClick = this.handleArrowClick.bind(this)
        this.handleIndicatorClick = this.handleIndicatorClick.bind(this)
    }

    handleArrowClick (clickedArrow) {
        // change indicators
        this.setState(function (oldState, props) {
            let images = oldState.images,
                len = images.length,
                cycle = props.cycle,
                newState = {},
                needToChangeImages = true,
                activeIndex = oldState.activeIndex

            if (clickedArrow === 'left-arrow') {
                if (activeIndex === 0) {
                    if (cycle) {
                        if (props.arrows)
                            newState.arrows = {
                                left: true,
                                right: true
                            }

                        newState.activeIndex = len - 1
                    } else {
                        needToChangeImages = false
                    }
                } else {
                    let newIndicatorIndex = activeIndex - 1
                    newState.activeIndex = newIndicatorIndex
                    if (props.arrows)
                        newState.arrows = {
                            left: !(!cycle && newIndicatorIndex === 0),
                            right: true
                        }
                }

                if(needToChangeImages) {

                    newState.images = slideLeftTimes(images, 1)
                }
            } else {
                if(activeIndex === len - 1) {
                    if(cycle) {
                        if(props.arrows)
                            newState.arrows = {
                                left: true,
                                right: true
                            }
                        newState.activeIndex = 0
                    } else {
                        needToChangeImages = false
                    }
                } else {
                    let newIndicatorIndex = activeIndex + 1
                    newState.activeIndex = newIndicatorIndex
                    if(props.arrows)
                        newState.arrows = {
                            left: true,
                            right: !(!cycle && newIndicatorIndex === len - 1)
                        }
                }

                if(needToChangeImages) {

                    newState.images = slideRightTimes(images, 1)
                }
            }

            return newState
        })
    }

    handleIndicatorClick (target) {
        let targetIndex = [].indexOf.call(document.querySelectorAll('.slider-indicator'), target)
        this.setState(function(oldState, props) {
            let images = oldState.images,
                len = images.length,
                cycle = props.cycle,
                newState = {},
                activeIndex = oldState.activeIndex

            if(activeIndex === targetIndex) return newState
            if(activeIndex > targetIndex) {
                newState.images = slideLeftTimes(images, activeIndex - targetIndex)
            } else {
                newState.images = slideRightTimes(images, targetIndex - activeIndex)
            }

            newState.activeIndex = targetIndex

            if(props.indicators)
                newState.indicators = {
                    activeIndex: targetIndex,
                    length: len
                }

            if(props.arrows)
                newState.arrows = {
                    left: !(!cycle && targetIndex === 0),
                    right: !(!cycle && targetIndex === len - 1)
                }

            return newState
        })
    }

    render () {
        let height = parseInt(this.props.rootElemW) / this.props.ratio
        console.log(this.state)
        return (<div className='slider-wrapper' style={{height: height + 'px'}}>
                    <SliderBody images={this.state.images}></SliderBody>
                    {this.props.arrows ? <SliderArrows handleArrowClick={this.handleArrowClick}
                                                       arrows={this.state.arrows} /> : null}
                    {this.props.indicators ? <SliderIndicators activeIndex={this.state.activeIndex}
                                                               count={this.state.images.length}
                                                               handleIndicatorClick={this.handleIndicatorClick} /> : null}
                </div>)
    }
}

function slideLeftTimes(images, count) {
    for(let i = 0; i < count; i++) {
        let arr0 = {
            marginLeft: images[0].marginLeft,
            zIndex: images[0].zIndex,
            opacity: images[0].opacity
        }
        images.forEach((item, index, arr) => {
            if(index === arr.length - 1) {
                item.marginLeft = arr0.marginLeft
                item.zIndex = arr0.zIndex
                item.opacity = arr0.opacity
                return
            }
            item.marginLeft = arr[index + 1].marginLeft
            item.zIndex = arr[index + 1].zIndex
            item.opacity = arr[index + 1].opacity
        })
    }
    return images
}

function slideRightTimes(images, count) {
    let len = images.length
    for(let i = 0; i < count; i++) {
        let lastImage = images[len - 1],
            last = {
                marginLeft: lastImage.marginLeft,
                zIndex: lastImage.zIndex,
                opacity: lastImage.opacity
            }
        images.forEach((item, index, arr) => {
            if(index === len - 1) {
                arr[len - 1 - index].marginLeft = last.marginLeft
                arr[len - 1 - index].zIndex = last.zIndex
                arr[len - 1 - index].opacity = last.opacity
                return
            }
            arr[len - 1 - index].marginLeft = arr[len - 2 - index].marginLeft
            arr[len - 1 - index].zIndex = arr[len - 2 - index].zIndex
            arr[len - 1 - index].opacity = arr[len - 2 - index].opacity
        })
    }
    return images
}

export default Slider
