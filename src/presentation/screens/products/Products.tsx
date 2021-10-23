import styles from 'presentation/screens/products/Products.module.scss';

function Products(): JSX.Element {
  return (
    <div className={styles.products}>
      <div className={styles.products__filters}>
        <h1>Filters</h1>
      </div>
      <div className={styles.products__content}>
        <h1>PRODUCTS</h1>
      </div>
      <div className={styles.products__basket}>
        <h1>Basket</h1>
      </div>
    </div>
  );
}

export default Products;
