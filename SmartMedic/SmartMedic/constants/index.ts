export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "National Identity Card",
  "Passport",
  "Student ID Card",
  
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Smith",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Omphile Shakung",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Lucas Choene",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Jenovic Bitus",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Beauty Selema",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Ntokozo Tshepo",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Busi Gumbi",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Sharon Lamola",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Tom Khumalo",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
