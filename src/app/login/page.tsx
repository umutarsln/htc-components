"use client"
import Image from 'next/image';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={styles.container}>
      {/* Sol kısım */}
      <div style={styles.leftContainer}>
        {/* Büyük arka plan logosu */}
        <div style={styles.backgroundLogo}>
          <Image
            src="/loginbüyük.svg"
            alt="Background Logo"
            width={700}
            height={500}
            style={styles.backgroundImage}
          />
        </div>
        {/* Küçük logo ve içerik */}
        <div style={styles.logoContainer}>
          <Image
            src="/loginküçük.svg"
            alt="Company Logo"
            width={680}
            height={680}
            style={styles.logo}
          />
          <div style={styles.contactInfo}>
            <p style={styles.text}>Lorem ipsum dolor sit amet.</p>
            <p style={styles.text}>msegroup.com</p>
            <p style={styles.text}>0242 606 24 24</p>
          </div>
        </div>
      </div>

      {/* Sağ kısım */}
      <div style={styles.rightContainer}>
        <h2 style={styles.signInHeader}>Sign In</h2>
        <p style={styles.welcomeText}>Welcome, Lorem ipsum dolor sit amet.</p>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Enter your email"
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="********"
            />
            <a href="/forgot-password" style={styles.forgotPassword}>I forgot my password</a>
          </div>
          <div style={styles.checkboxGroup}>
            <input type="checkbox" id="remember" style={styles.checkbox} />
            <label htmlFor="remember" style={styles.checkboxLabel}>Remember me</label>
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.registerText}>
          Do not have an account? <a href="/register" style={styles.registerLink}>Register</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#F0F4FF',  // Arka plan beyaz yapıldı
  },
  leftContainer: {
    width: '50%',
    position: 'relative' as 'relative',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    border: '1px solid #DFE3EB',  // 1px border
    borderRadius: '12px',         // 12px radius
    padding: '20px',
    marginTop: '10px',            // Üstten 16px boşluk
    marginLeft: '10px',           // Soldan 16px boşluk
    marginRight: '10px', // Üstten 16px boşlu
    marginBottom: '10px',
  },
  backgroundLogo: {
    position: 'absolute' as 'absolute',
    top: '-30px',
    left: '45px',
    zIndex: 0,
  },
  backgroundImage: {
    objectFit: 'contain',
  },
  logoContainer: {
    zIndex: 1,
    textAlign: 'center' as 'center',
    top: '85px',
  },
  logo: {
    zIndex: 1,
  },
  contactInfo: {
    zIndex: 1,
    marginTop: '20px',
  },
  text: {
    fontSize: '14px',
    color: '#64748B',
  },
  rightContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4FF',
    padding: '40px',
  },
  signInHeader: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: '8px',
  },
  welcomeText: {
    fontSize: '14px',
    color: '#64748B',
    marginBottom: '32px',
  },
  form: {
    width: '100%',
    maxWidth: '360px',
  },
  inputGroup: {
    marginBottom: '16px',
  },
  label: {
    fontSize: '14px',
    color: '#374151',
    display: 'block',
    marginBottom: '4px',
  },
  input: {
    width: '100%',
    padding: '8px 12px',
    fontSize: '14px',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
  },
  forgotPassword: {
    fontSize: '12px',
    color: '#3B82F6',
    textDecoration: 'none',
    marginTop: '4px',
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  checkbox: {
    marginRight: '8px',
  },
  checkboxLabel: {
    fontSize: '14px',
    color: '#374151',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#3B82F6',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  registerText: {
    marginTop: '16px',
    fontSize: '14px',
    color: '#64748B',
  },
  registerLink: {
    color: '#3B82F6',
    textDecoration: 'none',
  },
};

export default LoginPage;
