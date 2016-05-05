import * as Joi from "joi";
import {allowTypes} from "../../core";
import {getAndUpdateSchema} from "../../core";

/**
 * TODO: support binary (Buffer) properties/schema
 */
export function Length(limit : number, encoding? : string) : PropertyDecorator {
    return function (target: Object, propertyKey: string | symbol) : void {
        allowTypes(target, propertyKey, [Array, Object, String]);

        getAndUpdateSchema(target, propertyKey, (schema) => {
            return schema.length(limit, encoding);
        });
    }
}