import React from 'react'
import "./ranking.css"

class Ranking extends React.Component{
    constructor(){
        super()
        this.state={
            rankingList:[]
        }
    }
    componentDidMount(){
        this.$axios.get('http://localhost:3000/toplist/detail')
        .then(res=>{
            this.setState({
                rankingList:res.data.list
            })
        })
    }
    render(){
        return (
            <div className="ranking">
            <ul>
               {
                   this.state.rankingList.map((item,index)=>{
                       return (
                        <li key={index}>
                            <div className="left">
                                <img src={item.coverImgUrl} alt=""/>
                            </div>
                        <div className="right">
                            <h3>{item.name}</h3>
                            <ol> 
                                {
                                    item.tracks.map((litem,ind)=>{
                                        return (
                                            <li key={ind}>
                                                 <span>{litem.first}</span>
                                                 <i>{litem.second}</i>
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </div>
                    </li>
                       )
                   })
               }
            </ul>
         </div>
        )
    }
}

export default Ranking