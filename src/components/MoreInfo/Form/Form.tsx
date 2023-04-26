import React, {
  useState,
  FormEvent,
  BaseSyntheticEvent,
  useEffect,
} from 'react';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import {
  CustomLightMaterialButton,
  CustomLightMaterialElement,
  CustomDarkMaterialElement,
  CustomDarkMaterialButton,
} from './formStyles';

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
  darkMood: boolean;
}

export const Form = (p: props) => {
  const [CustomThemeElement, setCustomThemeElement] = useState(
    () => CustomLightMaterialElement
  );
  const [CustomThemeButton, setCustomThemeButton] = useState(
    () => CustomLightMaterialButton
  );
  const defaultPropsInput = {
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => p.validation(e),
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => p.onChangeInput(e),
    onFocus: () => p.handleFocus(),
  };

  useEffect(() => {
    if (p.darkMood) {
      setCustomThemeElement(() => CustomDarkMaterialElement);
      setCustomThemeButton(() => CustomDarkMaterialButton);
    } else {
      setCustomThemeElement(() => CustomLightMaterialElement);
      setCustomThemeButton(() => CustomLightMaterialButton);
    }
  }, [p.darkMood]);

  return (
    <Box
      component="form"
      autoComplete="on"
      onSubmit={(e: FormEvent) => p.sendEmail(e)}
      ref={p.myForm}
    >
      <CustomThemeElement
        name="name"
        label="Name"
        error={p.form.name.err}
        helperText={p.form.name.err ? 'too short name' : ''}
        {...defaultPropsInput}
      />
      <CustomThemeElement
        name="email"
        label="Email"
        type={'email'}
        error={p.form.email.err}
        helperText={p.form.email.err ? 'incorrect adress' : ''}
        {...defaultPropsInput}
      />
      <CustomThemeElement
        name="message"
        label="Your message"
        error={p.form.message.err}
        helperText={p.form.message.err ? 'too short message' : ''}
        multiline
        rows={window.innerWidth > 600 ? '5' : '4'}
        {...defaultPropsInput}
      />
      <CustomThemeButton
        loading={p.pending}
        loadingPosition="end"
        endIcon={
          p.success ? (
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
        variant="outlined"
      >
        Send
      </CustomThemeButton>
    </Box>
  );
};
