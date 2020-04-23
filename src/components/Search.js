import React from "react"
import "./search.css"
class Search extends React.Component{
    constructor(){
        super()
        this.state={
            hotList:[],
            detailList:null,
            active:"",
            btnShow:false,
            searchVal:"",
            audioUrl:null
        }
    }
    componentDidMount(){
        this.$axios.get("http://localhost:3000/search/hot")
        .then(res=>{
            this.setState({
                hotList:res.data.result.hots,
                active:res.data.result.hots[0].first
            })
        })    
      }
      inputSearch(e){
          this.setState({
              searchVal:e.target.value
          })
      }
      btnShows(){
            this.setState({
                btnShow:false
            })
      }
      del(){
        this.setState({
            searchVal:"",
            detailList:null
        })
      }
      paly(id){
        this.$axios.get("http://localhost:3000/song/url?id="+id)
        .then(res=>{
           this.setState({
               audioUrl:res.data.data[0].url
           })
        })
      }
      hotPlay(index){
          this.$axios.get("http://localhost:3000/search/suggest?keywords="+this.state.hotList[index].first)
          .then(res=>{
              this.setState({
                detailList : res.data.result.songs
            })
            if(res.data.result.songs!==undefined){
              this.paly(res.data.result.songs[0].id)
            }
            
          })
      }
      fn1(e){
         this.setState({
            searchVal:e.target.value
        })
         if(e.target.value!==""){
            this.$axios.get("http://localhost:3000/search/suggest?keywords="+e.target.value)
            .then(res=>{
                this.setState({
                    detailList : res.data.result.songs,
                    btnShow:true
                })
            })
          }
      }
      searchPlay(id){
         this.paly(id)
      }
    render(){
        return (
        <div>
            <div className="search">
               <div className="searchInput" >
                 <span className="iconfont searchIconfont">&#xe714;</span>
                   <input type="text" value={this.state.searchVal} onKeyUp={(e)=>this.fn1(e)} onChange={(e)=>this.inputSearch(e)}  placeholder="   搜索歌曲、歌单、专辑" /> 
                 {this.state.btnShow?<span className="iconfont del" onClick={this.del.bind(this)}>&#xe615;</span>:null}
               </div>
                 {this.state.btnShow?<button onClick={this.btnShows.bind(this)}>取消</button>:null} 
            </div>
            {
                this.state.btnShow?null:<div className="rouSearch">
                <h3>热门搜索</h3>
                 <ul className="list">
                    {
                        this.state.hotList.map((item,index)=>{
                            return (
                                <li key={index} onClick={this.hotPlay.bind(this,index)}>
                                    {item.first}--{item.iconType}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            }
            <audio autoPlay  controls="controls" src={this.state.audioUrl}>
            </audio>
                <div className="searchDetail">
                  <ul>
                  {
                      this.state.detailList?
                      this.state.detailList.map(item=>{
                        return (
                            <li key={item.id} onClick={()=>this.searchPlay(item.id)}> 
                                {item.name}
                            </li>
                        )
                      }):null
                  }
                  </ul>
                </div>  
        </div>
        )
    }
}

export default Search