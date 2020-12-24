//express path for enviroment file
const path = require("path");
//enviroment vars (.env file)
require('dotenv').config({ path: '.env' });
module.exports = { 
    setPageTitle: () => {
        const pageTitle = process.env.TITLE;
        return pageTitle;
    }
}