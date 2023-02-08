import InfohobLanding from 'assets/images/infohob-landing.jpg';
// import KafeneLanding from 'assets/images/kafene-landing.jpg';
import InventoryLanding from 'assets/images/inventory-landing.jpg';
import IndigoLanding from 'assets/images/indigo-landing.jpg';

const slides = [
  {
    logo: InfohobLanding,
    alt: 'infohob-landing',
    title: 'Infohob',
    description: `A job portal application focused on techies which helps ease the stress of recruitment by bringing the
      job seeker and recruiter to the same platform.
    `,
    nextPage: 'https://infohob.com',
  },
  // {
  //   logo: KafeneLanding,
  //   alt: 'kafene-landing',
  //   title: 'Kafene',
  //   description: `Customized lease application which add flexibility and affordability
  //      to your life by helping you get the products you want without having to pay for it all upfront.`,
  //   nextPage: 'https://kafene.com',
  // },
  {
    logo: InventoryLanding,
    alt: 'inventory-landing',
    title: 'Inventory',
    description: `An Inventory Management System(IMS) which helps companies keep track of their warehouses, products, distributors, 
      vendors, sales and business performance.
    `,
    nextPage: 'https://staginginventory.enyata.com',
  },
  {
    logo: IndigoLanding,
    alt: 'indigo-landing',
    title: 'Indigo',
    description: `A medical software which connects all the processes between the patients and staffs from different hospitals 
      into a single, simple and easy to operate platform.
    `,
    nextPage: 'https://app.indigoemr.com/login',
  },
];

export default slides;
