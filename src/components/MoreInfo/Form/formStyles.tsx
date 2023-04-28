import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  alpha,
  styled,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';

const inputStyle = {
  '&': {
    marginBottom: window.innerWidth > 600 ? '2vw' : '4vw',
    width: '100%',
  },
  '& label': {
    color: 'black',
    addingBottom: 0,
    margin: 0,
    fontSize: window.innerWidth > 600 ? '2vw' : '5vw',
    fontFamily: ['Apfel'],
  },
  '& label.Mui-focused': {
    color: 'black',
    fontFamily: ['Apfel'],
  },
  '& .MuiOutlinedInput-root': {
    fontSize: window.innerWidth > 600 ? '2vw' : '5vw',
    '& fieldset': {
      borderColor: 'grey',
      borderRadius: '15px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
    '& .MuiInputBase-input': {
      fontFamily: ['Apfel'],
    },
    '& .MuiLoadingButton': {
      fontSize: window.innerWidth > 600 ? '2vw' : '5vw',
    },
  },
};

const inputDarkStyle = {
  '&': {
    marginBottom: window.innerWidth > 600 ? '2vw' : '4vw',
    width: '100%',
    colorScheme: 'dark',
  },
  '&:focus': {
    backgroundColor: 'grey',
    borderRadius: '15px',
  },
  '&:active': {
    borderRadius: '15px',
  },
  '& label': {
    addingBottom: 0,
    margin: 0,
    color: 'white',
    borderRadius: '15px',
    fontSize: window.innerWidth > 600 ? '2vw' : '5vw',
    fontFamily: ['Apfel'],
  },
  '& label.Mui-focused': {
    fontFamily: ['Apfel'],
    color: 'white',
    borderColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    fontSize: window.innerWidth > 600 ? '2vw' : '5vw',
    '& fieldset': {
      borderColor: 'grey',
      borderRadius: '15px',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid white',
      // borderColor: 'white',
      // boxShadow: "0px 0px 4px 2px rgb(112, 114, 149)"
    },
    '& .MuiInputBase-input': {
      fontFamily: ['Apfel'],
      color: 'white',
    },
    'input:-internal-autofill-selected': {
      colorScheme: 'dark',
      borderRadius: '15px',
    },
  },
};

const buttonLightStyles = {
  textTransform: 'none',
  fontSize: window.innerWidth > 600 ? '2vw' : '5vw',
  border: '2px solid',
  width: '50%',
  color: 'black',
  borderRadius: '30px',
  backgroundColor: '#ffffff',
  borderColor: '#000000',
  fontFamily: ['Apfel'],
  '&:hover': {
    borderColor: '#000000',
    border: '2px solid',
  },
  '&:active': {
    borderColor: '#000000',
    border: '2px solid',
    fontSize: window.innerWidth > 600 ? '2vw' : '5vw',
  },
  '& .MuiCircularProgress-root': {
    width: window.innerWidth > 600 ? '1.7vw !important' : '3.7vw !important',
    height: window.innerWidth > 600 ? '1.7vw !important' : '3.7vw !important',
    marginRight: '2vw !important',
  },
};

const buttonDarkStyles = {
  textTransform: 'none',
  fontSize: window.innerWidth > 600 ? '2vw' : '5vw',
  border: '1px solid white',
  width: '50%',
  color: 'white !important',
  borderRadius: '30px',
  backgroundColor: '#131313',
  fontFamily: ['Apfel'],
  '&:hover': {
    boxShadow: '0px 0px 4px 3px rgb(112, 114, 149)',
    border: '1px solid white',
  },
  '&:active': {
    fontSize: window.innerWidth > 600 ? '2vw' : '5vw',
    border: '0px solid',
  },
  '& .MuiCircularProgress-root': {
    border: '0px solid',
    width: window.innerWidth > 600 ? '1.7vw !important' : '3.7vw !important',
    height: window.innerWidth > 600 ? '1.7vw !important' : '3.7vw !important',
    marginRight: '2vw !important',
  },
};

// -------------------------------------------------------------------

export const CustomLightMaterialElement = styled(TextField)(inputStyle);
export const CustomLightMaterialButton = styled(LoadingButton)(
  buttonLightStyles as any
);

export const CustomDarkMaterialElement = styled(TextField)(inputDarkStyle);
export const CustomDarkMaterialButton = styled(LoadingButton)(
  buttonDarkStyles as any
);
