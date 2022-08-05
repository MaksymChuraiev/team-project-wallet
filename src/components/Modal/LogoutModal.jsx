import React from 'react';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Button from 'components/Button/Button';
import {
  ModalStyled,
  ButtonCloseStyled,
  ModalTitle,
} from './ModalAddTransaction/ModalAddTransaction.styled';
import { ReactComponent as Close } from '../../icons/close.svg';
import { logOut } from '../../redux/auth/auth-operation';

Modal.setAppElement('#root');

export const LogoutModal = ({active, setActive}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    function closeModal() {
        setActive(false);
  }
  
  function handleLogoutClick() {
    setActive(false);
        dispatch(logOut());
        navigate('/login');
  }

    return (
        <ModalStyled
        isOpen={active}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        contentLabel="Example Modal"
        htmlOpenClassName="no-scroll"
        >
        <ButtonCloseStyled onClick={closeModal}>
          <Close />
        </ButtonCloseStyled>
            
            <ModalTitle>Are you sure you want to Logout?</ModalTitle>
            
            <Button
            buttonTitle="Logout"
            onClick={handleLogoutClick}
            type="button"
            color='#fff'
            bgColor='#24CCA7'
            border='none'
            />
            
            <Button
            buttonTitle="Cancel"
            onClick={closeModal}
            type="button"
            color='#4A56E2'
            bgColor='#ffffff'
            borderColor='#4A56E2'
          />
        </ModalStyled>
    )
}
