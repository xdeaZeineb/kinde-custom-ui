export const getStyles = () => `
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
    padding: 2.5rem;
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

  /* ================================================================= */
  /* === NEW: DIRECT STYLES FOR ALL KINDE WIDGET COMPONENTS (FIX) === */
  /* ================================================================= */

  /* --- Email Input Field Styling --- */
  [data-kinde-form] input[type="email"] {
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

  /* --- Primary "Continue" Button Styling --- */
  [data-kinde-form] button[type="submit"] {
    display: inline-block !important;
    width: 100% !important;
    height: 44px !important;
    padding: 0 18px !important;
    font-size: 16px !important;
    font-weight: bold !important;
    color: #FFFFFF !important;
    background-color: #1E90FF !important; /* dodgerblue */
    border: none !important;
    border-radius: 6px !important;
    cursor: pointer !important;
    text-align: center !important;
    line-height: 44px !important;
  }
  
  /* --- Social Login Buttons Styling --- */
  [data-kinde-layout-auth-buttons] {
    text-align: center !important;
    margin-bottom: 24px !important;
    padding-top: 24px !important;
  }
  [data-kinde-layout-auth-buttons-item] {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 48px !important;
    height: 48px !important;
    margin: 0 5px !important;
    border: 1px solid #E0E0E0 !important;
    border-radius: 50% !important;
  }
  [data-kinde-layout-auth-buttons-item] svg {
    width: 24px !important;
    height: 24px !important;
  }
 

  /* --- "Powered by Kinde" Branding --- */
  [data-kinde-branding] {
    display: none !important;
  }
  
  /* --- "OR" Separator --- */
  [data-kinde-choice-separator] {
    text-transform: uppercase !important;
    font-size: 12px !important;
    color: #6C757D !important;
  }
`;
