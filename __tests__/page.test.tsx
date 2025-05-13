/// <reference types="@testing-library/jest-dom" />
/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

// Mock next/navigation since it's not available in test environment
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      pathname: '/',
    }
  },
}))

// Mock useRef implementation
const mockRef = { current: null }
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: () => mockRef
}))

// Mock all child components
jest.mock('@/components/countdown-timer', () => () => <div data-testid="countdown-timer">Countdown Timer</div>)
jest.mock('@/components/section-divider', () => ({ text }: { text: string }) => (
  <div data-testid="section-divider">{text}</div>
))
jest.mock('@/components/sections/HeroSection', () => () => <div data-testid="hero-section">Hero Section</div>)
jest.mock('@/components/sections/CompetitionSection', () => () => <div data-testid="competition-section">Competition Section</div>)
jest.mock('@/components/sections/AppGridSection', () => () => <div data-testid="app-grid-section">App Grid Section</div>)
jest.mock('@/components/sections/ToolboxSection', () => () => <div data-testid="toolbox-section">Toolbox Section</div>)
jest.mock('@/components/sections/ProfileMakeoverSection', () => () => <div data-testid="profile-makeover-section">Profile Makeover Section</div>)
jest.mock('@/components/sections/TopOnePercentSection', () => () => <div data-testid="top-one-percent-section">Top One Percent Section</div>)
jest.mock('@/components/sections/AutoPilotSection', () => () => <div data-testid="auto-pilot-section">Auto Pilot Section</div>)
jest.mock('@/components/sections/CaseStudies', () => ({
  CaseStudies: () => <div data-testid="case-studies">Case Studies</div>
}))
jest.mock('@/components/sections/FAQSection', () => () => <div data-testid="faq-section">FAQ Section</div>)
jest.mock('@/components/layout/Footer', () => () => <div data-testid="footer">Footer</div>)
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
))

describe('Home Page', () => {
  it('renders the main page with all sections', () => {
    render(<Page />)
    
    // Check if the countdown timer is rendered
    expect(screen.getByTestId('countdown-timer')).toBeInTheDocument()

    // Check if all section dividers are rendered with correct text
    const sectionDividers = screen.getAllByTestId('section-divider')
    expect(sectionDividers.length).toBe(3)
    expect(sectionDividers[0]).toHaveTextContent("YOU'RE FIGHTING A RIGGED GAME")
    expect(sectionDividers[1]).toHaveTextContent("WELCOME TO 1%")
    expect(sectionDividers[2]).toHaveTextContent("THE ULTIMATE CHEAT CODE")

    // Check if all major sections are rendered
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('competition-section')).toBeInTheDocument()
    expect(screen.getByTestId('app-grid-section')).toBeInTheDocument()
    expect(screen.getByTestId('toolbox-section')).toBeInTheDocument()
    expect(screen.getByTestId('profile-makeover-section')).toBeInTheDocument()
    expect(screen.getByTestId('top-one-percent-section')).toBeInTheDocument()
    expect(screen.getByTestId('auto-pilot-section')).toBeInTheDocument()
    expect(screen.getByTestId('case-studies')).toBeInTheDocument()
    expect(screen.getByTestId('faq-section')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})