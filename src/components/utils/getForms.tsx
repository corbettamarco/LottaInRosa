import React from "react";
import { Form1 } from "../FormPages/Form1";
import { Form2 } from "../FormPages/Form2";
import { Form3 } from "../FormPages/Form3";
import { Privacy } from "../FormPages/Privacy";

export const getForms = (formData: any, setFormData: any, formTextValue: any, setFormTextValue: any) => {
  return [
    {
      key: 1,
      component: (
        <Form1
          formNumber={"form1"}
          formData={formData}
          setFormData={setFormData}
          key={1}
        />
      ),
    },
    {
      key: 2,
      component: (
        <Form2
          formNumber={"form2"}
          subtitle="VELOCITA' DI NAVIGAZIONE"
          formData={formData}
          setFormData={setFormData}
          formTextValue={formTextValue}
          setFormTextValue={setFormTextValue}
          key={2}
        />
      ),
    },
    {
      key: 3,
      component: (
        <Form2
          formNumber={"form3"}
          subtitle="DESCRIZIONI ED IMMAGINI PRODOTTO"
          formData={formData}
          setFormData={setFormData}
          formTextValue={formTextValue}
          setFormTextValue={setFormTextValue}
          key={3}
        />
      ),
    },
    {
      key: 4,
      component: (
        <Form2
          formNumber={"form4"}
          subtitle="FACILITA' DI ACQUISTO"
          formData={formData}
          setFormData={setFormData}
          formTextValue={formTextValue}
          setFormTextValue={setFormTextValue}
          key={4}
        />
      ),
    },
    {
      key: 5,
      component: (
        <Form2
          formNumber={"form5"}
          subtitle="ASSISTENZA ALL'ACQUISTO/SERVIZIO CLIENTI"
          formData={formData}
          setFormData={setFormData}
          formTextValue={formTextValue}
          setFormTextValue={setFormTextValue}
          key={5}
        />
      ),
    },
    {
      key: 6,
      component: (
        <Form2
          formNumber={"form6"}
          subtitle="SPEDIZIONE & PACKAGING"
          formData={formData}
          setFormData={setFormData}
          formTextValue={formTextValue}
          setFormTextValue={setFormTextValue}
          key={6}
        />
      ),
    },
    {
      key: 7,
      component: (
        <Form3
          formNumber={"form7"}
          title="CONSIGLIERESTI UN PRODOTTO TOD'S AD UN AMICO?"
          formData={formData}
          setFormData={setFormData}
          key={7}
        />
      ),
    },
    {
      key: 8,
      component: (
        <Privacy
          formNumber={"form8"}
          formData={formData}
          setFormData={setFormData}
          key={8}
        />
      ),
    },
  ];
};
