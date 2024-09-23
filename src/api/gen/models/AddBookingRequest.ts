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
 * @interface AddBookingRequest
 */
export interface AddBookingRequest {
  /**
   *
   * @type {Date}
   * @memberof AddBookingRequest
   */
  bookingDate?: Date;
  /**
   *
   * @type {Date}
   * @memberof AddBookingRequest
   */
  checkoutDate?: Date;
}

/**
 * Check if a given object implements the AddBookingRequest interface.
 */
export function instanceOfAddBookingRequest(value: object): value is AddBookingRequest {
  return true;
}

export function AddBookingRequestFromJSON(json: any): AddBookingRequest {
  return AddBookingRequestFromJSONTyped(json, false);
}

export function AddBookingRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AddBookingRequest {
  if (json == null) {
    return json;
  }
  return {
    bookingDate: json['bookingDate'] == null ? undefined : new Date(json['bookingDate']),
    checkoutDate: json['checkoutDate'] == null ? undefined : new Date(json['checkoutDate']),
  };
}

export function AddBookingRequestToJSON(value?: AddBookingRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    bookingDate:
      value['bookingDate'] == null
        ? undefined
        : value['bookingDate'].toISOString().substring(0, 10),
    checkoutDate:
      value['checkoutDate'] == null
        ? undefined
        : value['checkoutDate'].toISOString().substring(0, 10),
  };
}
