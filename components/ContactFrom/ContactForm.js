import React, { useState, useRef, useEffect } from "react";

const ContactForm = () => {
  const form = useRef();
  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  // State for submission status, validation errors, and script loading
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // --- Dynamically Load EmailJS Script ---
  // This approach avoids the Next.js dynamic import error by loading the script
  // on the client-side after the component mounts.
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      // The script is now available on the window object
      console.log("EmailJS script loaded.");
      setIsScriptLoaded(true);
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // --- Simple Validation Logic ---
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!forms.name.trim()) {
      tempErrors.name = "The name field is required.";
      isValid = false;
    }
    if (!forms.email.trim()) {
      tempErrors.email = "The email field is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(forms.email)) {
      tempErrors.email = "The email must be a valid email address.";
      isValid = false;
    }
    if (!forms.subject.trim()) {
      tempErrors.subject = "The subject field is required.";
      isValid = false;
    }
    if (!forms.message.trim()) {
      tempErrors.message = "The message field is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Ensure the script is loaded before trying to send
    if (!isScriptLoaded) {
      setSubmissionMessage(
        "Form is not ready yet. Please wait a moment and try again."
      );
      return;
    }

    if (validate()) {
      setIsSubmitting(true);
      setSubmissionMessage(""); // Clear previous messages

      // These IDs come from your EmailJS account
      const serviceID = "service_3m8noel";
      const templateID = "template_xuihfxz"; // This is the template for the email you receive
      const publicKey = "WvcRXgDdqlSUn7eIL";

      // Use window.emailjs since the script is loaded globally
      window.emailjs
        .sendForm(serviceID, templateID, form.current, publicKey)
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setForms({
              name: "",
              email: "",
              subject: "",
              phone: "",
              message: "",
            });
            setSubmissionMessage(
              "Message sent successfully! I'll get back to you soon."
            );
            setIsSubmitting(false);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setSubmissionMessage(
              "Failed to send message. Please try again later."
            );
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <form
      ref={form}
      method="post"
      className="contact-validation-active"
      onSubmit={submitHandler}
      noValidate // prevent default browser validation
    >
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <div className="form-group">
            <label>Name*</label>
            <input
              value={forms.name}
              type="text"
              name="name"
              onChange={changeHandler}
              className="form-control"
              placeholder="Your Name"
            />
            {errors.name && <div className="errorMessage">{errors.name}</div>}
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="form-group">
            <label>Email*</label>
            <input
              value={forms.email}
              type="email"
              name="email"
              onChange={changeHandler}
              className="form-control"
              placeholder="Your Email"
            />
            {errors.email && <div className="errorMessage">{errors.email}</div>}
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="form-group">
            <label>Phone</label>
            <input
              value={forms.phone}
              type="tel"
              name="phone"
              onChange={changeHandler}
              className="form-control"
              placeholder="Your Phone (Optional)"
            />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="form-group">
            <label>Subject*</label>
            <input
              value={forms.subject}
              type="text"
              name="subject"
              onChange={changeHandler}
              className="form-control"
              placeholder="Subject"
            />
            {errors.subject && (
              <div className="errorMessage">{errors.subject}</div>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="fullwidth form-group">
            <label>Message*</label>
            <textarea
              onChange={changeHandler}
              value={forms.message}
              name="message"
              className="form-control"
              placeholder="Message"
            ></textarea>
            {errors.message && (
              <div className="errorMessage">{errors.message}</div>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="submit-area">
            <button
              type="submit"
              className="theme-btn"
              disabled={isSubmitting || !isScriptLoaded}
            >
              {isSubmitting ? "Sending..." : "Submit Now"}
            </button>
            <div
              id="loader"
              style={{ display: isSubmitting ? "block" : "none" }}
            >
              <i className="ti-reload"></i>
            </div>
          </div>
        </div>
      </div>
      {submissionMessage && (
        <p className="submission-message mt-4">{submissionMessage}</p>
      )}
    </form>
  );
};

export default ContactForm;
