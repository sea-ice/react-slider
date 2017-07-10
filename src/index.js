import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

let rootElem = document.getElementById('root')
ReactDOM.render(<Slider
                        src={[{
                            path: 'http://localhost:8080/static/images/image1.jpg',
                            linkTo: 'https://www.baidu.com/'
                        }, {
                            path: 'http://localhost:8080/static/images/image2.jpg',
                            linkTo: 'https://www.tencent.com/'
                        }, {
                            path: 'http://localhost:8080/static/images/image3.jpg',
                            linkTo: 'https://www.taobao.com/'
                        }, {
                            path: 'http://localhost:8080/static/images/image4.jpg',
                            linkTo: 'https://www.taobao.com/'
                        }]}
                        rootElemW={window.getComputedStyle(rootElem, null).getPropertyValue('width')}
                        ratio={1.5}
                        indicators={true}
                        arrows={true}
                        cycle={true}
                        autoPlay={false}
                        msPerSlide={2000}
                ></Slider>, rootElem)

registerServiceWorker()
