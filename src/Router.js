import React from "react"
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
import {Layout} from "antd"
import "./router.css"
import {GlobalIcom} from "./assets/font/iconfont"

import Head from "./components/Head"
import Foot from './components/Foot'
import routes from "./routes"
import Item from "antd/lib/list/Item"

const {Header,Content,Footer} =Layout
const BasicRoute = () => {
    return (
        <BrowserRouter>
        <GlobalIcom></GlobalIcom>
            <Layout>
                <Header>
                    <Head></Head>
                </Header>
                <Content>
                       <Switch>
                           {
                               routes.map((item,index)=>{
                                    if(item.path==="*"){
                                     return  <Redirect key={index} from={item.path} to={item.redirect}></Redirect>
                                    }
                                    return  <Route key={index} path={item.path} component = {item.component}></Route>
                               })
                           }
                       </Switch>
                </Content>
                <Footer>
                    <Foot></Foot>
                </Footer>
            </Layout>
        </BrowserRouter>
    )
}

export default BasicRoute