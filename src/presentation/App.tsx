import Header from 'presentation/components/header/Header';
import Layout from 'presentation/components/layout/Layout';
import Footer from 'presentation/components/footer/Footer';

function App(): JSX.Element {
  return (
    <>
      <Header testId="Header" />
      <Layout testId="Layout">
        <h1>Products</h1>
      </Layout>
      <Footer testId="Footer" />
    </>
  );
}

export default App;
