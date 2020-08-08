/// <reference types="hapi__joi" />
import { Segments } from 'celebrate';
declare const _default: {
    store: {
        body: {
            name: import("@hapi/joi").StringSchema;
            email: import("@hapi/joi").StringSchema;
            whatsapp: import("@hapi/joi").StringSchema;
            bio: import("@hapi/joi").StringSchema;
            subject: import("@hapi/joi").StringSchema;
            cost: import("@hapi/joi").NumberSchema;
            schedule: import("@hapi/joi").ArraySchema;
        };
    };
    index: {
        query: import("@hapi/joi").ObjectSchema<any>;
    };
};
export default _default;
