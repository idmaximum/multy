import React from 'react'
import ReactDOM from 'react-dom'

export class ConfirmModal extends React.Component {
    constructor(props) {
        super(props)
    }

    handleConfirm = () => {
        if(this.props.callBack != undefined) this.props.callBack()
        $(`#${this.props.id}`).modal("hide");
        setTimeout(function(){ 
            ReactDOM.unmountComponentAtNode(document.getElementById('modalPart'));
        }, 200);
    }

    handleClose = () => {
        $(`#${this.props.id}`).modal("hide");
        setTimeout(function(){ 
            ReactDOM.unmountComponentAtNode(document.getElementById('modalPart'));
        }, 200);
    };
    

    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" >
                                {(!this.props.iconDisplay) ? null : this.props.iconDisplay}
                                <b>{this.props.title}</b>
                            </h5>
                        </div>
                        <div className="modal-footer">
                            {(this.props.displayCancle) ? <button type="button" className="btn btn-secondary" onClick={this.handleClose}>{this.props.textCancel}</button> : null }
                            {(this.props.displayConfirm) ? <button type="button" className="btn btn-danger" onClick={this.handleConfirm}>{this.props.textConfirm}</button> : null }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

ConfirmModal.defaultProps = {
    id : "completeModel",
    displayConfirm : false,
    displayCancle : true,
    title : "ทำรายการเรียบร้อย",
    textConfirm : "ตกลง",
    textCancel : "ออก",
    iconDisplay : <i className="fa fa-check-circle px-2 text-success" aria-hidden="true"></i>
};