import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'

export class TableSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxRow: 10,
            offset: 1,
            filter: "",
            order_by: []
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleOrderBy = (e) => {
        var order_by = this.state.order_by
        const index = order_by.findIndex(x => x.idx === e.target.dataset.id)
        console.log(index)
        if(index == -1){
            order_by.unshift({ idx : e.target.dataset.id, sort: 'DESC'})
        } else {
            order_by[index].sort = (order_by[index].sort == 'ASC') ? 'DESC' : 'ASC'
        }
        
        this.setState({ order_by : order_by })
    }

    render() {
        var list = this.props.list
        var filter = this.props.filter

        var items = []
        list.map((item, i) => {
            var rx = new RegExp(this.state.filter, 'i')
            var match = false
            filter.map((sub_item, k) => {
                if (item[sub_item].match(rx)) {
                    match = true
                }
            })
            if (match) {
                items.push(item)
            }
        })

        //items.sort((a,b) => (a.title_th > b.title_th) ? 1 : ((b.title_th > a.title_th) ? -1 : 0))

        return (
            <div className="mt-3 px-0">
                <div className="col-12 offset-md-7 col-md-5 px-2 px-lg-0 mb-3">
                    <div className='row align-items-center mx-0'>
                        <label className='col-auto px-2 mb-0 text-right'>{(this.props.language == "TH") ? this.props.title_th : this.props.title_en}</label>
                        <div className="col px-0">
                            <input type="text" className="form-control" name="filter" value={this.state.filter} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className='px-2 px-lg-0'>
                    <table className="table table-hover table-sm table-search">
                        <thead>
                            <tr className="pointer">
                                {this.props.thead.map((item, i) => {
                                    return (
                                        <th scope="col" data-id={i} width={(this.props.thead_width !== undefined && this.props.thead_width[i] !== undefined ? this.props.thead_width[i] : "")} key={i} onClick={this.handleOrderBy}>{(this.props.language == "TH") ? item.title_th : item.title_en}</th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, i) => {
                                return (
                                    <tr key={i} className="pointer" onClick={() => {
                                        // if (this.props.open_link) {
                                        //     window.open(CONS.URL_LINK + item[this.props.url_link], '_self')
                                        // }
                                    }}>
                                        {this.props.tbody.map((sub_item, k) => {
                                            return <td key={k} data-id={item.id}>{(this.props.language == "TH") ? item[sub_item.title_th] : item[sub_item.title_en]}</td>
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

TableSearch.defaultProps = {
    title_th: "ค้นหา",
    title_en: "Search",
}