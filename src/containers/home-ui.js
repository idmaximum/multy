import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'
import { HomeCarousel } from './home-carousel'
import { HomeContent } from './home-content'

export class HomeUI extends React.Component {
    render() {
        return ([
            <HomeCarousel key={0} {...this.props} />,
            <HomeContent key={1} title_th='สินค้าขายดี' title_en='Best seller' best_seller={true} url='#' items={this.props.state.best_seller_list} {...this.props} />,
            <HomeContent key={2} title_th='สินค้าแนะนำ' title_en='Recommend' best_seller={false} url='#' items={this.props.state.recommend_list} {...this.props} />,
            <HomeContent key={3} title_th='สินค้าลดราคา' title_en='Sale' best_seller={false} url='#' items={this.props.state.sale_list} {...this.props} />
        ])
    }
}
