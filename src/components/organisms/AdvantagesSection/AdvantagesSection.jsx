import { useState } from 'react';
import AboutUsSection from '@/components/organisms/AboutUsSection/AboutUsSection';
import seostats from '../../../assets/seostats.png';
import analytics from '../../../assets/analytics.png';
import './AdvantagesSection.scss';

const AdvantagesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="advantages">

      <div className="advantages__container">
        <div className="advantages__header">
{/*           <h2 className="advantages__title">Мощные возможности для вашего бизнеса</h2> */}
          <h2 className="advantages__title">Всегда выполняем работу на 110%</h2>
        </div>
        <div className="advantages__grid">
          <div className="advantages__block">
            <div
              className={`advantages__card advantages__card--first ${hoveredCard === 1 ? 'advantages__card--hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
            <div className="advantages__card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill='currentColor'>
                <path d="M300.9 149.2L184.3 278.8C179.7 283.9 179.9 291.8 184.8 296.7C215.3 327.2 264.8 327.2 295.3 296.7L327.1 264.9C331.3 260.7 336.6 258.4 342 258C348.8 257.4 355.8 259.7 361 264.9L537.6 440L608 384L608 96L496 160L472.2 144.1C456.4 133.6 437.9 128 418.9 128L348.5 128C347.4 128 346.2 128 345.1 128.1C328.2 129 312.3 136.6 300.9 149.2zM148.6 246.7L255.4 128L215.8 128C190.3 128 165.9 138.1 147.9 156.1L144 160L32 96L32 384L188.4 514.3C211.4 533.5 240.4 544 270.3 544L286 544L279 537C269.6 527.6 269.6 512.4 279 503.1C288.4 493.8 303.6 493.7 312.9 503.1L353.9 544.1L362.9 544.1C382 544.1 400.7 539.8 417.7 531.8L391 505C381.6 495.6 381.6 480.4 391 471.1C400.4 461.8 415.6 461.7 424.9 471.1L456.9 503.1L474.4 485.6C483.3 476.7 485.9 463.8 482 452.5L344.1 315.7L329.2 330.6C279.9 379.9 200.1 379.9 150.8 330.6C127.8 307.6 126.9 270.7 148.6 246.6z"/>
              </svg>
            </div>
            <h3 className="advantages__card-title">Сопровождаем на всех этапах</h3>
            <p className="advantages__card-description">Вы знаете что сейчас делает наш персонал и получаете полный отчет по каждому этапу. От идеи до конца света будем всегда рядом и готовы помочь, подсказать или устранить проблему</p>
          </div>

          <div
            className={`advantages__card advantages__card--second advantages__card--tall ${hoveredCard === 2 ? 'advantages__card--hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="advantages__card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill='currentColor'>
                <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM276 160C265 160 256 169 256 180L256 184C227.2 184.3 204 207.7 204 236.5C204 262.2 222.5 284.1 247.9 288.3L289.6 295.3C295.6 296.3 300 301.5 300 307.6C300 314.5 294.4 320.1 287.5 320.1L232 320C221 320 212 329 212 340C212 351 221 360 232 360L256 360L256 364C256 375 265 384 276 384C287 384 296 375 296 364L296 359.3C321 355.2 340 333.6 340 307.5C340 281.8 321.5 259.9 296.1 255.7L254.4 248.7C248.4 247.7 244 242.5 244 236.4C244 229.5 249.6 223.9 256.5 223.9L304 223.9C315 223.9 324 214.9 324 203.9C324 192.9 315 183.9 304 183.9L296 183.9L296 179.9C296 168.9 287 159.9 276 159.9z"/>
              </svg>
            </div>
            <h3 className="advantages__card-title">Прокачиваем SEO</h3>
            <p className="advantages__card-description">Пишем и улучшаем SEO теги, заголовки и архитектуру сайта, чтобы повысить рейтинг и положение выше чем у конкурентов</p>
            <div className="advantages__seostats">
              <img src={seostats} alt="seo statistics" className='advantages__seostats-img'/>
            </div>
          </div>
        </div>
        <div className='advantages__block'>
          <div
            className={`advantages__card advantages__card--third advantages__card--tall ${hoveredCard === 3 ? 'advantages__card--hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="advantages__card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill='currentColor'>
                <path d="M256 144C256 117.5 277.5 96 304 96L336 96C362.5 96 384 117.5 384 144L384 496C384 522.5 362.5 544 336 544L304 544C277.5 544 256 522.5 256 496L256 144zM64 336C64 309.5 85.5 288 112 288L144 288C170.5 288 192 309.5 192 336L192 496C192 522.5 170.5 544 144 544L112 544C85.5 544 64 522.5 64 496L64 336zM496 160L528 160C554.5 160 576 181.5 576 208L576 496C576 522.5 554.5 544 528 544L496 544C469.5 544 448 522.5 448 496L448 208C448 181.5 469.5 160 496 160z"/>
              </svg>
            </div>
            <h3 className="advantages__card-title">Бесплатная аналитика и стратегия</h3>
            <p className="advantages__card-description">До начала разработки, после запуска и через 3 месяца после запуска делаем бесплатную аналитику рынка, продукта и подбираеим стратегию</p>
            <div className="advantages__analytics">
              <img src={analytics} alt="seo statistics" className='advantages__analytics-img'/>
            </div>
          </div>

          <div
            className={`advantages__card advantages__card--fourth ${hoveredCard === 4 ? 'advantages__card--hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="advantages__card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill='currentColor'>
                <path d="M280 170.6C298.9 161.6 312 142.3 312 120C312 89.1 286.9 64 256 64C225.1 64 200 89.1 200 120C200 142.3 213.1 161.6 232 170.6L232 269.4C229.2 270.7 226.5 272.3 224 274.1L143.9 228.3C145.5 207.5 135.3 186.7 116 175.5C89.2 160 55 169.2 39.5 196C24 222.8 33.2 257 60 272.5C61.3 273.3 62.6 274 64 274.6L64 365.4C62.7 366 61.3 366.7 60 367.5C33.2 383 24 417.2 39.5 444C55 470.8 89.2 480 116 464.5C135.3 453.4 145.4 432.5 143.8 411.7L194.3 382.8C182.8 371.6 174.4 357.2 170.5 341.1L120 370.1C117.4 368.3 114.8 366.8 112 365.4L112 274.6C114.8 273.3 117.5 271.7 120 269.9L200.1 315.7C200 317.1 199.9 318.5 199.9 320C199.9 342.3 213 361.6 231.9 370.6L231.9 469.4C213 478.4 199.9 497.7 199.9 520C199.9 550.9 225 576 255.9 576C286.6 576 311.5 551.3 311.9 520.8C304.4 507.9 298.4 494 294.3 479.3C290.1 475.3 285.2 472 279.9 469.4L279.9 370.6C282.7 369.3 285.4 367.7 287.9 365.9L298.4 371.9C303.9 356.6 311.5 342.4 320.8 329.4L311.7 324.2C311.8 322.8 311.9 321.4 311.9 319.9C311.9 297.6 298.8 278.3 279.9 269.3L279.9 170.5zM472.5 196C457 169.2 422.8 160 396 175.5C376.7 186.6 366.6 207.5 368.2 228.3L317.6 257.2C329.1 268.4 337.5 282.8 341.4 298.9L392 269.9C392.4 270.2 392.8 270.5 393.3 270.8C415 261.3 438.9 256 464.1 256C466.1 256 468.1 256 470 256.1C482.1 238.8 483.8 215.5 472.6 196zM464 576C543.5 576 608 511.5 608 432C608 352.5 543.5 288 464 288C384.5 288 320 352.5 320 432C320 511.5 384.5 576 464 576zM511.9 351C516.2 354.7 517.3 360.9 514.5 365.9L484.4 420L520 420C525.2 420 529.8 423.3 531.4 428.2C533 433.1 531.3 438.5 527.2 441.6L431.2 513.6C426.7 517 420.4 516.8 416.1 513C411.8 509.2 410.7 503.1 413.5 498.1L443.6 444L408 444C402.8 444 398.2 440.7 396.6 435.8C395 430.9 396.7 425.5 400.8 422.4L496.8 350.4C501.3 347 507.6 347.2 511.9 351z"/>
              </svg>
            </div>
            <h3 className="advantages__card-title">Используем ИИ для ускорения разработки</h3>
            <p className="advantages__card-description">Искусственный интеллект помогает максимально ускорить разработку продукта и дает возможность рассмотреть все сценарии событий бизнеса вместе с ИИ.</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
