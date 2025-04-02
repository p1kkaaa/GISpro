import Card from '../card/Card';
import './news.css'



const News = () => {
  return <section className='news'>
    <div className="container">
      <div className="news__header">

        <h2 className="title-2">Новости</h2>

      </div>
      <div className="news__card">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </section>;
}
 
export default News;