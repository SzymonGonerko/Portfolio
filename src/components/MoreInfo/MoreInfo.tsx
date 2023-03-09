import React, { useState, useRef, FormEvent, BaseSyntheticEvent } from 'react';
import './moreInfo.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import LoadingButton from '@mui/lab/LoadingButton';


const CustomMaterialElement = styled(TextField)({
  '&': {
    marginBottom: '2vw',
    width: '100%',
  },
  '& label': {
    color: 'black',
    addingBottom: 0,
    margin: 0,
    fontSize: '2vw',
    fontFamily: ['Apfel'],
  },
  '& label.Mui-focused': {
    color: 'black',
    fontFamily: ['Apfel'],
  },
  '& .MuiOutlinedInput-root': {
    fontSize: '2vw',
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
      fontSize: "2vw"
    }
  },
});

const CustomButtonMaterial = styled(LoadingButton)({
  textTransform: 'none',
  fontSize: '2vw',
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
    fontSize: '2vw',
  },
  '& .MuiCircularProgress-root': {
    width: "1.7vw !important",
    height: "1.7vw !important",
    marginRight: "2vw !important"
  },
});

export const MoreInfo = () => {
  const devJsSummit = 'https://app.evenea.pl/event/devjssummit2023/';
  const meetJs = 'https://www.meetup.com/meet-js-wroclaw/events/291213435/';
  const myForm = useRef();
  const [pending, setPending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)

  const [form, setForm] = useState({
    name: { content: '', err: false },
    email: { content: '', err: false },
    message: { content: '', err: false },
  });

  const onChangeInput = (e: BaseSyntheticEvent) => {
    setSuccess(false)
    setForm((prev) => ({
      ...prev,
      [e.target.name]: { content: [e.target.value], err: false },
    }));
  };

  const validation = (e: BaseSyntheticEvent) => {
    if ([...e.target.value].length < 3) {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: { content: [e.target.value], err: true },
      }));
    }
    if (e.target.name === 'email' && ![...e.target.value].includes("@")) {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: { content: [e.target.value], err: true },
      }));
    }
  };

  const sendEmail = (e: FormEvent | BaseSyntheticEvent) => {
    e.preventDefault();
    const isEnoughLong = [...e.target.name.value].length >= 3 && [...e.target.email.value].length >= 3 && [...e.target.message.value].length >= 3
    const isCorrect = isEnoughLong && !form.name.err && !form.email.err && !form.message.err
    if (isCorrect) {
      setPending(true)
      emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as unknown as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID as unknown as string, 
        myForm.current as unknown as HTMLFormElement,
        'DiWkYrzcC-lisqd-p'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setPending(false)
          setSuccess(true)
        },
        (error) => {
          console.log(error.text);
          setPending(false)
          setFail(true)
        }
      );
    }

  };

  return (
    <section className="moreInfo link">
      <div className="basicInfo">
        <header>
          <h1>
            <span>Hit</span> me up!
          </h1>
          <h2>If You have some questions for me, let me know about it !</h2>
        </header>
        <div className="events">
          <h3>or catch me at...</h3>
          <aside>
            <a className="meetJs" href={meetJs} target={'_blank'} />
            <a className="devJsSummit" href={devJsSummit} target={'_blank'} />
          </aside>
        </div>
      </div>
      <div className="formContainer">
        <Box
          component="form"
          autoComplete="on"
          onSubmit={(e: FormEvent) => sendEmail(e)}
          ref={myForm}
        >
          <CustomMaterialElement
            error={form.name.err}
            onBlur={(e) => validation(e)}
            onChange={(e) => onChangeInput(e)}
            name="name"
            helperText={form.name.err ? 'too short name' : ''}
            label="Name"
          />
          <CustomMaterialElement
            error={form.email.err}
            onBlur={(e) => validation(e)}
            onChange={(e) => onChangeInput(e)}
            name="email"
            helperText={form.email.err ? 'incorrect adress' : ''}
            type={'email'}
            label="Email"
          />
          <CustomMaterialElement
            label="Your message"
            name="message"
            error={form.message.err}
            onBlur={(e) => validation(e)}
            helperText={form.message.err ? 'too short message' : ''}
            onChange={(e) => onChangeInput(e)}
            multiline
            rows={5}
          />
          <CustomButtonMaterial loading={pending} loadingPosition="end" endIcon={success ? <CheckIcon style={{fontSize: "2vw"}}/> : <SendIcon style={{fontSize: "2vw"}} />} type="submit" size="large" variant="outlined">
            Send
          </CustomButtonMaterial>
          {success && <span style={{fontSize: "1vw", textAlign: "left", paddingTop: "0.3vw", marginLeft: "1vw"}}>check Your Email</span>}
          {fail && <span style={{fontSize: "1vw", textAlign: "left", paddingTop: "0.3vw", marginLeft: "1vw", color: "red"}}>please try again</span>}
        </Box>
      </div>
    </section>
  );
};
