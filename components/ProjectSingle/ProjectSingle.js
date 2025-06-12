import React, { Fragment } from "react";
import { Dialog, Grid } from "@mui/material";
import Contact from "./contact";
import RelatedProject from "./related";
import Image from "next/image";
import Link from "next/link";

const ProjectSingle = ({
  maxWidth,
  open,
  onClose,
  title,
  pImg,
  psub1img1,
  psub1img2,
  address,
  description,
  client,
  tech,
  link,
}) => {
  // Ensure the link is absolute and add some styling
  const getAbsoluteLink = (url) => {
    if (!url) return "#";
    if (/^https?:\/\//i.test(url)) return url;
    return `https://${url}`;
  };

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <Grid className="modalBody modal-body project-modal">
          <button className="modal-close" onClick={onClose}>
            <i className="fa fa-close"></i>
          </button>
          <div className="tp-project-single-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12">
                  <div className="tp-project-single-wrap">
                    <div className="tp-project-single-item">
                      <div className="row align-items-center mb-5">
                        <div className="col-lg-7">
                          <div className="tp-project-single-title">
                            <h3>{title} Project</h3>
                          </div>
                          <p>{description}</p>
                          <p>
                            <Link target="_blank" href={getAbsoluteLink(link)}>
                              View Project
                            </Link>
                          </p>
                        </div>
                        <div className="col-lg-5">
                          <div className="tp-project-single-content-des-right">
                            <ul>
                              <li>
                                Location :<span>{address}</span>
                              </li>
                              <li>
                                Client :<span>{client}</span>
                              </li>
                              <li>
                                Tech Stack :
                                <span>
                                  {Array.isArray(tech) ? tech.join("/ ") : tech}
                                </span>
                              </li>
                              <li>
                                Completion :<span>15 Apr 2023</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <RelatedProject />
                    <div className="tp-project-single-item">
                      <div className="tp-project-contact-area">
                        <div className="tp-contact-title">
                          <h2>Have project in mind? Let's discuss</h2>
                          <p>
                            Get in touch with us to see how we can help you with
                            your project
                          </p>
                        </div>
                        <div className="tp-contact-form-area">
                          <Contact />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default ProjectSingle;
