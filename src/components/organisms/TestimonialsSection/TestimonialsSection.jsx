import { useState } from 'react';
import './TestimonialsSection.scss';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Alex Tomato',
      position: 'Brand Manager',
      company: 'Instant Design',
      rating: 5,
      text: 'Working with Rayo team was an absolute pleasure! They took the time to understand our business needs and translated them into a beautifully designed, user-friendly website.',
      avatar: '/avatars/alex.jpg',
      projectLink: '/projects/1',
      projectImage: '/projects/project1.jpg'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc',
      rating: 5,
      text: 'Невероятная команда профессионалов! Они создали для нас не просто сайт, а мощный инструмент для привлечения клиентов. Результаты превзошли все ожидания.',
      avatar: '/avatars/sarah.jpg',
      projectLink: '/projects/2',
      projectImage: '/projects/project2.jpg'
    },
    {
      id: 3,
      name: 'Михаил Петров',
      position: 'Директор по маркетингу',
      company: 'Digital Solutions',
      rating: 5,
      text: 'Отличная работа! Команда SKT показала высокий уровень профессионализма. Проект был сдан в срок, все наши пожелания были учтены. Рекомендуем!',
      avatar: '/avatars/mikhail.jpg',
      projectLink: '/projects/3',
      projectImage: '/projects/project3.jpg'
    },
    {
      id: 4,
      name: 'Emma Williams',
      position: 'Product Manager',
      company: 'InnovateLab',
      rating: 5,
      text: 'Outstanding quality and exceptional service. The team went above and beyond to deliver a product that perfectly matches our vision. Highly recommended!',
      avatar: '/avatars/emma.jpg',
      projectLink: '/projects/4',
      projectImage: '/projects/project4.jpg'
    }
  ];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 400);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 400);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__content">
          <div className={`testimonials__card ${isAnimating ? `testimonials__card--${direction}` : ''}`}>
            <div className="testimonials__header">
              <div className="testimonials__avatar">
                <div className="testimonials__avatar-placeholder">
                  {currentTestimonial.name.charAt(0)}
                </div>
              </div>
              <div className="testimonials__info">
                <h3 className="testimonials__name">{currentTestimonial.name}</h3>
                <p className="testimonials__position">
                  {currentTestimonial.position} in{' '}
                  <span className="testimonials__company">{currentTestimonial.company}</span>
                </p>
                <div className="testimonials__rating">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <p className="testimonials__text">{currentTestimonial.text}</p>

            <a href={currentTestimonial.projectLink} className="testimonials__link">
              Project Page
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>

          <div className="testimonials__navigation">
            <button
              className="testimonials__nav-btn testimonials__nav-btn--prev"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>

            <div className="testimonials__counter">
              {currentIndex + 1} / {testimonials.length}
            </div>

            <button
              className="testimonials__nav-btn testimonials__nav-btn--next"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={`testimonials__image ${isAnimating ? `testimonials__image--${direction}` : ''}`}>
          <div className="testimonials__image-wrapper">
            <img
              src={currentTestimonial.projectImage}
              alt={`Project for ${currentTestimonial.company}`}
              className="testimonials__image-photo"
            />
            <div className="testimonials__image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
