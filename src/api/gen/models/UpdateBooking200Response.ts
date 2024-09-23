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
import type { Booking } from './Booking';
import {
    BookingFromJSON,
    BookingFromJSONTyped,
    BookingToJSON,
} from './Booking';

/**
 * 
 * @export
 * @interface UpdateBooking200Response
 */
export interface UpdateBooking200Response {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateBooking200Response
     */
    success?: boolean;
    /**
     * 
     * @type {Booking}
     * @memberof UpdateBooking200Response
     */
    data?: Booking;
}

/**
 * Check if a given object implements the UpdateBooking200Response interface.
 */
export function instanceOfUpdateBooking200Response(value: object): value is UpdateBooking200Response {
    return true;
}

export function UpdateBooking200ResponseFromJSON(json: any): UpdateBooking200Response {
    return UpdateBooking200ResponseFromJSONTyped(json, false);
}

export function UpdateBooking200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateBooking200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
        'data': json['data'] == null ? undefined : BookingFromJSON(json['data']),
    };
}

export function UpdateBooking200ResponseToJSON(value?: UpdateBooking200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'success': value['success'],
        'data': BookingToJSON(value['data']),
    };
}
