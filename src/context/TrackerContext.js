import React, { createContext, useState } from "react";

export const TrackerContext = createContext();

export const initialFormData = {
  candidateName: "",
  onboardingStatus: "",
  candidateLTIId: "",
  clientSelectionDate: null,
  grade: "",
  skills: "",
  totalExp: 0,
  baseBU: "",
  clientBU: "",
  salesPOC: "",
  deliveryManager: "",
  clientHiringManager: "",
  clientHead: "",
  billRate: "",
  bgvDate: null,
  bgvStatus: "",
  locationStatus: "",
  status: "",
  actionItems: "",
  offerReleaseDate: null,
  ltiDOJ: null,
  ltiRR: "",
  litOpportunity: "",
  clientCToolID: "",
  positionID: "",
  costCenter: "",
  clientDOJ: null,
  clientLWD: null,
  jobCategory: "",
  dcInitiationDate: null,
  dcClearedDate: null,
  dcstatus: "",
  pevStatus: "",
  techSelectStatus: "",
  techSelectionDate: null,
  remarks: "",
  peoplesoftID: "",
  tentativeDOJ: null,
  ltiWorkCountryName: "",
  ltiWorkCityName: "",
  clientWorkCountryName: "",
  clientWorkCityName: "",
  statusOfOnboarding: "",
  onboardingDate: null,
  deleted: "false",
};

const TrackerContextProvider = (props) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  return (
    <TrackerContext.Provider
      value={{
        formData,
        setFormData,
        isEditing,
        setIsEditing,
        editID,
        setEditID,
      }}
    >
      {props.children}
    </TrackerContext.Provider>
  );
};

export default TrackerContextProvider;
