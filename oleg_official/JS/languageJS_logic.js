const langContainer = document.querySelector(".language-container");

// Function to set the selected language in local storage
function setLanguagePreference(language) {
    localStorage.setItem("languagePreference", language);
}

// Function to get the selected language from local storage
function getLanguagePreference() {
    return localStorage.getItem("languagePreference");
}

// Function to change the language of elements based on the selected language
function changeLanguage(language) {
    // Update the selected language preference in local storage
    setLanguagePreference(language);

    // Change the inner text of elements based on the selected language
    if (language === "EN") {
        // Set inner text for English
        // Example: document.getElementById('elementId').innerText = 'English Text';
        console.log("Switching to English");
    } else if (language === "IT") {
        // Set inner text for Italian
        // Example: document.getElementById('elementId').innerText = 'Italian Text';
        console.log("Switching to Italian");

        if (langContainer) {
            langContainer.style.backgroundImage =
                "url('/oleg_official/IMG/SVG/flags/italy-flag.svg')";
        }

        // ITALIANO HEADER
        const home_header_01_IT = "Lavoro";
        const home_header_02_IT = "Info";

        // ITALIANO H1

        // home h1_01
        const home_h1_01_IT =
            "Una sinfonia di colori ed emozioni che danza attraverso la tela"; //fatto

        // work h1_01
        const work_h1_01_IT =
            "Fai ciò che ami, e non lavorerai mai un giorno della tua vita";

        // about h1_01
        const about_h1_01_IT = "Grato per il passato, entusiasta per il futuro";

        // home h1_02
        const home_h1_02_IT = "Perche' noi?";

        // work h1_02
        const work_h1_02_IT = "Il nostro processo";

        // about h1_02
        const about_h1_02_IT = "Chi sono?";

        // home h1_03
        const home_h1_03_IT = "Inviami un'email"; // fatto

        // work h1_03
        const work_h1_03_IT = "Il nostro lavoro";

        // ITALIANO H2 (INTENDESI TESTI PIU' PICCOLI DELL'H1 USATO PRIMA)

        // home h2_01
        const home_h2_01_IT = "1. Su misura per le tue esigenze";

        // work h2_01
        const work_h2_01_IT = "1. Consultazione";

        // about h2_01
        const about_h2_01_IT = "Mi chiamo Oleg";

        // home h2_02
        const home_h2_02_IT = "2. La semplicita' conta";

        // work h2_02
        const work_h2_02_IT = "2. Progettazione";

        // home h2_03
        const home_h2_03_IT = "3. Tempi rapidi";

        // work h2_03
        const work_h2_03_IT = "3. Feedback";

        // home h2_04
        const home_h2_04_IT = "4. Design responsivo";

        // work h2_04
        const work_h2_04_IT = "4. Sviluppo";

        // home h2_05
        const home_h2_05_IT = "5. Orientato all'utente";

        // work h2_05
        const work_h2_05_IT = "5. Testing";

        // home h2_06
        const home_h2_06_IT = "6. Eccellenza a prezzi accessibili";

        // work h2_06
        const work_h2_06_IT = "6. Lancio";

        // work h2_07
        const work_h2_07_IT = "Modello Ristorante";

        // work h2_08
        const work_h2_08_IT = "Modello Portfolio";

        // work h2_09
        const work_h2_09_IT = "Modello Vetrina";

        // HOME ITALIANO p

        // home p_01
        const home_p_01_IT =
            "I nostri siti web sono progettati per corrispondere perfettamente al tono e allo scopo del vostro evento. Ci assicuriamo sempre che il vostro sito web rifletta l'essenza dell'occasione.";

        // work p_01
        const work_p_01_IT =
            "Iniziamo discutendo gli obiettivi, il tema e le informazioni che desideri comunicare attraverso il tuo sito web per l'evento.";

        // about p_01
        const about_p_01_IT = `La mia avventura è iniziata con una
        passione per la biotecnologia e
        informatica durante il liceo. È
        stato un periodo eccitante, e mi
        sono immerso nel mondo della scienza
        e dell'innovazione. Tuttavia, col
        tempo ho capito che la mia vera
        vocazione si trovava altrove. Con
        una sete di nuove esperienze, ho
        intrapreso un'avventura a Londra,
        dove mi sono dedicato a
        padroneggiare la lingua inglese e
        arricchirmi di esperienze. Dopo un
        paio d'anni sono tornato nel mio
        paese d'origine, l'Italia, armato di
        nuove competenze e una prospettiva
        culturale diversa. Questo ritorno
        segnò un punto di svolta, poiché e'
        stato durante questo periodo che ho
        preso una decisione che avrebbe
        plasmato il mio futuro. Avevo sempre
        parlato del mio interesse per la
        programmazione, ma ora era il
        momento di trasformare le parole in
        azione. Ho esplorato il mondo dello
        sviluppo web, iniziando con HTML,
        CSS e JavaScript. Man mano che erigevo i miei siti, ho
        capito l'immensa potenzialità e
        creatività di questo campo. Il momento è
        arrivato quando ho dovuto scegliere
        un framework per approfondire le mie
        competenze di sviluppo. Dopo una
        riflessione attenta, ho scelto
        Spring Boot. La sua ricca ecosystem,
        versatilità e la mia affinità
        personale per la sua struttura mi
        hanno convinto che questa fosse la
        strada che volevo percorrere.`;

        // home p_02
        const home_p_02_IT =
            "Capiamo che a volte meno è più. La nostra filosofia di design ruota attorno alla semplicità. Niente confusione superflua, solo un'interfaccia pulita e coinvolgente.";

        // work p_02
        const work_p_02_IT =
            "I nostri designer esperti creano un mockup che cattura l'essenza del tuo evento, incarnando al contempo semplicità e facilità d'uso.";

        // home p_03
        const home_p_03_IT =
            "Noi apprezziamo il tuo contributo. Tu revisioni il mockup, e noi apportiamo le revisioni necessarie per garantire che il design sia in linea con la tua visione.";

        // work p_03
        const work_p_03_IT =
            "I nostri siti web sono progettati per corrispondere perfettamente al tono e allo scopo del vostro evento. Ci assicuriamo sempre che il vostro sito web rifletta l'essenza dell'occasione.";

        // home p_04
        const home_p_04_IT =
            "Una volta che il design è stato approvato, lo rendiamo realtà utilizzando le più recenti tecnologie web.";

        // work p_04
        const work_p_04_IT =
            "I nostri siti web sono progettati per corrispondere perfettamente al tono e allo scopo del vostro evento. Ci assicuriamo sempre che il vostro sito web rifletta l'essenza dell'occasione.";

        // home p_05
        const home_p_05_IT =
            "Testiamo rigorosamente il sito web su vari dispositivi e browser per garantire un'esperienza senza intoppi.";

        // work p_05
        const work_p_05_IT =
            "I nostri siti web sono progettati per corrispondere perfettamente al tono e allo scopo del vostro evento. Ci assicuriamo sempre che il vostro sito web rifletta l'essenza dell'occasione.";

        // home p_06
        const home_p_06_IT =
            "Testiamo rigorosamente il sito web su vari dispositivi e browser per garantire un'esperienza senza intoppi.";

        // work p_06
        const work_p_06_IT =
            "Il tuo sito web è pronto per andare online! Assisteremo nel processo di lancio e forniremo qualsiasi supporto di cui potresti avere bisogno.";

        // work p_07
        const work_p_07_IT =
            "Deliziati con il nostro Template Ristorante - un banchetto visivo progettato per mostrare le tue delizie culinarie, i menu e le opzioni di prenotazione. Lascia un'impressione indimenticabile sui cultori del buon cibo e trasforma i visitatori occasionali in avidi commensali.";

        // work p_08
        const work_p_08_IT =
            "Eleva la tua arte con il nostro Template Portfolio - una piattaforma artistica per mostrare i tuoi progetti, le tue abilità e la tua storia. Affascina clienti, collaboratori e ammiratori allo stesso modo mentre lasci il tuo segno creativo.";

        // work p_09
        const work_p_09_IT =
            "Trasforma la tua attività con la nostra Pagina Vetrina - un mercato online creato per uno shopping senza soluzione di continuità. Mostra i tuoi prodotti, agevola i clienti con una navigazione semplice e sblocca il potenziale del commercio digitale.";

        // HOME ITALIANO EMAIL EL.S
        const home_contact_name_label_01_IT = "Nome Completo";
        const home_contact_name = "Luigi Rossi";
        const home_email_01_IT = "Soggetto";
        const home_placeholder_email_01_IT = "prova.esempio123@email.com";
        const home_placeholder_email_02_IT =
            "Ciao, il mio nome e' Luigi, vorrei parlarti di...";

        // HOME ITALIANO TASTO 'INVIA MESSAGGIO'
        const home_email_button_01_IT = "Invia Messaggio";

        // WORK ITALIANO TASTI WORK
        const work_button_template = "Scoprilo";

        // HOME ITALIANO INDIRIZZO
        const home_address_a_01_IT = "San Filippo del Mela 98044, ME, Italia";

        // IMPLEMENTAZIONE: ****************************************************************************************************************************************************************************************************

        // HOME ITALIANO HEADER
        const target_home_header_01_IT =
            document.querySelector(".nav-link-work");
        target_home_header_01_IT.innerHTML = home_header_01_IT;

        const target_home_header_02_IT =
            document.querySelector(".nav-link-about");
        target_home_header_02_IT.innerHTML = home_header_02_IT;

        // HOME ITALIANO H1

        // home h1_01
        const target_home_h1_01_IT = document.querySelector(".home_h1_01_IT");
        if (target_home_h1_01_IT) {
            target_home_h1_01_IT.innerHTML = home_h1_01_IT;
        }

        // work h1_01
        const target_work_h1_01_IT = document.querySelector(".work_h1_01_IT");
        if (target_work_h1_01_IT) {
            target_work_h1_01_IT.innerHTML = work_h1_01_IT;
        }

        // home h1_02
        const target_home_h1_02_IT = document.querySelector(".home_h1_02_IT");
        if (target_home_h1_02_IT) {
            target_home_h1_02_IT.innerHTML = home_h1_02_IT;
        }

        // work h1_02
        const target_work_h1_02_IT = document.querySelector(".work_h1_02_IT");
        if (target_work_h1_02_IT) {
            target_work_h1_02_IT.innerHTML = work_h1_02_IT;
        }

       

        // home h1_03
        const target_home_h1_03_IT =
            document.querySelector(".card-title-email");
        if (target_home_h1_03_IT) {
            target_home_h1_03_IT.innerHTML = home_h1_03_IT;
        }

        const target_work_h1_03_IT = document.querySelector(".work_h1_03_IT");
        if(target_work_h1_03_IT){
            target_work_h1_03_IT.innerHTML = work_h1_03_IT;
        }

        // about h1_01
        const target_about_h1_01_IT = document.querySelector(".about_h1_01_IT");
        if (target_about_h1_01_IT) {
            target_about_h1_01_IT.innerHTML = about_h1_01_IT;
        }

        // about h1_02
        const target_about_h1_02_IT = document.querySelector(".about_h1_02_IT");
        if (target_about_h1_02_IT) {
            target_about_h1_02_IT.innerHTML = about_h1_02_IT;
        }

        // HOME ITALIANO H2 (INTENDESI TESTI PIU' PICCOLI DELL'H1 USATO PRIMA)
        // home h2_01
        const target_home_h2_01_IT = document.querySelector(".home_h2_01_IT");
        if (target_home_h2_01_IT) {
            target_home_h2_01_IT.innerHTML = home_h2_01_IT;
        }

        // work h2_01
        const target_work_h2_01_IT = document.querySelector(".work_h2_01_IT");
        if (target_work_h2_01_IT) {
            target_work_h2_01_IT.innerHTML = work_h2_01_IT;
        }

        // about h2_01
        const target_about_h2_01_IT = document.querySelector(".about_h2_01_IT");
        if (target_about_h2_01_IT) {
            target_about_h2_01_IT.innerHTML = about_h2_01_IT;
        }

        // home h2_02
        const target_home_h2_02_IT = document.querySelector(".home_h2_02_IT");
        if (target_home_h2_02_IT) {
            target_home_h2_02_IT.innerHTML = home_h2_02_IT;
        }

        // work h2_02
        const target_work_h2_02_IT = document.querySelector(".work_h2_02_IT");
        if (target_work_h2_02_IT) {
            target_work_h2_02_IT.innerHTML = work_h2_02_IT;
        }

        // home h2_03
        const target_home_h2_03_IT = document.querySelector(".home_h2_03_IT");
        if (target_home_h2_03_IT) {
            target_home_h2_03_IT.innerHTML = home_h2_03_IT;
        }

        // work h2_03
        const target_work_h2_03_IT = document.querySelector(".work_h2_03_IT");
        if (target_work_h2_03_IT) {
            target_work_h2_03_IT.innerHTML = work_h2_03_IT;
        }

        // home h2_04
        const target_home_h2_04_IT = document.querySelector(".home_h2_04_IT");
        if (target_home_h2_04_IT) {
            target_home_h2_04_IT.innerHTML = home_h2_04_IT;
        }

        // work h2_04
        const target_work_h2_04_IT = document.querySelector(".work_h2_04_IT");
        if (target_work_h2_04_IT) {
            target_work_h2_04_IT.innerHTML = work_h2_04_IT;
        }

        // home h2_05
        const target_home_h2_05_IT = document.querySelector(".home_h2_05_IT");
        if (target_home_h2_05_IT) {
            target_home_h2_05_IT.innerHTML = home_h2_05_IT;
        }

        // work h2_05
        const target_work_h2_05_IT = document.querySelector(".work_h2_05_IT");
        if (target_work_h2_05_IT) {
            target_work_h2_05_IT.innerHTML = work_h2_05_IT;
        }

        // home h2_06
        const target_home_h2_06_IT = document.querySelector(".home_h2_06_IT");
        if (target_home_h2_06_IT) {
            target_home_h2_06_IT.innerHTML = home_h2_06_IT;
        }

        // work h2_06
        const target_work_h2_06_IT = document.querySelector(".work_h2_06_IT");
        if (target_work_h2_06_IT) {
            target_work_h2_06_IT.innerHTML = work_h2_06_IT;
        }

        // work h2_07
        const target_work_h2_07_IT = document.querySelector(".work_h2_07_IT");
        if (target_work_h2_07_IT) {
            target_work_h2_07_IT.innerHTML = work_h2_07_IT;
        }

        // work h2_08
        const target_work_h2_08_IT = document.querySelector(".work_h2_08_IT");
        if (target_work_h2_08_IT) {
            target_work_h2_08_IT.innerHTML = work_h2_08_IT;
        }

        // work h2_09
        const target_work_h2_09_IT = document.querySelector(".work_h2_09_IT");
        if (target_work_h2_09_IT) {
            target_work_h2_09_IT.innerHTML = work_h2_09_IT;
        }

        // HOME ITALIANO p

        // home p_01
        const target_home_p_01_IT = document.querySelector(".home_p_01_IT");
        if (target_home_p_01_IT) {
            target_home_p_01_IT.innerHTML = home_p_01_IT;
        }

        // work p_01
        const target_work_p_01_IT = document.querySelector(".work_p_01_IT");
        if (target_work_p_01_IT) {
            target_work_p_01_IT.innerHTML = work_p_01_IT;
        }

        // about p_01
        const target_about_p_01_IT = document.querySelector(".about_p_01_IT");
        if(target_about_p_01_IT){
            target_about_p_01_IT.innerHTML = about_p_01_IT;
        }

        // home p_02
        const target_home_p_02_IT = document.querySelector(".home_p_02_IT");
        if (target_home_p_02_IT) {
            target_home_p_02_IT.innerHTML = home_p_02_IT;
        }

        // work p_02
        const target_work_p_02_IT = document.querySelector(".work_p_02_IT");
        if (target_work_p_02_IT) {
            target_work_p_02_IT.innerHTML = work_p_02_IT;
        }

        // home p_03
        const target_home_p_03_IT = document.querySelector(".home_p_03_IT");
        if (target_home_p_03_IT) {
            target_home_p_03_IT.innerHTML = home_p_03_IT;
        }
        // work p_03
        const target_work_p_03_IT = document.querySelector(".work_p_03_IT");
        if (target_work_p_03_IT) {
            target_work_p_03_IT.innerHTML = work_p_03_IT;
        }

        // home p_04
        const target_home_p_04_IT = document.querySelector(".home_p_04_IT");
        if (target_home_p_04_IT) {
            target_home_p_04_IT.innerHTML = home_p_04_IT;
        }

        // work p_04
        const target_work_p_04_IT = document.querySelector(".work_p_04_IT");
        if (target_work_p_04_IT) {
            target_work_p_04_IT.innerHTML = work_p_04_IT;
        }

        // home p_05
        const target_home_p_05_IT = document.querySelector(".home_p_05_IT");
        if (target_home_p_05_IT) {
            target_home_p_05_IT.innerHTML = home_p_05_IT;
        }

        // work p_05
        const target_work_p_05_IT = document.querySelector(".work_p_05_IT");
        if (target_work_p_05_IT) {
            target_work_p_05_IT.innerHTML = work_p_05_IT;
        }

        // home p_06
        const target_home_p_06_IT = document.querySelector(".home_p_06_IT");
        if (target_home_p_06_IT) {
            target_home_p_06_IT.innerHTML = home_p_06_IT;
        }

        // work p_06
        const target_work_p_06_IT = document.querySelector(".work_p_06_IT");
        if (target_work_p_06_IT) {
            target_work_p_06_IT.innerHTML = work_p_06_IT;
        }

        // work p_07
        const target_work_p_07_IT = document.querySelector(".work_p_07_IT");
        if (target_work_p_07_IT) {
            target_work_p_07_IT.innerHTML = work_p_07_IT;
        }

        // work p_08
        const target_work_p_08_IT = document.querySelector(".work_p_08_IT");
        if (target_work_p_08_IT) {
            target_work_p_08_IT.innerHTML = work_p_08_IT;
        }

        // work p _09
        const target_work_p_09_IT = document.querySelector(".work_p_09_IT");
        if (target_work_p_09_IT) {
            target_work_p_09_IT.innerHTML = work_p_09_IT;
        }

        // label Full Name
        const target_home_contact_name_label_01_IT = document.querySelector(
            "#home_contact_name_label"
        );
        if (target_home_contact_name_label_01_IT) {
            target_home_contact_name_label_01_IT.innerHTML =
                home_contact_name_label_01_IT;
        }

        // placeholder full name input
        const target_home_contact_name = document.querySelector("#home_contact_name");
        if(target_home_contact_name){
            target_home_contact_name.placeholder = home_contact_name;
        }
        


        // placeholder email
        const target_home_placeholder_email_01_IT = document.querySelector(
            "#home_contact_email"
        );

        if (target_home_placeholder_email_01_IT) {
            target_home_placeholder_email_01_IT.placeholder =
                home_placeholder_email_01_IT;
        }

        // placeholder soggetto
        const target_home_email_02_IT = document.querySelector(
            "#home_contact_description"
        );
        if (target_home_email_02_IT) {
            target_home_email_02_IT.placeholder = home_placeholder_email_02_IT;
        }

        // soggetto email
        const target_home_email_01_IT = document.querySelector(
            "#form_login_registration label:nth-child(5)"
        );

        if (target_home_email_01_IT) {
            target_home_email_01_IT.innerHTML = home_email_01_IT;
        }

        // WORK BUTTON TEMPLATES TODO:
        const target_work_button_template =
            document.querySelectorAll(".work-card-link");
        if (target_work_button_template) {
            console.log("the target etc is not null");
            target_work_button_template.forEach((button) => {
                button.innerHTML = work_button_template;
            });
        }

        // HOME ITALIANO TASTO 'INVIA MESSAGGIO'
        const target_home_email_button_01_IT = document.querySelector(
            "#home_contact_send_message"
        );
        if (target_home_email_button_01_IT) {
            target_home_email_button_01_IT.value = home_email_button_01_IT;
        }

        // HOME ITALIANO INDIRIZZO
        const target_home_address_a_01_IT = document.querySelector(".address a");
        target_home_address_a_01_IT.innerHTML = home_address_a_01_IT;
        // location.reload();
    }
    // Add more languages as needed
}

// Get the selected language from local storage
var selectedLanguage = getLanguagePreference();

// Set the active language initially or after page load
if (selectedLanguage) {
    changeLanguage(selectedLanguage);
}

// Add a click event listener to a button (assuming you have a button with class "language-button")
var buttons = document.querySelectorAll(".language-button");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var newLanguage = this.getAttribute("data-language"); // Get the language code from the button's data attribute
        if (newLanguage !== selectedLanguage) {
            changeLanguage(newLanguage);
            selectedLanguage = newLanguage;
            location.reload();
        }
    });
});

function showLanguages() {
    langContainer.classList.toggle("langs-visible");
}
