import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'

export class Breadcrumb extends React.Component {
    render() {
        var list = this.props.list
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent py-2 border-bottom-list mb-0">
                    {list.map((item,i)=>{
                        if((i+1) < list.length){
                            return(
                                <li key={i} className="breadcrumb-item"><a className='text-pink' href={CONS.URL_LINK + item.url}>{(this.props.language === 'TH' ? item.title_th : item.title_en)}</a></li>
                            )
                        } else {
                            return(
                                <li key={i} className="breadcrumb-item active" aria-current="page">{(this.props.language === 'TH' ? item.title_th : item.title_en)}</li>
                            )
                        }
                    })}
                </ol>
            </nav>
        )
    }
}
