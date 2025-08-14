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
    --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
    --kinde-button-secondary-background-color: ${kindeVariables.buttonSecondaryBackgroundColor};
    --kinde-button-secondary-color: ${kindeVariables.buttonSecondaryColor};
    --kinde-button-secondary-border-width: ${kindeVariables.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-color: ${kindeVariables.buttonSecondaryBorderColor};
    --kinde-button-secondary-border-style: ${kindeVariables.buttonSecondaryBorderStyle};
    --kinde-button-secondary-border-radius: ${kindeVariables.buttonSecondaryBorderRadius};
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

  /* ======================================================== */
  /* === NEW FIXES FOR SOCIAL BUTTONS AND KINDE BRANDING === */
  /* ======================================================== */

  /* This styles the container for the social login buttons */
  [data-kinde-layout-auth-buttons] {
    text-align: center; /* Center the buttons inside the container */
    margin-bottom: 24px;
  }

  /* This styles the individual social login buttons for proper spacing */
  [data-kinde-layout-auth-buttons-item] {
    display: inline-block; /* Allows margins to work correctly */
    width: 48px;
    height: 48px;
    margin: 0 5px; /* Adds space between the buttons */
    vertical-align: middle;
  }

  /* This hides the "Continue" text under the icons */
  [data-kinde-layout-auth-buttons-item] span {
    display: none !important;
  }

  /* This styles the "Powered by Kinde" branding section */
  [data-kinde-branding] {
    text-align: center;
    margin-top: 24px;
  }

  /* This targets the "Powered by Kinde" text itself */
  [data-kinde-branding] span {
    display: block;
    font-size: 12px;
    color: #909090;
    margin-bottom: 4px;
  }

  /* This targets the Kinde logo image/svg and makes it much smaller */
  [data-kinde-branding] svg,
  [data-kinde-branding] img {
    width: 60px !important;
    height: auto !important;
    display: inline-block !important; /* Ensures centering works */
  }

  /* This styles the "OR" separator text */
  [data-kinde-choice-separator] {
    text-transform: uppercase;
    font-size: 12px;
    color: #6C757D;
  }
`;
