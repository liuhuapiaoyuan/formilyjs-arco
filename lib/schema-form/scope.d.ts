import { Field, Form } from "@formily/core/esm/models";
export declare const useAsyncDataSource: (service: (field: Field, form?: Form) => Promise<any>, checkExsit?: boolean) => (field: Field, form?: Form) => void;
