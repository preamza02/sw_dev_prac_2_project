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
 * @interface AuthResponse
 */
export interface AuthResponse {
  /**
   *
   * @type {boolean}
   * @memberof AuthResponse
   */
  success?: boolean;
  /**
   * User's ID
   * @type {string}
   * @memberof AuthResponse
   */
  id?: string;
  /**
   * User's name
   * @type {string}
   * @memberof AuthResponse
   */
  name?: string;
  /**
   * User's email address
   * @type {string}
   * @memberof AuthResponse
   */
  email?: string;
  /**
   * JWT token for the user
   * @type {string}
   * @memberof AuthResponse
   */
  token?: string;
}

/**
 * Check if a given object implements the AuthResponse interface.
 */
export function instanceOfAuthResponse(value: object): value is AuthResponse {
  return true;
}

export function AuthResponseFromJSON(json: any): AuthResponse {
  return AuthResponseFromJSONTyped(json, false);
}

export function AuthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthResponse {
  if (json == null) {
    return json;
  }
  return {
    success: json['success'] == null ? undefined : json['success'],
    id: json['_id'] == null ? undefined : json['_id'],
    name: json['name'] == null ? undefined : json['name'],
    email: json['email'] == null ? undefined : json['email'],
    token: json['token'] == null ? undefined : json['token'],
  };
}

export function AuthResponseToJSON(value?: AuthResponse | null): any {
  if (value == null) {
    return value;
  }
  return {
    success: value['success'],
    _id: value['id'],
    name: value['name'],
    email: value['email'],
    token: value['token'],
  };
}
