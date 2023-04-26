import React, { useState, useRef, FormEvent, BaseSyntheticEvent } from 'react';
import './moreInfo.scss';
import emailjs from '@emailjs/browser';
import { BasicInfo } from './BasicInfo/BasicInfo';
import { Form } from './Form/Form';

export const MoreInfo = ({ darkMood }: { darkMood: boolean }) => {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [basicInfoVisibility, setbasicInfoVisibility] = useState(true);
  const myForm = useRef();
  const [form, setForm] = useState({
    name: { content: '', err: false },
    email: { content: '', err: false },
    message: { content: '', err: false },
  });

  const onChangeInput = (e: BaseSyntheticEvent) => {
    setSuccess(false);
    setForm((prev) => ({
      ...prev,
      [e.target.name]: { content: [e.target.value], err: false },
    }));
  };

  const handleFocus = (): void => {
    if (window.innerWidth < 600) {
      setbasicInfoVisibility(false);
      const ggg = document.querySelector('.moreInfo') as any;
      ggg.style.height = '250vh';
      console.log(ggg);
    }
  };

  const validation = (e: BaseSyntheticEvent) => {
    if (window.innerWidth < 600) {
      setbasicInfoVisibility(true);
      const ggg = document.querySelector('.moreInfo') as any;
      ggg.style.height = '100vh';
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight * 4, behavior: 'smooth' });
      }, 35);
    }
    if ([...e.target.value].length < 3) {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: { content: [e.target.value], err: true },
      }));
    }
    if (e.target.name === 'email' && ![...e.target.value].includes('@')) {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: { content: [e.target.value], err: true },
      }));
    }
  };

  const sendEmail = (e: FormEvent | BaseSyntheticEvent) => {
    e.preventDefault();
    const isEnoughLong =
      [...e.target.name.value].length >= 3 &&
      [...e.target.email.value].length >= 3 &&
      [...e.target.message.value].length >= 3;
    const isCorrect =
      isEnoughLong && !form.name.err && !form.email.err && !form.message.err;
    if (isCorrect) {
      setPending(true);
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
            setPending(false);
            setSuccess(true);
          },
          (error) => {
            console.log(error.text);
            setPending(false);
            setFail(true);
          }
        );
    }
  };

  return (
    <>
      <section className="moreInfo link">
        {/* {basicInfoVisibility && <BasicInfo />} */}
        <BasicInfo />
        <div className="formContainer">
          <Form
            success={success}
            pending={pending}
            form={form}
            myForm={myForm}
            handleFocus={handleFocus}
            sendEmail={sendEmail}
            validation={validation}
            onChangeInput={onChangeInput}
            darkMood={darkMood}
          />
          {success && <div className="success">Success, check Your Email!</div>}
          {fail && <div className="fail">please try again</div>}
        </div>
      </section>
    </>
  );
};
