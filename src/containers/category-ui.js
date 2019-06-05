import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'
import { SearchEntry } from './search-entry'
import { Breadcrumb } from '../components/breadcrumb'
import { ImageBanner } from '../components/image-banner'

export class CategoryUI extends React.Component {
    render() {
        var page = this.props.state.page
        var attr = this.props.state.attr
        var ctrl = this.props
        return ([
            <ImageBanner key={0} image={page.page_image}/>,
            <Breadcrumb key={1} list={page.breadcrumb_list} language={attr.language}/>,
            <SearchEntry key={2} page={page} enabled={attr.enabled_btn_vm} language={attr.language} list={this.props.state.product_list} onLoad={ctrl.handleLoad}/>
        ])
    }
}
