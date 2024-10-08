/* tslint:disable */
/* eslint-disable */
/**
 * Library API
 * Hotel Booking API
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
 * @interface BookingBody
 */
export interface BookingBody {
  /**
   * Check-In Date
   * @type {Date}
   * @memberof BookingBody
   */
  bookingDate: Date;
  /**
   * Check-In Date
   * @type {Date}
   * @memberof BookingBody
   */
  checkoutDate: Date;
  /**
   * Date of creation (default is current date-time)
   * @type {Date}
   * @memberof BookingBody
   */
  createdAt?: Date;
}

/**
 * Check if a given object implements the BookingBody interface.
 */
export function instanceOfBookingBody(value: object): value is BookingBody {
  if (!('bookingDate' in value) || value['bookingDate'] === undefined) return false;
  if (!('checkoutDate' in value) || value['checkoutDate'] === undefined) return false;
  return true;
}

export function BookingBodyFromJSON(json: any): BookingBody {
  return BookingBodyFromJSONTyped(json, false);
}

export function BookingBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookingBody {
  if (json == null) {
    return json;
  }
  return {
    bookingDate: new Date(json['bookingDate']),
    checkoutDate: new Date(json['checkoutDate']),
    createdAt: json['createdAt'] == null ? undefined : new Date(json['createdAt']),
  };
}

export function BookingBodyToJSON(value?: BookingBody | null): any {
  if (value == null) {
    return value;
  }
  return {
    bookingDate: value['bookingDate'].toISOString().substring(0, 10),
    checkoutDate: value['checkoutDate'].toISOString().substring(0, 10),
    createdAt:
      value['createdAt'] == null ? undefined : value['createdAt'].toISOString().substring(0, 10),
  };
}
