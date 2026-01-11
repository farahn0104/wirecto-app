import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState(null);

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const aboutItems = [
    { name: 'Who We Are', path: '/about/whoweare' },
    { name: 'Core Value', path: '/about/corevalue' },
    { name: 'Advisory Board', path: '/about/advisory' },
    { name: 'Team Members', path: '/about/team' },
    { name: 'Membership', path: '/about/member' },
  ]
  const solutionsItems = [
    { name: 'Website Design', path: '/solutions/website' },
    { name: 'Software Development', path: '/solutions/software' },
    { name: 'Mobile Application', path: '/solutions/mobile' },
    { name: 'Digital Marketing', path: '/solutions/digital' },
    { name: 'Corporate Training', path: '/solutions/corporate' },
    { name: 'Desktop Application', path: '/solutions/desktop' },
    { name: 'Cloud Development', path: '/solutions/cloud' },
    { name: 'AI Development', path: '/solutions/ai' },
    { name: 'ML Development', path: '/solutions/ml' },
    { name: 'UI/UX Development', path: '/solutions/ui-ux' },
    { name: 'IT Outsourcing', path: '/solutions/it-outsourcing' },
    { name: 'DevOps Services', path: '/solutions/devops' },
    { name: 'SEO', path: '/solutions/seo' },
    { name: 'SMO', path: '/solutions/smo' },
    { name: 'Business Application', path: '/solutions/business' },
  ];

  const expertiseItems = [
    { name: 'Software', path: '/expertise/software' },
    { name: 'Marketing Tools', path: '/expertise/marketing-tools' },
    { name: 'Billing Software', path: '/expertise/billing' },
    { name: 'HRM', path: '/expertise/hrm', external: true },
    { name: 'CRM', path: '/expertise/crm', external: true },
    { name: 'ERP', path: '/expertise/erp', external: true },
    { name: 'POS', path: '/expertise/pos', external: true },
    { name: 'Cloud ERP', path: '/expertise/cloud-erp', external: true },
    { name: 'School/College', path: '/expertise/school-college', external: true },
    { name: 'Hospital', path: '/expertise/hospital' },
    { name: 'Pharma', path: '/expertise/pharma' },
    { name: 'Lab', path: '/expertise/lab' },
    { name: 'Retail', path: '/expertise/retail', external: true },
    { name: 'MLM', path: '/expertise/mlm', external: true },
    { name: 'eCommerce', path: '/expertise/ecommerce' },
  ];

  const industriesItems = [
    { name: 'Agriculture', path: '/industries/agriculture' },
    { name: 'Banking & Financial Services', path: '/industries/banking' },
    { name: 'eCommerce', path: '/industries/ecommerce' },
    { name: 'IoT', path: '/industries/iot' },
    { name: 'Advertising', path: '/industries/advertising' },
    { name: 'Media & Entertainment', path: '/industries/media' },
    { name: 'Consumer Goods', path: '/industries/consumer' },
    { name: 'Education & Training', path: '/industries/education' },
    { name: 'Government', path: '/industries/government' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Hospitality & Tourism', path: '/industries/hospitality' },
    { name: 'IT/ITES', path: '/industries/it-ites' },
    { name: 'Manufacturing', path: '/industries/manufacturing' },
    { name: 'Oil & Gas', path: '/industries/oil-gas' },
    { name: 'Retail', path: '/industries/retail' },
    { name: 'Real Estate & Construction', path: '/industries/real-estate' },
  ];

  const technologyItems = [
    { name: 'DotNet', path: '/technology/dotnet' },
    { name: 'Java', path: '/technology/java' },
    { name: 'PHP', path: '/technology/php' },
    { name: 'Python', path: '/technology/python' },
    { name: 'C / C++ / C#', path: '/technology/c-family' },
    { name: 'Angular', path: '/technology/angular' },
    { name: 'Node.Js', path: '/technology/node' },
    { name: 'React.Js', path: '/technology/react' },
    { name: 'Flutter', path: '/technology/flutter' },
    { name: 'JavaScript', path: '/technology/javascript' },
    { name: 'Blockchain', path: '/technology/blockchain' },
    { name: 'Microsoft', path: '/technology/microsoft' },
    { name: 'AWS', path: '/technology/aws' },
    { name: 'Google Cloud', path: '/technology/google-cloud' },
    { name: 'Azure', path: '/technology/azure' },
  ];

  const partnersItems = [
    { name: 'Our Partners', path: '/partners/our-partners' },
    { name: 'WBAPS Program', path: '/partners/wbaps' },
  ];

  const contactItems = [
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
    {
      name: 'Our Location',
      children: [
        { name: 'India', path: '/location/india' },
        { name: 'USA', path: '/location/usa' },
        { name: 'Canada', path: '/location/canada' },
        { name: 'Singapore', path: '/location/singapore' },
        { name: 'Qatar', path: '/location/qatar' },
        { name: 'UAE', path: '/location/uae' },
        { name: 'Dubai', path: '/location/dubai' },
      ]
    },
  ];

  const loginItems = [
    { name: 'Login', path: '/login' },
    { name: 'Download', path: '/download' },
  ];


  const renderDesktopDropdown = (title, items) => (
    <div className="relative group">
      <button className="flex items-center space-x-1 hover:text-accent transition-colors">
        <span>{title}</span>
        <FaChevronDown className="text-xs" />
      </button>
      <div className="absolute left-0 mt-2 w-52 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
        <div className="py-2">
          {items.map((item, index) => (
            item.children ? (
              <div key={index} className="relative group/sub">
                <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-accent transition-colors cursor-pointer">
                  <span>{item.name}</span>
                  <FaChevronRight className="text-xs" />
                </div>
                <div className="absolute left-full top-0 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50">
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      to={child.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-accent transition-colors"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.external ? (
              <Link
                key={index}
                to={item.path}
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <Link
                key={index}
                to={item.path}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );


  const renderMobileDropdown = (title, items) => {
    const isMenuOpen = activeMobileMenu === title;

    return (
      <div className="w-full">
        <button
          onClick={() =>
            setActiveMobileMenu(isMenuOpen ? null : title)
          }
          className="w-full flex items-center justify-between py-3 text-gray-700 border-b"
        >
          <span className="font-medium">{title}</span>
          <FaChevronDown
            className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isMenuOpen && (
          <div className="pl-4 py-2 space-y-1">
            {items.map((item, index) =>
              item.children ? (
                <div key={index} className=''>
                  <button
                    onClick={() =>
                      setActiveNestedMenu(
                        activeNestedMenu === item.name ? null : item.name
                      )
                    }
                    className="w-full flex justify-between py-2 text-gray-600"
                  >
                    <span>{item.name}</span>
                    <FaChevronRight
                      className={`transition-transform ${activeNestedMenu === item.name ? 'rotate-90' : ''
                        }`}
                    />
                  </button>

                  {activeNestedMenu === item.name && (
                    <div className="pl-4">
                      {item.children.map((child, i) => (
                        <Link
                          key={i}
                          to={child.path}
                          className=" block py-2 text-gray-500"
                          onClick={() => {
                            setIsOpen(false);
                            setActiveMobileMenu(null);
                            setActiveNestedMenu(null);
                          }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className="block py-2 text-gray-600"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveMobileMenu(null);
                    setActiveNestedMenu(null);
                  }}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    );
  };

  // Lock the background page when navbar is open in phone
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen]);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            <img src="/img/Wirecto-Logo.png" alt="Wirecto" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`${isActive('/') ? 'text-accent' : 'text-gray-700'} hover:text-accent transition-colors`}
            >
              Home
            </Link>


            {renderDesktopDropdown('About', aboutItems)}
            {renderDesktopDropdown('Solutions', solutionsItems)}
            {renderDesktopDropdown('Expertise', expertiseItems)}
            {renderDesktopDropdown('Industries', industriesItems)}
            {renderDesktopDropdown('Technology', technologyItems)}
            {renderDesktopDropdown('Partners', partnersItems)}
            {renderDesktopDropdown('Contact Us', contactItems)}
            {renderDesktopDropdown('Login', loginItems)}

            <Link
              to="/quote"
              className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-primary transition-colors"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-accent"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="p-4 lg:hidden fixed inset-0 top-[110px] bg-white border-t border-gray-200 overflow-y-auto">
            <div className="flex flex-col space-y-0">
              <Link
                to="/"
                className="py-3 text-gray-700 hover:text-accent transition-colors border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>


              {/* About Dropdown */}
              {renderMobileDropdown('About', aboutItems)}

              {/* Solutions Dropdown */}
              {renderMobileDropdown('Solutions', solutionsItems)}

              {/* Expertise Dropdown */}
              {renderMobileDropdown('Expertise', expertiseItems)}

              {/* Industries Dropdown */}
              {renderMobileDropdown('Industries', industriesItems)}

              {/* Technology Dropdown */}
              {renderMobileDropdown('Technology', technologyItems)}

              {/* Partners Dropdown */}
              {renderMobileDropdown('Partners', partnersItems)}

              {/* Contact Us Dropdown */}
              {renderMobileDropdown('Contact Us', contactItems)}

              {/* Login Dropdown */}
              {renderMobileDropdown('Login', loginItems)}

              <Link
                to="/quote"
                className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-primary transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;