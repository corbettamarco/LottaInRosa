export const isFormPageEmpty = (step: number, formData: any): boolean | undefined => {
    switch (step) {
      case 1:
        return formData.form1 === "";
      case 2:
        return formData.form2 === "";
      case 3:
        return formData.form3 === "";
      case 4:
        return formData.form4 === "";
      case 5:
        return formData.form5 === "";
      case 6:
        return formData.form6 === "";
      case 7:
        return formData.form7 === "";
      default:
        return true;
    }
  };
