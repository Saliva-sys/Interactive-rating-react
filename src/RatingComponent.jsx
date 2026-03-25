import "./RatingComponent.css";
import { useState, useEffect } from "react";

// 1. potrebujem si zapamatat, ake cislo sme vybrali a ci sme uz skoncili s vyberom a stlacili "Submit" tlacidlo, alebo este nie
const RatingComponent = () => {
  // krabicka na vybrane cislo, ktore sa bude posielat do "thank zou card", na zaciatku je prazdne
  const [selectedRating, setSelectedRating] = useState(null);
  // krabicka na to, ci sme uz skoncili s vyberom, alebo este nie, na zaciatku je "nie" - false
  const [isSubmitted, setIsSubmitted] = useState(false);

  // mame kopku cisiel, z ktorych budeme vyberat, tak si ich ulozime na jedno miesto, aby sme ich potom mohli jednoducho vytahovat, co budeme robit v casti "rating__btn"
  const ratings = [1,2,3,4,5]

  useEffect(() => {
    document.title = "Saliva-sys | Rating Component";
  }, []); // [] znamená, že sa to zmení len pri otvorení tohto komponentu

  return (
    <main>
      <div className="rating-container">
        { !isSubmitted ? (
        <> 
          <div className="rating__card">
            {/* Rating state start */}
            <div className="star__symbol">
              <img src="./images/icon-star.svg" className="img__star" alt="star" aria-hidden="true" />
            </div>
            <h1 className="rating__card-title">How did we do?</h1>
            <p className="rating__card-text">
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>
          </div>

          <div className="rating__card-button">
            <div className="rating__btn">
              {ratings.map((number) => ( // prejdeme vsetky cisla v poli "ratings" a pre kazde cislo vytvorime tlacidlo, ktore bude mat text rovnaky ako to cislo, a ked klikneme na tlacidlo, tak sa nam do krabicky "selectedRating" ulozi to cislo, ktore sme klikli
              
              <button
                key={number} // react potrebuje vediet, ktore cislo je ktore, aby vedel, ktore ma prekreslit, ked nan klikneme, akasi menovka pre cislo, aby ju vedel identifikovat
                type="button"
                className={`btn ${selectedRating === number ? 'active' : ''}`} // ak je cislo, ktore sme klikli rovnake ako cislo, ktore je v krabicke "selectedRating", tak sa tlacidlo zafarbí (dostane class "active"), inak bude bez farby. React sa opýta každého tlačidla: „Rovnáš sa ty číslu 3?“ To, ktoré povie „Áno“, dostane triedu active
                onClick={() => setSelectedRating(number)}>
                  {number}
              </button>
                  )
                )
              }             
            </div>
                    
            <button 
              className="submit__btn" 
              type="button"
                onClick={() => {
                  // ak je nieco v krabicke
                  if (selectedRating !== null) {
                    setIsSubmitted(true); // prepneme krabicku isSubmitted z "false" na "true"
                  } else {
                    alert("Please select a rating first!") // prida upozornenie, ak chce niekto kliknut "submit" bez zvoleneho cisla
                  }              
                }}>
                SUBMIT
            </button>
          {/* <!-- Rating state end --> */}
          </div>
        </>

        ) : (

        <div className="thank__you-card">
          {/* <!-- Thank you state start --> */}
          <img src="./images/illustration-thank-you.svg" className="thank__you-img" alt="thank you" />
          <p className="thank__you-selection">You selected <span className="user__rating">{selectedRating}</span> out of 5</p>
            {/* <!-- Add rating here --> */}
            
          <button 
            className="thank__you-thanks" 
            type="button"
            onClick={() => {
              setIsSubmitted(false);    // 1. Povieme: "Ešte nie je odoslané" (výhybka sa prepne späť)
              setSelectedRating(null);  // 2. Vymažeme vybrané číslo (krabička bude znova prázdna)
            }}
          >
            Thank You
          </button>
          <p className="thank__you-text">
            We appreciate you taking the time to give a rating. If you ever need more support, don&rsquo;t hesitate to get in touch!
          </p>
          {/* <!-- Thank you state end --> */}          
        </div>
        )}
      </div>

      <footer className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" className="attribution-link" target="_blank" rel="noopener noreferrer">
          Frontend Mentor</a>
        . Coded by
        <a href="https://github.com/Saliva-sys" className="attribution-link" target="_blank" rel="noopener noreferrer">
          Adriana Weidlichova</a>
        .
      </footer>      
    </main>
  );
};

export default RatingComponent;
