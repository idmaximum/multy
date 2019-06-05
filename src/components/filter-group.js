import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'

export class FilterGroup extends React.Component {

    filterComponent = (className) => {
        return (
            <div className={className}>
                <div className='py-2 border-bottom-list'>
                    <a className="sidebar" data-toggle="collapse" href="#priceCard" aria-expanded="true" aria-controls="priceCard">
                        <p className="text-dark col-12 py-2 mb-0 pl-0"><b>{(this.props.language == "TH") ? "ราคา" : "Price"}</b></p>
                    </a>
                    <div className="collapse show" id="priceCard">
                        <div className="row pt-2 pb-2 mx-0">
                            <div className="col-6 pl-0">
                                <label className="text-pink">{(this.props.language == "TH") ? "ตั้งแต่" : "Since"}</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col-6 pr-0">
                                <label className="text-pink">{(this.props.language == "TH") ? "จนถึง" : "Until"}</label>
                                <input type="number" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.list.map((item, i) => {
                    return (
                        <div key={i} className={'py-2' + (this.props.list.length > (i + 1) ? ' border-bottom-list' : '')}>
                            <a className="sidebar" data-toggle="collapse" href={"#fiterCard_" + item.id} aria-expanded="true" aria-controls={"fiterCard_" + item.id}>
                                <p className="text-dark col-12 py-2 mb-0 pl-0"><b>{(this.props.language == "TH") ? item.title_th : item.title_en}</b></p>
                            </a>
                            <div className="collapse show" id={"fiterCard_" + item.id}>
                                <div className="col-12 py-2 pl-0">
                                    {item.list.map((list_item, s) => {
                                        return (
                                            <div key={s} className="custom-control custom-checkbox mr-sm-2 pb-3">
                                                <input type="checkbox" className="custom-control-input"
                                                    id={'fiter_' + item.id + '_' + list_item.list_id} name={'fiter_' + item.id + '_' + list_item.list_id} />
                                                <label className="custom-control-label row mx-0" htmlFor={'fiter_' + item.id + '_' + list_item.list_id}>
                                                    {(this.props.language == "TH") ? list_item.list_title_th : list_item.list_title_en}
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener("resize", function () {
            let filterModal = document.getElementById('filterModal')
            let backdrop = document.getElementsByClassName('modal-backdrop')
            if (window.screen.width > 768) {
                if (filterModal.getAttribute('aria-modal')) {
                    for (var i = 0; i < backdrop.length; i++) {
                        backdrop[i].style.display = 'none'
                    }
                }
            } else {
                if (filterModal.getAttribute('aria-modal')) {
                    for (var i = 0; i < backdrop.length; i++) {
                        backdrop[i].style.display = 'block'
                    }
                }
            }
        }, false)
    }

    render() {
        return (
            <div className='mb-2 mb-lg-3'>
                {this.filterComponent('d-none d-lg-block')}
                <div className='d-block d-lg-none px-2 pb-2 pb-lg-3 border-bottom-list'>
                    <a className="after-menu-2 form-control" data-toggle="modal" data-target="#filterModal" href='#'>
                        <p className="mb-0 px-2">{(this.props.language == "TH") ? "ตัวกรองสินค้า" : "Filter"}</p>
                    </a>
                    <div className="modal fade" id="filterModal" tabIndex="-1" role="dialog" aria-labelledby="filterModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{(this.props.language == "TH") ? "ตัวกรองสินค้า" : "Filter"}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                {this.filterComponent('modal-body py-0')}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary px-4" data-dismiss="modal">{(this.props.language == "TH") ? "ล้างค่า" : "Clear"}</button>
                                    <button type="button" className="btn btn-danger px-4" data-dismiss="modal">{(this.props.language == "TH") ? "ปรับใช้" : "Submit"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
