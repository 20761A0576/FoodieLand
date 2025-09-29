import React, { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronLeft, ChevronRight, Check, Minus } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#2C5F4F] text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide">Neogenesis</div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:opacity-75 transition">About Us</a>
          <a href="#contact" className="hover:opacity-75 transition">Contact Us</a>
          <button className="bg-[#C8E6A0] text-[#2C5F4F] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition text-sm">
            Buy Now
          </button>
        </nav>

        {/* <div className="flex items-center gap-4">
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:opacity-75 transition" />
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div> */}
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <nav className="flex flex-col gap-4 text-sm">
            <a href="#about" className="hover:opacity-75 transition">About Us</a>
            <a href="#contact" className="hover:opacity-75 transition">Contact Us</a>
            <button className="bg-[#C8E6A0] text-[#2C5F4F] px-6 py-2 rounded-full font-semibold w-full">
              Buy Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="bg-[#2C5F4F] text-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Here's to the New You
          </h1>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-md">
            One simple solution for gut health, bloating, supported immunity, and energy. A greens powder you'll actually enjoy.
          </p>
          <button className="bg-[#C8E6A0] text-[#2C5F4F] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
            Buy Now
          </button>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=600&fit=crop&q=80"
              alt="Neogenesis Product"
              className="rounded-2xl shadow-2xl max-w-sm w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Trust Badges Section
const TrustBadges = () => {
  const features = [
    { icon: '🌱', label: 'Vegan Friendly' },
    { icon: '🥤', label: '120+ Recipes' },
    { icon: '🍎', label: 'Natural' },
    { icon: '🔬', label: 'Lab-tested Quality' }
  ];

  return (
    <section className="bg-[#F5F1E8] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3 text-[#2C5F4F]">
            <span className="text-2xl">{feature.icon}</span>
            <span className="font-medium text-sm">{feature.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Product Details Section with Images
const ProductDetailsSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F4F] mb-4">
            Backed by Nature. Built for Your Routine.
          </h2>
          <p className="text-[#2C5F4F]/70 max-w-2xl mx-auto">
            A blend you can trust, with up to 60+ vitamins and minerals working for you daily.
          </p>
        </div>

        {/* First Feature */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#2C5F4F] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2C5F4F] mb-3">
                  Feel fuller or refreshed?
                </h3>
                <p className="text-[#2C5F4F]/70 leading-relaxed">
                  65+ vitamins, minerals, and whole food-sourced ingredients to fill gaps most people are missing. Getting your greens has never been this refreshing or simple.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300&h=200&fit=crop&q=80"
                alt="Green ingredients"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1505944357380-7879ae21e8b7?w=300&h=200&fit=crop&q=80"
                alt="Fresh vegetables"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=500&h=600&fit=crop&q=80"
              alt="Product display"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Second Feature */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=600&fit=crop&q=80"
              alt="Healthy lifestyle"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#2C5F4F] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2C5F4F] mb-3">
                  Healing or bloat-free?
                </h3>
                <p className="text-[#2C5F4F]/70 leading-relaxed">
                  Pre- and probiotics, digestive enzymes, and adaptogens work together to support your gut and reduce bloating naturally.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=300&h=200&fit=crop&q=80"
                alt="Morning ritual"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&q=80"
                alt="Active woman"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefits Grid with Icons
const BenefitsGrid = () => {
  const benefits = [
    { icon: '💪', title: 'Gut Immunity', desc: 'Strengthen your gut' },
    { icon: '🌿', title: 'Bloat Friendly', desc: 'Reduce bloating' },
    { icon: '✨', title: 'Skin Health', desc: 'Natural glow' },
    { icon: '⚡', title: 'Daily Energy', desc: 'All-day vitality' },
    { icon: '🧘', title: 'Calm & Focus', desc: 'Mental clarity' }
  ];

  return (
    <section className="py-16 px-6 bg-[#F5F1E8]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center">
              <div className="w-20 h-20 bg-[#2C5F4F] rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-[#2C5F4F] mb-1 text-sm">{benefit.title}</h3>
              <p className="text-xs text-[#2C5F4F]/70">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Nutrition Comparison Table
const NutritionTable = () => {
  const nutrients = [
    { name: 'Organic / Vegan', neogenesis: true, ag1: true, bloom: false, supply: true },
    { name: 'Sugar Free', neogenesis: true, ag1: true, bloom: false, supply: false },
    { name: 'Adaptogens', neogenesis: true, ag1: true, bloom: false, supply: true },
    { name: 'Digestive Enzymes', neogenesis: true, ag1: true, bloom: true, supply: false },
    { name: 'Probiotics', neogenesis: true, ag1: true, bloom: true, supply: false },
    { name: 'Whole Food Nutrients', neogenesis: true, ag1: true, bloom: false, supply: true },
    { name: 'Daily Greens', neogenesis: true, ag1: false, bloom: true, supply: true },
    { name: 'Price (30 servings)', neogenesis: true, ag1: false, bloom: true, supply: false }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#2C5F4F]">
          One Scoop. 60+ Nutrients. It's That Easy.
        </h2>
        <p className="text-center text-[#2C5F4F]/70 mb-12 max-w-2xl mx-auto">
          See the breakdown of what makes us different from other greens powders on the market.
        </p>

        <div className="overflow-x-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden min-w-[600px]">
            <table className="w-full">
              <thead className="bg-[#2C5F4F] text-white">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-semibold">Comparison</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold">Neogenesis</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold">AG1</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold">Bloom</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold">Supply</th>
                </tr>
              </thead>
              <tbody>
                {nutrients.map((nutrient, idx) => (
                  <tr key={idx} className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-[#2C5F4F] text-sm">{nutrient.name}</td>
                    <td className="py-4 px-4 text-center">
                      {nutrient.neogenesis ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <Minus className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {nutrient.ag1 ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <Minus className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {nutrient.bloom ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <Minus className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {nutrient.supply ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <Minus className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

// Lifestyle Section with Large Image
const LifestyleSection = () => {
  return (
    <section className="py-20 px-6 bg-[#2C5F4F] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Simple Solution to Modern Lifestyle Health Issues
          </h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            We understand that modern life doesn't leave much time for optimal nutrition. That's why we created a comprehensive solution that delivers everything your body needs in one delicious daily ritual.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-[#C8E6A0] flex-shrink-0" />
              <span>No artificial ingredients or fillers</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-[#C8E6A0] flex-shrink-0" />
              <span>Third-party tested for purity and potency</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-[#C8E6A0] flex-shrink-0" />
              <span>Sustainable and ethical sourcing</span>
            </li>
          </ul>
          <button className="bg-[#C8E6A0] text-[#2C5F4F] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
            Learn More
          </button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=700&fit=crop&q=80"
            alt="Woman with green smoothie"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

// Testimonials Carousel
const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Fitness Coach',
      text: 'What a game changer for my gut health. I\'m not bloated anymore and I have regular bowel movements. My skin has never looked better. I\'m on my second bottle and not planning on stopping anytime soon.',
      rating: 5
    },
    {
      name: 'James K.',
      role: 'Software Engineer',
      text: 'I\'ve tried countless supplements, but Neogenesis is the first one I actually look forward to taking every day. My energy levels are consistently high throughout the day.',
      rating: 5
    },
    {
      name: 'Emily R.',
      role: 'Yoga Instructor',
      text: 'As someone who values natural ingredients, Neogenesis checks all the boxes. The transparency about sourcing and the quality of ingredients really stands out.',
      rating: 5
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#2C5F4F]">
          What Choosing Better Looks Like
        </h2>
        <p className="text-center text-[#2C5F4F]/70 mb-12 max-w-2xl mx-auto">
          Join thousands of people who have transformed their health with Neogenesis
        </p>
        
        <div className="relative px-12">
          <div className="bg-[#F5F1E8] rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-1 mb-4 justify-center">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-lg md:text-xl text-[#2C5F4F]/90 mb-6 text-center italic leading-relaxed">
              "{testimonials[currentSlide].text}"
            </p>
            <div className="text-center">
              <div className="font-bold text-[#2C5F4F]">{testimonials[currentSlide].name}</div>
              <div className="text-sm text-[#2C5F4F]/70">{testimonials[currentSlide].role}</div>
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
          >
            <ChevronLeft className="w-6 h-6 text-[#2C5F4F]" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
          >
            <ChevronRight className="w-6 h-6 text-[#2C5F4F]" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? 'bg-[#2C5F4F] w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section with Product Image
const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-[#F5F1E8]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#E8DCC8] rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C5F4F]">
              When You're Ready, NeoGreens is Here.
            </h2>
            <p className="text-[#2C5F4F]/70 mb-8 leading-relaxed">
              Start your journey to better health today. Join thousands who have already transformed their daily routine with Neogenesis.
            </p>
            <button className="bg-[#2C5F4F] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition shadow-lg w-full md:w-auto">
              Get Started
            </button>
            <p className="text-sm text-[#2C5F4F]/60 mt-6">
              30-day money-back guarantee • Free shipping on orders over $50
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=500&fit=crop&q=80"
              alt="Neogenesis Product"
              className="rounded-2xl max-w-xs w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-[#2C5F4F] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">Neogenesis</div>
            <p className="text-white/70 text-sm">
              Premium nutrition for modern living.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm">Shop</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white transition">Products</a></li>
              <li><a href="#" className="hover:text-white transition">Bundles</a></li>
              <li><a href="#" className="hover:text-white transition">Subscribe & Save</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm">Learn</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Science</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm">Support</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/60">
            © 2025 Neogenesis. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/70">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustBadges />
      <ProductDetailsSection />
      <BenefitsGrid />
      <NutritionTable />
      <LifestyleSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}