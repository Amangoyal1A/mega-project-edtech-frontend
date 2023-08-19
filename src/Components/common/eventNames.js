import ReactGA from "react-ga";
// export const EVENT_NAMES = {
export const PageScrollTriggered = (properties) => {
  ReactGA.event({
    category: "Page Scroll",
    action: "Page Scrolled",
    label: "Any page",
  });
};

export const PersonaKnowMoreTriggered = (properties) => {
  ReactGA.event({
    category: "Link Click",
    action: "Know More Clicked",
    label: "Know More on Persona Section",
  });
};

export const CarouselButtonTriggered = (properties) => {
  ReactGA.event({
    category: "Button Click",
    action: "Carousel Menu Clicked",
    label: "Carousel On Homepage",
  });
};

export const StackOfferingTriggered = (properties) => {
  ReactGA.event({
    category: "Card Click",
    action: "Stack OfferingCard Clicked",
    label: "Stack Offering on Homepage",
  });
};

export const PageExitTriggered = (properties) => {
  ReactGA.event({
    category: "Page Exit",
    action: "Page Exited",
    label: "ZoopStack",
  });
};
export const TryZoopStackTriggered = (properties) => {
  ReactGA.event({
    category: "Button Click",
    action: "Try ZoopStack Button Clicked",
    label: "SiteHeader Button",
  });
};

export const GetAPIKeysTriggered = (properties) => {
  ReactGA.event({
    category: "Button Click",
    action: "Get API Keys Button Clicked",
    label: "Button",
  });
};

export const BannerCardButtonTriggered = (properties) => {
  ReactGA.event({
    category: "Button Click",
    action: "BannerCard Button Clicked",
    label: "BannerCard Get a Free Demo Button",
  });
};

export const MenuButtonTriggered = (properties) => {
  ReactGA.event({
    category: "Button Click",
    action: "MenuButton Clicked",
    label: "MenuButton of Header/Footer/Sidebar",
  });
};

export const DashboardExploreTriggered = (properties) => {
  ReactGA.event({
    category: "Button Click",
    action: "Dashboard Explore Clicked",
    label: "Dashboard Explore Button",
  });
};

export const MenuSliderButtonTriggered = (properties) => {
  ReactGA.event({
    category: "Button Click",
    action: "MenuSlider Button Clicked",
    label: "MenuSlider Button of Products Page",
  });
};

export const BlogButtonTriggered = (properties) => {
  ReactGA.event({
    category: "Button Click",
    action: "Blog Button Clicked",
    label: "Blog Button of Knowledge Hub Page",
  });
};

// DASHBOARD_SCROLLUP: "Dahboard Scroll-Up",
// DASHBOARD_SCROLLDOWN: "Dashboard Scroll-Down",
// PAGE_EXIT: "Page Exit",
// SESSION_TIME: "Session Triggered",
// SESSION_HISTORY: "Session History Triggered",
// DASHBOARD_CLICK: "Dashboard Clicked",
// DASHBOARD_EXPLORE_CLICK: "Dashboard Explore Clicked",
// GET_API_KEYS_CLICK: "Get API Keys Clicked",
// PRODUCT_EXPLORE_CLICK: "Product Explore Clicked",
// TRY_ZOOPSTACK_CLICK: "Try ZoopStack Clicked",
// GET_FREE_DEMO: "Get Free Demo Clicked",
// CONTACT_US_COMPLETED: "Contact us Form Filled",
// PRODUCTS_CLICK: "Product Section Clicked",
// SESSION_TIME_PRODUCTS: "Product Session Triggered",
// INDUSTRY_CLICK: "Industry Section Clicked",
// SESSION_TIME_INDUSTRY: "Industry Session Triggered",
// };
