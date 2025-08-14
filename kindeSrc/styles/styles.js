// CSS Variables for Kinde's internal components
const kindeVariables = {
  baseFontFamily: "Arial, Helvetica, sans-serif",
  buttonPrimaryBackgroundColor: "#1E90FF",
  buttonPrimaryColor: "#FFFFFF",
  buttonBorderRadius: "6px",
  buttonSecondaryBackgroundColor: "#F8F9FA",
  buttonSecondaryColor: "#343A40",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#DEE2E6",
  buttonSecondaryBorderStyle: "solid",
  buttonSecondaryBorderRadius: "6px",
};

export const getStyles = () => `
  /* Inject Kinde's variables */
  :root {
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    /* ... and so on ... */
  }

  /* Your Custom Layout Styles */
  body {
    background-color: #F0F2F5;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .widget {
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    padding: 2rem;
    box-sizing: border-box;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }

  .widget-heading {
    font-size: 28px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 8px;
    color: #212529;
  }

  .widget-description {
    font-size: 16px;
    color: #6C757D;
    margin-top: 0;
    margin-bottom: 32px;
  }

  /* ================================================= */
  /* === STYLES FOR KINDE'S INTERNAL COMPONENTS (FIX) === */
  /* ================================================= */

  /* This styles the container for the social login buttons */
  [data-kinde-layout-auth-buttons] { 
    display: flex;
    flex-wrap: wrap; /* Allows buttons to wrap on smaller screens */
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem; /* Adds space below the buttons */
  }

  /* This styles the individual social login buttons */
  [data-kinde-layout-auth-buttons-item] {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Ensures nothing spills out */
  }

  /* This hides the "Continue with..." text inside the buttons */
  [data-kinde-layout-auth-buttons-item] > div {
    display: none;
  }

  /* This hides the large "Powered by Kinde" logo */
  [data-kinde-branding] {
    display: none !important;
  }

  /* This styles the "OR" separator text */
  [data-kinde-choice-separator] {
    text-transform: uppercase;
    font-size: 12px;
    color: #6C757D;
  }
`;
