const dimensions = {
  headerHeight: '123px',
  tabSectionHeight: '20px',
};

const fonts = {
  main: 'Lato',
  fallback: 'Arial, Helvetica',
  defaultFamily: 'sans-serif',
};

const styling = {
  headerHeight: dimensions.headerHeight,
  tabSectionHeight: dimensions.tabSectionHeight,
  edgePadding: '0.75rem',
  detailsHeight: `calc(100vh - ${dimensions.headerHeight})`,
  tabContainerHeight: `calc(100vh - ${dimensions.headerHeight} - ${dimensions.tabSectionHeight})`,
  transitionDuration: '150ms',
  fontFamily: `${fonts.main}, ${fonts.fallback}, ${fonts.defaultFamily}`,
};

export default styling;
