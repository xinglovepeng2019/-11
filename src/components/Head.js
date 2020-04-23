import React from "react"
import {NavLink} from "react-router-dom"
import "./head.css"


class Head extends React.Component {
    constructor() {
        super()
        this.state = {
   
        }
    }
    render() {
        return (
            <div className="head">
                <div className="title">
                    <img src="//y.gtimg.cn/mediastyle/yqq/img/logo@2x.png?nowebp=1 2x" />
                    <p>下载APP</p>
                </div>
                <ul className="headMenu">
                    <li>
                        <NavLink to="/home">推荐</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ranking">排行榜</NavLink>
                    </li>
                    <li>
                        <NavLink to="/search">搜索</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Head