import React from 'react'
import './services.css'

const Services = () => {
  return ( <section className="services" id="services">
    <div className="container">
            <div className="services__header">

                  <h2 className="title-2">Что мы можем</h2>

            </div>

            <div className="services_text">
                <ul>
                    <li><span>📍</span> Создание электронно-цифровой карты</li>
                    <li><span>🗺</span> Разработка 3D модели местности на основе географической информации</li>
                    <li><span>📌</span> Векторизация (оцифровка) различных картографических материалов</li>
                    <li><span>📊</span> Работа с различными базами данных в области географической информативной системы</li>
                    <li><span>🌍</span> Публикация географической информации в сети интернет</li>
                </ul>
            </div>

    </div>
</section>
 );
}
 
export default Services;