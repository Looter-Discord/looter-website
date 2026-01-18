import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAddBot = () => {
    window.open('https://discord.gg/vSFMvftfqT', '_blank');
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.backgroundAnimation}>
        <div className={`${styles.gradientOrb} ${styles.orb1}`}></div>
        <div className={`${styles.gradientOrb} ${styles.orb2}`}></div>
        <div className={`${styles.gradientOrb} ${styles.orb3}`}></div>
      </div>
      
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.logoContainer}>
            <Image src="/logo.svg" alt="Logo" width={40} height={40} className={styles.logo} />
            <span className={styles.brandName}>Looter</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#features" className={styles.navLink}>Features</a>
            <a href="#about" className={styles.navLink}>About</a>
            <button className={styles.addBotBtn} onClick={handleAddBot}>
              Add Bot
            </button>
          </div>
        </div>
      </nav>

      <main className={styles.mainContent}>
        <div className={`${styles.heroSection} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.heroContent}>
            <div className={styles.logoHero}>
              <Image src="/logo.svg" alt="Logo" width={120} height={120} className={styles.heroLogo} />
            </div>
            <h1 className={styles.heroTitle}>
              Welcome to <span className={styles.gradientText}>Looter</span>
            </h1>
            <p className={styles.heroDescription}>
              The ultimate Discord bot experience. Powerful, fast, and easy to use.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryBtn} onClick={handleAddBot}>
                Add Bot to Discord
              </button>
              <button className={styles.secondaryBtn}>
                Learn More
              </button>
            </div>
          </div>
        </div>

        <section id="features" className={`${styles.featuresSection} ${isVisible ? styles.slideUp : ''}`}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3 className={styles.featureTitle}>Lightning Fast</h3>
              <p className={styles.featureDescription}>
                Optimized for speed and performance
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3 className={styles.featureTitle}>Secure</h3>
              <p className={styles.featureDescription}>
                Your data is safe with enterprise-grade security
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎨</div>
              <h3 className={styles.featureTitle}>Customizable</h3>
              <p className={styles.featureDescription}>
                Tailor the bot to your server's needs
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚀</div>
              <h3 className={styles.featureTitle}>Easy Setup</h3>
              <p className={styles.featureDescription}>
                Get started in minutes, not hours
              </p>
            </div>
          </div>
        </section>

        <section id="about" className={`${styles.aboutSection} ${isVisible ? styles.slideUp : ''}`}>
          <h2 className={styles.sectionTitle}>About</h2>
          <p className={styles.aboutText}>
            Looter is a modern Discord bot designed to enhance your server experience.
            Built with cutting-edge technology and a focus on user experience.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Looter. All rights reserved.</p>
      </footer>
    </div>
  );
}