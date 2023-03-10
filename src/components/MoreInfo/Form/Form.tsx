import React, { useState, useRef, FormEvent, BaseSyntheticEvent } from 'react';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';

const CustomMaterialElement = styled(TextField)({
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
});

const CustomButtonMaterial = styled(LoadingButton)({
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
});

interface form {
  name: {
    content: string;
    err: boolean;
  };
  email: {
    content: string;
    err: boolean;
  };
  message: {
    content: string;
    err: boolean;
  };
}

interface props {
  myForm: React.MutableRefObject<undefined>;
  sendEmail: (e: FormEvent | BaseSyntheticEvent) => void;
  validation: (e: BaseSyntheticEvent) => void;
  onChangeInput: (e: BaseSyntheticEvent) => void;
  handleFocus: () => void;
  form: form;
  pending: boolean;
  success: boolean;
}

export const Form = ({
  myForm,
  sendEmail,
  validation,
  onChangeInput,
  handleFocus,
  form,
  pending,
  success,
}: props) => {
  return (
    <Box
      component="form"
      autoComplete="on"
      onSubmit={(e: FormEvent) => sendEmail(e)}
      ref={myForm}
    >
      <CustomMaterialElement
        error={form.name.err}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => validation(e)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e)}
        onFocus={handleFocus}
        name="name"
        helperText={form.name.err ? 'too short name' : ''}
        label="Name"
      />
      <CustomMaterialElement
        error={form.email.err}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => validation(e)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e)}
        onFocus={handleFocus}
        name="email"
        helperText={form.email.err ? 'incorrect adress' : ''}
        type={'email'}
        label="Email"
      />
      <CustomMaterialElement
        label="Your message"
        name="message"
        error={form.message.err}
        onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => validation(e)}
        onFocus={handleFocus}
        helperText={form.message.err ? 'too short message' : ''}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChangeInput(e)
        }
        multiline
        rows={window.innerWidth > 600 ? '5' : '4'}
      />
      <CustomButtonMaterial
        loading={pending}
        loadingPosition="end"
        endIcon={
          success ? (
            <CheckIcon
              style={{ fontSize: window.innerWidth > 600 ? '2vw' : '6vw' }}
            />
          ) : (
            <SendIcon
              style={{ fontSize: window.innerWidth > 600 ? '2vw' : '6vw' }}
            />
          )
        }
        type="submit"
        size="large"
        variant="outlined"
      >
        Send
      </CustomButtonMaterial>
    </Box>
  );
};
