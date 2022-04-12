const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};


const navLinks = document.querySelectorAll("header nav a");
const navLinksContents = Object.keys(siteContent["nav"]);

let i = 0;
while (i < navLinks.length) {
  navLinks[i].textContent = siteContent["nav"][navLinksContents[i]];
  i++;
}

/* ***** */
/* ***** */
/* ***** */

const callToActionElements = document.querySelectorAll(".cta-text > *");
const callToActionContents = Object.keys(siteContent["cta"]);

i = 0;
while (i < callToActionElements.length) {
  callToActionElements[i].textContent = siteContent["cta"][callToActionContents[i]];
  i++;
}

/* ***** */
/* ***** */
/* ***** */

const mainContentHeadings = document.querySelectorAll('.main-content > div > .text-content > h4');
const mainContentHeadingsContents = Object.keys(siteContent["main-content"]).filter(x => x.includes("h4"));

i = 0;
while (i < mainContentHeadings.length) {
  mainContentHeadings[i].textContent = siteContent["main-content"][mainContentHeadingsContents[i]];
  i++;
}

/* ***** */
/* ***** */
/* ***** */

const mainContentParagraphs = document.querySelectorAll('.main-content > div > .text-content > p');
const mainContentParagraphsContents = Object.keys(siteContent['main-content']).filter(x => x.includes("content"));

i = 0;
while (i < mainContentParagraphs.length) {
  mainContentParagraphs[i].textContent = siteContent['main-content'][mainContentParagraphsContents[i]];
  i++;
}

/* ***** */
/* ***** */
/* ***** */

const contactInformationElements = document.querySelectorAll('.contact > *');
const contactInformationContents = Object.keys(siteContent['contact']);

i = 0;
while (i < contactInformationElements.length) {
  contactInformationElements[i].textContent = siteContent['contact'][contactInformationContents[i]];
  i++;
}

/* ***** */
/* ***** */
/* ***** */

const copyrightInformationLink = document.querySelector('footer a');

copyrightInformationLink.textContent = siteContent.footer.copyright;

console.log('project wired!')
