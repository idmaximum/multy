import React from 'react'
import ReactDOM from 'react-dom'
import CONS from '../constants'

export class SignInModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            attr: {
                modal_type: "SIGNIN",
                loading: false
            },
            data: this.initialData()
        }
    }

    initialData = () => {
        return {
            email: "",
            password: "",
            email_regis: "",
            password_regis: "",
            re_password_regis: "",
            member_fbID: "",
            agree: "N",
            email_forgot: "",
        }
    }

    handleChange = (e) => {
        var data = this.state.data
        if (e.target.type == "checkbox") {
            data[e.target.name] = (e.target.checked) ? "Y" : "N"
        } else {
            data[e.target.name] = e.target.value
        }
        this.setState({ data: data })
    }

    handleSwiteRegis = (e) => {
        var state = this.state
        state.attr.modal_type = e.target.dataset.id
        state.data = this.initialData()
        this.setState(state)
    }

    handleClose = () => {
        $(`#${this.props.id}`).modal("hide");
        setTimeout(function () {
            ReactDOM.unmountComponentAtNode(document.getElementById('modalPart'));
        }, 200);
    };

    render() {
        var attr = this.state.attr
        var data = this.state.data
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" ><b>{(attr.modal_type == "LOGIN") && (this.props.language == "TH" ? "เข้าสู่ระบบ" : "Sign In") || (attr.modal_type == "REGIS") && (this.props.language == "TH" ? "สมัครสมาชิกใหม่" : "Register") || (this.props.language == "TH" ? "ลืมรหัสผ่าน" : "Forgot Password")}</b></h5>
                            <button type="button" className="close" aria-label="Close" onClick={this.handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className='row mx-0'>
                        {(attr.modal_type == "SIGNIN") &&
                            <div className="modal-body col-12 col-lg-6 order-2 order-lg-1">
                                <div className={"form-group row" + (attr.loading ? " d-none" : "")}>
                                    <div className="col-md-6">
                                        <b>{(this.props.language == "TH") ? "อีเมล์" : "Email"}</b>
                                        <input type="email" className="form-control" name="email" value={data.email} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <b>{(this.props.language == "TH") ? "รหัสผ่าน" : "Password"}</b>
                                            </div>
                                            <div className="col-md-7 text-right text-secondary">
                                                <a className="w-100 text-dark" href='#' onClick={this.handleSwiteRegis} data-id="FORGOT">{(this.props.language == "TH") ? "ลืมรหัสผ่าน ?" : "Forgot ?"}</a>
                                            </div>
                                        </div>
                                        <input type="password" className="form-control" name="password" value={data.password} onChange={this.handleChange} onKeyPress={this.handleLoginEnter} />
                                    </div>
                                </div>
                                <div className={"form-group" + (attr.loading ? " d-none" : "")}>
                                    <button type="button" className="btn btn-danger col" onClick={this.props.login}>{(this.props.language == "TH") ? "เข้าสู่ระบบ" : "Sign In"}</button>
                                </div>
                                <div className={"form-group text-center mb-0" + (attr.loading ? " d-none" : "")}>
                                    <label className="text-secondary">{(this.props.language == "TH") ? "หรือหากท่านยังไม่ได้เป็นสมาชิก" : "If you are not a member."}</label>
                                </div>
                                <div className={"form-group mb-4" + (attr.loading ? " d-none" : "")}>
                                    <button type="button" className="btn btn-light text-primary border-primary col" onClick={this.handleSwiteRegis} data-id="REGIS">{(this.props.language == "TH") ? "สมัครสมาชิกใหม่" : "Register"}</button>
                                </div>
                                <div className={"form-group pt-4 bd-top" + (attr.loading ? " d-none" : "")}>
                                    <button type="button" className="btn btn-primary col" style={{ backgroundColor: "#4267b2" }} onClick={this.handleLogin}>
                                        <i className="fa fa-facebook-square" aria-hidden="true"></i> {(this.props.language == "TH") ? "เชื่อมต่อด้วยบัญชี Facebook" : "Connect with Facebook"}
                                    </button>
                                    {/* <FacebookLogin
                                            appId="383103128903681"
                                            fields="name,email,picture,gender"
                                            scope="public_profile,email"
                                            callback={this.responseFacebook}
                                            render={renderProps => (
                                                <button type="button" className="btn btn-primary col" style={{ backgroundColor: "#4267b2" }} onClick={renderProps.onClick}>
                                                    <i className="fa fa-facebook-square" aria-hidden="true"></i> {(this.props.language == "TH") ? "เชื่อมต่อด้วยบัญชี Facebook" : "Connect with Facebook"}
                                                </button>
                                            )}
                                        /> */}
                                </div>
                                <div className={"form-group text-center" + (attr.loading ? "" : " d-none")}>
                                    <img src={`${CONS.URL_IMG}loading-cicle.gif`} />
                                    <h5>{(this.props.language == "TH") ? "กรุณารอสักครู่..." : "please wait..."}</h5>
                                </div>
                            </div> || (attr.modal_type == "REGIS") &&
                            <div className="modal-body col-12 col-lg-6 order-2 order-lg-1">
                                <form id="register" autoComplete="off">
                                    <div className={"form-group" + (attr.loading ? " d-none" : "")}>
                                        <b>{(this.props.language == "TH") ? "อีเมล์" : "Email"}</b>
                                        <input type="email" className="form-control" name="email_regis" id="email_regis" required data-msg={(this.props.language == "TH") ? "กรุณาป้อนข้อมูลช่องนี้" : "Please enter this field."} value={data.email_regis} onChange={this.handleChange} />
                                    </div>
                                    <div className={"form-group row" + (attr.loading ? " d-none" : "")}>
                                        <div className="col-md-6">
                                            <b>{(this.props.language == "TH") ? "กำหนดรหัสผ่าน" : "Password"}</b>
                                            <input type="password" className="form-control" id="pass" name="password_regis" required data-msg={(this.props.language == "TH") ? "กรุณาป้อนข้อมูลช่องนี้" : "Please enter this field."} value={data.password_regis} onChange={this.handleChange} placeholder={(this.props.language == "TH") ? "อย่างน้อย 6 ตัวอักษรขึ้นไป" : "At least 6 characters"} />
                                        </div>
                                        <div className="col-md-6">
                                            <b>{(this.props.language == "TH") ? "ยืนยันรหัสผ่านอีกครั้ง" : "Confirm Password"}</b>
                                            <input type="password" className="form-control" id="re_pass" name="re_password_regis" required data-msg={(this.props.language == "TH") ? "กรุณาป้อนข้อมูลช่องนี้" : "Please enter this field."} value={data.re_password_regis} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className={"form-group" + (attr.loading ? " d-none" : "")}>
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" name="agree" id="agree" value="Y" checked={(data.agree == "Y") ? true : false} onChange={this.handleChange} />
                                            <label className="custom-control-label row mx-0 text-secondary" htmlFor="agree">{(this.props.language == "TH") ? "ฉันยอมรับ" : "I agree to"}&nbsp;<a className="text-primary" style={{ cursor: "pointer" }} href={CONS.URL_LINK + "#"}>{(this.props.language == "TH") ? "ข้อตกลงในการใช้บริการ และนโยบายความเป็นส่วนตัว" : "terms of service and privacy policy"}</a></label>
                                        </div>
                                    </div>
                                    <div className={"form-group" + (attr.loading ? " d-none" : "")}>
                                        <button type="button" className="btn btn-danger col" disabled={(data.agree == "Y") ? false : true}>{(this.props.language == "TH") ? "สมัครสมาชิก" : "Register"}</button>
                                    </div>
                                    <div className={"form-group text-center mb-2" + (attr.loading ? " d-none" : "")}>
                                        <label className="text-secondary">{(this.props.language == "TH") ? "หากท่านเป็นสมาชิกอยู่แล้ว " : "If you are a member. "}<a className="text-primary" style={{ cursor: "pointer" }} onClick={this.handleSwiteRegis} data-id="SIGNIN">{(this.props.language == "TH") ? "คลิกที่นี่" : "Click here"}</a></label>
                                    </div>
                                    <div className={"form-group pt-4 bd-top" + (attr.loading ? " d-none" : "")}>
                                        <button type="button" className="btn btn-primary col" style={{ backgroundColor: "#4267b2" }} onClick={this.handleLogin}>
                                            <i className="fa fa-facebook-square" aria-hidden="true"></i> {(this.props.language == "TH") ? "เชื่อมต่อด้วยบัญชี Facebook" : "Connect with Facebook"}
                                        </button>
                                        {/* <FacebookLogin
                                            appId="383103128903681"
                                            fields="name,email,picture,gender"
                                            scope="public_profile,email"
                                            callback={this.responseFacebook}
                                            render={renderProps => (
                                                <button type="button" className="btn btn-primary col" style={{ backgroundColor: "#4267b2" }} onClick={renderProps.onClick}>
                                                    <i className="fa fa-facebook-square" aria-hidden="true"></i> {(this.props.language == "TH") ? "เชื่อมต่อด้วยบัญชี Facebook" : "Connect with Facebook"}
                                                </button>
                                            )}
                                        /> */}
                                    </div>
                                    <div className={"form-group text-center" + (attr.loading ? "" : " d-none")}>
                                        <img src={`${CONS.URL_IMG}loading-cicle.gif`} />
                                        <h5>{(this.props.language == "TH") ? "กรุณารอสักครู่..." : "please wait..."}</h5>
                                    </div>
                                </form>
                            </div> ||
                            <div className="modal-body col-12 col-lg-6 order-2 order-lg-1">
                                <div className={"form-group" + (attr.loading ? " d-none" : "")}>
                                    <label id="text-forgot">{(this.props.language == "TH") ? "กรุณาระบุอีเมลของท่าน ระบบจะส่งรหัสผ่านใหม่ไปยังอีเมลที่ได้ลงทะเบียนไว้กับเรา" : "Please enter your email. The system will send a new password to the email that is registered with us."}</label>
                                </div>
                                <div className={"form-group div-forgot" + (attr.loading ? " d-none" : "")}>
                                    <b>{(this.props.language == "TH") ? "อีเมล์" : "Email"}</b>
                                    <input type="email" className="form-control" name="email_forgot" id="email_forgot" value={data.email_forgot} onChange={this.handleChange} />
                                </div>
                                <div className={"form-group div-forgot" + (attr.loading ? " d-none" : "")}>
                                    <button type="button" className="btn btn-danger col">{(this.props.language == "TH") ? "ยืนยัน" : "Submit"}</button>
                                </div>
                                <div className={"form-group div-forgot" + (attr.loading ? " d-none" : "")}>
                                    <button type="button" className="btn btn-light text-primary border-primary col" onClick={this.handleSwiteRegis} data-id="SIGNIN">{(this.props.language == "TH") ? "ย้อนกลับ" : "Back"}</button>
                                </div>
                                <div className={"form-group text-center" + (attr.loading ? "" : " d-none")}>
                                    <img src={`${CONS.URL_IMG}loading-cicle.gif`} />
                                    <h5>{(this.props.language == "TH") ? "กรุณารอสักครู่..." : "please wait..."}</h5>
                                </div>
                            </div>
                        }
                        <div className="modal-body col-12 col-lg-6 bd-modal order-1 order-lg-2">
                                <h5 className='text-center'>{(this.props.language == "TH") ? "สั่งซื้อโดยไม่เป็นสมาชิก" : "Order without membership."}</h5>
                                <p className='text-center text-muted'>{(this.props.language == "TH") ? "คุณสามารถชำระเงินโดยไม่ต้องสมัครสมาชิก และสร้างบัญชีกับเราภายหลังได้" : "You can pay without subscription. And can create an account with us later."}</p>
                                <div className="form-group">
                                    <button type="button" className="btn btn-light text-primary border-primary col">{(this.props.language == "TH") ? "สั่งซื้อโดยไม่เป็นสมาชิก" : "Order without membership."}</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

SignInModal.defaultProps = {
    id: "addrModal",
    language: "TH",
};