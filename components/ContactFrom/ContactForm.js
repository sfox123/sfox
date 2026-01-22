import React, { useState } from "react";

const ContactForm = () => {

  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [errors, setErrors] = useState({});

  // --- Simple Validation Logic (Unchanged) ---
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

  const submitHandler = async (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      setSubmissionMessage("");

      try {
        // --- NEW: Send data to your internal Next.js API ---
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(forms),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error?.message || "Failed to send message");
        }

        // --- Success Handling ---
        console.log("SUCCESS!", result);
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
      } catch (error) {
        // --- Error Handling ---
        console.error("FAILED...", error);
        setSubmissionMessage(
          "Failed to send message. Please try again later."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form
      className="contact-validation-active"
      onSubmit={submitHandler}
      noValidate
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
              disabled={isSubmitting}
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