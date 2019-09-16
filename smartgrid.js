const smartgrid = require('smart-grid');

smartgrid('./css/layout', {
    mobileFirst: false,
    columns: 15,
    offset: "30px",
    outputStyle: "scss",
    container: {
        maxWidth: "1500px",
        fields: "15px",
        containerWidth: "1500px"
    },
    breakPoints: {
        lg: {
            width: "1499.99px",
            fields: "39px",
            containerWidth: "768px"
        },
        md: {
            width: "991.99px",
            fields: "39px",
            containerWidth: "768px"
        },
        sm: {
            width: "767.99px",
            fields: "25px",
            containerWidth: "320px"
        },
        xs: {
            width: "575.99px",
            fields: "25px",
            containerWidth: "320px"
        }
    },
});