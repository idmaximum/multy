import React from 'react'
import CONS from '../constants'
import { ItemCard } from '../components/item-card'

export class ProductOther extends React.Component {
    render() {
        var product_list = this.props.state.product_list
        var attr = this.props.state.attr
        return (
            <div className="col-12 px-0">
                <h3 className="mx-1 pb-2 border-bottom-list">{(attr.language == "TH") ? "สินค้าอื่นที่คล้ายกัน" : "Other Products"}</h3>
                <div className="row mx-0">
                    {product_list.map((item, i) => {
                        if (i > 3) return null
                        return (
                            <ItemCard key={i} item={item} language={attr.language} className={`col-6 col-lg-3 px-1`}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}