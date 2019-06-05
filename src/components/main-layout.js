import React from 'react'
import ReactDOM from 'react-dom'
import Autocomplete from 'react-autocomplete'
import CONS from '../constants'
import { SignInModal } from './sign-in-modal'

const LANGUAGE = localStorage.getItem('multy_language')

export class MainLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            attr: {
                language: (LANGUAGE == null ? "TH" : LANGUAGE),
                cart_amount: 0,
                menu_sm: false,
            },
            user_data: {
                user_name: ''
            },
            info: {
                text_header_th: 'สินค้าของแท้ 100%  -  ส่งฟรี! เมื่อสั่งสินค้า 500 บาท ขึ้นไป',
                text_header_en: 'Genuine product 100%  -  Free delivery! When ordering 500 Baht or more.',
                link_line: '#',
                link_facebook: '#',
                link_instagram: '#',
                menu_list: [
                    { id: 1, title_th: 'สกินแคร์', title_en: "Skin care" },
                    { id: 2, title_th: 'เมคอัพ', title_en: "Make up" },
                    { id: 3, title_th: 'น้ำหอม', title_en: "Perfume" },
                    { id: 4, title_th: 'ดูแลผิวกาย', title_en: "Body care" },
                    { id: 5, title_th: 'เล็บ', title_en: "Nail" },
                    { id: 6, title_th: 'ดูแลเส้นผม', title_en: "Hair care" },
                    { id: 7, title_th: 'อุปกรณ์เสริมสวย', title_en: "Beauty tools" },
                    { id: 8, title_th: 'อาหารเสริม', title_en: "Supplements" }
                ]
            },
            data: {
                search: ''
            },
            item_list: [],
            mockup_list: [
                { id: 1, title_th: 'น้ำหอมผู้หญิง', title_en: "Women's perfume" },
                { id: 2, title_th: 'น้ำหอมผู้ชาย', title_en: "Men's perfume" },
                { id: 3, title_th: 'น้ำหอมสำหรับเส้นผม', title_en: "Perfume for hair" }
            ]
        }
    }

    handleChangeLanguage = (e) => {
        var state = this.state
        state.attr.language = e.target.rel
        localStorage.setItem('multy_language', e.target.rel)
        this.setState({ state }, () => (this.props.onChangeLanguage != undefined ? this.props.onChangeLanguage(state.attr.language) : null))
    }

    handleChange = (e) => {
        let state = this.state
        state.data.search = e.target.value
        state.item_list = []
        if (e.target.value !== "") {
            let reg = new RegExp(e.target.value, 'g');
            state.mockup_list.map((item) => {
                if (item.title_th.match(reg) || item.title_en.match(reg)) {
                    state.item_list.push(item);
                }
            })
        }
        this.setState({ state })
    }

    handleSelect = (value) => {
        let state = this.state
        state.data.search = value
        this.setState({ state })
    }

    handleTriggerMenu = () => {
        var body = document.getElementById("body")
        var footer = document.getElementById("footer")
        var state = this.state
        if (state.attr.menu_sm) {
            state.attr.menu_sm = false
            body.style.display = "block"
            footer.style.display = "block"
            document.body.style.backgroundColor = "#ffffff"
        } else {
            state.attr.menu_sm = true
            body.style.display = "none"
            footer.style.display = "none"
            document.body.style.backgroundColor = "#80b1d1"
        }
        this.setState(state)
    }

    handleSignIn = () => {
        ReactDOM.render(
            <SignInModal id="signInModal" language={this.state.attr.language} login={this.handleSignInSuccess}/>, document.getElementById('modalPart')
        )
        $('#signInModal').modal({ backdrop: 'static', keyboard: false, show: true })
    }

    handleSignInSuccess = () => {
        window.open(CONS.URL_LINK+"/profile","_self")
    }

    countCart = () => {
        var state = this.state
        var cart = (localStorage.getItem('multy_cart') == null) ? [] : JSON.parse(localStorage.getItem('multy_cart'))
        state.attr.cart_amount = 0
        if (cart.length > 0) {
            cart.map((item) => {
                state.cart_amount = state.cart_amount + parseInt(item.amount)
            })
        }
        this.setState({ state })
    }

    setPage = () => {
        var body = document.body;
        var header = document.getElementById("header")
        var body_comtent = document.getElementById("body")
        var footer = document.getElementById("footer")
        var line_box = document.getElementById("line_box")
        if (window.pageYOffset > header.offsetTop) {
            header.classList.add('position-fixed')
            body_comtent.style.paddingTop = header.offsetHeight + 'px'
        } else {
            header.classList.remove('position-fixed')
            body_comtent.style.paddingTop = '0px'
        }

        if ((window.pageYOffset + body.offsetHeight) > footer.offsetTop) {
            line_box.style.marginBottom = ((window.pageYOffset + body.offsetHeight) - footer.offsetTop) + 'px'
        } else {
            line_box.style.marginBottom = '1px'
        }
    }

    setDisplay = () => {
        if (document.documentElement.clientWidth >= 992) {
            var state = this.state
            state.attr.menu_sm = false
            body.style.display = "block"
            footer.style.display = "block"
            document.body.style.backgroundColor = "#ffffff"
            this.setState(state)
        }
    }

    componentWillMount() {
        this.countCart()
    }

    componentDidMount() {
        window.onscroll = () => { this.setPage() }
        window.onresize = () => { this.setDisplay() }
    }

    render() {
        var attr = this.state.attr
        var info = this.state.info
        var data = this.state.data
        var item_list = this.state.item_list
        var user_data = this.state.user_data
        return ([
            <div key={0} id='header' className='container-fluid'>
                <div className="row py-2 d-none d-lg-flex">
                    <div className="col-3">
                        <div className='row'>
                            <div className="col-auto">
                                <ul className="nav justify-content-center">
                                    {(info.link_line !== '' && info.link_line !== undefined) ?
                                        <li className="nav-item">
                                            <a className="nav-link p-0" href={CONS.URL_LINK + '#'}>
                                                <img src={CONS.URL_IMG + 'line.svg'} />
                                            </a>
                                        </li> : null
                                    }
                                    {(info.link_facebook !== '' && info.link_facebook !== undefined) ?
                                        <li className="nav-item">
                                            <a className="nav-link py-0" href={CONS.URL_LINK + '#'}>
                                                <img src={CONS.URL_IMG + 'facebook.svg'} />
                                            </a>
                                        </li> : null
                                    }
                                    {(info.link_instagram !== '' && info.link_instagram !== undefined) ?
                                        <li className="nav-item">
                                            <a className="nav-link p-0" href={CONS.URL_LINK + '#'}>
                                                <img src={CONS.URL_IMG + 'instagram.svg'} />
                                            </a>
                                        </li> : null
                                    }
                                </ul>
                            </div>
                            <div className="col-auto">
                                <a className="text-white dropdown-toggle" id="language" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                    <img src={CONS.URL_IMG + 'baseline-public-24px.png'} className="mr-1" />
                                    {attr.language}
                                </a>
                                <div className="dropdown-menu py-0" aria-labelledby="language">
                                    <a className={"dropdown-item a-link" + (attr.language === 'TH' ? " active" : "")} rel="TH" onClick={this.handleChangeLanguage}>TH</a>
                                    <a className={"dropdown-item a-link" + (attr.language === 'EN' ? " active" : "")} rel="EN" onClick={this.handleChangeLanguage}>EN</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <p className="text-white mb-0">{(attr.language === 'TH' ? info.text_header_th : info.text_header_en)}</p>
                    </div>
                    <div className="col-3 text-right">
                        <a className="text-white mb-0" href="#" onClick={this.handleSignIn}>
                            <img className='mr-2' src={CONS.URL_IMG + 'baseline-face-24px.png'} />
                            {(attr.language === 'TH' ? "สมัครสมาชิก / เข้าสู่ระบบ" : "Register / Sign in")}
                        </a>
                    </div>
                </div>
                <div className='row py-2 align-items-center bg-white d-flex d-lg-none'>
                    <div className='col-3'>
                        <a className="text-dark" href="#" onClick={this.handleTriggerMenu}>
                            <img className='mr-1' src={CONS.URL_IMG + 'baseline-menu-24px.svg'} />
                        </a>
                    </div>
                    <div className='col-6 px-0 text-center'>
                        <a href={CONS.URL_LINK + '/home'}>
                            <img src={CONS.URL_IMG + 'logo-sm.svg'} />
                        </a>
                    </div>
                    <div className='col-3 text-right'>
                        <a className="text-dark" href={CONS.URL_LINK + '#'}>
                            {(attr.language === 'TH' ? `(${attr.cart_amount})` : `(${attr.cart_amount})`)}
                            <img className='ml-1' src={CONS.URL_IMG + 'baseline-shopping_cart-24px.svg'} />
                        </a>
                    </div>
                </div>
            </div>,
            <div key={1} className={`menu-panel ${(attr.menu_sm ? "d-block" : "d-none")}`} id="menu-panel">
                <div className="col-12">
                    <div className='row justify-content-center py-3'>
                        <div className="col-auto">
                            <ul className="nav justify-content-center">
                                {(info.link_line !== '' && info.link_line !== undefined) ?
                                    <li className="nav-item">
                                        <a className="nav-link p-0" href={CONS.URL_LINK + '#'}>
                                            <img src={CONS.URL_IMG + 'line.svg'} />
                                        </a>
                                    </li> : null
                                }
                                {(info.link_facebook !== '' && info.link_facebook !== undefined) ?
                                    <li className="nav-item">
                                        <a className="nav-link py-0" href={CONS.URL_LINK + '#'}>
                                            <img src={CONS.URL_IMG + 'facebook.svg'} />
                                        </a>
                                    </li> : null
                                }
                                {(info.link_instagram !== '' && info.link_instagram !== undefined) ?
                                    <li className="nav-item">
                                        <a className="nav-link p-0" href={CONS.URL_LINK + '#'}>
                                            <img src={CONS.URL_IMG + 'instagram.svg'} />
                                        </a>
                                    </li> : null
                                }
                            </ul>
                        </div>
                        <div className="col-auto">
                            <a className="text-white dropdown-toggle" id="language" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                <img src={CONS.URL_IMG + 'baseline-public-24px.png'} className="mr-1" />
                                {attr.language}
                            </a>
                            <div className="dropdown-menu py-0" aria-labelledby="language">
                                <a className={"dropdown-item a-link" + (attr.language === 'TH' ? " active" : "")} rel="TH" onClick={this.handleChangeLanguage}>TH</a>
                                <a className={"dropdown-item a-link" + (attr.language === 'EN' ? " active" : "")} rel="EN" onClick={this.handleChangeLanguage}>EN</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="p-2 d-block text-dark text-center bg-menu" href={CONS.URL_LINK + "#"}>{(attr.language === 'TH' ? 'สินค้าใหม่' : 'New product')}</a>
                {info.menu_list.map((item, i) => {
                    return (
                        <a key={i} className="p-2 d-block text-dark text-center bg-menu" href={CONS.URL_LINK + '/category/' + item.id}>{(attr.language == "TH") ? item.title_th : item.title_en}</a>
                    )
                })}
                <a className="p-2 d-block text-dark text-center bg-menu" href={CONS.URL_LINK + '/brands'}>{(attr.language == 'TH') ? "แบรนด์" : "Brands"}</a>
            </div>,
            <div key={2} id='body' className='container-fluid px-0'>
                <div className="container px-0 pb-5">
                    <div className='row align-items-center d-none d-lg-flex'>
                        <div className='col-5'>
                            <div className="input-group">
                                <a href='#'>
                                    <img src={CONS.URL_IMG + 'baseline-search-24px.svg'} className="w-icon" />
                                </a>
                                <Autocomplete
                                    inputProps={{ name: "search", className: "form-search", placeholder: (attr.language === 'TH' ? "ค้นหาสินค้า" : "Search") }}
                                    value={data.search}
                                    items={item_list}
                                    getItemValue={(item) => (attr.language === 'TH' ? item.title_th : item.title_en)}
                                    onSelect={this.handleSelect}
                                    onChange={this.handleChange}
                                    menuStyle={menuStyle}
                                    wrapperStyle={{ position: "relative", flex: "1 1 auto", width: "1%" }}
                                    renderItem={(item, isHighlighted) =>
                                        <div className="dropdown-item a-link pointer p-2 text-dark" style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.id}>
                                            {(attr.language === 'TH' ? item.title_th : item.title_en)}
                                        </div>
                                    }
                                />

                            </div>
                        </div>
                        <div className='col-2 text-center'>
                            <a href={CONS.URL_LINK + '/home'}>
                                <img src={CONS.URL_IMG + 'logo-lg.png'} />
                            </a>
                        </div>
                        <div className='col-5 text-right'>
                            <a className="text-dark" href={CONS.URL_LINK + '#'}>
                                {(attr.language === 'TH' ? `ตะกร้า (${attr.cart_amount})` : `Cart (${attr.cart_amount})`)}
                                <img className='ml-2 w-icon' src={CONS.URL_IMG + 'baseline-shopping_cart-24px.svg'} />
                            </a>
                        </div>
                        <div className='col-12'>
                            <ul className="nav nav-pills nav-fill border-list">
                                <li className="nav-item">
                                    <a className="nav-link text-dark px-0" href={CONS.URL_LINK + '#'}>{(attr.language === 'TH' ? 'สินค้าใหม่' : 'New product')}</a>
                                </li>
                                {info.menu_list.map((item, i) => {
                                    return (
                                        <li className="nav-item" key={i}>
                                            <a className="nav-link text-dark px-0" href={CONS.URL_LINK + '/category/' + item.id}>{(attr.language === 'TH' ? item.title_th : item.title_en)}</a>
                                        </li>
                                    )
                                })}
                                <li className="nav-item">
                                    <a className="nav-link text-dark px-0" href={CONS.URL_LINK + '/brands'}>{(attr.language === 'TH' ? 'แบรนด์' : 'Brands')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {this.props.children}
                    <a id='line_box' className='line_box d-none d-lg-block' href='#'>
                        <p className='text-pink mb-0'>{(attr.language === 'TH' ? 'ติดต่อสอบถาม' : 'Contact')}</p>
                        <b className='text-dark'>@multyshopping</b>
                    </a>
                </div>
            </div>,
            <div key={3} id='footer' className='container-fluid'>
                <div className="row justify-content-center pt-3">
                    <a className="col-12 col-lg-auto text-center" href={CONS.URL_LINK + '#'}>
                        <p className="text-white">{(attr.language === 'TH' ? 'ตรวจสอบสถานะ' : 'Track orders')}</p>
                    </a>
                    <a className="col-12 col-lg-auto text-center" href={CONS.URL_LINK + '#'}>
                        <p className="text-white">{(attr.language === 'TH' ? 'สาขาของเรา' : 'Our branch')}</p>
                    </a>
                    <a className="col-12 col-lg-auto text-center" href={CONS.URL_LINK + '#'}>
                        <p className="text-white">{(attr.language === 'TH' ? 'คำถามที่พบบ่อย' : 'FAQ')}</p>
                    </a>
                    <a className="col-12 col-lg-auto text-center" href={CONS.URL_LINK + '#'}>
                        <p className="text-white">{(attr.language === 'TH' ? 'เงื่อนไขและข้อกำหนด' : 'Terms and conditions')}</p>
                    </a>
                </div>
                <div className="col-12 text-center">
                    <p className="text-white-50">©2019 Multy Beauty Co., Ltd.</p>
                </div>
            </div>
        ])
    }

}

let menuStyle = {
    zIndex: 10,
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    position: 'absolute',
    top: '38px',
    left: '0px',
    overflow: 'auto',
    maxHeight: '200px'
}