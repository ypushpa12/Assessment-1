import React from 'react'
import Header from './component/navigation/Header';
import Footer from './component/navigation/Footer';

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
export default MainLayout;