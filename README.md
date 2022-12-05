# **Automated-Crowd-Monitoring-System-Frontend**


## REQUIREMENTS
* `_config_SheetsTesting.js`

## INSTRUCTIONS FOR CONFIG FILE
1. Create `configurations` directoryy
   
   ![config](![config](https://user-images.githubusercontent.com/74962185/205629424-232235b3-625f-43b8-bf3c-5ca56a7df35f.png)

 
2. Download and paste the config file inside the `configurations` directory
     
     [Config file](https://drive.google.com/file/d/1N1NA5x0eduRB-JHUSJN9MMVZarJ-Krgt/view?fbclid=IwAR0sMkFVCDzZr85_vc1xx9QMnRCwJqs21gCywml25RBMhJ9IpCHkWKKRfD8)

## OR
1. Create `_config_SheetsTesting.js` file inside the `configurations` directory

2. Paste this code inside `_config_SheetsTesting.js` 
     
      ```bash
      const configuration = {
    ID_LENGTH: 10, // THE LENGTH OF NANO ID
    SPREADSHEET_ID: "1faXrVd9NiO8TX-uxm6EalPeJ-1HrtXyjvxgiKaIU3pg", // FOUND IN LINK
    SHEET_NAME: "Registration", // NAME OF THE SHEET
    STARTING_ROW: 2, // THE CELL THAT CONTAINS THE FIRST VALUE ASIDE FROM HEADER
    HEADER_ROW: 0, // THE ROW THAT CONTAINS ALL THE HEADER NAMES
  
    ID_HEADER_NAME: "GENERATED ID", // THE HEADER NAME OF ID
    ID_COLUMN: "E", // THE COLUMN THAT CONTAINS ALL THE GENERATED ID
  
    EMAIL_HEADER_NAME: "EMAIL", // THE HEADER NAME OF EMAIL
    EMAIL_COLUMN: "D", // THE COLUMN THAT CONTAINS ALL THE EMAILS
  
    ENTERED_HEADER_NAME: "ENTERED",
    ENTERED_COLUMN: "F",
  
    SENT_HEADER_NAME: "EMAIL SENT", 
    SENT_COLUMN: "G",
  
    // FOR LOG
    LOG_SHEET_NAME: "Log"
    };
  
    export default configuration;
    ```
