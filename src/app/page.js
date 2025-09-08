'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import emailjs from '@emailjs/browser'; // Import EmailJS
import './home.css';
import './testimonials.css';
import './how-it-works.css';
import './see-the-difference.css';

// Data for areas, faq, testimonials, benefits, howItWorks (unchanged)
const areas = [
  ['Toronto', 'Mississauga', 'Brampton', 'Etobicoke', 'Vaughan', 'North York', 'Milton', 'East York'],
  ['Scarborough', 'Pickering', 'Ajax', 'Whitby', 'Acton', 'Aurora', 'Bolton', 'Brantford'],
  ['Burlington', 'Caledon', 'Concord', 'Georgetown', 'Guelph', 'Markham', 'Newmarket', 'Oakville'],
  ['Orangeville', 'Richmond Hill', 'Woodbridge', 'London', 'Windsor', 'Niagara Falls', 'Hamilton', 'Kitchener'],
];

const faqData = [
  {
    question: "Why should I get my air ducts cleaned?",
    answer: "Regular air duct cleaning removes dust, allergens, pet dander, and other contaminants from your HVAC system. This improves indoor air quality, helps your system run more efficiently, and can reduce energy costs.",
  },
  {
    "question": "How often should I have my air ducts cleaned?",
    "answer": "For most homes, it's recommended to have your air ducts cleaned every 3 to 5 years. However, if you have pets, allergies, or have recently completed a home renovation, you may want to clean them more frequently."
  },
  {
    question: "How long does a typical duct cleaning take?",
    answer: "The duration of the cleaning process depends on the size of your home and the complexity of your ductwork. A typical residential cleaning usually takes between 2 to 4 hours.",
  },
  {
    question: "Do you use safe and eco-friendly cleaning methods?",
    answer: "Yes, we use powerful, truck-mounted vacuum systems and specialized tools to agitate and remove contaminants. Our methods are safe for your family, pets, and the environment, without the use of harsh chemicals.",
  },
  {
    "question": "What is included in a standard duct cleaning service?",
    "answer": "Our standard service includes a thorough cleaning of all supply and return vents, the main trunk lines, and the furnace's blower fan and cabinet. We also provide a complete inspection of your ductwork to ensure no issues are present."
  },
];

const testimonialsData = [
  {
    name: "Candice M",
    profilePic: "/profile-pic-1.svg",
    review: "They did an amazing job cleaning our ducts and the price was not bad either. I can smell the difference. Thanks guys!",
  },
  {
    name: "Alex Bangura",
    profilePic: "/profile-pic-3.svg",
    review: `Excellent service from Nanak and team!
Hi, I'm Alex from Brampton ON. I had a fantastic experience with Nanak Duct Cleaning! The team was professional and thoroughly cleaned all our air vents plus the laundry vent, which was really clogged.`,
  },
  {
    name: "Dilpreet Sidhu",
    profilePic: "/profile-pic-2.svg",
    review: "They provide Best Cleaning services in GTA. The staff is very professional and helpful. If you wanna get the fabulous services just reach out to them. The money you gonna spend will definitely be worth it.",
  },
];

const benefitsData = [
  {
    title: "Improved Air Quality",
    description: "Breathe healthier air in your home.",
    image: "/improved-air-quality.png",
  },
  {
    title: "Lower Energy Bills",
    description: "Clean ducts can improve your HVAC efficiency.",
    image: "/lower-energy-bills.svg",
  },
  {
    title: "Reduced Allergens and Dust",
    description: "Keep your home free from contaminants.",
    image: "/reduced-allergens.svg",
  },
  {
    title: "Extended System Lifespan",
    description: "Regular cleaning ensures longevity of your system.",
    image: "/extended-lifespan.svg",
  },
];

const howItWorksData = [
  {
    step: "Step 1: Inspection",
    description: "We assess your ductwork for any issues.",
    image: "/inspection.svg",
  },
  {
    step: "Step 2: Cleaning",
    description: "Using professional equipment, we clean your ducts.",
    image: "/cleaning.svg",
  },
  {
    step: "Step 3: Final Check",
    description: "We ensure everything is in top condition before leaving.",
    image: "/final-check.svg",
  },
];

// Reusable components (unchanged)
const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, profilePic, review }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <Image
          src={profilePic}
          alt={`${name}'s profile picture`}
          width={48}
          height={48}
          className="profile-pic"
        />
        <h5 className="testimonial-name">{name}</h5>
        <div className="testimonial-rating">
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              src="/star-icon.svg"
              alt="Star"
              width={20}
              height={20}
              className="star-icon"
            />
          ))}
        </div>
      </div>
      <p className="testimonial-text">{review}</p>
    </div>
  );
};

const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="benefit-card">
      <div className="benefit-image-container">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="benefit-image"
        />
      </div>
      <h5 className="benefit-heading">{title}</h5>
      <p className="benefit-description">{description}</p>
    </div>
  );
};

const HowItWorksStep = ({ step, description, image }) => {
  return (
    <div className="how-it-works-step">
      <div className="how-it-works-image-container">
        <Image
          src={image}
          alt={step}
          width={200}
          height={200}
          className="how-it-works-image"
        />
      </div>
      <div className="how-it-works-content-container">
        <h5 className="how-it-works-heading">{step}</h5>
        <p className="how-it-works-description">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Explore the range of services we offer.
      </p>
      <div className="services-container">
        <div className="sample">
          <div className="services-row">
            <div className="service-box">
              <div className="service-image-container">
                <Image
                  src="/dryer-vent-cleaning.webp"
                  alt="Duct Cleaning"
                  width={200}
                  height={200}
                  className="service-image"
                />
              </div>
              <div className="service-content-container">
                <h5 className="service-heading">Commercial Air Duct Cleaning</h5>
                <p className="service-description">
                  Comprehensive inspections to ensure your HVAC runs smoothly.
                </p>
              </div>
            </div>
            <div className="service-box">
              <div className="service-image-container">
                <Image
                  src="/commercial-air-duct-cleaning.svg"
                  alt="Commercial Air Duct Cleaning"
                  width={200}
                  height={200}
                  className="service-image"
                />
              </div>
              <div className="service-content-container">
                <h5 className="service-heading">Dryer Vent Cleaning</h5>
                <p className="service-description">
                  Prevent fires and improve 
dryer efficiency with our cleaning service.
                </p>
              </div>
            </div>
          </div>
          <div className="service-details-row">
            <div className="extended-box">
              <div className="service-image-container">
                <Image
                  src="/resedential_duct_cleaning.svg"
                  alt="Residential Duct Cleaning"
                  width={200}
                  height={200}
                  className="service-image"
                />
              </div>
              <div className="service-content-container">
                <h3>Residential Duct Cleaning</h3>
                <p>
                  We offer advanced services to meet specific needs, ensuring your entire HVAC system is in pristine condition.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="big-image-container">
          <Image
            src="/seven-years-of-experience.svg"
            alt="Our team at work"
            width={475}
            height={500}
            className="big-service-image"
          />
        </div>
      </div>
    </section>
  );
};

// New SeeTheDifferenceCard component
const SeeTheDifferenceCard = ({ title, image }) => {
  return (
    <div className="see-the-difference-card">
      <div className="see-the-difference-image-container">
        <Image
          src={image}
          alt={title}
          width={315}
          height={248}
          className="see-the-difference-image"
        />
      </div>
      <h5 className="see-the-difference-heading">{title}</h5>
    </div>
  );
};

// New SeeTheDifferenceSection component
const SeeTheDifferenceSection = () => {
  return (
    <section id="see-the-difference" className="section see-the-difference-section" data-aos="fade-up">
      <div className="see-the-difference-person-container" data-aos="fade-right">
        <Image
          src="/see-the-difference-person.svg"
          alt="See the difference illustration"
          width={500}
          height={500}
          className="see-the-difference-person-image"
        />
      </div>
      <div className="see-the-difference-box" data-aos="zoom-in">
        <h2 className="see-the-difference-title" data-aos="fade-up" data-aos-delay="200">
          See the Difference
        </h2>
        <p className="see-the-difference-subtitle" data-aos="fade-up" data-aos-delay="400">
          Before and after duct cleaning results.
        </p>
        <div className="see-the-difference-container" data-aos="fade-up" data-aos-delay="600">
          <SeeTheDifferenceCard
            title="Before Cleaning"
            image="/before-cleaning.svg"
          />
          <SeeTheDifferenceCard
            title="After Cleaning"
            image="/after-cleaning.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [formStatus, setFormStatus] = useState(''); // 'success', 'error', or ''

  const handleFaqClick = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/14167291521', '_blank');
  };

  const handleEmailjsSubmit = (event) => {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    setFormStatus('sending');

    emailjs.sendForm('service_4k1b8td', 'template_67c3o2i', event.target, 'sexLs5SvglsjqHhqp')
      .then((result) => {
        console.log(result.text);
        setFormStatus('success');
        event.target.reset(); // Reset form fields
      }, (error) => {
        console.log(error.text);
        setFormStatus('error');
      });
  };

  return (
    <>
      <Head>
        <title>Duct Cleaning Services</title>
        <meta name="description" content="Professional duct cleaning services for a healthier home. Fast, reliable, and affordable." />
      </Head>
      <Header />
      <main className="main-content">
        <section id="home" className="home-section" data-aos="fade-in">
          <div className="hero-person-container" data-aos="fade-right">
            <Image
              src="/home-person.webp"
              alt="A person performing a duct cleaning service"
              width={500}
              height={500}
              className="hero-person-image"
            />
          </div>
          <div className="hero-box" data-aos="zoom-in-up">
            <div className="hero-content-container">
              <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
                Duct Cleaning Services
              </h1>
              <p className="hero-subtitle">
                Improve your home&apos;s air quality with our expert cleaning.
              </p>
              <div className="button-group" data-aos="fade-up" data-aos-delay="600">
                <button className="book-now-button" onClick={scrollToContact}>Book Now</button>
                <button className="get-quote-button" onClick={openWhatsApp}>Get a Free Quote</button>
              </div>
            </div>
            <div className="hero-logo-container">
              <div className="logo-box">
                <Image
                  src="/logo1.svg"
                  alt="Company Logo"
                  width={400}
                  height={400}
                  className='logo-image'
                  objectFit="contain"
                  borderRadius="8px"
                />
              </div>
            </div>
          </div>
        </section>
        <ServicesSection />
        <section id="benefits" className="section benefits-section" data-aos="fade-up">
          <div className="benefits-container">
            <div className="benefits-left" data-aos="fade-right">
              <Image
                src="/benefits-image.svg"
                alt="Benefits of Duct Cleaning"
                fill
                sizes="100vw"
                className="benefits-image"
              />
              <div className="benefits-text-overlay">
                <h2 className="benefits-title">Benefits of Duct Cleaning</h2>
              </div>
            </div>
            <div className="benefits-right" data-aos="fade-left">
              {benefitsData.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  title={benefit.title}
                  description={benefit.description}
                  image={benefit.image}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="how-it-works" className="section how-it-works-section" data-aos="fade-up">
          <h2 className="how-it-works-title" data-aos="fade-up">How It Works</h2>
          <p className="how-it-works-subtitle" data-aos="fade-up" data-aos-delay="200">
            Our simple process ensures a thorough and efficient cleaning.
          </p>
          <div className="how-it-works-container" data-aos="fade-up" data-aos-delay="400">
            {howItWorksData.map((step, index) => (
              <HowItWorksStep
                key={index}
                step={step.step}
                description={step.description}
                image={step.image}
              />
            ))}
          </div>
        </section>
        <SeeTheDifferenceSection />
        <section id="testimonials" className="section testimonials-section" data-aos="fade-up">
          <div className="testimonials-person-container" data-aos="fade-right">
            <Image
              src="/what-customer-say-person.svg"
              alt="Customer testimonial illustration"
              width={500}
              height={500}
              className="testimonials-person-image"
            />
          </div>
          <div className="testimonials-box" data-aos="zoom-in">
            <div className="testimonials-content-container">
              <h2 className="testimonials-title" data-aos="fade-up" data-aos-delay="200">
                What Our Customers Say
              </h2>
              <p className="testimonials-subtitle" data-aos="fade-up" data-aos-delay="400">
                Hear from happy homeowners we&apos;ve helped.
              </p>
              <div className="testimonials-container" data-aos="fade-up" data-aos-delay="600">
                {testimonialsData.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    name={testimonial.name}
                    profilePic={testimonial.profilePic}
                    review={testimonial.review}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="about-us" className="section about-us-section" data-aos="fade-up">
          <h2 className="about-us-title" data-aos="fade-up">About Us</h2>
          <div className="about-us-box" data-aos="zoom-in">
            <p className="about-us-text">
              We&apos;re <strong>Sanyam</strong> and <strong>Himanshu</strong> — brothers, business partners, and proud founders of Nanak Duct Cleaning based in Brampton, Ontario. Our journey began in 2019 when we came to Canada as international students, eager to learn, grow, and build a better future.
              <br /><br />
              After working various jobs and gaining valuable hands-on experience in the duct cleaning industry, we discovered a passion for the work and a clear opportunity to do things better. With over 7 years of combined industry experience, we launched our own business with a simple mission: to provide honest, affordable, and high-quality duct cleaning services that homeowners and businesses can trust.
              <br /><br />
              Today, we proudly serve clients across Brampton, the Greater Toronto Area, and major cities throughout Ontario — helping create cleaner, healthier indoor environments with every job we take on.
              <br /><br />
              At the heart of our business is a commitment to hard work, integrity, and treating every customer like family.
            </p>
          </div>
        </section>
        <section id="faq" className="section faq-section" data-aos="fade-up">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFaqIndex === index}
                onClick={() => handleFaqClick(index)}
              />
            ))}
          </div>
        </section>
        <section id="contact-us" className="section contact-us-section" data-aos="fade-up">
          <div className="contact-content-wrapper">
            <div className="contact-left" data-aos="fade-right">
              <Image
                src="/phone on plate with outline.svg"
                alt="Phone on plate"
                width={500}
                height={500}
                className="contact-image"
              />
            </div>
            <div className="contact-middle" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-info">
                <h2 className="contact-title">Contact Us</h2>
                <p className="contact-subtitle">Get in touch for a free quote.</p>
                <div className="contact-details">
                  <p>Sanyam Setia: ‪+1 (416) 729-1521‬</p>
                  <p>Himanshu: ‪+1 (647) 838-5799</p>
                  <p>Email: nanakductcleaning@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="contact-right" data-aos="fade-up" data-aos-delay="400">
              <div className="contact-form-container">
                {/* Add onSubmit handler to the form */}
                <form className="contact-form" onSubmit={handleEmailjsSubmit}>
                  {/* Add name attributes to each input */}
                  <input type="text" name="from_name" id="name" placeholder="Your Name" className="form-input" required/>
                  <input type="email" name="from_email" id="email" placeholder="Email" className="form-input" required/>
                  <input type="tel" name="phone_number" id="phone" placeholder="Phone Number" className="form-input" />
                  <textarea name="message" id="message" placeholder="Message" className="form-textarea" required></textarea>
                  <button type="submit" className="form-button small-button">Send</button>
                </form>
                {/* Display form status */}
                {formStatus === 'sending' && <p>Sending your message...</p>}
                {formStatus === 'success' && <p style={{color: 'green'}}>Message sent successfully!</p>}
                {formStatus === 'error' && <p style={{color: 'red'}}>Failed to send message. Please try again.</p>}
              </div>
            </div>
          </div>
        </section>
        <section id="areas-we-serve" className="section areas-we-serve" data-aos="fade-up">
          <h2 className="areas-title" data-aos="fade-up">Areas We Serve</h2>
          <div className="areas-list" data-aos="fade-up" data-aos-delay="200">
            {areas.map((column, index) => (
              <div key={index} className="areas-column" data-aos="fade-up" data-aos-delay={index * 100}>
                {column.map((city) => (
                  <p key={city}>
                    <a href={`https://www.google.com/search?q=${encodeURIComponent(city)}`} target="_blank" rel="noopener noreferrer">
                      {city}
                    </a>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}