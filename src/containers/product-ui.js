import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'
import { Breadcrumb } from '../components/breadcrumb'
import { ProductEntry } from './product-entry'
import { ProductOther } from './product-other'

export class ProductUI extends React.Component {
    render() {
        var page = this.props.state.page
        var attr = this.props.state.attr
        return ([
            <Breadcrumb key={0} list={page.breadcrumb_list} language={attr.language}/>,
            <ProductEntry key={1} {...this.props}/>,
            <ProductOther key={2} {...this.props}/>
        ])
    }
}
