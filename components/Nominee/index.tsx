import React from 'react'

import { INominee } from '../../types'

import cn from 'classnames'
import styles from './Nominee.module.css'

interface INomineeView {
  data: INominee,
  selected: boolean,
  onSelect: (nomineeId: string) => void
}

const Nominee = ({ data, selected, onSelect }: INomineeView) => (
  <div
    className={cn(styles.card, { [styles.selected]: selected})}
    onClick={(e) => onSelect(data.id)}
  >
    <div className={styles.cardImg}><img src={data.photoUrL} /></div>
    <h2>{data.title}</h2>
  </div>
)

export default Nominee
