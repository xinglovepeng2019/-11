import React from "react"
import { Link } from "react-router-dom"
import { Carousel } from 'antd';
import "./home.css"


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            songList: []
        }
    }
    componentDidMount() {
        console.log(1)
        this.$axios.get('http://localhost:3000/personalized/djprogram')
            .then(res => {
                console.log(res)
                console.log(res.data.result)
                this.setState({
                    songList: res.data.result
                })
            })
    }
    render() {

        return (
            <div className="home">
                <Carousel autoplay >
                    {
                        this.state.songList.map(item=>{
                            return (
                                <div key={item.id}>
                                    <img src={item.picUrl} className="imgs" />
                                </div>
                            )
                        })
                    }
                </Carousel>
                <div className="radios">
                    <h4>电台</h4>
                    <ul className="radiosList">
                        {
                            this.state.songList.map(item => {
                                return (
                                    <li key={item.id}>
                                        <img src={item.picUrl} />
                                        <p>{item.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        )
    }
}

export default Home