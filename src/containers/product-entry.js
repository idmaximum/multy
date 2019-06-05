import React from 'react'
import ReactDOM from 'react-dom'
import ReactImageMagnify from 'react-image-magnify';
import { FacebookShareButton, TwitterShareButton, LineShareButton, EmailShareButton, FacebookIcon, TwitterIcon, LineIcon, EmailIcon } from 'react-share';
import CONS from '../constants'

export class ProductEntry extends React.Component {
    render() {
        var attr = this.props.state.attr
        var page = this.props.state.page
        var ctrl = this.props
        return (
            <div className="col-12 card border-0 mb-4 px-0">
                <div className="row mx-0 py-2 py-lg-3">
                    {(page.gallery_list.length != 0) ?
                        <div className="col-12 col-lg-6 px-2 mb-4 mb-lg-0 text-center display-product-main">
                            <ReactImageMagnify {...{
                                className: "my-auto",
                                imageStyle: { width: "auto" },
                                enlargedImageContainerStyle: { zIndex: "10" },
                                smallImage: {
                                    isFluidWidth: true,
                                    src: page.gallery_list[attr.image_show].gallery_PicThumb,
                                },
                                largeImage: {
                                    src: page.gallery_list[attr.image_show].gallery_PicThumb,
                                    width: 1000,
                                    height: 1000
                                }
                            }} />
                            {(page.discount_Percent != "") ? <div className="position-absolute text-white label-discount rounded-circle"><p className='mb-0'>SAVE</p><h5>{page.discount_Percent}%</h5></div> : null}
                            <div className="media pt-3">
                                {page.gallery_list.map((item, i) => {
                                    if (attr.product_color_show == null || page.color_list[attr.product_color_show].color_id == item.product_ColorID) {
                                        return (
                                            <a onClick={ctrl.handleClickImages} key={i}>
                                                <img className={`img-thumbnail cursor-pointer` + (attr.image_show == i ? " border-dark" : " border-white half-opacity")}
                                                    src={`${item.gallery_PicThumb}`} width="60" page-id={i} />
                                            </a>
                                        )
                                    }
                                })}
                            </div>
                        </div> :
                        <div className="col-12 col-lg-6 px-2 mb-4 mb-lg-0 text-center display-product-main">
                            <ReactImageMagnify {...{
                                className: "my-auto",
                                imageStyle: { width: "auto" },
                                enlargedImageContainerStyle: { zIndex: "10" },
                                smallImage: {
                                    isFluidWidth: true,
                                    src: page.page_image,
                                },
                                largeImage: {
                                    src: page.page_image,
                                    width: 1000,
                                    height: 1000
                                }
                            }} />
                            {(page.discount_Percent != "") ? <div className="position-absolute text-white label-discount rounded-circle"><p className='mb-0'>SAVE</p><h5>{page.discount_Percent}%</h5></div> : null}
                        </div>
                    }
                    <div className="col-12 col-lg-6 px-2">
                        <h4 className="mb-0 pb-4">{(attr.language == "TH") ? page.title_th : page.title_en}</h4>
                        {(page.discount_Price != "") ? <h4 className="text-dark pb-4"><b>฿{Fnc.formatPrice(page.discount_Price)}</b> <del className="text-pink font-1">฿{Fnc.formatPrice(page.product_Price)}</del></h4> : <h4 className="text-dark pb-4"><b>฿{Fnc.formatPrice(page.product_Price)}</b></h4>}
                        <p className='mb-2'>{attr.language == "TH" ? 'จำนวน' : 'Amount'}</p>
                        <div className="row form-group pb-4">
                            <div className="col-6 col-lg-4 pr-0">
                                <input className="form-control" type="number" name="amount" />
                            </div>
                            <div className="col-6 col-lg-8">
                                <button className="btn btn-danger mr-1 px-4" onClick={ctrl.handleAddProduct}><i className="fa fa-cart-plus" aria-hidden="true"></i>{attr.language == "TH" ? ' เพิ่มลงตะกร้า' : ' Add Cart'}</button>
                            </div>
                        </div>
                        <div className="row form-group mb-2">
                            <div className="col-12 col-lg-auto mb-2" style={{ paddingTop: "4px" }}>
                                <a className="text-dark mr-3" href="#" onClick={ctrl.handleFavorite}><i className={`fa fa-heart-o`} aria-hidden="true"></i>&nbsp;{(attr.language == "TH") ? "เพิ่มไว้ในสินค้าโปรด" : "Favorite"}</a>
                            </div>
                            <div className="col-12 col-lg-auto mt-3 mt-lg-0 mb-2">
                                <span className="mb-3 row mx-0 align-items-center">
                                    <i className="fa fa-share-alt" aria-hidden="true"></i>&nbsp;{(attr.language == "TH") ? "แชร์" : "Share"}&nbsp;&nbsp;
                                        <FacebookShareButton url={window.location.href} quote={(page.page_title != "" && page.page_title != undefined) ? page.page_title : "Multy"}>
                                        <FacebookIcon size={32} round={false} />
                                    </FacebookShareButton>
                                    <TwitterShareButton url={window.location.href} title={(page.page_title != "" && page.page_title != undefined) ? page.page_title : "Multy"}>
                                        <TwitterIcon size={32} round={false} />
                                    </TwitterShareButton>
                                    <LineShareButton url={window.location.href} title={(page.page_title != "" && page.page_title != undefined) ? page.page_title : "Multy"}>
                                        <LineIcon size={32} round={false} />
                                    </LineShareButton>
                                    <EmailShareButton url={window.location.href} subject={(page.page_title != "" && page.page_title != undefined) ? page.page_title : "Multy"} body="">
                                        <EmailIcon size={32} round={false} />
                                    </EmailShareButton>
                                </span>
                            </div>
                        </div>
                        {page.product_attr.map((item, i) => {
                            return (
                                <div className='row mx-0 mt-2 border-bottom-list' key={i}>
                                    <label className="col-4 pl-0 text-black-50">{(attr.language == "TH") ? item.title_th : item.title_en}</label>
                                    <label className="col-8 pr-0">{(attr.language == "TH") ? item.detail_th : item.detail_en}</label>
                                </div>
                            )
                        })}
                        <h5 className="pb-1 mb-0 mt-4 text-black-50">{(attr.language == "TH") ? "รายละเอียดสินค้า" : "Product Detail"}</h5>
                        <span className="half-opacity" dangerouslySetInnerHTML={{ __html: (attr.language == "TH" ? page.detail_th : page.detail_en) }}></span>
                    </div>
                </div>
            </div>
        )
    }
}