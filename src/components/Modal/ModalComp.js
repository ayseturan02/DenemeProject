import {Modal, Dimensions} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const ModalComp = props => {
  const {modalVisible, children, setModalVisible} = props;

  return (
    <Modal animationType="slide" visible={modalVisible} transparent={true}>
      {children}
    </Modal>
  );
};

ModalComp.propTypes = {
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
};
ModalComp.defaultPropTypes = {
  modalVisible: false,
  setModalVisible: () => {
    console.log('buton tıklandı');
  },
};
export default ModalComp;
