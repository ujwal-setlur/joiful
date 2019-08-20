import * as Joi from 'joi';
import { createArrayPropertyDecorator, ArrayPropertyDecoratorOptions } from './modifiers/array';
import { JoifulOptions } from './modifiers/common';
import { createDatePropertyDecorator } from './modifiers/date';
import { createFunctionPropertyDecorator } from './modifiers/function';
import { createLazyPropertyDecorator } from './modifiers/lazy';
import { createNumberPropertyDecorator } from './modifiers/number';
import { createStringPropertyDecorator } from './modifiers/string';
import { Validator, createValidatePropertyDecorator } from './validation';
import { createObjectPropertyDecorator, ObjectPropertyDecoratorOptions } from './modifiers/object';
import { createBooleanPropertyDecorator } from './modifiers/boolean';

export class Joiful {
    constructor(options?: JoifulOptions) {
        this.options = options || {};
    }

    private readonly options: JoifulOptions;

    get joi() {
        return (this.options && this.options.joi) || Joi;
    }

    array = (options?: ArrayPropertyDecoratorOptions) => createArrayPropertyDecorator(options, this.options);

    boolean = () => createBooleanPropertyDecorator(this.options);

    date = () => createDatePropertyDecorator(this.options);

    func = () => createFunctionPropertyDecorator(this.options);

    lazy = (getSchema: ({ joi }: { joi: typeof Joi }) => Joi.Schema) =>
        createLazyPropertyDecorator(getSchema, this.options)

    number = () => createNumberPropertyDecorator(this.options);

    object = (options?: ObjectPropertyDecoratorOptions) => createObjectPropertyDecorator(options, this.options);

    string = () => createStringPropertyDecorator(this.options);

    validate = (options?: { validator?: Validator }) => createValidatePropertyDecorator(options);
}
