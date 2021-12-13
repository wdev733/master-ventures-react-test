import React from 'react'

import styles from './Category.module.css'

interface ICategoryView {
  category: string,
  children: React.ReactNode
}
const Category = ({ category, children }: ICategoryView) => (
  <div className={styles.categoryRoot}>
    <h2 className={styles.categoryTitle}>{category}</h2>
    {children}
  </div>
)

export default Category
