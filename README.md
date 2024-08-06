Kingsukh Guest House Website Redesign
Overview
The Kingsukh Guest House website has been redesigned to enhance user experience through modern UI/UX practices, responsive design, and interactive animations. This document outlines the project details, features, functionality, and testing procedures.

Project Structure
1. Project Description
The redesigned Kingsukh Guest House website includes the following features:

Hero Section: Extended from the navbar to the end of the hero section, with the navbar logo and button positioned on the hero image.
About Us Section: Improved with animations, image shapes, and scrolling-triggered effects.
Gallery Section: Includes styled cards with a title and a "View More" button.
Support Page: Features glass-type cards with icons in a 2x2 grid, animated content appearance, and counting points.
Contact Us Form: Center-aligned with inline input fields, shadow effects, background image, and form validation with SweetAlert notifications.
Responsiveness: Fixed issues with the navbar, hero image, and hamburger menu for various screen sizes.

2. Features and Functionality
Hero Image: Extends across the navbar, responsive design for mobile and tablet views.
Animations: Text and image animations triggered by scrolling, fade-in effects, and button click animations.
Cards and Gallery: Interactive cards with hover effects, gallery section with "View More" button.
Contact Form: Styled form with validation, animation effects on the 'View Info' button, and SweetAlert integration for submission confirmation.
Support Page: Animated glass-type cards with icons, counting points, and styled grid layout.
Accessibility Improvements: Enhanced color contrast and accessibility features.

3. Technologies Used
Frontend: React.js, JavaScript, CSS (Tailwind CSS), HTML.
Backend: Node.js, Express.js (if applicable for form handling).
Testing: Jest, React Testing Library.

4. Setup and Installation
Clone the Repository

bash
Copy code
git clone https://github.com/durgaprasad91/kingsukh-guest-house-website.git
cd kingsukh-guest-house-website
Install Dependencies

bash
Copy code
npm install
Run the Development Server

bash
Copy code
npm start
Run Tests

bash
Copy code
npm test

5. Project Details
Hero Section
Functionality: Navbar logo and button overlay the hero image. Hamburger menu is responsive and correctly displays on smaller screens.
Issues Resolved: Navbar and hero image display issues, hamburger menu visibility, and responsiveness.
About Us Section
Functionality: Enhanced with improved image shapes, scrolling-triggered animations, and dynamic text appearance.
Updates: Removed card component, added new animations, and included map and WhatsApp buttons.
Gallery Section
Functionality: Displays gallery cards with hover effects, title, and "View More" button positioned below.
Updates: Added title and ensured proper spacing and visibility of the "View More" button.
Support Page
Functionality: Glass-type cards with icons and animated counting points in a 2x2 grid layout.
Updates: Added animations for content appearance and styling improvements.
Contact Us Form
Functionality: Center-aligned form with inline input fields, background image, form validation, and SweetAlert notifications.
Updates: Added form validation, visual enhancements, and an animation effect for the 'View Info' button.

6. Testing
Jest Tests: Ensured all components pass the defined tests. Resolved issues with getAllByRole queries for accurate testing.

7. Acknowledgments
Animations and Effects: Implemented using CSS and JavaScript for smooth transitions and interactions.
Design Improvements: Focused on enhancing user experience through modern design trends and accessibility standards.

8. Future Enhancements
Performance Optimization: Continue to monitor and optimize for performance improvements.
Additional Features: Consider adding more interactive elements and refining user interface components.

9. Contact Information
For any questions or further information, please contact:

Name: Tupakula Durga Prasad
Email: durga00312@gmail.com
Phone: 9346336291
LinkedIn: durga-prasad-321b76239
GitHub: durgaprasad91
Personal Portfolio: personal-website-profile.netlify.app
