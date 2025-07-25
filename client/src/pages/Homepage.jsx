import FeatureCard from '../components/FeatureCard';
import Header from '../components/Header';
import './homepage.css'; 

function Homepage() {
  return (
    <>
      <Header />

      <main className="hero">
        <div className="container">
          <h1>Welcome to Seat Reservation System</h1>
          <p>Empowering your digital seat reservation process with us</p>

          <div className="hero-section">
            <span>Using this System allows you to book available seats at the office.</span>
          </div>

          <div className="features">
            <FeatureCard
              title="Modern Design"
              description="Beautiful, responsive interfaces that work across all devices"
            />
            <FeatureCard
              title="Fast Service"
              description="Optimized performance to deliver great experiences"
            />
            <FeatureCard
              title="Secure & Reliable"
              description="Built with security and reliability in mind"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Homepage;
