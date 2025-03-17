import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    name: "",
    lastName: "",
    nickname: "",
    dob: "",
    age: "",
    phone: "",
    phone2: "",
    email: "",
    lineId: "",
    facebook: "",
    special: "",
    healthStatus: "",
    floor: "",
    year: "",
    gpa: "",
    fatherName: "",
    fatherLastName: "",
    fatherAge: "",
    fatherJob: "",
    fatherWorkPlace: "",
    fatherSalary: "",
    fatherStatus: "",
    motherName: "",
    motherLastName: "",
    motherAge: "",
    motherJob: "",
    motherWorkPlace: "",
    motherSalary: "",
    motherStatus: "",
    hasSibling: "",
    parentName: "",
    parentLastName: "",
    parentAge: "",
    parentJob: "",
    parentWorkPlace: "",
    parentSalary: "",
    siblingCount: "",
    siblingMan: "",
    siblingWomen: "",
    siblingCountRegister: "",
    siblingStudying: "",
    oldHomeid: "",
    oldGroupHomeid: "",
    oldsoi: "",
    oldroad: "",
    scholarship: JSON.parse(localStorage.getItem('selectedScholarship')) || null,
    scholarshipName: localStorage.getItem('selectedScholarshipName') || '',
    salaryWork: "",
    uploadFile: "",
    idcard: "",
    faculty: "",
    major: "",
    parentRelation: "",
    showModal: false,
    diseaseDetails: "",
    selectedScholarship: null,
    searchQuery: "",
    selectedUniversity: null,
    selectedYear: null,
    selectedAliments: [],
    loaning: "",
    expenseType: null,
    expenseFee: "",
    expenseLiving: "",
    expenseBoth: "",
    homeRentCost: "",
    isRenthouse: "",
    national: "",
    religion: "",
    provincecertificate: "",
    subdistrict: "",
    specialWork: "",
    scholarshipStatus: "",
    location: "",
    otherHealthStatus: "",
    tcas: "",
    photo: null,
    photoPreview: null,
    activity: [
      {
        name: "",
        file: [],
      }
    ],
    fields: [
      {
        academicYear: "",
        scholarshipName: "",
        scholarshipYear: "",
        amount: "",
        duration: "",
        startYear: "",
        endYear: "",
      },
    ],
    fieldWork: [
      {
        salaryWork: "",
        location: "",
      },
    ],
    sibling: [
      {
        name: "",
        age: "",
        education: "",
        occupation: "",
        income: "",
      },
    ],
    fieldcer: [
      {
        level: "",
        cername: "",
        file: [],
      },
    ],
    siblings: [
      {
        name: "",
        age: "",
        education: "",
        occupation: "",
        income: "",
      },
    ],
    sameAddress: "no",
    currentHomeid: "",
    currentGroupHomeid: "",
    currentsoi: "",
    currentroad: "",
    permanentHomeid: "",
    permanentGroupHomeid: "",
    permanentsoi: "",
    permanentroad: "",
    selectedProvince: null,
    currentProvince: "",
    permanentProvince: "",
    selectedDistricts: null,
    selectedSubDistricts: null,
    selectedProvince2: null,
    selectedDistrict2: null,
    selectedSubDistrict2: null,
    isSupport: "",
    isSick: "",
    scholarshipgumlungjai: "",
    scholarshipother: "",
    reasoncomment: "",
    haveCertificate: "",
    haveVolunteer: "",
    topic: "",
    isAgree: false,
    isSickType: "",
    sickDetail: "",
  }),
  actions: {
    saveForm() {
      localStorage.setItem("formData", JSON.stringify(this.$state));
    },
    loadForm() {
      const savedData = localStorage.getItem("formData");
      if (savedData) {
        this.$patch(JSON.parse(savedData));
      }
    },
    setActivityFile(index, files) {
      this.activity[index].file = files;
    },
    removeActivityFile(index, name) {
      this.activity[index].name = name;
    },
    setScholarship(scholarship) {
      this.scholarship = scholarship;
      this.scholarshipName = scholarship.name;

      localStorage.setItem('selectedScholarship', JSON.stringify(scholarship));
      localStorage.setItem('selectedScholarshipName', scholarship.name);
    },
    clearScholarship(){
      this.scholarship = null;
      this.scholarshipName = '';
      localStorage.removeItem('selectedScholarship');
      localStorage.removeItem('selectedScholarshipName');
    },
    resetForm() {
      this.$reset();
    },
    setuniversity(university) {
      this.selectedUniversity = university;
    },
    setHasSibling(value) {
      this.hasSibling = value;
    },
    setSelectedAlimets(value) {
      this.selectedAliments = value;
    },
    resetExpenseType() {
      this.expenseType = null;
    },
    setSelectedProvince(value) {
      this.selectedProvince = value;
    },
    setSelectedDistrict(value) {
      this.selectedDistrict = value;
    },
    setSelectedSubDistrict(value) {
      this.selectedSubDistrict = value;
    },
    updateField(index, key, value) {
      this.fields[index][key] = value;
    },
    addSibling() {
      this.sibling.push({
        name: "",
        age: "",
        education: "",
        occupation: "",
        income: "",
      });
    },
    removeSibling(index) {
      if (this.sibling.length > 1) {
        this.sibling.splice(index, 1);
      }
    },
    addFieldWork() {
      this.fieldWork.push({
        salaryWork: "",
        location: "",
      });
    },
    removeFieldWork(index) {
      this.fieldWork.splice(index, 1);
    },
    removeField(index) {
      this.fields.splice(index, 1);
    },
    addField() {
      this.fields.push({
        academicYear: "",
        scholarshipName: "",
        amount: "",
        duration: "",
      });
    },
    addFieldCer() {
      this.fieldcer.push({
        level: "",
        cername: "",
      });
    },
    addFieldActivity() {
      this.activity.push({
        name: "",
        file: null,
      });
    },
    removeFieldCer(index) {
      this.fieldcer.splice(index, 1);
    },
    setPhoto(photo) {
      this.photo = photo;
    },
  },
  getters: {
    isFormValid(state) {
      return (
        state.name &&
        state.lastName &&
        state.nickname &&
        state.dob &&
        state.age &&
        state.phone &&
        state.idcard &&
        state.email &&
        state.faculty &&
        state.major &&
        state.floor &&
        state.gpa &&
        state.tcas &&
        state.currentHomeid &&
        state.currentGroupHomeid &&
        state.permanentHomeid &&
        state.permanentGroupHomeid &&
        state.fatherName &&
        state.fatherLastName &&
        state.fatherAge &&
        state.fatherJob &&
        state.fatherWorkPlace &&
        state.fatherSalary &&
        state.motherName &&
        state.motherLastName &&
        state.motherAge &&
        state.motherJob &&
        state.motherWorkPlace &&
        state.motherSalary
      );
    },
  },
});
