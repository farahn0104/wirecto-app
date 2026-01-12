// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Expertise from './pages/Expertise';
import Industries from './pages/Industries';
import Technology from './pages/Technology';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Login from './pages/Login';
import Download from './pages/Download';
import Quote from './pages/Quote';
import LoadingSpinner from './components/Layout/LoadingSpinner';
import BackToTop from './components/Layout/BackToTop';

// About Subpages
import WhoWeAre from './pages/about/WhoWeAre';
import CoreValue from './pages/about/CoreValue';
import AdvisoryBoard from './pages/about/AdvisoryBoard';
import TeamMembers from './pages/about/TeamMembers';
import Membership from './pages/about/Membership';

// Solutions Subpages
import WebsiteDesign from './pages/solutions/WebsiteDesign';
import SoftwareDevelopment from './pages/solutions/SoftwareDevelopment';
import MobileApplication from './pages/solutions/MobileApplication';
import DigitalMarketing from './pages/solutions/DigitalMarketing';
import CorporateTraining from './pages/solutions/CorporateTraining';
import DesktopApplication from './pages/solutions/DesktopApplication';
import CloudDevelopment from './pages/solutions/CloudDevelopment';
import AIDevelopment from './pages/solutions/AIDevelopment';
import MLDevelopment from './pages/solutions/MLDevelopment';
import UIUXDevelopment from './pages/solutions/UIUXDevelopment';
import ITOutsourcing from './pages/solutions/ITOutsourcing';
import DevOpsServices from './pages/solutions/DevOpsServices';
import SEOServices from './pages/solutions/SEOServices';
import SMOServices from './pages/solutions/SMOServices';
import BusinessApplication from './pages/solutions/BusinessApplication';

// Legal Pages
import Privacy from './pages/legal/Privacy';
import Cookie from './pages/legal/Cookie';
import Compliance from './pages/legal/Compliance';
import DataProtection from './pages/legal/DataProtection';
import SoftwarePolicy from './pages/legal/SoftwarePolicy';
import TermsOfService from './pages/legal/TermsOfService';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Expertise Pages
import MarketingTools from './pages/expertise/MarketingTools';
import BillingSoftware from './pages/expertise/BillingSoftware';
import HRM from './pages/expertise/HRM';
import CRM from './pages/expertise/CRM';
import ERP from './pages/expertise/ERP';
import POS from './pages/expertise/POS';
import CloudERP from './pages/expertise/CloudERP';
import SchoolCollege from './pages/expertise/SchoolCollege';
import Hospital from './pages/expertise/Hospital';
import Pharma from './pages/expertise/Pharma';
import Lab from './pages/expertise/Lab';
import Retail from './pages/expertise/Retail';
import MLM from './pages/expertise/MLM';
import ECommerce from './pages/expertise/ECommerce';
// Industries Pages
import Agriculture from './pages/industries/Agriculture';
import BankingFinance from './pages/industries/BankingFinance';
import Ecommerce from './pages/industries/ECommerce';
import IoT from './pages/industries/IoT';
import Advertising from './pages/industries/Advertising';
import RealEstateConstruction from './pages/industries/RealStateConstruction';
import OilGas from './pages/industries/OilGas';
import ITITes from './pages/industries/ITITes';
import HospitalityTourism from './pages/industries/HospitalityTourism';
import Healthcare from './pages/industries/Healthcare';
import Government from './pages/industries/Government';
import EducationTraining from './pages/industries/EducationTraining';
import Azure from './pages/technology/Azure';
import GoogleCloud from './pages/technology/GoogleCloud';
import DotNet from './pages/technology/DotNet';
import Java from './pages/technology/Java';
import PHP from './pages/technology/PHP';
import Python from './pages/technology/Python';
import CCplusplusCsharp from './pages/technology/CCplusplusCsharp';
import Angular from './pages/technology/Angular';
import NodeJS from './pages/technology/NodeJS';
import ReactJS from './pages/technology/ReactJS';
import Flutter from './pages/technology/Flutter';
import JavaScript from './pages/technology/JavaScript';
import Blockchain from './pages/technology/Blockchain';
import Microsoft from './pages/technology/Microsoft';
import AWS from './pages/technology/AWS';
import WBAPS from './pages/partners/WBAPS';
import OurPartners from './pages/partners/OurPartners';
import Manufacturing from './pages/industries/Manufacturing';
import MediaEntertainment from './pages/industries/MediaEntertainment';
import ConsumerGoods from './pages/industries/ConsumerGoods';
import Software from './pages/expertise/Software';
import India from './pages/location/India';
import USA from './pages/location/USA';
import Canada from './pages/location/Canada';
import Singapore from './pages/location/Singapore';
import Qatar from './pages/location/Qatar';
import UAE from './pages/location/UAE';
import Dubai from './pages/location/Dubai';
import LegalTeam from './pages/about/LegalTeam';
import ExpertMembers from './pages/about/ExpertMembers';
import CRMSystem from './pages/products/CRMSystem';
import SchoolERP from './pages/products/SchoolERP';




function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* About Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/whoweare" element={<WhoWeAre />} />
          <Route path="/about/corevalue" element={<CoreValue />} />
          <Route path="/about/advisory" element={<AdvisoryBoard />} />
          <Route path="/about/team-members" element={<TeamMembers />} />
          <Route path="/about/membership" element={<Membership />} />

          {/* Solutions Routes */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/website" element={<WebsiteDesign />} />
          <Route path="/solutions/software" element={<SoftwareDevelopment />} />
          <Route path="/solutions/mobile" element={<MobileApplication />} />
          <Route path="/solutions/digital" element={<DigitalMarketing />} />
          <Route path="/solutions/corporate" element={<CorporateTraining />} />
          <Route path="/solutions/desktop" element={<DesktopApplication />} />
          <Route path="/solutions/cloud" element={<CloudDevelopment />} />
          <Route path="/solutions/ai" element={<AIDevelopment />} />
          <Route path="/solutions/ml" element={<MLDevelopment />} />
          <Route path="/solutions/ui-ux" element={<UIUXDevelopment />} />
          <Route path="/solutions/it-outsourcing" element={<ITOutsourcing />} />
          <Route path="/solutions/devops" element={<DevOpsServices />} />
          <Route path="/solutions/seo" element={<SEOServices />} />
          <Route path="/solutions/smo" element={<SMOServices />} />
          <Route path="/solutions/business" element={<BusinessApplication />} />

          {/* Expertise Routes */}
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/expertise/software" element={<Software />} />
          <Route path="/expertise/marketing-tools" element={<MarketingTools />} />
          <Route path="/expertise/billing" element={<BillingSoftware />} />
          <Route path="/expertise/hrm" element={<HRM />} />
          <Route path="/expertise/crm" element={<CRM />} />
          <Route path="/expertise/erp" element={<ERP />} />
          <Route path="/expertise/pos" element={<POS />} />
          <Route path="/expertise/cloud-erp" element={<CloudERP />} />
          <Route path="/expertise/school-college" element={<SchoolCollege />} />
          <Route path="/expertise/hospital" element={<Hospital />} />
          <Route path="/expertise/pharma" element={<Pharma />} />
          <Route path="/expertise/lab" element={<Lab />} />
          <Route path="/expertise/retail" element={<Retail />} />
          <Route path="/expertise/mlm" element={<MLM />} />
          <Route path="/expertise/ecommerce" element={<ECommerce />} />

          {/* Industries Routes */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/agriculture" element={<Agriculture />} />
          <Route path="/industries/banking" element={<BankingFinance />} />
          <Route path="/industries/ecommerce" element={<Ecommerce />} />
          <Route path="/industries/iot" element={<IoT />} />
          <Route path="/industries/advertising" element={<Advertising />} />
          <Route path="/industries/media" element={<MediaEntertainment />} />
          <Route path="/industries/consumer" element={<ConsumerGoods />} />
          <Route path="/industries/education" element={<EducationTraining />} />
          <Route path="/industries/government" element={<Government />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/hospitality" element={<HospitalityTourism />} />
          <Route path="/industries/it-ites" element={<ITITes />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/oil-gas" element={<OilGas />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/real-estate" element={<RealEstateConstruction />} />


          {/* Technology Routes */}
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/dotnet" element={<DotNet />} />
          <Route path="/technology/java" element={<Java />} />
          <Route path="/technology/php" element={<PHP />} />
          <Route path="/technology/python" element={<Python />} />
          <Route path="/technology/c-family" element={<CCplusplusCsharp />} />
          <Route path="/technology/angular" element={<Angular />} />
          <Route path="/technology/node" element={<NodeJS />} />
          <Route path="/technology/react" element={<ReactJS />} />
          <Route path="/technology/flutter" element={<Flutter />} />
          <Route path="/technology/javascript" element={<JavaScript />} />
          <Route path="/technology/blockchain" element={<Blockchain />} />
          <Route path="/technology/microsoft" element={<Microsoft />} />
          <Route path="/technology/aws" element={<AWS />} />
          <Route path="/technology/google-cloud" element={<GoogleCloud />} />
          <Route path="/technology/azure" element={<Azure />} />

          {/* Technology Routes */}
          <Route path="/products/crm" element={<CRMSystem />} />
          <Route path="/products/school-erp" element={<SchoolERP />} />

          {/* Partners Routes */}
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/wbaps" element={<WBAPS />} />
          <Route path="/partners/our-partners" element={<OurPartners />} />

          {/* Contact Routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/download" element={<Download />} />
          <Route path="/quote" element={<Quote />} />

          {/* Location Routes */}
          <Route path="/location/india" element={<India />} />
          <Route path="/location/usa" element={<USA />} />
          <Route path="/location/canada" element={<Canada />} />
          <Route path="/location/singapore" element={<Singapore />} />
          <Route path="/location/qatar" element={<Qatar />} />
          <Route path="/location/uae" element={<UAE />} />
          <Route path="/location/dubai" element={<Dubai />} />

          {/* Legal Routes */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<Cookie />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/software-policy" element={<SoftwarePolicy />} />
          <Route path="/terms" element={<TermsOfService />} />

          {/* Add 404 Page */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-6">404</h1>
                <p className="text-xl text-gray-600 mb-8">Page not found</p>
                <Link to="/" className="text-accent hover:text-primary font-semibold">
                  Return to Home
                </Link>
              </div>
            </div>
          } />
        </Routes>
        <BackToTop />
      </Layout>
    </Router>
  );
}

export default App;