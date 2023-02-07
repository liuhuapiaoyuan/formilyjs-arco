import React from 'react';
import type { StepsProps, StepProps } from '@arco-design/web-react/es/steps/interface';
import { Form, VoidField } from '@formily/core';
import { Schema, SchemaKey } from '@formily/json-schema';
export interface IFormStep {
    connect: (steps: SchemaStep[], field: VoidField) => void;
    current: number;
    allowNext: boolean;
    allowBack: boolean;
    steps: any[];
    submit: Form['submit'];
    setCurrent(key: number): void;
    next(): void;
    back(): void;
}
export interface IFormStepProps extends StepProps {
    formStep?: IFormStep;
}
type ComposedFormTab = React.FC<IFormStepProps> & {
    StepPane?: React.FC<StepsProps>;
    createFormStep?: (defaultCurrent?: number) => IFormStep;
};
type SchemaStep = {
    name: SchemaKey;
    props: any;
    schema: Schema;
};
export declare const FormStep: ComposedFormTab;
export default FormStep;
