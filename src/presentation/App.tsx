import Header from 'presentation/components/header/Header';
import Layout from 'presentation/components/layout/Layout';
import Footer from 'presentation/components/footer/Footer';

import Products from 'presentation/screens/products/Products';

function App(): JSX.Element {
  return (
    <>
      <Header testId="Header" />
      <Layout testId="Layout">
        <Products />
      </Layout>
      <Footer testId="Footer" />
    </>
  );
}

export default App;
