import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikField from "../ui/FormikField";
import FormikSelect from "../ui/FormikSelect";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "formik-material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  candidateFormGrid: {
    margin: "10px"
  },
  candidateForm: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "600px",
    maxWidth: "600px"
  }
}));

const validationSchema = Yup.object({
  candidateName: Yup.string().required("Candidate Name is a required field"),
  onboardingStatus: Yup.string().required(
    "Onboarding Status is a required field"
  ),
  // candidateLTIId: Yup.string().required(),
  clientSelectionDate: Yup.date().required()
  // grade: Yup.string().required(),
  // skills: Yup.string().required(),
  // totalEx: Yup.number().required(),
  // baseBU: Yup.string().required(),
  // clientBU: Yup.string().required(),
  // salesPOC: Yup.string().required(),
  // deliveryManager: Yup.string().required(),
  // clientHiringManager: Yup.string().required(),
  // clientHead: Yup.string().required(),
  // billRate: Yup.string().required(),
  // bgvDate: Yup.string().required(),
  // bgvStatus: Yup.string().required(),
  // locationStatus: Yup.string().required(),
  // status: Yup.string().required()
});

const onSubmit = (values, { setSubmitting, resetForm }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm({ values: "" });
  }, 400);
};

const internalSelect = [
  {
    value: "internal",
    label: "internal"
  },
  {
    value: "external",
    label: "external"
  }
];

const initialValues = {
  candidateName: "",
  onboardingStatus: "",
  candidateLTIId: "",
  clientSelectionDate: null,
  grade: "",
  skills: "",
  totalEx: 0,
  baseBU: "",
  clientBU: "",
  salesPOC: "",
  deliveryManager: "",
  clientHiringManager: "",
  clientHead: "",
  billRate: "",
  bgvDate: "",
  bgvStatus: "",
  locationStatus: "",
  status: "",
  actionItems: "",
  offerReleaseDate: "",
  ltiDOJ: "",
  ltiRR: "",
  ltiOpportunity: "",
  clientCToolID: "",
  positionID: "",
  costCenter: "",
  clientDOJ: "",
  clientLWD: "",
  jobCategory: "",
  dcInitiationDate: "",
  dcClearedDate: "",
  dcStatus: "",
  pevStatus: "",
  techSelectStatus: "",
  remarks: "",
  peoplesoftID: "",
  tentativeDOJ: "",
  countryName: "",
  cityName: "",
  odcLTI: "",
  odcClient: ""
};

function CreateCandidate() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h5">New Candidate Form</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ dirty, isValid }) => {
            return (
              <Form>
                <Grid
                  className={classes.candidateForm}
                  container
                  direction="column"
                  spacing={3}
                >
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <FormikField
                      name="candidateName"
                      label="Candidate Name"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <FormikSelect
                      name="onboardingStatus"
                      items={internalSelect}
                      label="Onboarding Status"
                      required
                    />
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <FormikField
                      name="candidateLTIId"
                      label="Candidate LTI ID"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <Field
                      component={DatePicker}
                      name="clientSelectionDate"
                      label="Client Selection Date"
                      variant="inline"
                      format="dd/MM/yyyy"
                      required
                    />
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <FormikField
                      name="grade"
                      label="Grade"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <FormikField
                      name="skills"
                      label="Skills"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <FormikField
                      name="totalExp"
                      label="totalExp"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <FormikField
                      name="baseBU"
                      label="Base BU"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <FormikField
                      name="clientBU"
                      label="Client BU"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <FormikField
                      name="salesPOC"
                      label="Sales POC"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <FormikField
                      name="deliveryManager"
                      label="Delivery Manager"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <FormikField
                      name="clientHiringManager"
                      label="Client Hiring Mananger"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <FormikField
                      name="clientHead"
                      label="Client Head"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <FormikField
                      name="billRate"
                      label="Bill Rate"
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>
                <Button
                  disabled={!dirty || !isValid}
                  variant="contained"
                  type="submit"
                  color="primary"
                >
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}

/*
{
"candidateName": "Andrew",
"onboardingStatus": "Internal",
"candidateLTIId": "1987347",
"clientSelectionDate": "2020-07-15",
"grade": "A-1-2",
"skills": "Java,Microservices,Springboot",
"totalExp": 100,
"baseBU":"A3",
"clientBU":"Core Banking",
"salesPOC":"Indranil",
"deliveryManager":"Ramkumar Golagabathula",
"clientHiringManager":"Sanjay Kumar Lokhande",
"clientHead":"Sumati Chedimali",
"billRate":"160",
"bgvDate":"2020-07-15",
"bgvStatus":"",
"locationStatus":"",
"status":"",
"actionItems":"",
"offerReleaseDate":"",
"ltiDOJ":"",
"ltiRR":"",
"litOpportunity":"",
"clientCToolID":"",
"positionID":"",
"costCenter":"",
"clientDOJ":"",
"clientLWD":"",
"jobCategory":"",
"dcInitiationDate":"",
"dcClearedDate":"",
"dcstatus":"",
"pevStatus":"",
"techSelectStatus":"",
"remarks":"",
"peoplesoftID":"",
"tentativeDOJ":"",
"dcAging":1,
"bgvAging":1,
"internalAging":1,
"selectionAgingDays":1,
"locations":[ { "countryName": "India","cityName":"Pune","odcLTI":"","odcClient": "Sivajinager" },{ "countryName" : "UK","cityName":"London","odcLTI":"London Bridge ","odcClient":"" }]
}
*/

export default CreateCandidate;
