import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'

export class ListLink extends React.Component {
    render() {
        var list = this.props.list
        return ([
            <h5 key={0} className="px-3 my-title d-none d-lg-block"><b>{(this.props.language === 'TH' ? this.props.title_th : this.props.title_en)}</b></h5>,
            <div key={1} className={(this.props.className !== '' && this.props.className !== undefined ? this.props.className : "list-group")}>
                {list.map((item, i) => {
                    return (
                        <a key={i} href={CONS.URL_LINK + item.url} className="list-group-item list-group-item-action">
                            {(this.props.language === 'TH' ? item.title_th : item.title_en)}&nbsp;
                            {(item.count !== '' && item.count !== undefined ? '('+item.count+')' : null)}
                        </a>
                    )
                })}
            </div>
        ])
    }
}
