import { FC } from 'react';
import ContentLoader from 'react-content-loader';
import styles from './BookItemLoader.module.scss';

export const BookItemLoader: FC = () => {
  return (
    <div className={styles.bookItemLoaderContainer}>
      <ContentLoader
        speed={2}
        width={220}
        height={420}
        viewBox="0 0 220 420"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="20" y="20" rx="8" ry="8" width="180" height="280" />
        <rect x="20" y="320" rx="4" ry="4" width="180" height="20" />
        <rect x="20" y="350" rx="4" ry="4" width="120" height="15" />
        <rect x="20" y="380" rx="4" ry="4" width="60" height="15" />
        <rect x="20" y="410" rx="4" ry="4" width="100" height="15" />
      </ContentLoader>
    </div>
  );
};
