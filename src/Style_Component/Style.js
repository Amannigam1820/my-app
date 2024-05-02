import { styled  } from '@mui/material'

const OrangeButton = styled("Button")({
    backgroundColor: 'orange', // Set background color to orange
    color: 'white', // Set text color to white
    margin: 'auto', // Center the button horizontally
    display: 'block', // Ensure button takes up full width
    marginTop:"2rem",
    height:"3rem",
    width:"8rem",
    borderRadius:"7px",
    border:'none',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
   cursor:'pointer'
})

const BackButton = styled("Button")({
    backgroundColor: '#e6e4e1', // Set background color to orange
    color: 'orange', // Set text color to white
    margin: 'auto', // Center the button horizontally
    display: 'block', // Ensure button takes up full width
    marginTop:"2rem",
    height:"3rem",
    width:"8rem",
    borderRadius:"7px",
    border:'none',
    marginRight:"4rem",
    //boxShadow:"5px 10px"
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    cursor:'pointer'
})





export { OrangeButton, BackButton};
