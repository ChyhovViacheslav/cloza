import React, { useState } from 'react'
import IconSelector from '../../../assets/icons/icons'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import ModalSlice, { loginModalSlice } from '../../../store/reducers/ModalSlice'
import s from './Modal.module.scss'
type IModal = {
  children?: any
}

export default function Modal({ children }: IModal) {
  const { closeModal } = loginModalSlice.actions
  const { active } = useAppSelector(state => state.modalReducer)
  const dispatch = useAppDispatch()

  return (
    <div
      className={!active ? s.modal : `${s.modal} ${s.active}`}
      onClick={() => dispatch(closeModal())}>
      <div
        className={s.modal__body}
        onClick={(e) => e.stopPropagation()}>
        {children}
        <div 
          className={s.modal__close_btn}
          onClick={() => dispatch(closeModal())}>
          <IconSelector
            id='close' />
        </div>
      </div>
    </div>
  )
}