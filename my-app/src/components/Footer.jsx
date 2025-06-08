import React from "react";
import footerData from "@/data/footerData";
import footerData2 from "@/data/footerData2";
import Image from "next/image";

function Footer() {
  
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            {/* İlk 3 sütun */}
            {footerData &&
              footerData.map((item) => (
                <div key={item.id} className="footer-item">
                  <h3 className="footer-title">{item.title}</h3>
                  <ul className="footer-links">
                    {item.links &&
                      item.links.map((link, index) => (
                        <li key={index} className="footer-link-item">
                          <a href={link.href} className="footer-link">
                            {link.text}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}

            {/* 4. sütun - Array olduğu için .map() kullanın */}
            {footerData2 &&
              footerData2.map((item) => (
                <div key={item.id} className="footer-item">
                  <h3 className="footer-title">{item.title}</h3>
                    
                  <div className="footer-contact-info">
                    <p className="footer-phone">{item.phone}</p>
                    <p className="footer-location"><a href="https://www.google.com/maps/search/kontakt+home+unvanlari+xerite/@40.3968463,49.9073614,10z?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D">{item.location}</a></p>
                  </div>

                  {item.followText && (
                    <div className="footer-social">
                      <p className="footer-follow-text">{item.followText}</p>
                      <ul className="footer-links">
                        {item.links &&
                          item.links.map((link, index) => (
                            <li key={index} className="footer-link-item">
                              <a href={link.href} className="footer-link">
                               {/* I want to use react-icons, my schema looks like:
                               footerData2.links.image : <FaFacebookF /> */}
                                {link.image ? (
                                  <span className="footer-icon">
                                    {link.image}
                                  </span>
                                ) : (
                                  <Image
                                    src={`/icons/${link.platform}.svg`}
                                    alt={link.platform}
                                    width={24}
                                    height={24}
                                  />
                                )}
                                
                                
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}

                  {item.paymentTitle && (
                    <div className="footer-payments">
                      <p className="footer-payment-title">
                        {item.paymentTitle}
                      </p>
                      <ul className="footer-payment-list">
                        {item.paymentMethods &&
                          item.paymentMethods.map((payment, index) => (
                            <li key={index} className="footer-payment-item">
                              {/* I want to use react-icons, my schema looks like:
                               footerData2.links.paymentmethod  */}
                               {payment.image ? (
                                  <span className="footer-icon">
                                    {payment.image}
                                  </span>
                                ) : (
                                  <Image
                                    src={`/icons/${payment.image}.svg`}
                                    alt={payment.image}
                                    width={24}
                                    height={24}
                                  />
                                )}
                               
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
          </div>
          <div className="footer-copyright">© Kontakt Home 2025</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
