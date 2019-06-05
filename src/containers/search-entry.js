import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'
import { ListLink } from '../components/list-link'
import { FilterGroup } from '../components/filter-group'
import { ItemCard } from '../components/item-card'

export class SearchEntry extends React.Component {
    render() {
        var page = this.props.page
        return (
            <div className='row mx-0 pt-2 pt-lg-3'>
                <div className='col-12 col-lg-3 px-0 pl-lg-0 pr-lg-2'>
                    <ListLink title_th={page.title_th} title_en={page.title_en} list={page.page_link_list} language={this.props.language} className='list-group d-none d-lg-flex' />
                    <FilterGroup list={page.filter_list} language={this.props.language} />
                </div>
                <div className='col-12 col-lg-9 px-0 pl-lg-2 pr-lg-0'>
                    <div className='row align-items-center mx-0 px-2 px-lg-0 border-bottom-list pb-2 pb-lg-3'>
                        <div className="col-6 px-0">
                            <p className='mb-0'>{(this.props.language == "TH") ? "พบ " + page.count + " รายการ" : "Found " + page.count}</p>
                        </div>
                        <div className="col-6 px-0">
                            <div className='row align-items-center mx-0'>
                                <label className='col-auto px-2 mb-0 text-right'>{(this.props.language == "TH") ? "เรียงตาม" : "Order by"}</label>
                                <div className="col px-0">
                                    <select className="form-control" name="order_by">
                                        <option value={(this.props.language == "TH") ? "name_th_asc" : "name_en_asc"}>{(this.props.language == "TH") ? "ตัวอักษร" : "Character"}</option>
                                        <option value="">{(this.props.language == "TH") ? "สินค้าล่าสุด" : "Latest products"}</option>
                                        <option value="price_asc">{(this.props.language == "TH") ? "ราคาต่ำ-สูง" : "Low - High price"}</option>
                                        <option value="price_desc">{(this.props.language == "TH") ? "ราคาสูง-ต่ำ" : "High - Low price"}</option>
                                        <option value="discount">{(this.props.language == "TH") ? "ส่วนลด" : "Discount"}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center mx-0 px-2 px-lg-0 py-2 py-lg-3'>
                        {this.props.list.map((item, i) => {
                            return (
                                <ItemCard key={i} item={item} language={this.props.language} className='col-6 col-lg-4 px-1 px-lg-3' />
                            )
                        })}
                    </div>
                    {(this.props.enabled) ?
                        <div className="col text-center pt-2">
                            <button type="button" className="btn btn-outline-view px-4" onClick={this.props.onLoad}>{(this.props.language == "TH") ? "ดูเพิ่มเติม" : "View More"}</button>
                        </div> : null
                    }
                </div>
            </div>
        )
    }
}
