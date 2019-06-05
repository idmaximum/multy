import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'

export class ItemCard extends React.Component {
    render() {
        var props = this.props 
        return (
            <div className={(props.className !== undefined && props.className !== '' ? props.className  : 'col-6 col-lg-3 px-1')}>
                <div className="card border-0 h-100 pt-2">
                    <a className="nav-link text-center p-0 h-100 a-special d-contents" href={CONS.URL_LINK + `/product/${props.item.id}`}>
                        {(props.best_seller) ?
                            <div className='best-flag'>
                                <p className='text-white'>{(props.language == "TH") ? 'อันดับ' : 'Rating'}</p>
                                <h3 className='text-white'>{props.rating}</h3>
                            </div> :
                            (props.item.discount_Percent != "" && props.item.discount_Percent != undefined ? <div className="position-absolute text-white label-discount rounded-circle"><p className='mb-0'>SAVE</p><h5>{props.item.discount_Percent}%</h5></div> : null)
                        }
                        <img src={`${props.item.page_image}`} className="thumbnail-img img-special mx-auto" />
                        <p className="text-dark pt-2 px-1 mb-5">{(props.language == "TH") ? props.item.title_th : props.item.title_en}</p>
                        {(props.item.discount_Price != "" && props.item.discount_Price != undefined ? <p className="text-dark div-bottom"><b>฿{Fnc.formatPrice(props.item.discount_Price)}</b> <del className="text-pink">฿{Fnc.formatPrice(props.item.product_Price)}</del></p> : <p className="text-dark div-bottom">฿{Fnc.formatPrice(props.item.product_Price)}</p>)}
                    </a>
                </div>
            </div>
        )
    }
}
