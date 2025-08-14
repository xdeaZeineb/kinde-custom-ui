export const getStyles = () => `
  /* Your Custom Layout Styles */
  body {
    background-color: #F0F2F5;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }

  .widget {
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    padding: 2.5rem;
    box-sizing: border-box;
    margin: 50px auto;
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

  /* =================================================================== */
  /* === NEW, SPECIFIC STYLES BASED ON YOUR DEV TOOLS HTML (FIX) === */
  /* =================================================================== */

  /* --- General Form Styling --- */
  .kinde-form {
    margin-bottom: 1rem;
  }
  
  /* --- Email Input Field --- */
  .kinde-control-select-text {
    display: block !important;
    width: 100% !important;
    height: 44px !important;
    padding: 0 12px !important;
    font-size: 16px !important;
    margin-bottom: 12px !important;
    border: 1px solid #CCCCCC !important;
    border-radius: 6px !important;
    box-sizing: border-box !important;
  }

  /* --- Primary "Continue" Button --- */
  .kinde-button.kinde-button-variant-primary {
    width: 100% !important;
    padding: 12px !important;
    font-size: 16px !important;
    font-weight: bold !important;
    color: #FFFFFF !important;
    background-color: #1E90FF !important; /* dodgerblue */
    border: none !important;
    border-radius: 6px !important;
    cursor: pointer !important;
  }
  
  /* --- Social Login Buttons --- */
  .kinde-layout-auth-buttons {
    text-align: center !important;
    list-style-type: none !important; /* Removes bullet points from the <ul> */
    padding: 0 !important;
    margin-bottom: 24px !important;
  }
  .kinde-layout-auth-buttons li {
    display: inline-block !important; /* Lines them up horizontally */
    margin: 0 5px !important; /* Adds space between buttons */
  }
  .kinde-button.kinde-button-variant-secondary {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 48px !important;
    height: 48px !important;
    border: 1px solid #E0E0E0 !important;
    border-radius: 50% !important; /* Makes them circular */
    background-color: #FFFFFF !important;
  }
  .kinde-button.kinde-button-variant-secondary svg {
    width: 24px !important;
    height: 24px !important;
  }

  /* This is a standard CSS trick to hide text meant for screen readers. */
  .kinde-util-hide-visually {
    border: 0 !important;
    clip: rect(0 0 0 0) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
  }

  /* --- "Powered by Kinde" Branding --- */
  .kinde-layout-widget-branding {
    text-align: center !important;
    margin-top: 24px !important;
  }
  .kinde-layout-widget-branding figcaption {
    font-size: 12px !important;
    color: #909090 !important;
    margin-bottom: 4px !important;
  }
  .kinde-layout-widget-branding a svg {
    width: 80px !important;
    height: auto !important;
  }
  
  /* --- "OR" Separator --- */
  .kinde-choice-separator {
    text-transform: uppercase !important;
    font-size: 12px !important;
    color: #6C757D !important;
  }
`;
