import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'
import { ItemCard } from '../components/item-card'

export class HomeContent extends React.Component {
    render() {
        var attr = this.props.state.attr
        var items = this.props.items
        var props = this.props
        return (
            <div className="pt-5">
                <div className='col-12 text-center'>
                    <h3 className="underline-pink">{(attr.language === 'TH' ? props.title_th : props.title_en)}</h3>
                </div>
                <div className="row mx-0 pt-4">
                    {items.map((item, i) => {
                            if (i > (props.best_seller ? 9 : 3)) return null
                            return (
                                <ItemCard key={i} item={item} language={attr.language} className={`col-6 px-1${(props.best_seller ? " col-lg-20" : " col-lg-3")}`} best_seller={props.best_seller} rating={i+1}/>
                            )
                        })}
                </div>
                {(!props.best_seller) ?
                    <div className="col text-center pt-4 mb-3">
                        <button type="button" className="btn btn-outline-view px-4" onClick={() => { window.open(CONS.URL_LINK + props.url, '_self') }}>{(attr.language == "TH") ? "ดูเพิ่มเติม" : "View More"}</button>
                    </div> : null
                }
            </div>
        )
    }
}
