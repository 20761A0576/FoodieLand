import React, { useState } from 'react';
import { Heart, Clock, ChefHat, Instagram, Facebook, Twitter, Menu, X, UtensilsCrossed } from 'lucide-react';
import './App.css'; // Import the CSS file
import chickenWings from '../src/assets/ChickenWings.jpg'
import breakfast from '../src/assets/breakfast.jpg'
import vegan from '../src/assets/vegan.jpg'
import meat from '../src/assets/meat.jpg'
import lunch from '../src/assets/lunch.jpg'
import dessert from '../src/assets/dessert.jpg'
import chacolate from '../src/assets/chacolate.jpg'
import chef from '../src/assets/chef.jpg'

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [likedRecipes, setLikedRecipes] = useState(new Set());

    const toggleLike = (id) => {
        setLikedRecipes(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const categories = [
        { name: 'Breakfast', icon: breakfast, color: '#FEF3C7' }, // yellow-100
        { name: 'Vegan', icon: vegan, color: '#D1FAE5' },       // emerald-100
        { name: 'Meat', icon: meat, color: '#FEE2E2' },         // red-100
        { name: 'Dessert', icon: dessert, color: '#FCE7F3' },     // pink-100
        { name: 'Lunch', icon: lunch, color: '#DBEAFE' },       // blue-100
        { name: 'Chocolate', icon: chacolate, color: '#FFEDD5' }, // orange-100
    ];

    const recipes = [
        { id: 1, title: 'Big and Juicy Wagyu Beef Cheeseburger', time: '30 Minutes', category: 'Snack', image: 'https://placehold.co/400x300/FACC15/FFFFFF?text=Burger' },
        { id: 2, title: 'Fresh Lime Roasted Salmon with Ginger Sauce', time: '30 Minutes', category: 'Fish', image: 'https://placehold.co/400x300/34D399/FFFFFF?text=Salmon' },
        { id: 3, title: 'Strawberry Oatmeal Pancake with Honey Syrup', time: '30 Minutes', category: 'Breakfast', image: 'https://placehold.co/400x300/F472B6/FFFFFF?text=Pancakes' },
        { id: 4, title: 'Fresh and Healthy Mixed Mayonnaise Salad', time: '30 Minutes', category: 'Healthy', image: 'https://placehold.co/400x300/4ADE80/FFFFFF?text=Salad' },
        { id: 5, title: 'Chicken Meatballs with Cream Cheese', time: '30 Minutes', category: 'Meat', image: 'https://placehold.co/400x300/F87171/FFFFFF?text=Meatballs' },
        { id: 6, title: 'Fruity Pancake with Orange & Blueberry', time: '30 Minutes', category: 'Sweet', image: 'https://placehold.co/400x300/A78BFA/FFFFFF?text=Pancake' },
        { id: 7, title: 'The Best Easy One Pot Chicken and Rice', time: '30 Minutes', category: 'Dinner', image: 'https://placehold.co/400x300/F59E0B/FFFFFF?text=Chicken+Rice' },
        { id: 8, title: 'The Creamiest Creamy Chicken Pasta', time: '30 Minutes', category: 'Pasta', image: 'https://placehold.co/400x300/60A5FA/FFFFFF?text=Pasta' },
    ];
    
    const instagramPosts = [
        { id: 1, image: 'https://placehold.co/300x300/F59E0B/FFFFFF?text=Post' },
        { id: 2, image: 'https://placehold.co/300x300/10B981/FFFFFF?text=Post' },
        { id: 3, image: 'https://placehold.co/300x300/3B82F6/FFFFFF?text=Post' },
        { id: 4, image: 'https://placehold.co/300x300/EF4444/FFFFFF?text=Post' }
    ];

    const dailyRecipes = [
        { id: 1, title: 'Mixed Tropical Fruit Salad with Superfood Boosts', time: '30 Minutes', category: 'Healthy', image: 'https://placehold.co/300x200/2DD4BF/FFFFFF?text=Fruit+Salad' },
        { id: 2, title: 'Big and Juicy Wagyu Beef Cheeseburger', time: '30 Minutes', category: 'Western', image: 'https://placehold.co/300x200/FBBF24/FFFFFF?text=Burger' },
        { id: 3, title: 'Healthy Japanese Fried Rice with Asparagus', time: '30 Minutes', category: 'Healthy', image: 'https://placehold.co/300x200/A3E635/FFFFFF?text=Fried+Rice' },
        { id: 4, title: 'Cauliflower Walnut Vegetarian Taco Meat', time: '30 Minutes', category: 'Eastern', image: 'https://placehold.co/300x200/FB923C/FFFFFF?text=Tacos' },
        { id: 5, title: 'Barbecue Spicy Sandwiches with Chips', time: '20 Minutes', category: 'Snack', image: 'https://placehold.co/300x200/F87171/FFFFFF?text=Sandwich' },
        { id: 6, title: 'Fire-Cracker Vegan Lettuce Wraps', time: '35 Minutes', category: 'Vegan', image: 'https://placehold.co/300x200/4ADE80/FFFFFF?text=Wraps' },
        { id: 7, title: 'Chicken Ramen Soup with Mushroom', time: '40 Minutes', category: 'Soup', image: 'https://placehold.co/300x200/F0ABFC/FFFFFF?text=Ramen' },
        { id: 8, title: 'Cinnamon and Sugar Fresh Donuts', time: '45 Minutes', category: 'Dessert', image: 'https://placehold.co/300x200/F472B6/FFFFFF?text=Donuts' },
    ];

    const AdCard = () => (
        <div className="ad-card">
            <UtensilsCrossed />
            <h3>Don't forget to eat healthy food</h3>
            <p>www.foodieland.com</p>
            <button className="btn btn-light">Read More</button>
        </div>
    );

    const RecipeCard = ({ recipe }) => (
        <div className="recipe-card">
            <div className="recipe-card-image-wrapper">
                <img src={recipe.image} alt={recipe.title} />
                <button
                    className={`recipe-card-like-btn ${likedRecipes.has(recipe.id) ? 'liked' : ''}`}
                    onClick={() => toggleLike(recipe.id)}
                    aria-label={`Like ${recipe.title}`}
                >
                    <Heart />
                </button>
            </div>
            <div className="recipe-card-content">
                <h3 className="recipe-card-title">{recipe.title}</h3>
                <div className="recipe-card-meta">
                    <div className="recipe-card-meta-item">
                        <Clock />
                        <span>{recipe.time}</span>
                    </div>
                    <div className="recipe-card-meta-item">
                        <ChefHat />
                        <span>{recipe.category}</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="app-container">
            <header className="header">
                <div className="header-container">
                    <span className="header-logo">Foodieland</span>
                    <nav className="header-nav">
                        <a href="#" className="active">Home</a>
                        <a href="#recipes">Recipes</a>
                        <a href="#categories">Categories</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact">Contact</a>
                        <a href="#about-us">About us</a>
                    </nav>
                    <div className="header-social-icons">
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </div>
                </div>
            </header>

            <main>
                <section className="hero-section">
                    <div className="hero-container">
                        <div className="hero-content">
                            <div className="hero-tag">
                                <ChefHat />
                                <span>Hot Recipes</span>
                            </div>
                            <h1 className="hero-title">Spicy delicious chicken wings</h1>
                            <p className="hero-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="hero-meta">
                                <div className="hero-meta-item"><Clock /><span>30 Minutes</span></div>
                                <div className="hero-meta-item"><ChefHat /><span>Chicken</span></div>
                            </div>
                            <div className="hero-author-section">
                                <div className="hero-author-info">
                                    <img src="https://placehold.co/40x40/222/FFF?text=JS" alt="Chef John Smith" />
                                    <div>
                                        <p className="hero-author-name">John Smith</p>
                                        <p className="hero-author-date">15 March 2025</p>
                                    </div>
                                </div>
                                <button className="btn btn-dark">View Recipes</button>
                            </div>
                        </div>
                        <div className="hero-image-wrapper">
                            <img src={chickenWings} alt="Spicy chicken wings" />
                        </div>
                    </div>
                </section>

                <section id='categories' className="section">
                    <div className="section-container">
                        <div className="section-header">
                            <h2 className="section-title">Categories</h2>
                            <button className="btn btn-light">View All Categories</button>
                        </div>
                        <div className="categories-grid">
                            {categories.map((category) => (
                                <div key={category.name} className="category-item">
                                    <div className="category-icon-wrapper" style={{ backgroundColor: category.color.startsWith('bg-') ? `var(--${category.color})` : category.color }}>
                                        <img src={category.icon} alt={category.name} />
                                    </div>
                                    <h3>{category.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id='recipes' className="section" style={{backgroundColor: '#f9fafb'}}>
                    <div className="section-container">
                        <div className="section-description">
                            <h2 className="section-title">Simple and tasty recipes</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="recipes-grid">
                            {recipes.slice(0, 5).map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
                            <AdCard />
                            {recipes.slice(5).map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="section-container">
                        <div className="chef-section-inner">
                            <div className="chef-section-grid">
                                <div className="chef-section-content">
                                    <h2 className="chef-section-title">Everyone can be a chef in their own kitchen</h2>
                                    <p className="chef-section-description">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <button className="btn btn-dark">Learn More</button>
                                </div>
                                <div className="chef-section-image-wrapper">
                                    <img src={chef} alt="Chef cooking" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="blog" className="section1" style={{backgroundColor: '#f9fafb'}}>
                    <div className="section-container">
                        <div className="section-description">
                             <h2 className="section-title">Check out @foodieland on Instagram</h2>
                             <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="instagram-grid">
                            {instagramPosts.map((post) => (
                                <div key={post.id} className="instagram-post">
                                    <img src={post.image} alt="Instagram post"/>
                                </div>
                            ))}
                        </div>
                        <div className="instagram-visit-btn">
                            <button className="btn btn-dark">Visit Our Instagram</button>
                        </div>
                    </div>
                </section>
                
                <section className="section">
                    <div className="section-container">
                        <div className="daily-recipes-header">
                             <h2 className="section-title">Try this delicious recipe to make your day</h2>
                             <p className="hero-description">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="daily-recipes-grid">
                            {dailyRecipes.map((recipe) => (
                                <div key={recipe.id} className="daily-recipe-card">
                                    <img src={recipe.image} alt={recipe.title} />
                                    <div className="daily-recipe-card-content">
                                        <h3>{recipe.title}</h3>
                                        <div className="daily-recipe-card-meta">
                                            <div className="recipe-card-meta-item"><Clock /><span>{recipe.time}</span></div>
                                            <div className="recipe-card-meta-item"><ChefHat /><span>{recipe.category}</span></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id='contact' className="newsletter-section">
                    <div className="newsletter-container">
                        <h2 className="section-title">Deliciousness to your inbox</h2>
                        <p className="hero-description" style={{margin: '1rem auto 2rem'}}>
                            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your email address..." />
                            <button type="submit" className="btn btn-dark">Subscribe</button>
                        </form>
                    </div>
                    <img src="https://placehold.co/200x200/A7F3D0/FFFFFF?text=Salad" alt="Salad" className="newsletter-bg-img left" />
                    <img src="https://placehold.co/200x200/FBCFE8/FFFFFF?text=Cake" alt="Cake" className="newsletter-bg-img right" />
                </section>
            </main>

            <footer id="about-us" className="footer">
                <div className="section-container">
                    <div className="footer-grid">
                        <div className="footer-about">
                            <span className="header-logo">Foodieland</span>
                            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit</p>
                        </div>
                        <div className="footer-links">
                            <h3>Recipes</h3>
                            <ul>
                                <li><a href="#">Breakfast</a></li>
                                <li><a href="#">Lunch</a></li>
                                <li><a href="#">Dinner</a></li>
                                <li><a href="#">Dessert</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h3>Blog</h3>
                            <ul>
                                <li><a href="#">Health</a></li>
                                <li><a href="#">Guides</a></li>
                                <li><a href="#">Restaurants</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h3>Contact</h3>
                            <ul>
                                <li><a href="#">Email</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="footer-copyright">© 2025 Flowbase. Powered by Webflow</p>
                        <div className="footer-social">
                            <Facebook />
                            <Twitter />
                            <Instagram />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;