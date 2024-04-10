"use client";

/* eslint-disable @next/next/no-img-element */
import CloudsHero from "@/components/web/elements/cloudsHero/cloudsHero";
import InputField from "@/components/web/elements/inputField/inputField";
import TextAreaField from "@/components/web/elements/inputField/textareaField";
import SubmittedToast from "@/components/web/elements/toast/submittedToast";
import Link from "next/link";
import { useState } from "react";

const ContactPage = () => {
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [reasonText, setReasonText] = useState("");
  const [messageText, setMessageText] = useState("");
  const [checkConsent, setCheckConsent] = useState(false);
  const [errorText, setErrorText] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");

  const resetForm = () => {
    setNameText("");
    setEmailText("");
    setReasonText("");
    setMessageText("");
    setCheckPrivacy(false);
    setErrorText("");
  };

  const validateField = (field) => {
    if (field === "" || field === null || field === undefined) {
      return false;
    } else {
      return true;
    }
  };
  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };
  const validateCheck = (check) => {
    if (check) return true;
    else {
      return false;
    }
  };

  const validateForm = () => {
    if (!validateField(nameText)) {
      setErrorText(`El campo nombre es requerido`);
      return false;
    }

    if (!validateField(emailText)) {
      setErrorText(`El campo Email es requerido`);
      return false;
    } else {
      if (!validateEmail(emailText)) {
        setErrorText(`El campo Email no es válido`);
        return false;
      }
    }

    if (!validateField(reasonText)) {
      setErrorText(`El campo Motivo es requerido`);
      return false;
    }

    if (!validateField(messageText)) {
      setErrorText(`El campo Mensaje es requerido`);
      return false;
    }

    if (!validateCheck(checkConsent)) {
      setErrorText(`Acceptar la Privacidad es requerido`);
      return false;
    }

    return true;
  };

  const sendFormData = () => {
    const data = {
      name: nameText,
      email: emailText,
      reason: reasonText,
      message: messageText,
      consent: checkConsent,
    };
    const result = true;
    return { data: data, valid: result };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = validateForm();
    if (valid) {
      setLoading(true);
      const result = sendFormData();
      if (result.valid) {
        await sendMailAdmin(result.data);
      }
    }
  };

  const sendMailAdmin = async (formData) => {
    const subject = "Nuevo mensaje desde el formulario de contacto";
    const message = `Hola, ${formData.name} te ha enviado un mensaje desde el formulario de contacto de la web.`;
    const email = "contacto@devyond.com";
    const mailFlag = true;
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify({
          subject,
          message,
          email,
          mailFlag,
          formData,
        }),
      });
      if (response?.ok) {
        resetForm();
        setLoading(false);
        setSubmitted(true);
        setSubmittedMessage("success");
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        setLoading(false);
        setSubmitted(true);
        setSubmittedMessage("error");
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.log(await response.json());
    }
  };

  return (
    <>
      <div
        id="hero scene"
        className="flex flex-col w-full h-auto items-center font-system relative "
      >
        <CloudsHero />
        <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1140px] h-auto px-4 md:mt-[80px] pb-16 md:pb-16 justify-between items-center z-40">
          <div className="flex flex-col w-auto h-auto lg:pl-4 xl:pl-0 mt-8 lg:mt-0 justify-center items-center lg:items-start">
            <h1 className="hidden md:flex w-auto h-auto text-[44px] text-primary-500 font-bold text-center lg:text-left leading-snug">
              Contacta con
              <br />
              nosotros para
              <br />
              resolver tus dudas
            </h1>
            <h1 className="flex md:hidden w-auto h-auto my-4 text-[44px] text-primary-500 font-bold text-center leading-snug">
              Contacta con nosotros para resolver tus dudas
            </h1>
            <div className="flex flex-col w-full max-w-[555px] mt-5">
              <p className="text-primary-500 font-normal text-[26px] leading-relaxed text-center lg:text-left">
                ¿Cómo podemos ayudarte? Envíanos un e-mail y haremos todo lo
                posible para contestar tus dudas en máximo 24 horas.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-auto h-auto justify-end">
            <img
              src="/assets/images/contact.png"
              alt="Iphone tribbum app for whom screen"
              className="flex w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-auto bg-secondary-50 font-system items-center z-40 relative">
        {loading && (
          <div className="flex flex-col w-full h-96 px-6 justify-center items-center absolute top-0 left-10 z-50">
            <div className="flex flex-row w-auto h-auto mt-24 justify-center items-center absolute z-50">
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        )}
        {submitted && (
          <div className="flex flex-col w-auto h-96 px-6 justify-center items-center absolute top-36 z-50">
            <SubmittedToast type={submittedMessage} />
          </div>
        )}
        <div className="flex flex-col w-full max-w-[1140px] md:container md:mx-auto xl:max-w-[1140px] h-auto px-4 pt-[60px] pb-12 items-start">
          <h2 className="flex text-[40px] text-primary-500 font-medium text-center md:text-left">
            Contacto
          </h2>
          <form
            className="flex flex-col w-full h-auto mt-8 gap-4"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            noValidate
          >
            <InputField
              id={"name"}
              name={"email"}
              type={"text"}
              placeholder="Nombre"
              inputValue={nameText}
              onChange={(e) => {
                setNameText(e.target.value);
              }}
              required={true}
            />
            <InputField
              id={"email"}
              name={"email"}
              type={"email"}
              placeholder="Correo"
              inputValue={emailText}
              onChange={(e) => {
                setEmailText(e.target.value);
              }}
              required={true}
            />
            <InputField
              id={"reason"}
              name={"reason"}
              type={"text"}
              placeholder="Motivo"
              inputValue={reasonText}
              onChange={(e) => {
                setReasonText(e.target.value);
              }}
              required={true}
            />
            <TextAreaField
              id={"message"}
              name={"message"}
              placeholder="Mensaje"
              inputValue={messageText}
              onChange={(e) => {
                setMessageText(e.target.value);
              }}
              required={false}
            />
            <div className="flex flex-row w-auto h-auto ">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                onChange={(e) => setCheckConsent(!checkConsent)}
                required={true}
              />
              <label
                className="flex flex-row ml-2 text-base text-primary-500 font-normal items-center "
                htmlFor="consent"
              >
                <span className="flex text-primary-200">
                  He leído y acepto la
                </span>
                <span className="flex text-secondary-300 cursor-pointer ml-2">
                  <Link
                    href="/privacidad"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Política de protección de datos
                  </Link>
                </span>
              </label>
            </div>
            <div className="flex flex-row w-auto h-auto justify-start items-center">
              <button
                type="submit"
                className="flex w-auto h-auto px-4 py-2 text-base text-white font-normal bg-secondary-300 rounded-[5px] uppercase cursor-pointer active:scale-95"
              >
                Enviar
              </button>
              <div className="flex flex-row w-full h-auto ml-4 justify-start text-red-600 font-semibold text-lg">
                {errorText}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
