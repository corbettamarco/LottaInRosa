export type FormType = {
  title?: string;
  pageNumber?: number | string;
  subtitle?: string;
  choice?: number;
  setFormData?: any;
  formData: any;
  formNumber: string;
  formTextValue?: any;
  setFormTextValue?: any;
};

export type FormTextValueType = {
  form2: string;
  form3: string;
  form4: string;
  form5: string;
  form6: string;
  [key: string]: string;
}

export type MErgedFormDataType= {
  form1:string;

  form2: string;
  form3: string;
  form4: string;
  form5: string;
  form6: string;

  form7: string;
  form8: boolean;
}