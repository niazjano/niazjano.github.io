import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaCheckCircle, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.beige};
    color: ${({ theme }) => theme.colors.navy};
    margin: 0;
    padding: 0;
  }
`;

const Section = styled.section`
  padding: 64px 0 48px 0;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 700px) {
    padding: 40px 0 32px 0;
  }
`;

const Hero = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  justify-content: center;
`;

const Headline = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -1px;
`;

const Subheadline = styled.p`
  font-size: 1.25rem;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.navy};
  opacity: 0.85;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 32px;
  padding: 18px 40px;
  box-shadow: ${({ theme }) => theme.shadow};
  text-decoration: none;
  transition: box-shadow 0.2s, transform 0.2s, background 0.2s;
  margin-top: 8px;
  &:hover {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.navy};
    transform: translateY(-2px) scale(1.03);
  }
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.beige};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 32px;
  box-shadow: 0 2px 12px rgba(26,34,51,0.04);
`;

const LogoImg = styled.img`
  height: 44px;
  width: auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(26,34,51,0.08);
  background: #fff;
  margin-right: 16px;
`;

const NavLogo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navy};
  letter-spacing: -1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  a {
    color: ${({ theme }) => theme.colors.navy};
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    opacity: 0.85;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 32px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const Bullet = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  gap: 12px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 18px 28px;
  min-width: 220px;
`;

const StepList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 32px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Step = styled.li`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 20px 28px;
  font-size: 1.1rem;
  font-weight: 500;
`;

const GuideBox = styled.div`
  background: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 32px 24px;
  margin: 0 auto;
  max-width: 420px;
  text-align: center;
  font-size: 1.1rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const LimitedOffer = styled(Section)`
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  margin-top: 48px;
`;

const CalendarFrame = styled.div`
  margin: 0 auto;
  max-width: 480px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 32px 16px;
`;

const ContactBox = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 32px 24px;
  max-width: 420px;
  margin: 0 auto;
  text-align: center;
`;

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.navy};
  text-align: center;
  padding: 32px 0 16px 0;
  font-size: 1rem;
  opacity: 0.7;
`;

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Nav>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <LogoImg src="/ChatGPT Image May 14, 2025, 07_59_54 PM.png" alt="Nordic Lead Flow Logo" />
        <NavLogo>Nordic Lead Flow</NavLogo>
      </div>
      <NavLinks>
        <a href="#why" onClick={e => { e.preventDefault(); scrollToSection('why'); }}>Why Us</a>
        <a href="#how" onClick={e => { e.preventDefault(); scrollToSection('how'); }}>How It Works</a>
        <a href="#guide" onClick={e => { e.preventDefault(); scrollToSection('guide'); }}>Ad Spend Guide</a>
        <a href="#calendar" onClick={e => { e.preventDefault(); scrollToSection('calendar'); }}>Book Call</a>
      </NavLinks>
    </Nav>
    <Hero>
      <Headline>We Deliver Remodeling Jobs — Risk-Free</Headline>
      <Subheadline>$150K+ in ad experience. No contracts. First month completely free.</Subheadline>
      <CTAButton href="#calendar" onClick={e => { e.preventDefault(); scrollToSection('calendar'); }}>Book Your Free Call</CTAButton>
    </Hero>
    <Section id="why">
      <Headline as="h2">Not Guesswork. Just Proven Results.</Headline>
      <BulletList>
        <Bullet><FaCheckCircle color="#1A2233" /> $150,000+ in ad spend experience</Bullet>
        <Bullet><FaCheckCircle color="#1A2233" /> 3+ years in the industry</Bullet>
        <Bullet><FaCheckCircle color="#1A2233" /> No long-term contracts — leave anytime</Bullet>
      </BulletList>
    </Section>
    <Section id="how">
      <Headline as="h2">How It Works</Headline>
      <StepList>
        <Step>Step 1: We build you a free high-end website</Step>
        <Step>Step 2: We launch smart Google Ads based on your capacity</Step>
        <Step>Step 3: You get jobs. If you love it, you stay. If not, we part ways</Step>
      </StepList>
      <CTAButton href="#calendar" onClick={e => { e.preventDefault(); scrollToSection('calendar'); }}>Start Free Trial</CTAButton>
    </Section>
    <Section id="guide">
      <Headline as="h2">Ad Spend Guide</Headline>
      <GuideBox>
        <div>1–3 jobs/month: <b>$20–$40</b> ad budget</div>
        <div>5+ jobs/month: <b>$50–$100+</b> ad budget</div>
        <div style={{ marginTop: 16, fontSize: '0.95em', color: '#888' }}>
          (Contact us for a custom plan)
        </div>
      </GuideBox>
    </Section>
    <LimitedOffer>
      <Headline as="h2" style={{ color: '#fff' }}>Only accepting 3 new businesses per month</Headline>
      <CTAButton href="#calendar" onClick={e => { e.preventDefault(); scrollToSection('calendar'); }}>Book Your Free Call Now</CTAButton>
    </LimitedOffer>
    <Section id="calendar">
      <Headline as="h2">Book Your Free Strategy Call</Headline>
      <CalendarFrame>
        <iframe
          title="Book a call"
          src="https://calendly.com/niazjano987"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
        />
        <div style={{ marginTop: 24, fontSize: '1rem', color: '#888' }}>
          Or contact us:<br />
          <a href="https://wa.me/46762855334" style={{ color: '#25D366', textDecoration: 'none', marginRight: 12 }}><FaWhatsapp /> WhatsApp</a>
          <a href="mailto:info@nordicleadflow.com" style={{ color: '#1A2233', textDecoration: 'none', marginLeft: 12 }}><FaEnvelope /> Email</a>
        </div>
      </CalendarFrame>
    </Section>
    <Section id="about">
      <Headline as="h2">About & Contact</Headline>
      <ContactBox>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Nordic Lead Flow is based in Sweden. We believe in Scandinavian values: honesty, quality, and real results.</div>
        <div style={{ margin: '16px 0' }}>
          <FaWhatsapp color="#25D366" /> +46 76 285 5334<br />
          <FaEnvelope color="#1A2233" /> info@nordicleadflow.com
        </div>
        <div style={{ fontSize: '0.95em', color: '#888' }}>We help remodelers grow with Google Ads — risk-free.</div>
      </ContactBox>
    </Section>
    <Footer>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <LogoImg src="/ChatGPT Image May 14, 2025, 07_59_54 PM.png" alt="Nordic Lead Flow Logo" style={{ height: 32, margin: 0 }} />
        <span>&copy; {new Date().getFullYear()} Nordic Lead Flow. All rights reserved.</span>
      </div>
    </Footer>
  </>
);

export default App; 