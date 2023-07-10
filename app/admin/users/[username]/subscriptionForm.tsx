"use client";
import { FC } from "react";

import { Button } from "@/components/button";
import { FormElement } from "@/components/formElement";
import { FormSection } from "@/components/formSection";
import { InputPrice } from "@/components/inputPrice";
import { Table, TableData, TableRow } from "@/components/table";

export interface SubscriptionFormProps {}

export const SubscriptionForm: FC<SubscriptionFormProps> = ({}) => {
  const monthsSubscribed: Array<{
    startDate: Date;
    price: number;
  }> = [
    {
      startDate: new Date(),
      price: 45,
    },
    {
      startDate: new Date(),
      price: 45,
    },
    {
      startDate: new Date(),
      price: 45,
    },
  ];

  return (
    <form>
      <FormSection
        description="Información sobre la subscripción y detalles de pagos."
        title="Subscripción"
        bottomDivider
      >
        <FormElement className="col-span-2" label="Estatus">
          Activo
        </FormElement>
        <FormElement className="col-span-2" label="Inició el">
          {new Date().toLocaleDateString()}
        </FormElement>
        <FormElement className="col-span-2" label="Última subscripción">
          {new Date().toLocaleDateString()}
        </FormElement>
        <InputPrice
          className="col-span-full"
          name="price"
          label="Precio actual de la subscripción"
        />
        <FormElement className="col-span-full" label="Subscripciones">
          <Table headers={["Fecha", "Precio"]} hasAction={false}>
            {monthsSubscribed.map((sub, i) => (
              <TableRow key={i} index={i}>
                <TableData>{sub.startDate.toLocaleDateString()}</TableData>
                <TableData>{sub.price.toFixed(2)}</TableData>
              </TableRow>
            ))}
          </Table>
        </FormElement>
        <FormElement className="col-span-full">
          <Button label="Actualizar subscripción" type="button" />
        </FormElement>
        <FormElement className="col-span-full">
          <Button label="Cancelar subscripción" type="button" style="danger" />
        </FormElement>
      </FormSection>
    </form>
  );
};
