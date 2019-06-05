import React from 'react'
import ReactDOM from 'react-dom'
import { MainLayout } from './components/main-layout'
import { ProductUI } from './containers/product-ui'
import { ConfirmModal } from './components/confirm-modal'
import CONS from './constants'

const LANGUAGE = localStorage.getItem('multy_language')

export class Product extends React.Component {
  constructor(props) {
    super(props)
    this.child = React.createRef()
    this.state = {
      attr: {
        language: (LANGUAGE == null ? "TH" : LANGUAGE),
        image_show: 0
      },
      page: {
        id: 1,
        title_th: 'Holika Holika Nudrop Mini Brush Set 80ml',
        title_en: 'Holika Holika Nudrop Mini Brush Set 80ml',
        page_image: CONS.URL_IMG + 'test-product-img.png',
        product_Price: '990',
        discount_Percent: '20',
        discount_Price: '790',
        detail_th: 'Innisfree Green Tea Seed Serum 80ml เปิดมิติใหม่แห่งการเติมความชุ่มชื้นสู่ผิวขาดน้ำ ผิวสดชื่น เนียนใส ด้วย ‘Beauty Green Tea’ กับเซรั่มเพิ่มความชุ่มชื้นผสานประสิทธิภาพของน้ำชาเขียว เข้มข้นกว่าชาเขียวทั่วไปถึง 3.5 เท่า ด้วยกรดอะมิโนถึง 16 ชนิด ช่วยเติมน้ำให้ผิว ช่วยฟื้นฟูผิวให้กระจ่างใสและแลดูสดชื่น เตรียมผิวให้ชุ่มชื้น และพร้อมแก่การบำรุงผิวในขั้นตอนต่อไป',
        detail_en: 'Innisfree Green Tea Seed Serum 80ml opens up a new dimension of moisture to the skin, lacking water, refreshing skin, clear skin with ‘Beauty Green Tea’ with moisturizing serum that combines the efficiency of green tea water. Concentrated than green tea, generally up to 3.5 times with 16 amino acids, helps add water to the skin. Helps restore the skin to be radiant and refreshed. Prepare the skin to be moisturized And ready to nourish the skin in the next step.',
        page_title: 'Multy : Holika Holika Nudrop Mini Brush Set 80ml',
        product_attr: [
          { title_th: 'ขนาด', title_en: "Size", detail_th: '80 ml', detail_en: '80 ml' },
          { title_th: 'สภาพผิว', title_en: "Skin condition", detail_th: 'ผิวธรรมดา, ผิวมัน, ผิวแห้ง', detail_en: 'Normal skin, oily skin, dry skin' },
          { title_th: 'ส่วนประกอบ', title_en: "Ingredient", detail_th: 'Natural', detail_en: 'ธรรมชาติ' },
          { title_th: 'แบรนด์', title_en: "Brand", detail_th: 'Ipsa', detail_en: 'Ipsa' },
        ],
        breadcrumb_list: [
          { title_th: 'หน้าแรก', title_en: "Home", url: '/home' },
          { title_th: 'สกินแคร์', title_en: "Skin care", url: '/category/1' },
          { title_th: 'ทำความสะอาดผิว', title_en: "Clean the skin", url: '/category/1' },
          { title_th: 'โทนเนอร์', title_en: "Toner", url: '/category/1' },
          { title_th: 'Holika Holika Nudrop Mini Brush Set 80ml', title_en: "Holika Holika Nudrop Mini Brush Set 80ml", url: '/category/1' },
        ],
        gallery_list: []
      },
      product_list: [
        { id: '1', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '2', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '3', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '4', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '5', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '20', discount_Price: '790', },
        { id: '6', title_th: 'Holika Holika Nudrop Mini Brush Set', title_en: 'Holika Holika Nudrop Mini Brush Set', page_image: CONS.URL_IMG + 'test-product.png', product_Price: '990', discount_Percent: '', discount_Price: '', },
      ]
    }
  }

  handleChangeLanguage = (language) => {
    var attr = this.state.attr
    attr.language = language
    this.setState({ attr: attr })
  }

  handleAddProduct = () => {
    ReactDOM.render(
      <ConfirmModal id="addProduct"
        title={(this.state.attr.language == "TH") ? "เพิ่มสินค้าเรียบร้อย" : "Add products successfully"}
        textConfirm={(this.state.attr.language == "TH") ? "ดูตระกร้าสินค้า" : "Go to cart"}
        textCancel={(this.state.attr.language == "TH") ? "ดูสินค้าต่อ" : "Close"}
        displayConfirm={true} />, document.getElementById('modalPart')
    )
    $('#addProduct').modal({ backdrop: 'static', keyboard: false, show: true });
  }

  handleFavorite = () => {
    ReactDOM.render(
      <ConfirmModal id="addFavorite"
        title={(this.state.attr.favorite) ? (this.state.attr.language == "TH" ? "เพิ่มไว้ในสินค้าโปรดเรียบร้อย" : "Add to My Favorite") : (this.state.attr.language == "TH" ? "ยกเลิกเป็นสินค้าโปรดเรียบร้อย" : "Canceled as My Favorite")}
        textConfirm={(this.state.attr.language == "TH") ? "ดูรายการโปรด" : "Go to My Favorite"}
        textCancel={(this.state.attr.language == "TH") ? "ดูสินค้าต่อ" : "Close"}
        displayConfirm={true} />, document.getElementById('modalPart')
    )
    $('#addFavorite').modal({ backdrop: 'static', keyboard: false, show: true });
  }

  render() {
    return (
      <MainLayout onChangeLanguage={this.handleChangeLanguage} ref={this.child}>
        <ProductUI {...this} />
      </MainLayout>
    )
  }
}

ReactDOM.render(
  <Product />, document.getElementById('content')
)

