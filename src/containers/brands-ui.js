import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'
import { Breadcrumb } from '../components/breadcrumb'
import { TableSearch } from '../components/table-search'

export class BrandsUI extends React.Component {
    render() {
        var page = this.props.state.page
        var attr = this.props.state.attr
        var brand_list = this.props.state.brand_list
        return ([
            <Breadcrumb key={0} list={page.breadcrumb_list} language={attr.language} />,
            <TableSearch key={1} title_th='ค้นหาแบรนด์' title_en='Search for brands' 
                list={brand_list} language={attr.language} open_link={true} url_link="url"
                thead={[{ title_th: 'ชื่อแบรนด์', title_en: 'Brand' }, { title_th: 'จำนวนสินค้า', title_en: 'Amount' }]}
                thead_width={["80%","20%"]} 
                tbody={[{ title_th: 'title_th', title_en: 'title_en' }, { title_th: 'count', title_en: 'count' }]} 
                filter={["title_th","title_en"]}/>
        ])
    }
}
