// CSS Variables for Kinde's internal components
const kindeVariables = {
  baseFontFamily: "Arial, Helvetica, sans-serif",
  buttonPrimaryBackgroundColor: "#1E90FF", // dodgerblue hex code
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

  /* Your Custom Layout Styles (Ultra-Compatible) */
  body {
    background-color: #F0F2F5;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center; /* Center text for old browsers */
  }

  /* Using margin:auto for centering instead of Flexbox */
  .widget {
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    padding: 2rem;
    box-sizing: border-box;
    margin-top: 50px; /* Give some space from the top */
    margin-left: auto;
    margin-right: auto;
    text-align: left; /* Reset text alignment for card content */
  }

  .widget-heading {
    font-size: 28px; /* Using pixels for compatibility */
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
`;
