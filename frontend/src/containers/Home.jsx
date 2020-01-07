import React, { Component } from 'react'
import { Container} from 'reactstrap';
import Slider from '../components/Slider'
import CartSlider from '../components/CartSlider'
import Category from '../components/CategoryList'

export default class Home extends Component {

  state = {
    data:  [
      {
          "id": 1,
          "title": "iphone 5s",
          "description": "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
          "price": "100.00",
          "category": {
              "id": 1,
              "title": "smartphone"
          },
          "active": true,
          "features": [
              {
                  "id": 1,
                  "title": "apple",
                  "name": "brand"
              },
              {
                  "id": 4,
                  "title": "black",
                  "name": "color"
              }
          ],
          "image": "http://127.0.0.1:8000/media/product/xiaomi-redmi-8a-2gb32gb-black-1_260x204_adf.jpg"
      },
      {
          "id": 2,
          "title": "iphone 5s",
          "description": "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
          "price": "100.00",
          "category": {
              "id": 1,
              "title": "smartphone"
          },
          "active": true,
          "features": [
              {
                  "id": 1,
                  "title": "apple",
                  "name": "brand"
              },
              {
                  "id": 4,
                  "title": "black",
                  "name": "color"
              }
          ],
          "image": "http://127.0.0.1:8000/media/product/xiaomi-redmi-8a-2gb32gb-black-1_260x204_adf.jpg"
      },
      {
          "id": 3,
          "title": "iphone 5s",
          "description": "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
          "price": "100.00",
          "category": {
              "id": 1,
              "title": "smartphone"
          },
          "active": true,
          "features": [
              {
                  "id": 1,
                  "title": "apple",
                  "name": "brand"
              },
              {
                  "id": 4,
                  "title": "black",
                  "name": "color"
              }
          ],
          "image": "http://127.0.0.1:8000/media/product/xiaomi-redmi-8a-2gb32gb-black-1_260x204_adf.jpg"
      },
      {
          "id": 4,
          "title": "iphone 5s",
          "description": "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
          "price": "100.00",
          "category": {
              "id": 1,
              "title": "smartphone"
          },
          "active": true,
          "features": [
              {
                  "id": 1,
                  "title": "apple",
                  "name": "brand"
              },
              {
                  "id": 4,
                  "title": "black",
                  "name": "color"
              }
          ],
          "image": "http://127.0.0.1:8000/media/product/xiaomi-redmi-8a-2gb32gb-black-1_260x204_adf.jpg"
      },
      {
          "id": 5,
          "title": "iphone 5s",
          "description": "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
          "price": "100.00",
          "category": {
              "id": 1,
              "title": "smartphone"
          },
          "active": true,
          "features": [
              {
                  "id": 1,
                  "title": "apple",
                  "name": "brand"
              },
              {
                  "id": 4,
                  "title": "black",
                  "name": "color"
              }
          ],
          "image": "http://127.0.0.1:8000/media/product/xiaomi-redmi-8a-2gb32gb-black-1_260x204_adf.jpg"
      },
      {
          "id": 6,
          "title": "iphone 5s",
          "description": "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
          "price": "100.00",
          "category": {
              "id": 1,
              "title": "smartphone"
          },
          "active": true,
          "features": [
              {
                  "id": 1,
                  "title": "apple",
                  "name": "brand"
              },
              {
                  "id": 4,
                  "title": "black",
                  "name": "color"
              }
          ],
          "image": "http://127.0.0.1:8000/media/product/xiaomi-redmi-8a-2gb32gb-black-1_260x204_adf.jpg"
      },
      {
          "id": 7,
          "title": "iphone 5s",
          "description": "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
          "price": "100.00",
          "category": {
              "id": 1,
              "title": "smartphone"
          },
          "active": true,
          "features": [
              {
                  "id": 1,
                  "title": "apple",
                  "name": "brand"
              },
              {
                  "id": 4,
                  "title": "black",
                  "name": "color"
              }
          ],
          "image": "http://127.0.0.1:8000/media/product/xiaomi-redmi-8a-2gb32gb-black-1_260x204_adf.jpg"
      },
      {
          "id": 8,
          "title": "iphone 5s",
          "description": "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
          "price": "100.00",
          "category": {
              "id": 1,
              "title": "smartphone"
          },
          "active": true,
          "features": [
              {
                  "id": 1,
                  "title": "apple",
                  "name": "brand"
              },
              {
                  "id": 4,
                  "title": "black",
                  "name": "color"
              }
          ],
          "image": "http://127.0.0.1:8000/media/product/xiaomi-redmi-8a-2gb32gb-black-1_260x204_adf.jpg"
      },
      {
          "id": 9,
          "title": "iphone 5s",
          "description": "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
          "price": "100.00",
          "category": {
              "id": 1,
              "title": "smartphone"
          },
          "active": true,
          "features": [
              {
                  "id": 1,
                  "title": "apple",
                  "name": "brand"
              },
              {
                  "id": 4,
                  "title": "black",
                  "name": "color"
              }
          ],
          "image": "http://127.0.0.1:8000/media/product/xiaomi-redmi-8a-2gb32gb-black-1_260x204_adf.jpg"
      },
      {
          "id": 10,
          "title": "iphone 5s",
          "description": "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
          "price": "100.00",
          "category": {
              "id": 1,
              "title": "smartphone"
          },
          "active": true,
          "features": [
              {
                  "id": 1,
                  "title": "apple",
                  "name": "brand"
              },
              {
                  "id": 4,
                  "title": "black",
                  "name": "color"
              }
          ],
          "image": "http://127.0.0.1:8000/media/product/xiaomi-redmi-8a-2gb32gb-black-1_260x204_adf.jpg"
      },
      {
          "id": 11,
          "title": "iphone 5s",
          "description": "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
          "price": "100.00",
          "category": {
              "id": 1,
              "title": "smartphone"
          },
          "active": true,
          "features": [
              {
                  "id": 1,
                  "title": "apple",
                  "name": "brand"
              },
              {
                  "id": 4,
                  "title": "black",
                  "name": "color"
              }
          ],
          "image": "http://127.0.0.1:8000/media/product/xiaomi-redmi-8a-2gb32gb-black-1_260x204_adf.jpg"
      },
      {
          "id": 12,
          "title": "iphone 5s",
          "description": "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.",
          "price": "100.00",
          "category": {
              "id": 1,
              "title": "smartphone"
          },
          "active": true,
          "features": [
              {
                  "id": 1,
                  "title": "apple",
                  "name": "brand"
              },
              {
                  "id": 4,
                  "title": "black",
                  "name": "color"
              }
          ],
          "image": "http://127.0.0.1:8000/media/product/xiaomi-redmi-8a-2gb32gb-black-1_260x204_adf.jpg"
      },
      ]
  }


  render() {
    return (
      <Container>
        <section className="intro-section">
          <Category/>          
          <Slider />
        </section>
        <section className="showcase-section">
        </section>
        <section className="showcase-section">
          <CartSlider data={this.state.data} />
        </section>
        <section className="brands-section">
        </section>
        <section className="intro-section">
        </section>
      </Container>
    )
  }
}
