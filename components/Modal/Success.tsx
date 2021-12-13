import React from 'react'

import { ISelected, IAward, INominee } from '../../types'
import ModalMask from './Mask'

import styles from './Modal.module.css'

interface ISuccessView {
  onClose: () => void,
  selected: ISelected
}

const SuccessModal = ({ onClose, selected }: ISuccessView) => {
  console.log(selected)
  return (
    <>
      <ModalMask />
      <div className={styles.modalContainer}>
        <div className={styles.success}>
          <div className={styles.header}>
            <div className={styles.close}>
              <img src='/assets/close.png' onClick={(e) => onClose()}/>
            </div>
            <div className={styles.text}>SUCCESS</div>
          </div>
          <div className={styles.content}>
            {Object.keys(selected).map(key => selected[key] !== null && (
              <div key={`seleted-${key}`} className={styles.item}>
                <img src={selected[key]?.nominee.photoUrL} />
                <div className={styles.itemDescription}>
                  <span>{selected[key]?.nominee.title}</span>
                  <span>{selected[key]?.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SuccessModal
