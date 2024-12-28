import Navbar from '../components/navbar';
import '../styles/homepage.css';

const Homepage = () => {
    return (
        <main>
            <Navbar />
            
            <section className="hero">
                <div className="hero-content">
                    <h1>
                        A-Levels, GCSE,<br />and more...
                    </h1>
                    <p>Everything you need in one platform</p>
                    
                    <div className="tags">
                        <span className="tag cambridge">Cambridge</span>
                        <span className="tag edexcel">Edexcel</span>
                        <span className="tag aqa">AQA</span>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/images/hero-illustration.svg" alt="background image insert" />
                </div>
            </section>

        </main>
    )
};

export default Homepage;

