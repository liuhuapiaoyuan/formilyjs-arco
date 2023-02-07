import React from 'react';
import { VoidField } from '@formily/core';
import { Schema } from '@formily/json-schema';
import type { ButtonProps } from '@arco-design/web-react/es/button';
import type { StepsProps, StepProps } from '@arco-design/web-react/es/steps/interface';
import { IFormStep } from '../form-step';
export interface IFormStepProProps extends StepsProps {
    formStep?: IFormStep;
    onSubmit?: (value?: any) => void;
}
export interface IFormStepProContext {
    props: Pick<IFormStepProProps, 'formStep' | 'onSubmit'>;
    field: VoidField;
    schema: Schema;
}
type ComposedFormStepPro = React.FC<IFormStepProProps> & {
    StepPane?: React.FC<StepProps>;
    Next?: React.FC<ButtonProps & {
        text?: string;
    }>;
    NextWithSubmit?: React.FC<ButtonProps & {
        text?: string;
    }>;
    Previous?: React.FC<ButtonProps & {
        text?: string;
    }>;
    Submit?: React.FC<ButtonProps & {
        text?: string;
    }>;
};
export declare const FormStepPro: ComposedFormStepPro;
export default FormStepPro;
