import React from 'react';
import EditHeader from './EditHeader';
import EditBody from './EditBody';
import EditFooter from './EditFooter';

const EditProfilePage = () => {
  return (
    <div className="bg-custompurple-100">
      <EditHeader />
      <EditBody />
      <div className="h-1.5 bg-customgray-100"></div>

      <EditFooter />
    </div>
  );
};

export default EditProfilePage;
