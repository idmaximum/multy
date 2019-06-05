import React from 'react'
import CONS from '../constants'

export class ProfileEntry extends React.Component {

    compMain = () => {
        var attr = this.props.state.attr
        var data = this.props.state.data
        var ctrl = this.props

            return (
                <div className="col-12 col-lg-9 mb-5 px-0 pl-lg-2">
                    <div className="card rounded-5 p-4">
                        <label className="h3-h-5 pb-2"><b>{(attr.language == "TH") ? "ข้อมูลส่วนตัว" : "Profile"}</b></label>
                        <div className="border-top py-1">
                            <div className="row align-items-center">
                                <label className="col-4 col-md-3 pt-1-4 text-muted">{(attr.language == "TH") ? "รูปโปรไฟล์" : "Picture"}</label>
                                <div className="col-6 col-md-7 px-0">
                                    <img src={`${(data.member_img != "" && data.member_img != undefined) ? data.member_img : (data.member_fb_img != "" && data.member_fb_img != undefined ? data.member_fb_img : CONS.URL_IMG + "user.svg")}`} className="py-2" width="128px" />
                                    {(attr.member_img) ? null :
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="member_img" name="member_img" onChange={ctrl.handleUpload} />
                                            <label className="custom-file-label" htmlFor="member_img">{data.member_img_upload}</label>
                                        </div>
                                    }
                                </div>
                                {(attr.member_img) ?
                                    <div className="col-2 text-right">
                                        <a className="fa fa-pencil px-2 fa-1x text-muted" rel="member_img" onClick={ctrl.handleEdit}></a>
                                    </div> :
                                    <div className="col-2 text-right">
                                        <a className="fa fa-check px-2 fa-1x text-success" rel="member_img" onClick={ctrl.handleRight}></a>
                                        <a className="fa fa-times px-2 fa-1x text-danger" rel="member_img" onClick={ctrl.handleClose}></a>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="border-top py-1">
                            <div className="row align-items-center">
                                <label className="col-4 col-md-3 pt-1-4 text-muted">{(attr.language == "TH") ? "ชื่อ-นามสกุล" : "Full Name"}</label>
                                <div className="col-6 col-md-7 px-0">
                                    <input type="text" className="form-control-switch" readOnly={attr.member_name} name="member_name" value={data.member_name} onChange={ctrl.handleChange} />
                                </div>
                                {(attr.member_name) ?
                                    <div className="col-2 text-right">
                                        <a className="fa fa-pencil px-2 fa-1x text-muted" rel="member_name" onClick={ctrl.handleEdit}></a>
                                    </div> :
                                    <div className="col-2 text-right">
                                        <a className="fa fa-check px-2 fa-1x text-success" rel="member_name" onClick={ctrl.handleRight}></a>
                                        <a className="fa fa-times px-2 fa-1x text-danger" rel="member_name" onClick={ctrl.handleClose}></a>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="border-top py-1">
                            <div className="row align-items-center">
                                <label className="col-4 col-md-3 pt-1-4 text-muted">{(attr.language == "TH") ? "อีเมล" : "E-mail"}</label>
                                <div className="col-6 col-md-7 px-0">
                                    <input type="email" className="form-control-switch" readOnly={attr.member_email} name="member_email" value={data.member_email} onChange={ctrl.handleChange} />
                                </div>
                                {(attr.member_email) ?
                                    <div className="col-2 text-right">
                                        {/* <a className="fa fa-pencil px-2 fa-1x text-muted" rel="member_email" onClick={ctrl.handleEdit}></a> */}
                                    </div> :
                                    <div className="col-2 text-right">
                                        {/* <a className="fa fa-check px-2 fa-1x text-success" rel="member_email" onClick={ctrl.handleRight}></a>
                                    <a className="fa fa-times px-2 fa-1x text-danger" rel="member_email" onClick={ctrl.handleClose}></a> */}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="border-top py-1">
                            <div className="row align-items-center">
                                <label className="col-4 col-md-3 pt-1-4 text-muted">{(attr.language == "TH") ? "เบอร์มือถือ" : "Phone"}</label>
                                <div className="col-6 col-md-7 px-0">
                                    <input type="tel" className="form-control-switch" readOnly={attr.member_tel} name="member_tel" value={data.member_tel} onChange={ctrl.handleChange} />
                                </div>
                                {(attr.member_tel) ?
                                    <div className="col-2 text-right">
                                        <a className="fa fa-pencil px-2 fa-1x text-muted" rel="member_tel" onClick={ctrl.handleEdit}></a>
                                    </div> :
                                    <div className="col-2 text-right">
                                        <a className="fa fa-check px-2 fa-1x text-success" rel="member_tel" onClick={ctrl.handleRight}></a>
                                        <a className="fa fa-times px-2 fa-1x text-danger" rel="member_tel" onClick={ctrl.handleClose}></a>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="border-top py-1">
                            <div className="row align-items-center">
                                <label className="col-4 col-md-3 pt-1-4 text-muted">{(attr.language == "TH") ? "เพศ" : "Gender"}</label>
                                <div className="col-6 col-md-7 px-0">
                                    <select className="form-control-switch" disabled={attr.member_gender} name="member_gender" value={data.member_gender} onChange={ctrl.handleChange}>
                                        <option value="">{(attr.language == "TH") ? "ไม่ระบุ" : "Non-specific"}</option>
                                        <option value="male">{(attr.language == "TH") ? "ชาย" : "Male"}</option>
                                        <option value="female">{(attr.language == "TH") ? "หญิง" : "Female"}</option>
                                    </select>
                                </div>
                                {(attr.member_gender) ?
                                    <div className="col-2 text-right">
                                        <a className="fa fa-pencil px-2 fa-1x text-muted" rel="member_gender" onClick={ctrl.handleEdit}></a>
                                    </div> :
                                    <div className="col-2 text-right">
                                        <a className="fa fa-check px-2 fa-1x text-success" rel="member_gender" onClick={ctrl.handleRight}></a>
                                        <a className="fa fa-times px-2 fa-1x text-danger" rel="member_gender" onClick={ctrl.handleClose}></a>
                                    </div>
                                }
                            </div>
                        </div>
                        {/* <div className="border-top py-1">
                            <div className="row">
                                <label className="col-4 col-md-3 pt-1-4 text-muted">{(attr.language == "TH") ? "รหัสผ่าน" : "Password"}</label>
                                <div className="col-6 col-md-7 px-0">
                                    {(attr.password) ?
                                        <label className="col-12 pt-1-4 text-muted">{(attr.language == "TH") ? "เปลี่ยนแปลงรหัสผ่าน" : "Change Password"}</label> :
                                        [<label className="col-12 pt-1-4 mb-0" key={0}>{(attr.language == "TH") ? "รหัสผ่านปัจจุบัน" : "Current password"}</label>,
                                        <div className="col-12" key={1}>
                                            <input type="password" className="form-control-switch" readOnly={attr.password} name="old_password" value={data.old_password} onChange={ctrl.handleChange}/>
                                        </div>,
                                        <label className="col-12 pt-1-4 mb-0" key={2}>{(attr.language == "TH") ? "กำหนดรหัสผ่านใหม่" : "Enter new password"}</label>,
                                        <div className="col-12" key={3}>
                                            <input type="password" className="form-control-switch" readOnly={attr.password} name="password" value={data.password} onChange={ctrl.handleChange} placeholder={(attr.language == "TH") ? "อย่างน้อย 6 ตัวอักษรขึ้นไป" : "At least 6 characters"} />
                                        </div>,
                                        <label className="col-12 pt-1-4 mb-0" key={4}>{(attr.language == "TH") ? "ยืนยันรหัสผ่านใหม่อีกครั้ง" : "Confirm new password"}</label>,
                                        <div className="col-12" key={5}>
                                            <input type="password" className="form-control-switch mt-1" readOnly={attr.re_password} name="re_password" value={data.re_password} onChange={ctrl.handleChange} placeholder={(attr.language == "TH") ? "อย่างน้อย 6 ตัวอักษรขึ้นไป" : "At least 6 characters"} />
                                        </div>
                                        ]
                                    }
                                 </div>
                                {(attr.password) ?
                                    <div className="col-2 text-right">
                                        <a className="fa fa-pencil px-2 fa-1x text-muted pt-2" rel="password" onClick={ctrl.handleEdit}></a>
                                    </div> :
                                    <div className="col-2 text-right">
                                        <a className="fa fa-check px-2 fa-1x text-success pt-1-4" rel="password" onClick={ctrl.handleRight}></a>
                                        <a className="fa fa-times px-2 fa-1x text-danger pt-1-4" rel="password" onClick={ctrl.handleClose}></a>
                                    </div>
                                }
                            </div>
                        </div> */}
                        <div className="border-top py-1">
                            <div className="row align-items-center">
                                <label className="col-4 col-md-3 pt-1-4 text-muted pr-0">{(attr.language == "TH") ? "เชื่อมต่อบัญชี" : "Facebook"}</label>
                                {(data.member_fb_name != "" && data.member_fb_name != undefined) ?
                                    <div className="col-6 col-md-7 px-0">
                                        <img src={`${URL_IMAGE}s_facebook.svg`} width="20px" className="mx-2 rounded" />
                                        <label className="pt-1-4">{data.member_fb_name}</label>
                                    </div> :
                                    <div className="col-6 col-md-7 px-0">
                                        {/* <FacebookLogin
                                            appId="383103128903681"
                                            fields="name,email,picture,gender"
                                            scope="public_profile,user_gender"
                                            callback={ctrl.responseFacebook}
                                            render={renderProps => (
                                                <button type="button" className="btn btn-primary" style={{ backgroundColor: "#4267b2" }} onClick={renderProps.onClick}>
                                                    <i className="fa fa-facebook-square" aria-hidden="true"></i> {(attr.language == "TH") ? "เชื่อมต่อบัญชี Facebook" : "Connect with Facebook"}
                                                </button>
                                            )}
                                        /> */}
                                        <button type="button" className="btn btn-primary col" style={{ backgroundColor: "#4267b2" }} onClick={this.handleLogin}>
                                            <i className="fa fa-facebook-square" aria-hidden="true"></i> {(this.props.language == "TH") ? "เชื่อมต่อด้วยบัญชี Facebook" : "Connect with Facebook"}
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        
    }

    compAddrDelivery = () => {
        var addr_delivery = this.props.state.addr_delivery
        var attr = this.props.state.attr
        var ctrl = this.props

        if (attr.loading_address) {
            return (
                <div className="col-12 col-lg-9 mb-5 px-0 pl-lg-2">
                    <div className="card rounded-5 p-4 h-100">
                        <div className="col-12 px-0 text-center pt-5">
                            <img src={`${URL_IMAGE}loading-cicle.gif`} className="m-auto pt-5" /><br />
                            <h5>{(attr.language == "TH") ? "กำลังโหลด..." : "Loading..."}</h5>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col-12 col-lg-9 mb-5 px-0 pl-lg-2">
                    <div className="card rounded-5 p-4">
                        <label className="h3-h-5 pb-2"><b>{(attr.language == "TH") ? "ข้อมูลที่อยู่จัดส่ง" : "Shipping address"}</b></label>
                        {(addr_delivery != "" && addr_delivery != undefined) ?
                            addr_delivery.map((item, i) => {
                                return (
                                    <div className="border-top py-1" key={i}>
                                        <div className="row align-items-center">
                                            <div className="col-10">
                                                <label className="w-100 pt-1-4 mb-0">{item.addr_member_name}</label>
                                                <label className="w-100 mb-0">{item.addr_tel}</label>
                                                <label className="w-100">{item.addr_detail}&nbsp;{(attr.language == "TH" ? item.DISTRICT_NAME : item.DISTRICT_NAME_ENG)}&nbsp;{(attr.language == "TH" ? item.AMPHUR_NAME : item.AMPHUR_NAME_ENG)}&nbsp;{(attr.language == "TH" ? item.PROVINCE_NAME : item.PROVINCE_NAME_ENG)}&nbsp;{item.ZIPCODE}</label>
                                            </div>
                                            <div className="col-2 text-right">
                                                <a className="fa fa-pencil px-2 fa-1x text-muted" data-id={i} data-type="addr_delivery" onClick={ctrl.handleShowAddrModal}></a>
                                                <a className="fa fa-trash px-2 fa-1x text-muted" data-id={i} data-type="addr_delivery" onClick={ctrl.handleRemoveAddr}></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) :
                            <div className="border-top py-1">
                                <label className="w-100 pt-1-4 half-opacity">{(attr.language == "TH") ? "ยังไม่มีข้อมูล" : "Data empty"}</label>
                            </div>
                        }
                        <div className="border-top py-3">
                            <a className="btn btn-light border text-danger px-5 py-2 bold" data-id="add" data-type="addr_delivery" onClick={ctrl.handleShowAddrModal}>{(attr.language == "TH") ? "+ เพิ่มที่อยู่ใหม่" : "+ Add address"}</a>
                        </div>
                    </div>
                </div>
            )
        }
    }

    compAddrInvoice = () => {
        var addr_invoice = this.props.state.addr_invoice
        var attr = this.props.state.attr
        var ctrl = this.props
        if (attr.loading_address) {
            return (
                <div className="col-12 col-lg-9 mb-5 px-0 pl-lg-2">
                    <div className="card rounded-5 p-4 h-100">
                        <div className="col-12 px-0 text-center pt-5">
                            <img src={`${URL_IMAGE}loading-cicle.gif`} className="m-auto pt-5" /><br />
                            <h5>{(attr.language == "TH") ? "กำลังโหลด..." : "Loading..."}</h5>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col-12 col-lg-9 mb-5 px-0 pl-lg-2">
                    <div className="card rounded-5 p-4">
                        <label className="h3-h-5 pb-2"><b>{(attr.language == "TH") ? "ข้อมูลที่อยู่ออกใบกำกับภาษี" : "Tax invoice address"}</b></label>
                        {(addr_invoice != "" && addr_invoice != undefined) ?
                            addr_invoice.map((item, i) => {
                                return (
                                    <div className="border-top py-1" key={i}>
                                        <div className="row align-items-center">
                                            <div className="col-10">
                                                <label className={(item.addr_flag == "1") ? "w-100 pt-1-4 mb-0" : "d-none"}>{item.addr_member_name}</label>
                                                <label className={(item.addr_flag == "2") ? "w-100 pt-1-4 mb-0" : "d-none"}>{item.addr_company_name}</label>
                                                <label className={(item.addr_flag == "2") ? "w-100 mb-0" : "d-none"}>{item.addr_company_branch}</label>
                                                <label className="w-100 mb-0">{item.addr_tax_id}</label>
                                                <label className="w-100 mb-0">{item.addr_tel}</label>
                                                <label className="w-100">{item.addr_detail}&nbsp;{(attr.language == "TH" ? item.DISTRICT_NAME : item.DISTRICT_NAME_ENG)}&nbsp;{(attr.language == "TH" ? item.AMPHUR_NAME : item.AMPHUR_NAME_ENG)}&nbsp;{(attr.language == "TH" ? item.PROVINCE_NAME : item.PROVINCE_NAME_ENG)}&nbsp;{item.ZIPCODE}</label>
                                            </div>
                                            <div className="col-2 text-right">
                                                <a className="fa fa-pencil px-2 fa-1x text-muted" data-id={i} data-type="addr_invoice" onClick={ctrl.handleShowAddrModal}></a>
                                                <a className="fa fa-trash px-2 fa-1x text-muted" data-id={i} data-type="addr_invoice" onClick={ctrl.handleRemoveAddr}></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) :
                            <div className="border-top py-1">
                                <label className="w-100 pt-1-4 half-opacity">{(attr.language == "TH") ? "ยังไม่มีข้อมูล" : "Data empty"}</label>
                            </div>
                        }
                        <div className="border-top py-3">
                            <a className="btn btn-light border text-danger px-5 py-2 bold" data-id="add" data-type="addr_invoice" onClick={ctrl.handleShowAddrModal}>{(attr.language == "TH") ? "+ เพิ่มที่อยู่ใหม่" : "+ Add address"}</a>
                        </div>
                    </div>
                </div>
            )
        }
    }

    compOrderHistory = () => {
        var attr = this.props.state.attr
        var order_history = this.props.state.order_history
        var ctrl = this.props

        var year_filter = new RegExp(attr.year_filter, 'g');

        var list = []
        order_history.map((item, i) => {
            if (item.order_date.substring(6, 10).match(year_filter)) {
                list.push(item)
            }
        })

        if (attr.loading_order) {
            return (
                <div className="col-12 col-lg-9 mb-5 px-0 pl-lg-2">
                    <div className="card rounded-5 p-4 h-100">
                        <div className="col-12 px-0 text-center pt-5">
                            <img src={`${URL_IMAGE}loading-cicle.gif`} className="m-auto pt-5" /><br />
                            <h5>{(attr.language == "TH") ? "กำลังโหลด..." : "Loading..."}</h5>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col-12 col-lg-9 mb-5 px-0 pl-lg-2">
                    <div className="card rounded-5 p-4">
                        <div className="row mx-0">
                            <label className="col-6 h3-h-5 pb-2 px-0"><b>{(attr.language == "TH") ? "ประวัติการสั่งซื้อ" : "Order History"}</b></label>
                            <div className="col-6 row mx-0 px-0 justify-content-end">
                                <h6 className="mt-2-5 d-none d-md-block"><b>{(attr.language == "TH") ? "กรอง" : "Year"}&nbsp;&nbsp;</b></h6>
                                <select className="form-control" name="year_filter" style={{ width: "150px" }} value={attr.year_filter} onChange={ctrl.handleChangeAttr}>
                                    <option value="">{(attr.language == "TH") ? "ปีทั้งหมด" : "All"}</option>
                                    {attr.yearList.map((item, i) => {
                                        return (
                                            <option value={item.year} key={i}>{item.year}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        {(list != "" && list != undefined) ?
                            <div>
                                {order_history.map((item, i) => {
                                    if (item.order_date.substring(6, 10).match(year_filter)) {
                                        let net_amt = 0
                                        item.product_list.map((it, s) => {
                                            net_amt += parseFloat((it.price * it.amount))
                                        })
                                        let total_amt = parseFloat(net_amt) + (item.delivery_price != undefined && item.delivery_price != "" ? parseFloat(item.delivery_price) : 0) - (item.discount_value != undefined && item.discount_value != "" ? parseFloat(item.discount_value) : 0)
                                        //let vat_amt = total_amt * 0.07
                                        let fee_amt = (total_amt) * (item.pay_fee / 100)
                                        let grand_total_amt = total_amt + fee_amt

                                        var pay_status = ""
                                        if (item.order_status == "SUCCESS") {
                                            pay_status = (attr.language == "TH") ? "ชำระเงินเรียบร้อย" : "Payment Success"
                                        } else if (item.order_status == "WAIT") {
                                            pay_status = (attr.language == "TH") ? "รอการชำระเงิน" : "Waiting for payment"
                                        } else if (item.order_status == "TIMEOUT") {
                                            pay_status = (attr.language == "TH") ? "เลยกำหนดชำระเงิน" : "Overdue"
                                        } else if (item.order_status == "CHECK") {
                                            pay_status = (attr.language == "TH") ? "รอตรวจสอบยอดเงิน" : "Waiting for approval"
                                        }

                                        var pay_type = ""
                                        if (item.pay_type == "CREDIT") {
                                            pay_type = (attr.language == "TH") ? "เครดิต/เดบิต" : "Credit/Debit"
                                        } else if (item.pay_type == "TRANSFER") {
                                            pay_type = (attr.language == "TH") ? "โอนเงิน" : "Transfer"
                                            if (item.order_status == "WAIT") {
                                                var dateNow = new Date()
                                                var dateEnd = new Date(item.order_date.substring(6, 10), item.order_date.substring(3, 5) - 1, item.order_date.substring(0, 2), item.order_date.substring(11, 13), item.order_date.substring(14, 16), item.order_date.substring(17, 19))
                                                dateEnd.setDate(dateEnd.getDate() + 1)
                                                var date = Fnc.formatDateTime(dateEnd)
                                            }
                                        } else {
                                            pay_type = (attr.language == "TH") ? "อินเตอร์เน็ตแบงค์กิ้ง" : "Banking/Counter"
                                            if (item.order_status == "WAIT") {
                                                var dateNow = new Date()
                                                var dateEnd = new Date(item.order_date.substring(6, 10), item.order_date.substring(3, 5) - 1, item.order_date.substring(0, 2), item.order_date.substring(11, 13), item.order_date.substring(14, 16), item.order_date.substring(17, 19))
                                                dateEnd.setDate(dateEnd.getDate() + 1)
                                                var date = Fnc.formatDateTime(dateEnd)
                                            }
                                        }

                                        return (
                                            <div className="border-top py-2" key={i}>
                                                <div className="row align-items-center">
                                                    <label className="col-5 col-md-3 pr-0 text-muted">{(attr.language == "TH") ? "สถานะ" : "Status"}</label>
                                                    <label className="col-7 col-md-9">{pay_status}</label>
                                                </div>
                                                <div className="row align-items-center">
                                                    <label className="col-5 col-md-3 pr-0 text-muted">{(attr.language == "TH") ? "หมายเลขคำสั่งซื้อ" : "Order No"}</label>
                                                    <label className="col-7 col-md-9">{item.order_no}</label>
                                                </div>
                                                <div className="row align-items-center">
                                                    <label className="col-5 col-md-3 pr-0 text-muted">{(attr.language == "TH") ? "วันที่สั่งซื้อ" : "Order date"}</label>
                                                    <label className="col-7 col-md-9">{item.order_date}</label>
                                                </div>
                                                <div className="row align-items-center">
                                                    <label className="col-5 col-md-3 pr-0 text-muted">{(attr.language == "TH") ? "ยอดสุทธิ" : "Net Value"}</label>
                                                    <label className="col-7 col-md-9">฿{Fnc.formatPrice(grand_total_amt, 2)}</label>
                                                </div>
                                                <div className="row align-items-center">
                                                    <label className="col-5 col-md-3 pr-0 text-muted">{(attr.language == "TH") ? "วิธีการชำระเงิน" : "Pay method"}</label>
                                                    <label className="col-7 col-md-9">{pay_type}</label>
                                                </div>
                                                {(item.pay_type != "CREDIT" && item.order_status == "WAIT") ?
                                                    <div className="row align-items-center">
                                                        <label className="col-5 col-md-3 pr-0 text-muted">{(attr.language == "TH") ? "กำหนดชำระเงิน" : "Payment schedule"}</label>
                                                        <label className="col-auto">{date}</label>
                                                        <Countdown
                                                            date={dateEnd}
                                                            renderer={({ hours, minutes, seconds, completed }) => {
                                                                if (completed) {
                                                                    return <label className="col-auto">{(attr.language == "TH") ? "(เลยกำหนดชำระเงิน)" : "(Overdue)"}</label>;
                                                                } else {
                                                                    if (hours < 10) hours = "0" + hours
                                                                    if (minutes < 10) minutes = "0" + minutes
                                                                    if (seconds < 10) seconds = "0" + seconds
                                                                    return <label className="col-auto">({hours}:{minutes}:{seconds})</label>;
                                                                }
                                                            }}
                                                        />
                                                    </div> : null
                                                }
                                                <div className="py-2">
                                                    <button type="button" className="btn btn-danger" data-id={i} onClick={ctrl.handleShowOrderDetail}>{(attr.language == "TH") ? "ดูรายละเอียด" : "View detail"}</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div> :
                            <div className="border-top py-3">
                                <label className="w-100 pt-1-4 half-opacity">{(attr.language == "TH") ? "ท่านยังไม่เคยสั่งซื้อ" : "Data empty"}</label>
                            </div>}
                    </div>
                </div>
            )
        }
    }

    compOrderDetail = () => {
        var attr = this.props.state.attr
        var ctrl = this.props
        var order_history = this.props.state.order_history
        var information = this.props.state.information

        if (attr.loading_order) {
            return (
                <div className="col-12 col-lg-9 mb-5 px-0 pl-lg-2">
                    <div className="card rounded-5 p-4 h-100">
                        <div className="col-12 px-0 text-center pt-5">
                            <img src={`${URL_IMAGE}loading-cicle.gif`} className="m-auto pt-5" /><br />
                            <h5>{(attr.language == "TH") ? "กำลังโหลด..." : "Loading..."}</h5>
                        </div>
                    </div>
                </div>
            )
        } else {
            let net_amt = 0
            order_history[attr.order_detail].product_list.map((it, s) => {
                net_amt += parseFloat((it.price * it.amount))
            })
            let total_amt = parseFloat(net_amt) + (order_history[attr.order_detail].delivery_price != undefined && order_history[attr.order_detail].delivery_price != "" ? parseFloat(order_history[attr.order_detail].delivery_price) : 0) - (order_history[attr.order_detail].discount_value != undefined && order_history[attr.order_detail].discount_value != "" ? parseFloat(order_history[attr.order_detail].discount_value) : 0)
            //let vat_amt = total_amt * 0.07
            let fee_amt = (total_amt) * (order_history[attr.order_detail].pay_fee / 100)
            let grand_total_amt = total_amt + fee_amt

            var pay_status = ""
            if (order_history[attr.order_detail].order_status == "SUCCESS") {
                pay_status = (attr.language == "TH") ? "ชำระเงินเรียบร้อย" : "Payment Success"
            } else if (order_history[attr.order_detail].order_status == "WAIT") {
                pay_status = (attr.language == "TH") ? "รอการชำระเงิน" : "Waiting for payment"
            } else if (order_history[attr.order_detail].order_status == "TIMEOUT") {
                pay_status = (attr.language == "TH") ? "เลยกำหนดชำระเงิน" : "Overdue"
            } else if (order_history[attr.order_detail].order_status == "CHECK") {
                pay_status = (attr.language == "TH") ? "รอตรวจสอบยอดเงิน" : "Waiting for approval"
            }

            var pay_type = ""
            if (order_history[attr.order_detail].pay_type == "CREDIT") {
                pay_type = (attr.language == "TH") ? "เครดิต/เดบิต" : "Credit/Debit"
            } else if (order_history[attr.order_detail].pay_type == "TRANSFER") {
                pay_type = (attr.language == "TH") ? "โอนเงิน" : "Transfer"
            } else {
                pay_type = (attr.language == "TH") ? "อินเตอร์เน็ตแบงค์กิ้ง" : "Banking/Counter"
            }

            var order_send = ""
            if (order_history[attr.order_detail].order_send == "SEND") {
                order_send = (attr.language == "TH") ? "จัดส่งตามที่อยู่" : "Delivery at the address"
            } else {
                order_send = (attr.language == "TH") ? "รับของที่ร้าน" : "At the store"
            }

            return (
                <div className="col-12 col-lg-9 mb-5 px-0 pl-lg-2">
                    <div className="card rounded-5 p-4">
                        <label className="h3-h-5 pb-2"><b>{(attr.language == "TH") ? "ใบสั่งซื้อสินค้า" : "Pay Order"}</b></label>
                        <div className="border-top py-3">
                            <div className="row mb-3">
                                <div className="col-12 col-md-6">
                                    <img src={`${URL_IMAGE}logo.png`} height="65px" />
                                    <span className="w-100 mb-0 pt-1 d-block" style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: (attr.language == "TH") ? information.page_shipping : information.page_shipping_en }}></span>
                                </div>
                                <div className="col-12 col-md-6 text-md-right mt-4 mt-md-0">
                                    <label className="w-100"><b>{(attr.language == "TH") ? "หมายเลขคำสั่งซื้อ" : "Order No"}&nbsp;:&nbsp;{order_history[attr.order_detail].order_no}</b></label>
                                    <label className="w-100"><b>{(attr.language == "TH") ? "วันที่สั่งซื้อ" : "Order date"}&nbsp;:&nbsp;{order_history[attr.order_detail].order_date}</b></label>
                                    <label className="w-100"><b>{(attr.language == "TH") ? "สถานะ" : "Status"}&nbsp;:&nbsp;{pay_status}</b></label>
                                    <label className="w-100"><b>{(attr.language == "TH") ? "วิธีการรับสินค้า" : "Receive method"} : {order_send}</b></label>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12 col-md-6">
                                    {(order_history[attr.order_detail].order_send == "SEND") ?
                                        <div className="card p-3 h-100">
                                            <label className="w-100"><b>{(attr.language == "TH") ? "ที่อยู่จัดส่ง" : "Shipping address"}</b></label>
                                            <label className="w-100 mb-0">{order_history[attr.order_detail].addr_delivery.name}</label>
                                            <label className="w-100 mb-0">{order_history[attr.order_detail].addr_delivery.tel}</label>
                                            <label className="w-100 mb-0">
                                                {order_history[attr.order_detail].addr_delivery.addr}&nbsp;
                                            {(attr.language == "TH") ? order_history[attr.order_detail].addr_delivery.sub_district_th : order_history[attr.order_detail].addr_delivery.sub_district_en}&nbsp;
                                            {(attr.language == "TH") ? order_history[attr.order_detail].addr_delivery.district_th : order_history[attr.order_detail].addr_delivery.district_en}&nbsp;
                                            {(attr.language == "TH") ? order_history[attr.order_detail].addr_delivery.province_th : order_history[attr.order_detail].addr_delivery.province_en}&nbsp;
                                            {order_history[attr.order_detail].addr_delivery.zip_code}
                                            </label>
                                        </div> :
                                        <div className="card p-3 h-100">
                                            <label className="w-100"><b>{(attr.language == "TH") ? "รับของที่ร้าน" : "Store address"}</b></label>
                                            <span className="w-100 mb-0 d-block" style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: (attr.language == "TH") ? information.page_shipping : information.page_shipping_en }}></span>
                                        </div>
                                    }
                                </div>
                                <div className="col-12 col-md-6 mt-3 mt-md-0">
                                    <div className="card p-3 h-100">
                                        <label className="w-100"><b>{(attr.language == "TH") ? "ที่อยู่ออกใบกำกับภาษี" : "Tax invoice address"}</b></label>
                                        <label className="w-100 mb-0">{order_history[attr.order_detail].addr_invoice.name}&nbsp;{(order_history[attr.order_detail].addr_invoice.branch != "" && order_history[attr.order_detail].addr_invoice.branch != undefined) ? `(${order_history[attr.order_detail].addr_invoice.branch})` : ""}</label>
                                        <label className="w-100 mb-0">{(attr.language == "TH") ? "เลขประจำตัวผู้เสียภาษี" : "Tax ID"}&nbsp;{order_history[attr.order_detail].addr_invoice.tax_invoice}</label>
                                        <label className="w-100 mb-0">{order_history[attr.order_detail].addr_invoice.tel}</label>
                                        <label className="w-100 mb-0">
                                            {order_history[attr.order_detail].addr_invoice.addr}&nbsp;
                                        {(attr.language == "TH") ? order_history[attr.order_detail].addr_invoice.sub_district_th : order_history[attr.order_detail].addr_invoice.sub_district_en}&nbsp;
                                        {(attr.language == "TH") ? order_history[attr.order_detail].addr_invoice.district_th : order_history[attr.order_detail].addr_invoice.district_en}&nbsp;
                                        {(attr.language == "TH") ? order_history[attr.order_detail].addr_invoice.province_th : order_history[attr.order_detail].addr_invoice.province_en}&nbsp;
                                        {order_history[attr.order_detail].addr_invoice.zip_code}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="card py-2 px-3">
                                <div className="row mx-0 border-bottom pb-2 d-none d-sm-flex">
                                    <div className="col-1 pr-0">
                                        <b>{(attr.language == "TH") ? "ลำดับ" : "#"}</b>
                                    </div>
                                    <div className="col-6 px-0 text-center">
                                        <b>{(attr.language == "TH") ? "รายการ" : "Product"}</b>
                                    </div>
                                    <div className="col-2 px-0">
                                        <b>{(attr.language == "TH") ? "ราคาต่อหน่วย" : "Price"}</b>
                                    </div>
                                    <div className="col-1 px-0">
                                        <b>{(attr.language == "TH") ? "จำนวน" : "Amount"}</b>
                                    </div>
                                    <div className="col-2 pl-0 text-right">
                                        <b>{(attr.language == "TH") ? "มูลค่าสินค้า" : "Value"}</b>
                                    </div>
                                </div>
                                {order_history[attr.order_detail].product_list.map((item, i) => {
                                    return (
                                        <div className="border-bottom py-2" key={i}>
                                            <div className="row align-items-center">
                                                <div className="col-1 pr-0">
                                                    <label className="mb-0">{i + 1}</label>
                                                </div>
                                                <div className="col-11 col-md-6">
                                                    <div className="row align-items-center">
                                                        <img src={`${item.pic}`} height="50px" className="pr-1" />
                                                        <label className="mb-0">{(attr.language == "TH") ? item.name_th : item.name_en}&nbsp;{(item.color_id != "" && item.color_id != undefined) ? "(" + (attr.language == "TH" ? item.color_name_th : item.color_name_en) + ")" : ""}</label>
                                                    </div>
                                                </div>
                                                <div className="col-2 px-0 d-none d-md-block">
                                                    <label className="mb-0">฿{Fnc.formatPrice(item.price, 2)}</label>
                                                </div>
                                                <div className="col-1 px-0 d-none d-md-block">
                                                    <label className="mb-0">{Fnc.formatPrice(item.amount)}</label>
                                                </div>
                                                <div className="col-2 pl-0 text-right d-none d-md-block">
                                                    <label className="mb-0">฿{Fnc.formatPrice(item.price * item.amount, 2)}</label>
                                                </div>
                                                <div className="col-6 d-block d-md-none">
                                                    <label className="mb-0">฿{Fnc.formatPrice(item.price, 2)} x {Fnc.formatPrice(item.amount)}</label>
                                                </div>
                                                <div className="col-6 d-block d-md-none">
                                                    <label className="mb-0 w-100 text-right">฿{Fnc.formatPrice(item.price * item.amount, 2)}</label>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="py-2">
                                    <div className="row mb-1">
                                        <div className="col-6 col-lg-9 text-md-right half-opacity">{(attr.language == "TH") ? "รวมมูลค่าสินค้า" : "Total Value"}</div>
                                        <div className="col-6 col-lg-3 text-right">฿{Fnc.formatPrice(net_amt, 2)}</div>
                                    </div>
                                    <div className="row mb-1">
                                        <div className="col-6 col-lg-9 text-md-right half-opacity">{(attr.language == "TH") ? "ค่าจัดส่ง" : "Delivery fee"}</div>
                                        <div className="col-6 col-lg-3 text-right">฿{Fnc.formatPrice(order_history[attr.order_detail].delivery_price, 2)}</div>
                                    </div>
                                    <div className="row mb-1">
                                        <div className="col-6 col-lg-9 text-md-right half-opacity">{(attr.language == "TH") ? "ส่วนลด" : "Discount"}</div>
                                        <div className="col-6 col-lg-3 text-right">฿-{Fnc.formatPrice(order_history[attr.order_detail].discount_value, 2)}</div>
                                    </div>
                                    {/* <div className="row mb-1">
                                    <div className="col-6 col-lg-9 text-md-right half-opacity pr-0 pr-sm-3">{(attr.language == "TH") ? "รวมเป็นมูลค่าสินค้า" : "Total Price"}</div>
                                    <div className="col-6 col-lg-3 text-right">฿{Fnc.formatPrice(total_amt, 2)}</div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-6 col-lg-9 text-md-right half-opacity">{(attr.language == "TH") ? "ภาษีมูลค่าเพิ่ม" : "Vat"}&nbsp;7 %</div>
                                    <div className="col-6 col-lg-3 text-right">฿{Fnc.formatPrice(vat_amt, 2)}</div>
                                </div> */}
                                    <div className="row mb-1">
                                        <div className="col-6 col-lg-9 text-md-right half-opacity">{(attr.language == "TH") ? "ค่าธรรมเนียมการชำระเงิน" : "Payment fee"}</div>
                                        <div className="col-6 col-lg-3 text-right">฿{Fnc.formatPrice(fee_amt, 2)}</div>
                                    </div>
                                    <div className="row mb-1">
                                        <div className="col-6 col-lg-9 text-md-right text-muted">{(attr.language == "TH") ? "ยอดสุทธิ" : "Net Value"}</div>
                                        <div className="col-6 col-lg-3 text-right"><b>฿{Fnc.formatPrice(grand_total_amt, 2)}</b></div>
                                    </div>
                                    <div className="row mb-1">
                                        <div className="col-6 col-lg-9 text-md-right half-opacity">{(attr.language == "TH") ? "วิธีการชำระเงิน" : "Pay method"}</div>
                                        <div className="col-6 col-lg-3 text-right">{pay_type}</div>
                                    </div>
                                </div>
                            </div>
                            {(order_history[attr.order_detail].pay_type == "TRANSFER") ?
                                <div>
                                    <div className="card py-2 px-3 mt-3">
                                        <div className="col-12 px-0">
                                            <b>{(attr.language == "TH") ? "ท่านสามารถโอนเงินเข้ายังบัญชีธนาคารดังนี้" : "You can transfer to the bank account as follows"}</b>
                                        </div>
                                        {(information.bank_list.map((item, i) => {
                                            return (
                                                <div className="row align-items-center py-1" key={i}>
                                                    <div className="col-3 col-lg-2 px-0 text-center">
                                                        <img src={`${item.bank_pic}`} width="50px" />
                                                    </div>
                                                    <div className="col-9 col-lg-10 px-0">
                                                        <div className="col-12 px-0">{item.bank_name}</div>
                                                        <div className="col-12 px-0">{(attr.language == "TH") ? "เลขที่บัญชี" : "Account No."}&nbsp;{item.bank_number}</div>
                                                        <div className="col-12 px-0">{(attr.language == "TH") ? "ชื่อบัญชี" : "Account Name"}&nbsp;{item.bank_nameAccount}</div>
                                                    </div>
                                                </div>
                                            )
                                        }))}
                                    </div>
                                    <div className="card py-2 px-3 mt-3">
                                        <div className="col-12 px-0 pb-2">
                                            <b>{(attr.language == "TH") ? "การแจ้งโอนเงิน" : "Bank Transfer"}</b>
                                        </div>
                                        {(order_history[attr.order_detail].transfer_list.length > 0) ?
                                            <div className="col-12 px-0 pb-2">
                                                {order_history[attr.order_detail].transfer_list.map((item, i) => {
                                                    return (
                                                        <div className="row pb-2 align-items-center" key={i}>
                                                            <div className="col-12 col-md-12 col-lg-4">{item.payment_bank_name}</div>
                                                            <div className="col-12 col-md-5 col-lg-4">{(attr.language == "TH") ? "วันที่" : "Date"}&nbsp;{item.payment_date}</div>
                                                            <div className="col-9 col-md-5 col-lg-3">{(attr.language == "TH") ? "จำนวนเงิน" : "Amount"}&nbsp;฿{item.payment_price}</div>
                                                            {/* <div className="col-3 col-md-2 col-lg-1"><a href={item.payment_file} target="_blank" title={(attr.language == "TH") ? "ดูรูปภาพ" : "View image"}><i className="fa fa-picture-o fa-2x"></i></a></div> */}
                                                            <div className="col-3 col-md-2 col-lg-1"><a href="#" data-toggle="modal" data-target={"#payment_file_"+i} title={(attr.language == "TH") ? "ดูรูปภาพ" : "View image"}><i className="fa fa-picture-o fa-2x"></i></a></div>
                                                            <div className="modal fade" id={"payment_file_"+i} tabIndex="-1" role="dialog" aria-hidden="true">
                                                                <div className="modal-dialog modal-dialog-centered" role="document">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h5 className="modal-title" id="exampleModalLongTitle">{(attr.language == "TH") ? "รูปภาพที่แนบ" : "Image File"}</h5>
                                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                            </button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <img src={item.payment_file} className="w-100"/>
                                                                        </div>  
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            :
                                            <div className="col-12 px-0 pb-3 half-opacity">{(attr.language == "TH") ? "ท่านยังไม่ได้ทำการโอนเงิน" : "Data Empty"}</div>
                                        }
                                        <div className="col-12 px-0">
                                            <button type="button" className="btn btn-danger" onClick={ctrl.handleShowTransfer}>
                                                <span>{(attr.language == "TH") ? "แจ้งโอนเงิน" : "Transfer"}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div> : null
                            }
                        </div>
                    </div>
                </div>
            )
        }
    }

    compProductFavorite = () => {
        var favorite_list = this.props.state.favorite_list
        var attr = this.props.state.attr
        var ctrl = this.props

        if (attr.loading_favorite) {
            return (
                <div className="col-12 col-lg-9 mb-5 px-0 pl-lg-2">
                    <div className="card rounded-5 p-4 h-100">
                        <div className="col-12 px-0 text-center pt-5">
                            <img src={`${URL_IMAGE}loading-cicle.gif`} className="m-auto pt-5" /><br />
                            <h5>{(attr.language == "TH") ? "กำลังโหลด..." : "Loading..."}</h5>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col-12 col-lg-9 mb-5 px-0 pl-lg-2">
                    <div className="card rounded-5 p-4">
                        <label className="h3-h-5 pb-2"><b>{(attr.language == "TH") ? "สินค้าที่สนใจ" : "Favorite"}</b></label>
                        {(favorite_list != "" && favorite_list != undefined) ?
                            <div className="border-top pb-3">
                                <div className="row mb-3">
                                    {favorite_list.map((item, i) => {
                                        return (
                                            <div className="col-12 col-md-4 mt-3" key={i}>
                                                <div className="card h-100 pt-2">
                                                    <a onClick={ctrl.handleRemoveFavorite}><img data-id={i} src={`${URL_IMAGE}minus-symbol.svg`} className="label-remove" width="25px" /></a>
                                                    <a className="nav-link text-center p-0 h-100 a-special d-contents" href={URL_LINK+`/product/${item.id}`}>
                                                        {(item.discount_Percent != "" && item.discount_Percent != undefined ? <div className="position-absolute bg-danger text-white px-2 label-discount">-{item.discount_Percent}%</div> : null)}
                                                        <img src={`${item.pages_images}`} className={"product-img img-special m-auto"} />
                                                        <p className="text-dark pt-2 px-1"><b>{(attr.language == "TH") ? item.title_th : item.title_en}</b></p>
                                                        {(item.discount_Price != "" && item.discount_Price != undefined ? <p className="text-danger"><del className="text-muted">฿{Fnc.formatPrice(item.product_Price)}</del> {Fnc.formatPrice(item.discount_Price)}</p> : <p className="text-danger">฿{Fnc.formatPrice(item.product_Price)}</p>)}
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div> :
                            <div className="border-top py-3">
                                <label className="w-100 pt-1-4 half-opacity">{(attr.language == "TH") ? "ยังไม่มีสินค้าที่สนใจ" : "Data empty"}</label>
                            </div>
                        }
                    </div>
                </div>
            )
        }
    }

    compInviteFriend = () => {
        var data = this.props.state.data
        var ctrl = this.props
        return (
            <div className="col-12 col-lg-9 mb-5 px-0 pl-lg-2">
                <div className="card rounded-5 p-4">
                    <label className="h3-h-5 pb-2"><b>ชวนเพื่อน</b></label>
                    <div className="border-top py-3">
                        <label className="w-100 pt-3">คัดลอกลิงค์ด้านล่าง เพื่อแชร์ลิงค์ชวนเพื่อนของคุณ</label>
                        <div className="row mx-0">
                            <label className="col border mb-0 py-1">{data.invite_friend_link}</label>
                            <div className="col-12 col-md-auto text-center text-md-left mt-3 mt-md-0">
                                <CopyToClipboard text={data.invite_friend_link}
                                    onCopy={() => Alert.showMsg("คัดลอกลิงค์สำเร็จ")}>
                                    <button type="button" className="btn btn-danger">คัดลอกลิงค์</button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        var attr = this.props.state.attr
        var ctrl = this.props
        return (
            <div className="col-12 px-0 mb-4 pt-2 pt-lg-3">
                <div className="row mx-0">
                    <div className="col-12 col-lg-3 mb-2 mb-lg-5 px-0 pr-lg-2">
                        <div className="card rounded-5 d-none d-lg-flex">
                            <div className="list-group list-group-flush">
                                <a className={`list-group-item ${(attr.menu_active == "main" ? " text-danger" : " text-dark")}`} id="main" onClick={ctrl.clickMenu}>{(attr.language == "TH") ? "ข้อมูลส่วนตัว" : "Profile"}</a>
                                <a className={`list-group-item ${(attr.menu_active == "addr_delivery" ? " text-danger" : " text-dark")}`} id="addr_delivery" onClick={ctrl.clickMenu}>{(attr.language == "TH") ? "ข้อมูลที่อยู่จัดส่ง" : "Shipping address"}</a>
                                <a className={`list-group-item ${(attr.menu_active == "addr_invoice" ? " text-danger" : " text-dark")}`} id="addr_invoice" onClick={ctrl.clickMenu}>{(attr.language == "TH") ? "ข้อมูลที่อยู่ออกใบกำกับภาษี" : "Tax invoice address"}</a>
                                <a className={`list-group-item ${(attr.menu_active.match(/order_history|order_detail/g) ? " text-danger" : " text-dark")}`} id="order_history" onClick={ctrl.clickMenu}>{(attr.language == "TH") ? "ประวัติการสั่งซื้อ" : "Order history"}</a>
                                <a className={`list-group-item ${(attr.menu_active == "product_favorite" ? " text-danger" : " text-dark")}`} id="product_favorite" onClick={ctrl.clickMenu}>{(attr.language == "TH") ? "สินค้าที่สนใจ" : "Favorite"}</a>
                                {/* <a className={`list-group-item ${(attr.menu_active == "invite_friend" ? " text-danger" : " text-dark")}`} id="invite_friend" onClick={ctrl.clickMenu}>{(attr.language == "TH") ? "ชวนเพื่อน" : "Invite friend"}</a> */}
                                <a className={`list-group-item text-dark"`} id="log_out" onClick={ctrl.handleLogOut}>{(attr.language == "TH") ? "ออกจากระบบ" : "Sign out"}</a>
                            </div>
                        </div>
                        <div className="card rounded-5 d-flex d-lg-none">
                            <a className="nav-link after-menu" id="profilemenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                <label className="mb-0 w-100 px-2">{
                                    (attr.menu_active == "main") && (attr.language == "TH" ? "ข้อมูลส่วนตัว" : "Profile") ||
                                    (attr.menu_active == "addr_delivery") && (attr.language == "TH" ? "ข้อมูลที่อยู่จัดส่ง" : "Shipping address") ||
                                    (attr.menu_active == "addr_invoice") && (attr.language == "TH" ? "ข้อมูลที่อยู่ออกใบกำกับภาษี" : "Tax invoice address") ||
                                    (attr.menu_active.match(/order_history|order_detail/g)) && (attr.language == "TH" ? "ประวัติการสั่งซื้อ" : "Order history") ||
                                    (attr.menu_active == "product_favorite") && (attr.language == "TH" ? "สินค้าที่สนใจ" : "Favorite") ||
                                    // (attr.menu_active == "invite_friend") && (attr.language == "TH" ? "ชวนเพื่อน" : "Invite friend") ||
                                    null
                                }</label>
                            </a>
                            <div className="dropdown-menu w-100 mt-0" aria-labelledby="profilemenu">
                                <a className={"dropdown-item a-link" + (attr.menu_active == "main" ? " active" : "")} id="main" onClick={ctrl.clickMenu}>{(attr.language == "TH") ? "ข้อมูลส่วนตัว" : "Profile"}</a>
                                <a className={"dropdown-item a-link" + (attr.menu_active == "addr_delivery" ? " active" : "")} id="addr_delivery" onClick={ctrl.clickMenu}>{(attr.language == "TH") ? "ข้อมูลที่อยู่จัดส่ง" : "Shipping address"}</a>
                                <a className={"dropdown-item a-link" + (attr.menu_active == "addr_invoice" ? " active" : "")} id="addr_invoice" onClick={ctrl.clickMenu}>{(attr.language == "TH") ? "ข้อมูลที่อยู่ออกใบกำกับภาษี" : "Tax invoice address"}</a>
                                <a className={"dropdown-item a-link" + (attr.menu_active.match(/order_history|order_detail/g) ? " active" : "")} id="order_history" onClick={ctrl.clickMenu}>{(attr.language == "TH") ? "ประวัติการสั่งซื้อ" : "Order history"}</a>
                                <a className={"dropdown-item a-link" + (attr.menu_active == "product_favorite" ? " active" : "")} id="product_favorite" onClick={ctrl.clickMenu}>{(attr.language == "TH") ? "สินค้าที่สนใจ" : "Favorite"}</a>
                                {/* <a className={"dropdown-item a-link" + (attr.menu_active == "invite_friend" ? " active" : "")} id="invite_friend" onClick={ctrl.clickMenu}>{(attr.language == "TH") ? "ชวนเพื่อน" : "Invite friend"}</a> */}
                                <a className={"dropdown-item a-link"} id="log_out" onClick={ctrl.handleLogOut}>{(attr.language == "TH") ? "ออกจากระบบ" : "Sign out"}</a>
                            </div>
                        </div>
                    </div>
                    {
                        (attr.menu_active == "main") && this.compMain() ||
                        (attr.menu_active == "addr_delivery") && this.compAddrDelivery() ||
                        (attr.menu_active == "addr_invoice") && this.compAddrInvoice() ||
                        (attr.menu_active == "order_history") && this.compOrderHistory() ||
                        (attr.menu_active == "order_detail") && this.compOrderDetail() ||
                        (attr.menu_active == "product_favorite") && this.compProductFavorite() ||
                        // (attr.menu_active == "invite_friend") && this.compInviteFriend() ||
                        null
                    }
                </div>
            </div>
        )
    }
}