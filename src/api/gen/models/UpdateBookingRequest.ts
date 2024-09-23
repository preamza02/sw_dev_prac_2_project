/* tslint:disable */
/* eslint-disable */
/**
 * Hotel Booking and Authentication API
 * API for managing hotels, bookings, and user authentication
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateBookingRequest
 */
export interface UpdateBookingRequest {
    /**
     * 
     * @type {Date}
     * @memberof UpdateBookingRequest
     */
    bookingDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UpdateBookingRequest
     */
    checkoutDate?: Date;
}

/**
 * Check if a given object implements the UpdateBookingRequest interface.
 */
export function instanceOfUpdateBookingRequest(value: object): value is UpdateBookingRequest {
    return true;
}

export function UpdateBookingRequestFromJSON(json: any): UpdateBookingRequest {
    return UpdateBookingRequestFromJSONTyped(json, false);
}

export function UpdateBookingRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateBookingRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'bookingDate': json['bookingDate'] == null ? undefined : (new Date(json['bookingDate'])),
        'checkoutDate': json['checkoutDate'] == null ? undefined : (new Date(json['checkoutDate'])),
    };
}

export function UpdateBookingRequestToJSON(value?: UpdateBookingRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bookingDate': value['bookingDate'] == null ? undefined : ((value['bookingDate']).toISOString().substring(0,10)),
        'checkoutDate': value['checkoutDate'] == null ? undefined : ((value['checkoutDate']).toISOString().substring(0,10)),
    };
}
