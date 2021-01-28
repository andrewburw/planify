/* *************************************************************
|
|
|                      Main JS file
|
|       *  Main page of the project.
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/



import React, { useState } from 'react';
import RegisterModal from "./modals/main_page/register";


const  MainPage = () => {
    const [modalIsOpen,  showModal] = useState(false)


    return (
        <div>
          <RegisterModal />
            {modalIsOpen ? <RegisterModal />: ''}
              <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="#" className="logo">
            <picture >
              <img className="header__logo-img"src="images/logo.png" alt="Planify" /> 
              </picture></a>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">Product </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">Pricing</a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">Learn More</a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">Register</a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" onClick={() => showModal(true)} href="#">Log in</a>
              </li>
              <li className="menu__list-item">
                <button className="header__try-button" onClick={() => showModal(true)}>Try Product</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <section className="page__section top">
      <div className="container">
        <div className="top__inner">
          <div className="top__inner-container">
            <div className="top__logo">
              <img src="images/big-logo.png" alt="Planify big  logo" />
            </div>
            <h1 className="top__title">Lorem Ipsum is simply dummy text</h1>
            <h4 className="top__sub-title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </h4>
            <div className="top__buttons">
              <button className="page__first-sec-btn btn white-btn">Join</button>
              <button className="page__first-sec-btn btn white-btn">Try</button>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section className="page__section-half second">
      <div className="container">
        <div className="second__inner">
          <div id="first_card" className="second__card ">
            <div className="second__card-logoimg">
              <img src="images/card_image_1.png" alt="card logo" />
            </div>
            <h1 className="second__card-title ">Lorem Ipsum</h1>
            <p className="second__card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <div className="second__card-href">
              <a href="#" className="second__crd-href">View More &gt; </a>
            </div>
          </div>

          <div id="second_card"className="second__card">
            <div className="second__card-logoimg">
              <img src="images/card_image_2.png" alt="card logo" />
            </div>
            <h1 className="second__card-title">Lorem Ipsum</h1>
            <p className="second__card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <div className="second__card-href">
              <a href="#" className="second__crd-href">View More &gt; </a>
            </div>
          </div>

          <div id="third_card" className="second__card">
            <div className="second__card-logoimg">
              <img src="images/card_image_3.png" alt="card logo" />
            </div>
            <h1 className="second__card-title">Lorem Ipsum</h1>
            <p className="second__card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <div className="second__card-href">
              <a href="#" className="second__crd-href">View More &gt; </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section className="page__section-onehalf">
      <div className="container">
        <div className="third__inner">
          <div className="third__info-card">
            <div id="third_one" className="third__info-text hide">
              <h1 className="third__info-text-title">Lorem Ipsum</h1>
              <p className="third__info-text-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div id="third_two" className="third__info-picture hide">
              <img src="images/info_text_1.png" alt="Planify" />
            </div>
          </div>

          <div className="third__info-card">
            <div id="third_third"className="third__info-picture2 hide">
              <img src="images/info_text_2.png" alt="Planify" />
            </div>
            <div id="third_fourth" className="third__info-text2 hide">
              <h1 className="third__info-text-title">Lorem Ipsum</h1>
              <p className="third__info-text-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>

          <div className="third__info-card">
            <div  id="third_fivth" className="third__info-text hide">
              <h1 className="third__info-text-title">Lorem Ipsum</h1>
              <p className="third__info-text-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div  id="third_sixth" className="third__info-picture3 hide">
              <img src="images/info_text_3.png" alt="Planify" />
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section className="page__section fourth">
      <div className="container">
        <div className="fourth__inner">
          <div className="section-header">
            <h1 className="section__header-title">Afforable Pricing</h1>
            <p className="fourth__text-subtext section__header-subtext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>

        <div className="fourth__cards-container">
          <div className="fourth__card">
            <div className="fourth__card-tittle">
              <h4 className="fourth__card-title">Lorem Ipsum</h4>
            </div>
            <hr />
            <h1 className="fourth__card-plantitle">Free</h1>
            <ul className="fourth__price-benefits">
              <li className="fourth__price-ben-item">Unlimited Acces</li>
              <li className="fourth__price-ben-item">Free setup</li>
              <li className="fourth__price-ben-item">Unlimited Acces</li>
              <li className="fourth__price-ben-item">No API</li>
              <li className="fourth__price-ben-item">Unlimeted support</li>
            </ul>
            <div className="fourth__btns">
              <button className="fourth__btn-try btn red-btn">Join</button>
            </div>
          </div>
          <div className="fourth__card">
            <div className="fourth__card-tittle">
              <h4 className="fourth__card-title">Lorem Ipsum</h4>
            </div>
            <hr />
            <h1 className="fourth__card-plantitle">Free</h1>
            <ul className="fourth__price-benefits">
              <li className="fourth__price-ben-item">Unlimited Acces</li>
              <li className="fourth__price-ben-item">Free setup</li>
              <li className="fourth__price-ben-item">Unlimited Acces</li>
              <li className="fourth__price-ben-item">No API</li>
              <li className="fourth__price-ben-item">Unlimeted support</li>
            </ul>
            <div className="fourth__btns">
              <button className="fourth__btn-try btn red-btn">Join</button>
            </div>
          </div>

          <div className="fourth__card">
            <div className="fourth__card-tittle">
              <h4 className="fourth__card-title">Lorem Ipsum</h4>
            </div>
            <hr />
            <h1 className="fourth__card-plantitle">Free</h1>
            <ul className="fourth__price-benefits">
              <li className="fourth__price-ben-item">Unlimited Acces</li>
              <li className="fourth__price-ben-item">Free setup</li>
              <li className="fourth__price-ben-item">Unlimited Acces</li>
              <li className="fourth__price-ben-item">No API</li>
              <li className="fourth__price-ben-item">Unlimeted support</li>
            </ul>
            <div className="fourth__btns">
              <button className="fourth__btn-try btn red-btn">Join</button>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section className="page__section fifth">
      <div className="fifth__blackside">
        <div className="container">
          <div className="fifth__text section-header">
            <h1 className="fifth__text-title section__header-title">
              Frequently Asked Question
            </h1>
            <p className="fourth__text-subtext section__header-subtext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="fifth__accardion-faq">
          
            <div className="fifth__accordion">
              <label htmlFor="fifth__tm" className="accordionitem">
                <span>Item 1</span>
                <span className="fifth__acca-plus">+</span></label>              
              <input type="checkbox" id="fifth__tm" />
              <p className="fifth__accordion-hiddentext">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections.
              </p>
            </div>

           
            <div className="fifth__accordion">
              <label htmlFor="fifth__tn" className="accordionitem">
                <span>Item 1</span>
                <span className="fifth__acca-plus">+</span></label>            
              <input type="checkbox" id="fifth__tn" />
              <p className="fifth__accordion-hiddentext">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections.
              </p>
            </div>

           
            <div className="fifth__accordion">
              <label htmlFor="fifth__to" className="accordionitem">
                <span>Item 1 </span><span className="fifth__acca-plus">+</span></label>              
              <input type="checkbox" id="fifth__to" />
              <p className="fifth__accordion-hiddentext">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fifth__whiteside">
        <div className="container">
          <div className="section-header">
            <h1 className="fifth__white-header section__header-title">
              Trusted by Teams, used by companies
            </h1>
          </div>
          <div className="fifth__white-sponsors-cn">
            <div className="fifth_w_spon-row_1">
              <img src="images/sponsors/sponsor_1.png" alt="planify sponsor" />
              <img src="images/sponsors/sponsor_2.png" alt="planify sponsor" />
              <img src="images/sponsors/sponsor_3.png" alt="planify sponsor" />
            </div>
            <div className="fifth_w_spon-row_2">
              <img src="images/sponsors/sponsor_4.png" alt="planify sponsor" />
              <img src="images/sponsors/sponsor_5.png" alt="planify sponsor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section className="page__section sixth">
      <div className="container">
        <div className="sixth__text section-header">
          <h1 className="sixth__text-title section__header-title">
            Get Started today
          </h1>
          <p className="fourth__text-subtext section__header-subtext">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div className="sixth__main-img">
          <img src="images/planify_inv.png" alt="planiify" />
        </div>
        <div className="sixth__main-button">
          <button className="fourth__btn-try btn red-btn">Try</button>
        </div>
      </div>
    </section>
  
    <section className="page__section-half footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__column_1">
              <div className="footer_1cl_image">
                <img src="images/small_dark_logo.png" alt="planify" />
              </div>
              <p className="footer_1cl_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="footer__column_2">
              <h4 className="footer__title">Useful Links</h4>
              <ul className="footer__list-links">
                <li className="footer__l_links-item">About us</li>
                <li className="footer__l_links-item">Our services</li>
                <li className="footer__l_links-item">Our Team</li>
                <li className="footer__l_links-item">Testimonials</li>
              </ul>
            </div>
            <div className="footer__column_3">
              <h4 className="footer__title">Useful Links</h4>
              <ul className="footer__list-links">
                <li className="footer__l_links-item"><a href="">About us</a></li>
                <li className="footer__l_links-item">
                  <a href="">Our services</a>
                </li>
                <li className="footer__l_links-item"><a href="">Our Team</a></li>
                <li className="footer__l_links-item">
                  <a href="">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="footer__column_4">
              <h4 className="footer__title">Useful Links</h4>
              <ul className="footer__list-links">
                <li className="footer__l_links-item"><a href="">About us</a></li>
                <li className="footer__l_links-item">
                  <a href="">Our services</a>
                </li>
                <li className="footer__l_links-item"><a href="">Our Team</a></li>
                <li className="footer__l_links-item">
                  <a href="">Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__end">
        <div className="container">
          <div className="footer__end-inner">
            <div className="footer__end-leftside">
              <p className="footer__end_copyright">
                Copyright 2021 , Planify. All Righits Reserved
              </p>
            </div>
            <div className="footer__end-rightside">
              <ul className="footer__end_right_ul">
                <li className="footer__end_r_item">Legal</li>
                <li className="footer__end_r_item">Terms and Conditions</li>
                <li className="footer__end_r_item">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
}

export default MainPage;