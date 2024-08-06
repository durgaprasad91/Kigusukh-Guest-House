import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import Navbar from './components/JS/Navbar';
import Hero from './components/JS/Hero';
import AboutUs from './components/JS/About';
import Services from './components/JS/Services';
import SupportPage from './components/JS/support';
import ContactForm from './components/JS/Contactform';
import Footer from './components/JS/Footer';
import CardComponent from './components/JS/Gallery';

test('renders Navbar component', async () => {
  await act(async () => {
    render(<Navbar />);
  });

  expect(screen.getByAltText('Logo')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Services')).toBeInTheDocument();
  expect(screen.getByText('Rooms')).toBeInTheDocument();
  expect(screen.getByText('Gallery')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
  expect(screen.getAllByText('BOOK NOW').length).toBe(2);
});

test('renders Hero component', async () => {
  render(<Hero/>);

  await waitFor(() => {
    expect(screen.getByText(/Make Yourself At Home/i)).toBeInTheDocument();
    expect(screen.getByText(/In Our/i)).toBeInTheDocument();
  });
  
  expect(screen.getByText(/Book Your Stay/i)).toBeInTheDocument();
});

test('renders AboutUs component', async () => {
  render(<AboutUs/>);

  expect(await screen.findByText(/About Us/i)).toBeInTheDocument();
  expect(await screen.findByText(/The Best Holidays Start Here!/i)).toBeInTheDocument();
  
  expect(screen.getByText(/BOOK NOW/i)).toBeInTheDocument();
  expect(screen.getByText(/Open Map/i)).toBeInTheDocument();
  expect(screen.getByText(/WhatsApp/i)).toBeInTheDocument();
});

test('renders Service component', async () => {
  render(<Services/>);

  await waitFor(() => {
    expect(screen.getByTestId('header')).toHaveTextContent(/Our Living Room/i);
    expect(screen.getByTestId('highlighted-text')).toHaveTextContent(/The Most Memorable Rest Time Starts Here/i);
  });

  const cozyHavenRoomTitle = screen.getByTestId('cozy-haven-room');
  expect(cozyHavenRoomTitle).toBeInTheDocument();
  expect(cozyHavenRoomTitle).toHaveTextContent(/Cozy Haven Room/i);

  const spaciousSerenitySuiteTitle = screen.getByTestId('spacious-serenity-suite');
  expect(spaciousSerenitySuiteTitle).toBeInTheDocument();
  expect(spaciousSerenitySuiteTitle).toHaveTextContent(/Spacious Serenity Suite/i);

  const luxuriousDreamSuiteTitle = screen.getByTestId('luxurious-dream-suite');
  expect(luxuriousDreamSuiteTitle).toBeInTheDocument();
  expect(luxuriousDreamSuiteTitle).toHaveTextContent(/Luxurious Dream Suite/i);
});

test('renders CardComponent component', async () => {
  render(<CardComponent/>);

  const sectionTitle = screen.getByText(/Gallery/i);
  expect(sectionTitle).toBeInTheDocument();
  
  const cardTitles = [
    'Beautiful Landscape',
    'Cityscape',
    'Mountain View',
    'Beach',
    'Sunset',
    'Forest',
    'OutLook',
    'Rooms',
    'Best furniture',
    'Snowy Mountains'
  ];

  for (const title of cardTitles.slice(0, 3)) {
    const cardTitle = await screen.findByText(title, {}, { timeout: 5000 });
    expect(cardTitle).toBeInTheDocument();
  }

  const toggleButton = screen.getByText(/View More/i);
  expect(toggleButton).toBeInTheDocument();

  toggleButton.click();

  await waitFor(() => {
    for (const title of cardTitles) {
      const cardTitle = screen.getByText(title);
      expect(cardTitle).toBeInTheDocument();
    }
  }, { timeout: 5000 });
});

test('renders SupportPage component', () => {
  render(<SupportPage/>);

  const headingElement = screen.getByText(/Strive Only For The Best./i);
  expect(headingElement).toBeInTheDocument();

  const bookingCountElement = screen.getByText(/Bookings Completed/i);
  expect(bookingCountElement).toBeInTheDocument();

  const happyCustomersCountElement = screen.getByText(/Happy Customers/i);
  expect(happyCustomersCountElement).toBeInTheDocument();

  const services = [
    'High Class Security',
    '24 Hours Room Service',
    'Restaurant',
    'Tourist Guide Support'
  ];

  services.forEach(service => {
    const serviceElement = screen.getByText(service);
    expect(serviceElement).toBeInTheDocument();
  });
});

test('renders ContactForm component', () => {
  render(<ContactForm/>);

  const headingElement = screen.getByText(/Contact Us/i);
  expect(headingElement).toBeInTheDocument();
  const firstNameInput = screen.getByPlaceholderText(/First Name/i);
  expect(firstNameInput).toBeInTheDocument();
  const lastNameInput = screen.getByPlaceholderText(/Last Name/i);
  expect(lastNameInput).toBeInTheDocument();
  const emailInput = screen.getByPlaceholderText(/Email Address/i);
  expect(emailInput).toBeInTheDocument();
  const phoneInput = screen.getByPlaceholderText(/Mobile Number/i);
  expect(phoneInput).toBeInTheDocument();
  const messageTextarea = screen.getByPlaceholderText(/Write your message here.../i);
  expect(messageTextarea).toBeInTheDocument();
  const sendButton = screen.getByText(/Send/i);
  expect(sendButton).toBeInTheDocument();
  const viewInfoButton = screen.getByText(/View Info/i);
  expect(viewInfoButton).toBeInTheDocument();
});

test('renders Footer component', () => {
  render(<Footer/>);

  const brandGuestHouseElement = screen.getByText(/Guest House/i, { selector: '#footer-brand' });
  expect(brandGuestHouseElement).toBeInTheDocument();

  const quickLinksElement = screen.getByText(/QUICK LINKS/i);
  expect(quickLinksElement).toBeInTheDocument();

  const ourServicesElement = screen.getByText(/OUR SERVICES/i);
  expect(ourServicesElement).toBeInTheDocument();

  const contactUsElement = screen.getByText(/CONTACT US/i);
  expect(contactUsElement).toBeInTheDocument();

  const bookNowButton = screen.getByRole('button', { name: /BOOK NOW/i });
  expect(bookNowButton).toBeInTheDocument();

  const copyrightElement = screen.getByText(/Guest House/i, { selector: '#footer-copyright' });
  expect(copyrightElement).toBeInTheDocument();
});
