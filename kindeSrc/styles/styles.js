// CSS Variables for Kinde's internal components
const kindeVariables = {
  // Fonts
  baseFontFamily: "Arial, sans-serif",

  // Primary Button (e.g., "Continue")
  buttonPrimaryBackgroundColor: "#2563eb", // A standard blue
  buttonPrimaryColor: "#ffffff",
  buttonBorderRadius: "6px", // A more traditional border radius

  // Secondary Button (e.g., social logins)
  buttonSecondaryBackgroundColor: "#f8f9fa",
  buttonSecondaryColor: "#343a40",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#dee2e6",
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
    background-color: #f0f2f5;
    margin: 0;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: 1rem;
    box-sizing: border-box;
  }

  .widget {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    box-sizing: border-box;
  }

  .widget-heading {
    font-size: 1.75rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #212529;
  }

  .widget-description {
    font-size: 1rem;
    color: #6c757d;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  /* Make Kinde's social login buttons a bit bigger */
  [data-kinde-layout-auth-buttons] { 
    display: flex;
    justify-content: center;
    gap: 0.5rem; /* Note: gap is modern, but has good support */
  }

  [data-kinde-layout-auth-buttons-item] {
    width: 3rem;
    height: 3rem;
  }
`;
