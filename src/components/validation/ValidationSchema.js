import * as Yup from "yup";

const ValidationSchema = {
  candidateName: Yup.string()
    .matches(/^[a-zA-Z '-]+$/, "Enter valid Candidate Name")
    .required("Candidate Name is a required field"),
  onboardingStatus: Yup.string().required(
    "Onboarding Status is a required field"
  ),
  candidateLTIId: Yup.string()
    .matches(/^[0-9]+$/, "Enter valid Candidate LTI Id")
    .required("Candidate LTI Id is a required field"),
  clientSelectionDate: Yup.date().required(
    "Candidate Selection date is a required field"
  ),
  grade: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "Enter valid Grade")
    .required("Grade is a required field"),
  skills: Yup.string()
    .matches(/[a-zA-Z0-9,;.\s]/g, "Please remove invalid special characters")
    .required("Skills is a required field"),
  totalExp: Yup.number().required(
    "Total experience is a required field and should be in months"
  ),
  baseBU: Yup.string().required("Base BU is a required field"),
  clientBU: Yup.string().required("Client BU is a required field"),
  salesPOC: Yup.string().required("Sales POC is a required field"),
  deliveryManager: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Please enter valid Delivery manager name")
    .required("Delivery manager is a required field"),
  clientHiringManager: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Please enter valid Client hiring manager name")
    .required("Client hiring manager is a required field"),
  clientHead: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Please enter valid Client head name")
    .required("Client head is a requied field"),
  billRate: Yup.number()
    .min(124, "Bill Rate must be less than or equal to 124")
    .max(999, "Bill Rate must be less than or equal to 999")
    .required("Bill rate is a required field"),
  bgvStatus: Yup.string().required("BGV Status is required"),
  clientCToolID: Yup.string().matches(
    /^[a-zA-Z0-9]+$/,
    "Please enter valid Client CTool ID"
  ),
  jobCategory: Yup.string(),
  dcstatus: Yup.string(),
  pevStatus: Yup.string(),
  peoplesoftID: Yup.string().matches(
    /^[0-9]+$/,
    "Please enter valid Peoplesoft ID"
  ),
  techSelectStatus: Yup.string(),
  ltiWorkCountryName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Please enter valid country name")
    .required("Base location country is required"),
  ltiWorkCityName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Please enter valid city name")
    .required("Base location City is required"),
  clientWorkCountryName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Please enter valid client country name")
    .required("Client location country is required"),
  clientWorkCityName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Please enter valid client city name")
    .required("Client location country is required"),
};

export default ValidationSchema;
