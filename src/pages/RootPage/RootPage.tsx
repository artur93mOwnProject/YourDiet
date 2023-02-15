import Footer from 'pages/Footer/Footer';
import Header from 'pages/Header/Header';
import { Outlet } from 'react-router-dom';

function RootPage() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default RootPage;
