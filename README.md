# react-slider

> 通过 React 实现的图片轮播组件，允许用户作如下配置：
1、自定义左右箭头的显示和隐藏
2、自定义图片指示器的显示和隐藏
3、可以配置自动轮播功能
4、允许通过点击图片指示器切换图片
5、暂不支持通过手指滑动切换图片

## Usage

    $ git clone https://github.com/sea-ice/react-slider

    $ cd react-slider

    $ npm install

    $ npm start

    通过以上步骤可在本地查看组件的实际效果。

## 配置参数

在你的项目中安装此模块之后，在你的react项目的js文件中引入组件（直接把src目录下以 Slider 开头的文件和 images 目录拷贝到你的项目中，再通过 import 语句引入）。

下面具体说说可能用到的配置参数：

    <Slider
            src={[{
                path: 'http://localhost:8080/static/images/image1.jpg',
                linkTo: 'https://www.xxx.com/'
            }, {
                path: 'http://localhost:8080/static/images/image2.jpg',
                linkTo: 'https://www.xxx.com/'
            }, ...
            ]}
            rootElemW={window.getComputedStyle(rootElem, null).getPropertyValue('width')}
            ratio={1.5}
            indicators={true}
            arrows={true}
            cycle={true}
            autoPlay={false}
            msPerSlide={2000}
    ></Slider>

### 必要参数

src：对象类型，指定轮播组件用到的图片以及链接的 URL

rootElemW：String 类型或者 Number 类型，提供组件要挂载的根元素的实际宽度，可以参照上面的方式给出

ratio：Number类型，根元素宽高比。组件内部会根据 rootElemW 和 ratio 这两个参数计算组件实际占据的页面高度

### 可选参数

indicators：Boolean 类型，配置是否显示图片指示器

arrows：Boolean 类型，配置是否显示左右箭头

cycle：Boolean 类型，配置是否循环轮播

autoPlay：Boolean 类型，配置是否自动轮播

msPerSlide：Number 类型，配置切换图片的时间间隔，仅在 autoPlay 参数为 true 的情况下起作用
