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
 * @interface GetBookings200Response
 */
export interface GetBookings200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetBookings200Response
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetBookings200Response
     */
    count?: number;
    /**
     * 
     * @type {Array<Booking>}
     * @memberof GetBookings200Response
     */
    data?: Array<Booking>;
}

/**
 * Check if a given object implements the GetBookings200Response interface.
 */
export function instanceOfGetBookings200Response(value: object): value is GetBookings200Response {
    return true;
}

export function GetBookings200ResponseFromJSON(json: any): GetBookings200Response {
    return GetBookings200ResponseFromJSONTyped(json, false);
}

export function GetBookings200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetBookings200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
        'count': json['count'] == null ? undefined : json['count'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(BookingFromJSON)),
    };
}

export function GetBookings200ResponseToJSON(value?: GetBookings200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'success': value['success'],
        'count': value['count'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(BookingToJSON)),
    };
}

